export default class BrowserCheker {
  constructor () {
    this.ua = navigator.userAgent;

    this.constants = {};

    this.constants = {
      STRING_IPHONE_UA: 'iPhone',
      STRING_IPOD_UA: 'iPod',
      STRING_ANDROID_UA: 'Android',
      STRING_OLD_IE_UA: 'msie',

      NUMBER_IN_SUPPORT_ANDROID: 4.4,
      NUMBER_IN_SUPPORT_IOS: 8,

      FLAG_IS_NOT_DEVICE: 'is_not',
      FLAG_IS_PC: 'pc',
      FLAG_IS_SP: 'sp',
    }
  }

  getIosVersion() {
    if(this.ua.indexOf(this.constants.STRING_IPHONE_UA) > 0 || this.ua.indexOf(this.constants.STRING_IPOD_UA) > 0) {
      this.ua.match(/iPhone OS (\w+){1,3}/g);
      return (RegExp.$1.replace(/_/g, '')+'00').slice(0,3);
    } else {
      return this.constants.FLAG_IS_NOT_DEVICE;
    }
  }

  getAndroidVersion() {
    if(this.ua.indexOf(this.constants.STRING_ANDROID_UA) > 0) {
      return parseFloat(this.ua.slice(this.ua.indexOf(this.constants.STRING_ANDROID_UA)+8));
    } else {
      return this.constants.FLAG_IS_NOT_DEVICE;
    }
  }

  getDevice() {
    if(this.ua.indexOf(this.constants.STRING_IPHONE_UA) > 0 || this.ua.indexOf(this.constants.STRING_IPOD_UA) > 0 || this.ua.indexOf(this.constants.STRING_ANDROID_UA) > 0 && this.ua.indexOf('Mobile') > 0){
      return this.constants.FLAG_IS_SP;
    }else{
      return this.constants.FLAG_IS_PC;
    }
  }

  checkOldIe() {
    // IE10以下
    return this.ua.toLowerCase().indexOf(this.constants.STRING_OLD_IE_UA) > 0;
  }

  isSupport () {
    const androidVersion = this.getAndroidVersion();
    const iosVersion = this.getIosVersion();
    let iosVersionTopNumber = 0;

    // Android
    if(androidVersion !== this.constants.FLAG_IS_NOT_DEVICE) {
      return androidVersion >= this.constants.NUMBER_IN_SUPPORT_ANDROID;

    // iOS
    } else if (iosVersion !== this.constants.FLAG_IS_NOT_DEVICE) {
      iosVersionTopNumber = parseInt(iosVersion.toString().charAt(0), 10);
      if(iosVersionTopNumber === 1) {
        return true;
      } else {
        return iosVersionTopNumber >= this.constants.NUMBER_IN_SUPPORT_IOS;
      }

    // PC
    } else {
      return !this.checkOldIe();
    }
  }
}
