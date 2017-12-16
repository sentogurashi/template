import View from './View.js';

export default class PostView extends View {
  constructor (model) {
    super(model, '.js-template-Cell');
  }
}