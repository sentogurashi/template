import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from '../package.json';
import sitedata from '../site_content.json';
import fs from 'fs';
import es from 'event-stream';

const $ = gulpLoadPlugins();
const templatePath = pkg.path.srcTemplate;
const dest = pkg.path.dest;
const stylePath = pkg.path.srcStyle;
const sitedataPath = './site_content.json';
const stringUtf8 = 'utf-8';

gulp.task('template:static', () => {

  const sitedata = JSON.parse(fs.readFileSync(sitedataPath, stringUtf8));
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

  const sitedata = JSON.parse(fs.readFileSync(sitedataPath, stringUtf8));

  return es.merge(sitedata.pages.feature.map((page) => {

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

    return stream;

  }));
});

gulp.task('template', ['template:static', 'template:generate']);
