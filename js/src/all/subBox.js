(function($){
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
})(jQuery);