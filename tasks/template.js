import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from '../package.json';
import sitedata from '../site_content.json';

const $ = gulpLoadPlugins();
const templatePath = pkg.path.srcTemplate;
const dest = pkg.path.dest;
const stylePath = pkg.path.srcStyle;

gulp.task('template:static', () => {

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

gulp.task('template:generate', () => {

  sitedata.pages.feature.forEach((page) => {

    const stream = gulp.src([
      templatePath + 'feature/_template.ejs'
    ])
    .pipe($.plumber())
    .pipe($.rename(page.id))
    .pipe($.ejs({
      page: page,
      original: sitedata
    }, {}, {
      ext: '.html'
    }))
    .pipe(gulp.dest(dest + 'html/feature'));

  });
});

gulp.task('template', ['template:static', 'template:generate']);
