import SimpleParallax from './class/simpleParallax.js';

const $window = $(window);
const animationClassName = 'is-animate';
const simpleParallax = new SimpleParallax();

function mainvisualAnimationSinglePhoto() {
  const $mainVisualImage = $('.js-Feature__photoMain');
  $mainVisualImage.addClass(animationClassName);
}

$(() => {
  simpleParallax.addElement('.js-Feature__photoMain');
  simpleParallax.addElement('.js-Feature__photoSub:eq(0)', simpleParallax.checkIsPortrait() ? 0.2 : 0.4);

  if($('.js-Feature__photoSub:eq(1)')[0]) { // むりくり感
    simpleParallax.addElement('.js-Feature__photoSub:eq(1)', simpleParallax.checkIsPortrait() ? 0.2 : 0.4);
  }

  simpleParallax.init();
});

$window.on('load', mainvisualAnimationSinglePhoto);
