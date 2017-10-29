import SimpleParallax from './class/simpleParallax.js';

const $window = $(window);
const animationClassName = 'is-animate';
const simpleParallax = new SimpleParallax();

function checkMainVisualExists () {
  return !!$('.js-Article__photoMain')[0];
}

$(() => {
  if(!checkMainVisualExists()) return;
  simpleParallax.addElement('.js-Article__photoMain');
  simpleParallax.init();

});

$window.on('load', () => {
  if(!checkMainVisualExists()) return;
  const $mainVisualImage = $('.js-Article__photoMain');
  $mainVisualImage.addClass(animationClassName);
});


