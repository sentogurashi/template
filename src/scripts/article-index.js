import PageLoadingController from './mvc/PageLoadingController.js';
import { setScrollBottomEvent } from './mvc/utils.js';

function main () {
  setScrollBottomEvent();
  const pageLoadingController = new PageLoadingController(WP_API_SETTINGS);
  document.addEventListener('scrollBottom', () => {
    if(!pageLoadingController.checkIsFetching()) {
      pageLoadingController.update();
    }
  });
}

window.addEventListener('DOMContentLoaded', main);