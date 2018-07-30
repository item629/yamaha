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





  // pc 외에서의 메뉴

  var subMenu = $('#sub_menu');
  var title = subMenu.find('dt');
  var timed = 500;
    var winW = $(window).outerWidth();

    $(window).on('resize', function(e){
    var nowW = $(window).outerWidth();

    if(winW !== nowW) {
      location.reload() 
    }
  });

  var mNavi = $('#mobile_navi');
  var mNaviBtn = mNavi.children('button').eq(1);

    subMenu.hide();

  mNaviBtn.on('click', function(e){
    // subMenu.stop().toggle();

    var subdis = subMenu.css('display');

    if(subdis === 'block'){
      subMenu.slideUp();
    } else {
      subMenu.slideDown();
    }
  });





  title.eq(0).nextAll().show();
  title.eq(0).addClass('active');

  title.on('click', function(e){
    var this_ = $(this);

    title.removeClass('active');
    this_.addClass('active');
  });


  title.on('click',function(e) {
    e.preventDefault();
    var this_ = $(this);

    this_.parent().siblings('dl').children('dd').slideUp(timed);
    var thisNext =  this_.nextAll().css('display');

    if(thisNext === 'block') {
      this_.nextAll().slideUp(timed);
    } else {
      this_.nextAll().slideDown(timed);
    }


  });


  // footBox
  var footBox = $('#footBox');
  var footTitle = footBox.find('dt');
  var timed = 500;

  footTitle.nextAll().hide();

  footTitle.on('click',function(e) {
    e.preventDefault();
    var mydt = $(this);

    mydt.parent().siblings('dl').children('dd').slideUp(timed);
    var thisNext =  mydt.nextAll().css('display');


    if(thisNext === 'block') {
      mydt.nextAll().slideUp(timed);
    } else {
      mydt.nextAll().slideDown(timed);
    }
  });
})(jQuery);