(function($){
  // 로딩 페이지

    // headBox 배경색 스크롤 내리면 나타나게 만들기
    // 높이도 변경되게 만들고 unb 숨김
  var headBox   = $('#headBox');
  var headTop   = headBox.offset().top;
  var win       = $(window);
  var unb       = $('#unb');
  var winW      = $(window).outerWidth(true);

  win.on('scroll', function(e){

    var winTop = win.scrollTop();

    if(headTop < winTop) {
      headBox.css({position:'fixed'});
      headBox.addClass('bgView');
      headBox.addClass('bgsize');
      unb.hide();
    } else if(headTop >= winTop && winW > 1366 ) {
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


    gnbOl.eq(this_).stop().slideDown(500);
    gnbOl.eq(this_).addClass('show');
    gnbOl.eq(this_).addClass('bgView');
  });

  headNav.on('mouseleave',['a'], function(e){
    e.preventDefault();
    var this_ = $(this).parent('li').index();

    gnbOl.stop().SlideUp(500);
    gnbOl.removeClass('show');
  });


  gnbLi.children('a').on('focus', function(e){  
    e.preventDefault();
    var this_ = $(this).parent('li').index();
    console.log(this_);


    gnbOl.eq(this_).stop().slideDown(500);
    gnbOl.eq(this_).addClass('show');
    gnbOl.eq(this_).addClass('bgView');

    gnbLi.eq(this_).find('a').eq(-1).on('blur', function(e){
      e.preventDefault();

      gnbOl.stop().SlideUp(500);
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


  /* 테스트~ 드래그, 오른쪽 마우스 금지*/
  // $(document).ready(function() {
  //   $(document).bind("contextmenu", function(e){
  //       return false;
  //   });
 
  //   $('img').bind("contextmenu",function(e){ 
  //       return false; 
  //   }); 
 
  //   $('img').bind("selectstart",function(e){ 
  //       return false;  
  //   }); 
  // }); 
   
  // document.oncontextmenu=function(){return false;} // 우클릭 방지
  // document.onselectstart=function(){return false;} // 드래그 방지
  // document.ondragstart=function(){return false;} // 선택 방지
  // document.onmousedown=function(){return false;}

})(jQuery);