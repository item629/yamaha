
(function($){
  var banWrap       = $('.eveBanner_wrap');
  var banner        = banWrap.children('div');
  // div 중 마지막 것을 가장 앞자리로 옮기자
  banner.eq(-1).prependTo(banWrap);
  // 순서를 바꾼 뒤 다시 변수 선언해준다
  banner             = banWrap.children('div');
  // var pbtn           = $('.pbtn');
  // var nbtn           = $('.nbtn');
  var timed          = 600;
  var easing         = 'easeInBounce';

  banWrap.css({marginLeft: -100 + '%'});

  // pbtn.on('click', function(e){
  //   e.preventDefault();
  //   banWrap.stop().animate({marginLeft: 0 + '%'}, timed, function(){
  //     banner.eq(-1).prependTo(banWrap);
  //     banWrap.css({marginLeft: -100 + '%'});
  //     banner        = banWrap.children('div');
  //   });
  // });

  // nbtn.on('click', function(e){
  //   e.preventDefault();
  //   banWrap.stop().animate({marginLeft: -200 + '%'}, timed, function(){
  //     banner.eq(0).appendTo(banWrap);
  //     banWrap.css({marginLeft: -100 + '%'});
  //     banner        = banWrap.children('div');
  //   });
  // });

  setInterval(function(){
    banWrap.stop().animate({marginLeft: -200 + '%'}, timed, function(){
      banner.eq(0).appendTo(banWrap);
      banWrap.css({marginLeft: -100 + '%'});
      banner        = banWrap.children('div');
    });
  }, 5000);


  var eventBanner = $('#event_banner');
  var eventA      = eventBanner.find('a');

  eventA.on('click', function(e){
    e.preventDefault();
  });

})(jQuery);