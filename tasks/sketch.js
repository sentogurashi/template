import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import pkg from './../package.json';

const $ = gulpLoadPlugins();
const src = pkg.path.src;

gulp.task('sketch:generate', () => {
  const stream = gulp.src(src + 'sketch/design.sketch')
  .pipe($.sketch({
    export: 'slices'
  }))
  .pipe(gulp.dest(src + '/images/standalone/'));

  return stream;
});

gulp.task('sketch', () => {
  runSequence('sketch:generate', 'image');
})
