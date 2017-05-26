import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from './../package.json';

const $ = gulpLoadPlugins();

let escapeFileList = [
  'jquery.min.js'
]

escapeFileList = escapeFileList.map((str) => {
  return '!./build/**/' + str;
})

gulp.task('deploy', () => {
  const stream = gulp.src([
    './build/**/*',
    '!./build/**/*.map',
    '!./build/html/*.html',
    ...escapeFileList
  ])
    .pipe($.rsync({
      root: './build/',
      hostname: 'TODO',
      destination: 'TODO',
    }));

  return stream;
});
