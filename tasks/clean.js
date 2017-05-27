import gulp from 'gulp';
import del from 'del';
import pkg from '../package.json';

gulp.task('clean', () => {
  del([
    pkg.path.dest + 'html',
    pkg.path.dest + 'styles',
    pkg.path.dest + 'scripts'
  ]);
});
