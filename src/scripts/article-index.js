import SineWave from './class/sineWave.js';
import IScroll from 'iscroll';

new SineWave(document.querySelector('.js-Wave__canvas--1'), 'rgba(255, 255, 255, .7)');
new SineWave(document.querySelector('.js-Wave__canvas--2'), 'rgba(255, 255, 255, .3)', 1.2);
new SineWave(document.querySelector('.js-Wave__canvas--3'), 'rgba(255, 255, 255, 1)', 0.8);

new IScroll(document.querySelector('.js-CategoryNavigationWrap'), {
  tap: true,
  scrollX: true,
  //scrollY: false
});
