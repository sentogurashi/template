import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pngquant from 'imagemin-pngquant';
import jpegoptim from 'imagemin-jpegoptim';

const $ = gulpLoadPlugins();

gulp.task('image', () => {
  const stream = gulp.src([
    './src/images/standalone/*.jpg',
    './src/images/standalone/*.gif',
    './src/images/standalone/*.png'
  ])
  .pipe($.imagemin({
    quality: 1,
    progressive: true,
    use: [
      pngquant(),
      jpegoptim({
        max: 10
      })
     ]
  }))
  .pipe(gulp.dest('./build/images/standalone'));

  return stream;
});

gulp.task('audio', () => {
  const stream = gulp.src([
    './src/audio/*.mp3'
  ])
  .pipe(gulp.dest('./build/audio'));

  return stream;
});
