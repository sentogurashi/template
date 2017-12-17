import qs from 'qs';
import ViewCollection from './ViewCollection.js';
import Controller from './Controller.js';

export default class PageLoadingController extends Controller {

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