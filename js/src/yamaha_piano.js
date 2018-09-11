(function($){
  var adBox         = $('#adBox');
  var video         = $('#video').children('video');
  var pianoWrap     = $('#piano_wrap');
  var pianoH        = pianoWrap.children('h2');
  var pianoOffset   = pianoH.offset().top;

  var winH          = $(window).outerHeight(true);


  $(window).on('scroll', function(){
    var nowTop = $(window).scrollTop();

    if( nowTop >= pianoOffset - winH/1.5 ){
      pianoH.addClass('active');
    } else {
      pianoH.removeClass('active');
    };
  });


  $(window).on('scroll', function(){
    var scroll        = $(this).scrollTop();

    if(scroll >= video.outerHeight()) {
      video[0].pause();
    } else {
      video[0].play();
    }

  });

  var premium           = pianoWrap.children('.pr');
  var premiumH          = premium.children('h4');
  var premiumOffset     = premiumH.offset().top;

  var grand             = pianoWrap.children('.gr');
  var grandH            = grand.children('h4');
  var grandOffset       = grandH.offset().top;

  var upright           = pianoWrap.children('.up');
  var uprightH          = upright.children('h4');
  var uprightOffset     = uprightH.offset().top;  

  var afTer             = $('#after');
  var disklavier        = afTer.children('.disk');
  var disklavierH       = disklavier.children('h4');
  var disklavierOffset  = disklavierH.offset().top;

  var clavinova         = afTer.children('.cla');
  var clavinovaH        = clavinova.children('h4');
  var clavinovaOffset   = clavinovaH.offset().top;


  $(window).on('scroll', function(){

    var nowTop = $(window).scrollTop();

    if( nowTop >= premiumOffset - winH/1.5 ){
      premiumH.addClass('active');
    } else {
      premiumH.removeClass('active');
    };

    if( nowTop >= grandOffset - winH ){
      grandH.addClass('active');
    } else {
      grandH.removeClass('active');
    }; 

    if( nowTop >= uprightOffset - winH/1.5 ){
      uprightH.addClass('active');
    } else {
      uprightH.removeClass('active');
    }; 

    if( nowTop >= disklavierOffset - winH/1.5 ){
      disklavierH.addClass('active');
    } else {
      disklavierH.removeClass('active');
    }; 

    if( nowTop >= clavinovaOffset - winH ){
      clavinovaH.addClass('active');
    } else {
      clavinovaH.removeClass('active');
    }; 

  });



})(jQuery);