import { EventEmitter } from 'events';

export default class Controller extends EventEmitter {
  constructor (param) {
    super(param);
  }
}