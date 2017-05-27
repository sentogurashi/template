import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pngquant from 'imagemin-pngquant';
import jpegoptim from 'imagemin-jpegoptim';
import pkg from './../package.json';

const $ = gulpLoadPlugins();
const src = pkg.path.src;
const dest = pkg.path.dest;

gulp.task('image', () => {
  const stream = gulp.src([
    src + 'images/standalone/*.jpg',
    src + 'images/standalone/*.gif',
    src + 'images/standalone/*.png'
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
  .pipe(gulp.dest(dest + 'images/standalone'));

  return stream;
});
