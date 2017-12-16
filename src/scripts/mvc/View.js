import { EventEmitter } from 'events';
import template from 'lodash.template';

export default class View extends EventEmitter {
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