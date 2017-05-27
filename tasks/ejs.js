import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from './../package.json';
import sitedata from './../sitedata.json';

const $ = gulpLoadPlugins();

gulp.task('ejs', () => {

  const stream = gulp.src(['./src/ejs/*.ejs'])

  .pipe($.plumber())
  .pipe($.ejs(sitedata, {}, {
    ext: '.html'
  }))
  .pipe(gulp.dest('./build/html/'));

  return stream;
});
