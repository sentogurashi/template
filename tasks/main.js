import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('generate', (callback) => {
  return runSequence(
    'clean',
    ['style', 'script', 'template'],
    callback
  );
});

gulp.task('default', (callback) => {
  return runSequence(
    'generate',
    'watch',
    callback
  );
});