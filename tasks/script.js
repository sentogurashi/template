// Gulp
import gulp from 'gulp';
import webpack from 'webpack';
import webpackConfig from './../webpack.config.babel.js';
import gulpUtil from 'gulp-util';
import pkg from './../package.json';

const src = pkg.path.src;
const dest = pkg.path.dest;

gulp.task('script:main', (cb) => {
  return webpack(webpackConfig, (err, stats) => {
    if (err) throw new gulpUtil.pluginError('webpack', err);
    gulpUtil.log('[webpack]', stats.toString(webpackConfig.stats));
    cb();
  });
});

gulp.task('script:lib', () => {
  return gulp.src([
    src + 'scripts/lib/*.js',
    src + 'scripts/lib/*.json'
  ])
  .pipe(gulp.dest(dest + 'scripts/lib/'));
});

gulp.task('script', ['script:main', 'script:lib']);