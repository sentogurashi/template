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
const tmp2 = './tmp2'

let escapeFileList = [
  'jquery.min.js'
]

escapeFileList = escapeFileList.map((fileName) => {
  return '!' + dest + '**/' + fileName;
})

gulp.task('deploy:copy', () => {
  const htmlStream = gulp.src([
    build + '/html/**/*',
    '!' + build + '/html/article/*.html'
  ])
  // 空ファイルの出力を防ぐ
  .pipe($.ignore.include({
    isFile: true
  }))
  .pipe($.replace(/('|")(\.|\/)+?\/(styles|scripts|images|fonts)/g, '$1/assets/$3')) // ルート相対パス化
  .pipe($.replace(/<!-- GULP:REMOVE_ON_REMOTE:START -->[\s\S]*?<!-- GULP:REMOVE_ON_REMOTE:END -->/g, '')) // 除去タグ内を削除 [\s\S] は改行をふくむ全てのパターン
  .pipe($.replace('\n\n', '\n'))
  .pipe(gulp.dest(tmp));

  const assetStream = gulp.src([
    build + '/styles/**/*',
    build + '/scripts/**/*',
    build + '/images/**/*',
    '!' + build + '/images/mediamock/*',
    build + '/fonts/**/*'
  ], {
    base: build
  })
  .pipe(gulp.dest(tmp + '/assets'));

  return es.merge([htmlStream, assetStream]);
})

gulp.task('deploy:ftp', () => {

  var conn = ftp.create(Object.assign(ftpConfig, {
    parallel: 5,
    log: $.util.log
  }));

  return  gulp.src([
    tmp + '/**/*',
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

gulp.task('deploy:stagingChangePath', () => {

  const textStream = gulp.src([
    tmp + '/**/*.html',
    '!' + tmp + '/article/*.html',
    tmp + '/assets/styles/**/*',
    tmp + '/assets/scripts/**/*',
  ], {
    base: tmp,
    buffer: false
  })
  .pipe($.replace(/(assets)/g, 'staging/$1'))
  .pipe(gulp.dest(tmp2));

  const binaryStream = gulp.src([
    tmp + '/assets/images/**/*',
    '!' + tmp + '/assets/images/mediamock/*',
    tmp + '/assets/fonts/**/*'
  ], {
    base: tmp,
    buffer: false
  })
  .pipe(gulp.dest(tmp2));

  return es.merge([textStream, binaryStream]);

});

gulp.task('deploy:stagingFtp', () => {

  var conn = ftp.create(Object.assign(ftpConfig, {
    parallel: 5,
    log: $.util.log
  }));

  return  gulp.src([
    tmp2 + '/**/*',
    ...escapeFileList
  ], {
    base: tmp2,
    buffer: false
  })
  // リモートのパス（~新しければ）
  .pipe(conn.newer('/staging/'))
  // リモートのパス（置き場所）
  .pipe(conn.dest('/staging/'))

});

gulp.task('deploy:clean', () => {
  return del([tmp, tmp2]);
});

gulp.task('deploy', ['generate'], () => {
  runSequence('deploy:copy', 'deploy:ftp', 'deploy:clean');
});

gulp.task('deploy:staging', ['generate'], () => {
  runSequence('deploy:copy', 'deploy:stagingChangePath', 'deploy:stagingFtp', 'deploy:clean');
  //runSequence('deploy:copy');
});
