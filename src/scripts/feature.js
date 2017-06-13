import SimpleParallax from './class/simpleParallax.js';

$(() => {
  const simpleParallax = new SimpleParallax();
  simpleParallax.addElement('.js-Article__photoMain');
  simpleParallax.addElement('.js-Article__photoSub:eq(0)', simpleParallax.checkIsPortrait() ? 0.2 : 0.4);

  if($('.js-Article__photoSub:eq(1)')[0]) { // むりくり感
    simpleParallax.addElement('.js-Article__photoSub:eq(1)', simpleParallax.checkIsPortrait() ? 0.2 : 0.4);
  }

  simpleParallax.init();

});