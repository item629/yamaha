(function($){
    // headBox 배경색 스크롤 내리면 나타나게 만들기
  var headBox   = $('#headBox');
  var headTop   = headBox.offset().top;
  var win       = $(window);
  var unb       = $('#unb');

  win.on('scroll', function(e){

    var winTop = win.scrollTop();

    if(headTop < winTop) {
      headBox.css({position:'fixed'});
      headBox.addClass('bgView');
      headBox.addClass('bgsize');
      unb.hide();
    } else {
      headBox.css({position:'absolute'});
      headBox.removeClass('bgView');
      headBox.removeClass('bgsize');
      unb.show();
    };
  });

  // 하위 메뉴 숨겼다 보이게 하기 

  var gnbOl     = $('#gnb').find('ol');
  var gnbLi     = $('#gnb').children('li');
  var Navi      = $('#navigation');
  var headNav   = headBox.find('ul').children('li');
  var olLink    = gnbOl.find('a');
  var headnavA  = headNav.find('a');
  var unbLi     = $('#unb').children('li');

  gnbOl.hide();

  headNav.on('mouseenter',['a'], function(e){
    e.preventDefault();
    gnbOl.stop().fadeIn(500);
    headBox.addClass('show');
    headBox.addClass('bgView');
  });

  Navi.on('mouseleave',['a'], function(e){
    e.preventDefault();
    gnbOl.stop().fadeOut(500);
    headBox.removeClass('show');
  });

  headnavA.on('focus', function(e){  
    headNav.trigger('mouseenter');
  });

  headnavA.eq(-1).on('blur',['a'], function(e){
    headNav.trigger('mouseleave');    
  });


  var bestBox = $('#bestBox');
  var specialBox = $('#specialBox');

  bestBox.find('a').on('click', function(e){
    e.preventDefault();
  });

  specialBox.find('a').on('click', function(e){
    e.preventDefault();
  });
})(jQuery);