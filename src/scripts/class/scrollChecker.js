export default class ScrollChecker {

  constructor() {
    this.objects = [];
    this.$win = $(window);
  }

  init () {
    this.resizeFix();
    this.$win.on('scroll', this.check.bind(this));
    this.$win.on('resize', this.resizeFix.bind(this));
  }

  check () {
    this.objects.forEach((obj) => {
      if (obj.isEffectEnabled) obj.func(obj);
    });
  }

  resizeFix () {
    this.width = this.$win.width();
    this.height = this.$win.height();
    this.objects.forEach((obj) => {
      const offsetTop = obj.$elem.offset().top;
      obj.height = obj.$elem.outerHeight();
      obj.width = obj.$elem.outerWidth();
      obj.positionTop = offsetTop;
      obj.positionBottom = offsetTop + obj.height;
    })
  }

  get scrollPositionTop () {
    return this.$win.scrollTop();
  }

  get scrollPositionBottom () {
    return this.$win.scrollTop() + this.height;
  }

  add (configs) {
    const newArray = configs

    .map((config) => {

      const $elem = $(config.selector);
      const offsetTop = $elem.offset().top;

      return {
        $elem: $elem,
        positionTop: offsetTop,
        positionBottom: offsetTop + $elem.outerHeight(),
        func: config.func,
        isEffectEnabled: true
      }
    });

    this.objects = this.objects.concat(newArray);
  }

};
