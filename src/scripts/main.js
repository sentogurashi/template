// TODO: 仮
import $ from 'jquery';

const start = () => {


  const $trigger = $('.js-NavigationSpTrigger');
  const $main = $('.js-NavigationSp');

  $main.hide();

  $trigger.on('click', (e) => {
    e.preventDefault();
    $trigger.toggleClass('is-active');
    $main.toggle(0, () => {
      $main.toggleClass('is-show');
    })
  });

};

$(start);
