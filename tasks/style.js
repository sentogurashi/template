// Gulp
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

// postcss
import postCssScss from 'postcss-scss';
import reporter from 'postcss-reporter';

import pkg from './../package.json';
const stylePath = pkg.path.srcStyle;

const $ = gulpLoadPlugins();

const SUPPORT_BROWSERS = ['iOS >= 5.0', 'Android >= 2.3'];

gulp.task('style', () => {
  const stream = gulp.src([
    stylePath + '*.scss',
  ])
    .pipe($.plumber())

    .pipe($.sass({
      outputStyle: 'expanded',
    }).on('error', $.sass.logError))

    .pipe($.autoprefixer({
      browsers: SUPPORT_BROWSERS,
    }))

    .pipe($.csscomb())

    .pipe($.csso())

    .pipe($.csslint.reporter())

    .pipe($.base64({
      extensions: [/\/datauri\//]
    }))

    .pipe(gulp.dest('./build/styles/'));

  return stream;
});
