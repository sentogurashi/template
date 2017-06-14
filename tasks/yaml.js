import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('yaml', () => {
  return gulp.src('./site_content.yml')
    .pipe($.plumber())
    .pipe($.yaml({
      space: 2
    }))
    .pipe(gulp.dest('./'));
});
