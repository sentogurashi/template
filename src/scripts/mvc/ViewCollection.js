import { EventEmitter } from 'events';

import PostView from './PostView.js';
import PostModel from './PostModel.js';

export default class ViewCollection extends EventEmitter {
  constructor (elem) {
    super();
    this.viewCollection = [];
    this.elem = elem;
    this.isRenderdIndex = 0;
  }

  add (data) {
    this.viewCollection.push(new PostView(new PostModel(data)));
    this.isRenderdIndex = this.isRenderdIndex + 1;
  }

  render() {
    const elems = this.viewCollection.splice(0, this.isRenderdIndex).map((view) => {
      return view.render();
    }).map((elem) => {
      this.elem.appendChild(elem);
      return elem;
    });

    elems.forEach((elem, index) => {
      setTimeout(() => {
        elem.classList.add('is-show');
      }, (index + 1) * 500);
    });
  }
}