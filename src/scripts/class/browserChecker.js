export default class BrowserChecker {
  constructor () {
    this.UA = navigator.userAgent.toLowerCase();

    this.sample = {
      STRING_IPHONE_UA:    'iphone',
      STRING_IPOD_UA:      'ipod',
      STRING_ANDROID_UA:   'android',
      STRING_OLD_IE_UA:    'msie',
      STRING_MODERN_IE_UA: 'trident',
      STRING_EDGE_UA:      'edge',
    }
  }

  checkUA (UAString) {
    return this.UA.indexOf(UAString) !== -1;
  }

  checkMsBrowser () {
    const {sample} = this;
    const checkUA = this.checkUA.bind(this);
    return checkUA(sample.STRING_OLD_IE_UA) || checkUA(sample.STRING_MODERN_IE_UA) || checkUA(sample.STRING_EDGE_UA);
  }
}
