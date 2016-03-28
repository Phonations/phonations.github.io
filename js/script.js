$(function() {
  // Roll the header roles
  var current = 1;
  var height = $('#roles').height();
  var numberDivs = $('#roles').children().length;
  var first = $('#roles div:nth-child(1)');
  setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
      first.css('margin-top', '0px');
      current = 1;
    } else current++;
  }, 2000);

  // Toggle sticky navigation bar
  var waypoint = new Waypoint({
    element: $('#page-content'),
    handler: function(direction) {
      var shouldBeStuck = direction === 'down';
      $('#site-header').toggleClass('stuck', shouldBeStuck);
    }
  });

  // Scroll smoothly when navingating
  var header_height = $('#nav').outerHeight();
  $('#how a, #nav a').click(function (e) {
    var t = e.currentTarget;
    if (this.hash && $(this.hash).length > 0) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top - header_height
      }, 500);
    }
  });

  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop() + header_height;
    $('#nav a').each(function(){
      if(this.hash && $(this.hash).length > 0){
        var sectionTop = $(this.hash).offset().top;
        var sectionBottom = sectionTop + $(this.hash).outerHeight();
        if(scrollTop >= sectionTop &&
            scrollTop <= sectionBottom){
          $(this).addClass('selected')
            .siblings().removeClass('selected');
        }
      }
    });
  });
});
