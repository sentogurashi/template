import SineWave from './class/sineWave.js';

new SineWave(document.querySelector('.js-Wave__canvas--1'), 'rgba(255, 255, 255, .7)');
new SineWave(document.querySelector('.js-Wave__canvas--2'), 'rgba(255, 255, 255, .3)', 1.2);
new SineWave(document.querySelector('.js-Wave__canvas--3'), 'rgba(255, 255, 255, 1)', 0.8);