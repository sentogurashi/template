// Gulp
import gulp from 'gulp';
import webpack from 'webpack';
import webpackConfig from './../webpack.config.babel.js';

import gulpUtil from 'gulp-util';

gulp.task('script', (cb) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gulpUtil.pluginError('webpack', err);
    gulpUtil.log('[webpack]', stats.toString(webpackConfig.stats));
    cb();
  });
  /*
  return gulp.src('./src/scripts/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./build/scripts/'));
  */
});

gulp.task('script:lib', () => {
  return gulp.src([
    './src/scripts/lib/*.js',
    './src/scripts/lib/*.json'
  ])
    .pipe(gulp.dest('./build/scripts/lib/'));
})
