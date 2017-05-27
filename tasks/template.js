import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from '../package.json';
import sitedata from '../sitedata.json';

const $ = gulpLoadPlugins();
const templatePath = pkg.path.srcTemplate;
const dest = pkg.path.dest;
const stylePath = pkg.path.srcStyle;


gulp.task('template', () => {

  console.log('template is excuted')

  const stream = gulp.src([
    templatePath + '*.ejs',
    templatePath + '*/*.ejs',
    '!' + templatePath + '*/_*.ejs'
  ])

  .pipe($.plumber())
  .pipe($.ejs(sitedata, {}, {
    ext: '.html'
  }))
  .pipe(gulp.dest(dest + 'html/'));

  return stream;
});
