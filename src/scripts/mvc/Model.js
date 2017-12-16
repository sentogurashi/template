import { EventEmitter } from 'events';

export default class Model extends EventEmitter {
  constructor (data) {
    super();
    this.props = data;
  }
}