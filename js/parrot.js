$(function() {
  $(window).on('scroll', function() {
    checkParrot();
  });

  checkParrot();

  function checkParrot() {
    var scrollTop = $(window).scrollTop();
    var docHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    var gap = docHeight -$(window).height() - 128;
    var stickToTop = false;
    var stickFixed = false;
    var stickToBottom = false;
    var parrot = $('#scrollingparrot');
    var micstick = $('#scrollingmicstick');
    if(scrollTop < 15 + 59 + 138 + 2) {
      stickToTop = true
    } else if(scrollTop < gap) {
      stickFixed = true;
    } else {
      stickToBottom = true;
    }
    parrot.toggleClass('parrotStickToTop', stickToTop);
    parrot.toggleClass('parrotStickFixed', stickFixed);
    parrot.toggleClass('parrotStickToBottom', stickToBottom);
    micstick.toggleClass('micstickStickToTop', stickToTop);
    micstick.toggleClass('micstickStickFixed', stickFixed);
    micstick.toggleClass('micstickStickToBottom', stickToBottom);
  };
});

