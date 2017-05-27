import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from './../package.json';

const $ = gulpLoadPlugins();
const dest = pkg.path.dest;

let escapeFileList = [
  'jquery.min.js'
]

escapeFileList = escapeFileList.map((fileName) => {
  return '!' + dest + '**/' + fileName;
})

gulp.task('deploy', () => {
  const stream = gulp.src([
    dest + '**/*',
    '!' + dest + '**/*.map',
//    '!' + dest + 'html/*.html',
    ...escapeFileList
  ])
    .pipe($.rsync({
      root: dest,
      hostname: 'TODO',
      destination: 'TODO',
    }));

  return stream;
});
