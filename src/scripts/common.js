import SineWave from './class/sineWave.js';
import BrowserCheker from './class/browserChecker.js';

// TODO: 仮
const $window = $(window);

// 雑なのであとでチューニング
function display () {
  $('.js-Content').addClass('is-show');
};

function checkMsBrowser() {
  const browserChecker = new BrowserCheker();
  if(browserChecker.checkMsBrowser()){
    $('.js-Content').addClass('is-msBrowser');
  }
}

function insertContact() {
  const convert = str => str.replace(/s[0-9]/g, '').split('').reverse().join('');
  const str1 = 's2:os0ts7ls9s0iams8';
  const str2 = 's0t92s7Yus8kGs7s4azFs6mcs81ds32bs105s0WZs8zB0s2bms45Wa';
  $('.js-info').attr('href', convert(str1) + atob(convert(str2)));
}

function openSocialShareWindowHandler(e) {
  e.preventDefault();
  window.open(e.currentTarget.href, 'sharewindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1');
}


function start () {

  const $trigger = $('.js-NavigationSpTrigger');
  const $main = $('.js-Navigation--sp');

  $trigger.on('click', (e) => {
    e.preventDefault();
    $trigger.toggleClass('is-active');
    $main.toggleClass('is-show')
  });

  checkMsBrowser();

  insertContact();

  if(document.querySelector('.js-Wave__canvas--1')) {
    new SineWave(document.querySelector('.js-Wave__canvas--1'), 'rgba(255, 255, 255, .7)');
    new SineWave(document.querySelector('.js-Wave__canvas--2'), 'rgba(255, 255, 255, .3)', 1.2);
    new SineWave(document.querySelector('.js-Wave__canvas--3'), 'rgba(255, 255, 255, 1)', 0.8);
  }

  document.querySelector('.js-SocialButton__item--twitter a').addEventListener('click', openSocialShareWindowHandler);
  document.querySelector('.js-SocialButton__item--facebook a').addEventListener('click', openSocialShareWindowHandler);

};

$(start);
$window.on('load', display);
