/*
import IScroll from 'iscroll';

new IScroll(document.querySelector('.js-CategoryNavigation'), {
  tap: true,
  click: true,
  mousewheel: true,
  scrollX: true,
  scrollY: false
});
*/
import React from 'react';
import {render} from 'react-dom';
import CellList from './component/cellList.jsx';
import Cell from './component/cell.jsx';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Cell title="title desuyo" />,
    document.querySelector('.js-reactRoot')
  );
});


/*
const endPoint = WP_API_SETTINGS.endpoint;
(async () => {
  try {
    const res = await fetch(endPoint + 'wp/v2/posts');
    const json = await res.json();
  } catch (e) {
    console.error(e);
  }

  console.log(json);
})();
*/