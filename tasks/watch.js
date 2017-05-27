import gulp from 'gulp';
import runSequence from 'run-sequence';

import pkg from './../package.json';
const stylePath = pkg.path.srcStyle;
const scriptPath = pkg.path.srcScript;
const templatePath = pkg.path.srcTemplate;

gulp.task('watch', ['bs'], () => {
  gulp.watch([stylePath + '*.scss', stylePath + '*/*.scss'], (cb) => {
    runSequence('style', 'bs-reload');
  });
  gulp.watch([scriptPath + '*.js', scriptPath + '*/*.js'], (cb) => {
    runSequence('script', 'bs-reload');
  });
  gulp.watch([templatePath + '*.ejs', templatePath + '*/*.ejs'], (cb) => {
    runSequence('template', 'bs-reload');
  });
});
