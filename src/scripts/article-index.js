import { EventEmitter } from 'events';
import template from 'lodash.template';
import qs from 'qs';

import ScrollChecker from './class/ScrollChecker.js';

class Model extends EventEmitter {
  constructor (data) {
    super();
    this.props = data;
  }
}

class View extends EventEmitter {
  constructor (model, selector) {
    super();
    this.model = model;
    this.template = template(document.querySelector(selector).innerHTML);
    this.elem = {};
  }

  getDOMFromString (str) {
    const div = document.createElement('div');
    div.innerHTML = str;
    return div.firstElementChild;
  }

  render () {
    this.elem = this.getDOMFromString(this.template(this.model.props));
    return this.elem;
  }
}

class Controller extends EventEmitter {
  constructor (param) {
    super(param);
  }
}

class PostModel extends Model {
  constructor (param) {
    super(param);
    const date = new Date(this.props.date);
    this.props.formattedDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  }
}

class PostView extends View {
  constructor (model) {
    super(model, '.js-template-Cell');
  }
}

class ViewCollection extends EventEmitter {
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
      }, index * 500);
    });
  }
}


class PageLoadingController extends Controller {

  constructor(wpSetting) {
    super();

    this.wpSetting = wpSetting;

    this.requestStartOffset = 5; // 何件目以降AJAXで取るか
    this.perPage = 5; // 一度に取得する件数
    this.isMore = true;
    this.requestPage = 1 + Math.floor(this.requestStartOffset / this.perPage);
    this.postViewCollection = new ViewCollection(document.querySelector('.js-CellList'));

    this.isFetching = false;
  }

  checkIsFetching () {
    return this.isFetching;
  }

  async update () {

    this.isFetching = true;

    if(!this.isMore) return;

    let data = null;

    const param = {
      per_page: this.perPage,
      page: this.requestPage
    }

    if(this.wpSetting.type === 'category') {
      param.categories = this.wpSetting.id;
    } else if(this.wpSetting.type === 'tag') {
      param.tags = this.wpSetting.id;
    } else if(this.wpSetting.type === 'author') {
      param.author = this.wpSetting.id;
    }

    try {

      const res = await fetch(this.wpSetting.endpoint + '?_embed&' + qs.stringify(param));
      data = await res.json();
      console.log(data);

    } catch (e) {
      console.error(e);
    }

    if(data && data.status === 'ok') {

      data.data.forEach((postInfo) => {
        this.postViewCollection.add(postInfo);
      })
      this.postViewCollection.render();

      this.requestPage = this.requestPage + 1;
    } else if (data.status === 'failed' || data.length === 0) {
      this.isMore = false;
    }

    this.isFetching = false;

  }
}

function setScrollBottomEvent() {
  // https://qiita.com/hoto17296/items/be4c1362647dd241905d

  const scrollBottomEvent = document.createEvent('UIEvents');
  scrollBottomEvent.initUIEvent('scrollBottom', true, false, window, 1);

  document.addEventListener('scroll', () => {

    const bottomLine = 600; // Magic Number感

    const body = document.body;
    const html = document.documentElement;

    const scrollTop = body.scrollTop || html.scrollTop;
    const scrollBottom = html.scrollHeight - html.clientHeight - scrollTop;

    console.log(scrollBottom);

    if(scrollBottom <= bottomLine) {
      document.dispatchEvent(scrollBottomEvent);
    }
  });
}

function main () {
  setScrollBottomEvent();
  const pageLoadingController = new PageLoadingController(WP_API_SETTINGS);
  document.addEventListener('scrollBottom', () => {
    console.log(pageLoadingController.checkIsFetching());
    if(!pageLoadingController.checkIsFetching()) {
      pageLoadingController.update();
    }
  });
}

window.addEventListener('DOMContentLoaded', main);
