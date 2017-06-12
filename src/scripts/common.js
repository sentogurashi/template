// TODO: 仮
const $window = $(window);

// 雑なのであとでチューニング
function display () {
  $('.js-Content').addClass('is-show');
};

function asyncExec (cb, time = 0) {
  setTimeout(cb, time);
}

function insertContact() {
  const convert = str => str.replace(/s[0-9]/g, '').split('').reverse().join('');
  const str1 = 's2:os0ts7ls9s0iams8';
  const str2 = 's0t92s7Yus8kGs7s4azFs6mcs81ds32bs105s0WZs8zB0s2bms45Wa';
  $('.js-info').attr('href', convert(str1) + atob(convert(str2)));
}

function start () {

  const $trigger = $('.js-NavigationSpTrigger');
  const $main = $('.js-Navigation--sp');

  $trigger.on('click', (e) => {
    e.preventDefault();
    $trigger.toggleClass('is-active');
    $main.toggleClass('is-show')
  });

  insertContact();

};

$(start);
$window.on('load', display);
