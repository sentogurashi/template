// サイン波クラス
// http://noumenon-th.net/programming/2017/04/27/wave1/ 参照
export default class SineWave {

  constructor (element, fill = '#ffffff', period = 1, deflection = 2) {
    this.pixelRatio = parseInt(window.devicePixelRatio, 10);
    this.canvas = element;
    this.ctx = this.canvas.getContext('2d');
    this.sizeFix();

    this.ctx.fillStyle = fill;

    this.r = this.height / deflection; // 振れ幅
    this.T = this.width * period; // 周期
    this.aVelocity = 2 * Math.PI / this.T; // 角速度（単位時間に進む角度）
    this.unit = 20; // 描写解像度
    this.yAxis = this.height / 2;
    this.deg = 0;

    this.render();
  }

  sizeFix () {
    this.canvas.setAttribute('width', this.canvas.clientWidth * this.pixelRatio);
    this.canvas.setAttribute('height', this.canvas.clientHeight * this.pixelRatio);

    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  render () {

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.beginPath();
    this.deg += 15;

    this.drawSine();

    setTimeout(this.render.bind(this), 100);
  }

  drawSine () {
    this.ctx.moveTo(0, this.r * Math.sin(this.aVelocity * this.deg) + this.yAxis);

    for (let x = 0; x < this.width + this.unit; x += this.unit) {
      let y = this.r * Math.sin(this.aVelocity * (this.deg + x)); // sine( 角速度 2π/周期 + 時間x )
      this.ctx.lineTo(x, y + this.yAxis);
    }

    this.ctx.lineTo(this.width, this.height);
    this.ctx.lineTo(0, this.height);

    this.ctx.fill();
  }

}