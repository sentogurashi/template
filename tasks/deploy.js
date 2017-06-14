/*

Usage:
ルートにftp_config.jsonを作成し以下記入

{
    "host": "ホスト名",
    "user": "ユーザー名",
    "pass": "パスワード"
}

*/
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import es from 'event-stream';
import runSequence from 'run-sequence';
import pkg from './../package.json';
import ftpConfig from './../ftp_config.json';
import del from 'del';
import ftp from 'vinyl-ftp';

const $ = gulpLoadPlugins();
const build = './build';
const dest = pkg.path.dest;
const tmp = './tmp'

let escapeFileList = [
  'jquery.min.js'
]

escapeFileList = escapeFileList.map((fileName) => {
  return '!' + dest + '**/' + fileName;
})

gulp.task('deploy:copy', () => {
  const htmlStream = gulp.src([
    build + '/html/**/*'
  ])
  .pipe($.replace(/('|")(\.|\/)+?\/(styles|scripts|images|fonts)/g, '$1/assets/$3')) // ルート相対パス化
  .pipe(gulp.dest(tmp));

  const assetStream = gulp.src([
    build + '/styles/**/*',
    build + '/scripts/**/*',
    build + '/images/**/*',
    build + '/fonts/**/*'
  ], {
    base: build
  })
  .pipe(gulp.dest(tmp + '/assets'));

  return es.merge([htmlStream, assetStream]);
})

gulp.task('deploy:ftp', () => {

  var conn = ftp.create(Object.assign(ftpConfig, {
    parallel: 2,
    log: $.util.log
  }));

  return  gulp.src([
    tmp + '/**/*',
//    '!' + dest + '**/*.map',
//    '!' + dest + 'html/*.html',
    ...escapeFileList
  ], {
    base: tmp,
    buffer: false
  })
  // リモートのパス（~新しければ）
  .pipe(conn.newer('/'))
  // リモートのパス（置き場所）
  .pipe(conn.dest('/'))

});

gulp.task('deploy:clean', () => {
  return del([tmp]);
});

gulp.task('deploy', () => {
  runSequence('deploy:copy', 'deploy:ftp', 'deploy:clean');
});
