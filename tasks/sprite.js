import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';

gulp.task('sprite', () => {
  const spriteData = gulp.src('./src/images/sprites/*.png')
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
  spriteData.css.pipe(gulp.dest('./src/styles/sprite/'));
  spriteData.img.pipe(gulp.dest('./build/images/'));
});
