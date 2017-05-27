// Gulp
import gulp from 'gulp';
import bs from 'browser-sync';

gulp.task('bs', () => {
  bs({
    server: true,
    open: false,
    ghostMode: false
  })
});

gulp.task('bs-reload', () => {
  bs.reload();
})
