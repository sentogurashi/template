// TODO: 仮
import $ from 'jquery';

const $window = $(window);

// 雑なのであとでチューニング
function display () {
  $('.js-Content').addClass('is-show');
};

function asyncExec (cb, time = 0) {
  setTimeout(cb, time);
}

function start () {

  const $trigger = $('.js-NavigationSpTrigger');
  const $main = $('.js-Navigation--sp');

  $trigger.on('click', (e) => {
    e.preventDefault();
    $trigger.toggleClass('is-active');
    $main.toggleClass('is-show')


  });

};

$(start);
$window.on('load', display);
