import IScroll from 'iscroll';

new IScroll(document.querySelector('.js-CategoryNavigation'), {
  tap: true,
  click: true,
  mousewheel: true,
  scrollX: true,
  scrollY: false
});