import SimpleParallax from './class/simpleParallax.js';

const $window = $(window);
const simpleParallax = new SimpleParallax();

$(() => {
  simpleParallax.addElement('.js-Article__photoMain');
  simpleParallax.init();
});

$window.on('load', mainvisualAnimationSinglePhoto);
