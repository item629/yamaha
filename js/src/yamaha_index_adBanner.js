(function($){
  var indicator    = $('.copytext').children('ul');
  var indiLi       = indicator.children('li');

  var slideBtn     = $('.slide_btn');
  var prevBtn      = $('.prev_btn')[0];
  var nextBtn      = $('.next_btn')[0];

  var slide        = $('.slide_banner');
  var slideBanner  = slide.children('ul');

  // 순서를 만든느 변수를 생성
  var i = 0;
  var indiLength = indiLi.length;

// 
  var Tab = function(i){
    indiLi.eq(i).addClass('select');
    indiLi.eq(i).siblings('li').removeClass('select');

    var x = i;    

    if( i < slideLen - 1 ) {
      x = i * -100 + '%';
      slideBanner.stop().animate({marginLeft:x});
    } else if( i == slideLen - 1 ) {
      x = i * -100 + '%';
      indiLi.eq(0).addClass('select');
      indiLi.eq(0).siblings('li').removeClass('select');
      slideBanner.animate({marginLeft:x}, function(){
        $(this).css({marginLeft:0}, 50);
        i = 0 ;
      });
    }
  };
// 

  Tab(i);

  indiLi.on('click', function(e){
    e.preventDefault();
    i = $(this).index();

    Tab(i);
  });

  // 배너 이미지 첫번째의 클론을 만들어서 마지막 자리에 넣기
  var bannerClone = slide.find('li').eq(0).clone();
  slide.children('ul').append(bannerClone);

  // 늘어난 li에 맞게 ul의 넓이 수정해주기
  var slideLen = slide.find('li').length;
  slide.children('ul').css({width: slideLen * 100 + '%'});  

  var timed = 5000;
  var setStart;
  // setInterval( function(){} , 시간);
  // clearInterval (setInterval이름)

  var startSlide = function(){
    setStart = setInterval(function(){
      i < slideLen -1 ? i += 1 : i = 1; 
      Tab(i); }, timed);
  };

  var stopSlide = function() {clearInterval( setStart ); };

  startSlide();

  // 버튼 누르면 좌우로 슬라이드 + 누르면 자동 슬라이드 멈추게
  slideBtn.find('button').on('focus', function(e){
    e.preventDefault();
    stopSlide();

    var z = $(this)[0];

    if(z === prevBtn && i > 0 ){
      i-=1;
    } else if(z === nextBtn && i < indiLength - 1) {
      i+=1;
    }

    Tab(i);
  });

  slideBtn.find('button').on('blur', function(e){
    stopSlide();    
    startSlide();
  });

})(jQuery);