import SimpleParallax from './class/simpleParallax.js';
import SineWave from './class/sineWave.js';

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

  new SineWave($('.js-Wave__canvas--1')[0], 'rgba(255, 255, 255, .7)');
  new SineWave($('.js-Wave__canvas--2')[0], 'rgba(255, 255, 255, .3)', 1.2);
  new SineWave($('.js-Wave__canvas--3')[0], 'rgba(255, 255, 255, 1)', 0.8);
});

$window.on('load', () => {
  if(!checkMainVisualExists()) return;
  const $mainVisualImage = $('.js-Article__photoMain');
  $mainVisualImage.addClass(animationClassName);
});


