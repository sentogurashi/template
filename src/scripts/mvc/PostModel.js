import Model from './Model.js';

export default class PostModel extends Model {
  constructor (param) {
    super(param);
    const date = new Date(this.props.date);
    this.props.formattedDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  }
}