import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import es from 'event-stream';

import pkg from './../package.json';

const $ = gulpLoadPlugins();
const srcPath = pkg.path.src;

gulp.task('font', () => {
  const stream = gulp.src(srcPath + 'fonts/*.ttf');

  const eotStream = stream
  .pipe($.clone())
  .pipe($.ttf2eot());

  const woffStream = stream
  .pipe($.clone())
  .pipe($.ttf2woff());

  /*
  // woff2Stream isn't working...?
  const woff2Stream = stream
  .pipe($.clone())
  .pipe($.ttf2woff2())
  */

  return es.merge(stream, eotStream, woffStream/*, woff2Stream*/)
  .pipe(gulp.dest('./build/fonts/'));
})
