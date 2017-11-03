import SimpleParallax from './class/simpleParallax.js';

const $window = $(window);
const animationClassName = 'is-animate';
const simpleParallax = new SimpleParallax();

const CLASSNAME_STATE_IS_HIDE = 'is-hide';

let isScrolled = false;

function asyncExec (cb, time = 0) {
  setTimeout(cb, time);
}

function mainvisualAnimationSinglePhoto() {
  const $mainVisualImage = $('.js-MainVisual__image');
  $mainVisualImage.addClass(animationClassName);
}

// TODO: あとでこちらにする
function mainvisualAnimation() {
  const $mainVisualImage = $('.js-MainVisual__image');

  const maxVisualNum = 5;
  let count = 1;

  $mainVisualImage.addClass(animationClassName);

  $mainVisualImage.on('webkitAnimationEnd animationend', () => {

    count++;
    if (count > maxVisualNum) {
      count = 1;
    }

    $mainVisualImage
      .removeClass(animationClassName)
      .css({
        backgroundImage: `url(../images/standalone/top/mainvisual_${count}.jpg`
      });

    asyncExec(() => {
      $mainVisualImage.addClass(animationClassName);
    });

  });

}

$(() => {
  simpleParallax.addElement('.js-MainVisual__image',  simpleParallax.checkIsPortrait() ? 0.2 : 0.4, true);
  simpleParallax.init();

  const scrollTicker = document.querySelector('.js-MainVisual__scrollTicker');
  window.addEventListener('scroll', () => {
    console.log('scroll');
    if(!isScrolled) {
      scrollTicker.classList.add(CLASSNAME_STATE_IS_HIDE);
      isScrolled = true;
    }
  });

});

$window.on('load', mainvisualAnimationSinglePhoto);