(function($){

  var dealers         = $('#contact_dealers');
  var dealH           = dealers.children('h2');
  var dealOffset      = dealH.offset().top;
  
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


    if( nowTop >= dealOffset - winH/1.5 ){
      dealH.addClass('active');
    } else {
      dealH.removeClass('active');
    };

    if( nowTop >= centerOffset - winH/2 ){
      mapP.addClass('active');
      centerImg.addClass('active');
      centerH.addClass('active');
    } else {
      mapP.removeClass('active');
      centerImg.removeClass('active');
      centerH.removeClass('active');
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
      supportH.addClass('active');
    } else {
      supportImage.removeClass('active');
      supportH.removeClass('active');
    };
  });

  var ydacc           = $('#ydacc');
  var ydaccH          = ydacc.find('h4');
  var ydaccOffset     = ydaccH.offset().top;
  var ydaccLogo       = ydacc.find('#ydacc_logo');

  // 세번째 영역
  $(window).on('scroll', function(){

    var nowTop = $(window).scrollTop();

    if( nowTop >= ydaccOffset - winH/2 ){
      ydaccLogo.addClass('active');
      ydaccH.addClass('active');
    } else {
      ydaccLogo.removeClass('active');
      ydaccH.removeClass('active');
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
      contactH.addClass('active');
    } else {
      callImage.removeClass('active');
      contactH.removeClass('active');
    };
  });  

})(jQuery);