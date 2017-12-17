// https://qiita.com/hoto17296/items/be4c1362647dd241905d

export function setScrollBottomEvent() {

  const scrollBottomEvent = document.createEvent('UIEvents');
  scrollBottomEvent.initUIEvent('scrollBottom', true, false, window, 1);

  document.addEventListener('scroll', () => {

    const bottomLine = 600; // Magic Number感

    const body = document.body;
    const html = document.documentElement;

    const scrollTop = body.scrollTop || html.scrollTop;
    const scrollBottom = html.scrollHeight - html.clientHeight - scrollTop;

    if(scrollBottom <= bottomLine) {
      document.dispatchEvent(scrollBottomEvent);
    }
  });
}