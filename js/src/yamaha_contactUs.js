(function($){
  var center       = $('#center');
  var centerH      = center.find('h4');
  var centerOffset = centerH.offset().top;
  var centerImg    = center.find('#map_image');

  var mapArea      = $('#map_area');
  var mapP         = mapArea.find('p');
  var winH         = $(window).outerHeight(true);

  // 첫번째 영역
  $(window).on('scroll', function(){

    var nowTop = $(window).scrollTop();

    if( nowTop >= centerOffset - winH/2 ){
      mapP.addClass('active');
      centerImg.addClass('active')
    } else {
      mapP.removeClass('active');
      centerImg.removeClass('active');
    };
  });

  var support         = $('#sup');
  var supportH        = support.find('h4');
  var supportOffset   = supportH.offset().top;
  var supportImage    = support.find('div');


  // 두번째 영역
  $(window).on('scroll', function(){

    var nowTop = $(window).scrollTop();

    if( nowTop >= supportOffset - winH/2 ){
      supportImage.addClass('active');
    } else {
      supportImage.removeClass('active');
    };
  });

  var ydacc           = $('#ydacc');
  var ydaccH          = ydacc.find('h4');
  var ydaccOffset     = ydaccH.offset().top;
  var ydaccLogo       = ydacc.find('#ydacc_logo');

  // 세번째 영역
  $(window).on('scroll', function(){

    var nowTop = $(window).scrollTop();

    console.log(nowTop);

    if( nowTop >= ydaccOffset - winH/2 ){
      ydaccLogo.addClass('active');
    } else {
      ydaccLogo.removeClass('active');
    };
  });

  var contact         = $('#contact');
  var contactH        = contact.find('h4');
  var contactOffset   = contactH.offset().top;
  var callImage       = contact.find('div');

  // 네번째 영역
  $(window).on('scroll', function(){

    var nowTop = $(window).scrollTop();

    if( nowTop >= contactOffset - winH/2 ){
      callImage.addClass('active');
    } else {
      callImage.removeClass('active');
    };
  });  

})(jQuery);