import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import es from 'event-stream';
import pngquant from 'imagemin-pngquant';
import jpegoptim from 'imagemin-jpegoptim';
import pkg from './../package.json';

const $ = gulpLoadPlugins();
const src = pkg.path.src;
const dest = pkg.path.dest;

gulp.task('image', () => {

  const normalStream = gulp.src([
    src + 'images/standalone/**/*.png',
    src + 'images/standalone/**/*.gif',
    src + 'images/standalone/**/*.svg'
  ]);

  const jpgStream = gulp.src([
    src + 'images/standalone/**/*.jpg'
  ])
  .pipe($.imageResize({
    width: 1600
  }))

  const stream = es.merge([
    normalStream,
    jpgStream
  ])
  .pipe($.imagemin([
    pngquant(),
    jpegoptim({
      max: 80
    })
  ],{
    verbose: true
  }))
  .pipe(gulp.dest(dest + 'images/standalone'));

  return stream;
});

