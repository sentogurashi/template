import $ from 'jquery';
const $window = $(window);
const animationClassName = 'is-animate';

function asyncExec (cb, time = 0) {
  setTimeout(cb, time);
}

function mainvisualAnimationSinglePhoto() {
  const $mainVisualImage = $('.js-MainVisual__image');
  $mainVisualImage.addClass(animationClassName);
}

// TODO: あとでこちらにする
function mainvisualAnimation() {
  const $mainVisualImage = $('.js-MainVisual__image');

  const maxVisualNum = 5;
  let count = 1;


  $mainVisualImage.addClass(animationClassName);

  $mainVisualImage.on('webkitAnimationEnd animationend', () => {

    count++;
    if (count > maxVisualNum) {
      count = 1;
    }

    $mainVisualImage
      .removeClass(animationClassName)
      .css({
        backgroundImage: `url(../images/standalone/top/mainvisual_${count}.jpg`
      });

    asyncExec(() => {
      $mainVisualImage.addClass(animationClassName);
    });

  });

}

function insertContact() {
  const convert = str => str.replace(/s[0-9]/g, '').split('').reverse().join('');
  const str1 = 's2:os0ts7ls9s0iams8';
  const str2 = 's0t92s7Yus8kGs7s4azFs6mcs81ds32bs105s0WZs8zB0s2bms45Wa';
  $('.js-info').attr('href', convert(str1) + atob(convert(str2)));
}


$window.on('load', mainvisualAnimationSinglePhoto);
$window.on('load', insertContact);
