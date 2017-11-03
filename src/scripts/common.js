import SineWave from './class/sineWave.js';
import BrowserCheker from './class/browserChecker.js';

let isPageLoaded = false;
let domElements = {};

const CLASSNAME_STATE_IS_SHOW = 'is-show';
const CLASSNAME_STATE_IS_ACTIVE = 'is-active';
const CLASSNAME_STATE_IS_MSBROWSER = 'is-msBrowser';

const timeOutChecker = (() => {
  const start = Date.now();

  const checker = (callback, timeOutSec = 4) => {
    const timeOut = timeOutSec * 1000;
    const now = Date.now();
    if ((now - start) > timeOut) {
      callback();
    }
    if (!isPageLoaded) {
      setTimeout(() => {
        checker(callback, timeOutSec);
      }, 1000);
    }
  };

  return checker;
})();

function display () {
  domElements.content.classList.add(CLASSNAME_STATE_IS_SHOW);
  isPageLoaded = true;
};

function insertContact () {
  const convert = str => str.replace(/s[0-9]/g, '').split('').reverse().join('');
  const str1 = 's2:os0ts7ls9s0iams8';
  const str2 = 's0t92s7Yus8kGs7s4azFs6mcs81ds32bs105s0WZs8zB0s2bms45Wa';
  domElements.info.setAttribute('href', convert(str1) + atob(convert(str2)));
}

function openSocialShareWindowHandler (e) {
  e.preventDefault();
  window.open(e.currentTarget.href, 'sharewindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1');
}

function main () {

  domElements.content = document.querySelector('.js-Content');
  domElements.info = document.querySelector('.js-info');
  domElements.spNavigationTrigger = document.querySelector('.js-NavigationSpTrigger');
  domElements.spNavigationMain = document.querySelector('.js-Navigation--sp');

  domElements.spNavigationTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    domElements.classList.toggle(CLASSNAME_STATE_IS_ACTIVE);
    domElements.classList.toggle(CLASSNAME_STATE_IS_SHOW);
  });

  const browserChecker = new BrowserCheker();
  if (browserChecker.checkMsBrowser()) {
    domeelements.content.classList.add(CLASSNAME_STATE_IS_MSBROWSER);
  }

  if (document.querySelector('.js-Wave__canvas--1')) {
    new SineWave(document.querySelector('.js-Wave__canvas--1'), 'rgba(255, 255, 255, .7)');
    new SineWave(document.querySelector('.js-Wave__canvas--2'), 'rgba(255, 255, 255, .3)', 1.2);
    new SineWave(document.querySelector('.js-Wave__canvas--3'), 'rgba(255, 255, 255, 1)', 0.8);
  }

  insertContact();

  document.querySelector('.js-SocialButton__item--twitter a').addEventListener('click', openSocialShareWindowHandler);
  document.querySelector('.js-SocialButton__item--facebook a').addEventListener('click', openSocialShareWindowHandler);

  window.addEventListener('load', display);
  timeOutChecker(display, 3);

};

document.addEventListener('DOMContentLoaded', main);
