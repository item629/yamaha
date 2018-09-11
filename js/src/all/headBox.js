(function($){
    // headBox 배경색 스크롤 내리면 나타나게 만들기
    // 높이도 변경되게 만들고 unb 숨김
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
  var gnbLen    = gnbLi.length;

  gnbOl.hide();

  gnbLi.children('a').on('mouseenter',['a'], function(e){
    e.preventDefault();
    var this_ = $(this).parent('li').index();


    gnbOl.eq(this_).stop().fadeIn(500);
    gnbOl.eq(this_).addClass('show');
    gnbOl.eq(this_).addClass('bgView');
  });

  headNav.on('mouseleave',['a'], function(e){
    e.preventDefault();
    var this_ = $(this).parent('li').index();

    gnbOl.stop().fadeOut(500);
    gnbOl.removeClass('show');
  });


  gnbLi.children('a').on('focus', function(e){  
    e.preventDefault();
    var this_ = $(this).parent('li').index();
    console.log(this_);


    gnbOl.eq(this_).stop().fadeIn(500);
    gnbOl.eq(this_).addClass('show');
    gnbOl.eq(this_).addClass('bgView');

    gnbLi.eq(this_).find('a').eq(-1).on('blur', function(e){
      e.preventDefault();

      gnbOl.stop().fadeOut(500);
      gnbOl.removeClass('show');
    });
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