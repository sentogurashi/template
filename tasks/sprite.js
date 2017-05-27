import gulp from 'gulp';
import pkg from './../package.json';
import spritesmith from 'gulp.spritesmith';

const src = pkg.path.src;
const dest = pkg.path.dest;

gulp.task('sprite', () => {
  const spriteData = gulp.src(src + 'images/sprites/*.png')
  .pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: '../images/sprite.png',
    cssName: '_sprite_raw.scss',
    imgOpts: {
      quality: 75
    },
    padding: 4
//    algorithm: 'top-down'
  }));
  spriteData.css.pipe(gulp.dest(src + 'styles/sprite/'));
  spriteData.img.pipe(gulp.dest(dest + 'images/'));
});
