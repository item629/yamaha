(function($){

  var origin        = $('#yamaha_origin');
  var originH       = origin.children('h2');
  var originOffset  = originH.offset().top;
  var originp       = origin.children('p');

  var winH          = $(window).outerHeight(true);
  var adBoxP        = $('#adBox').children('p');

        
    adBoxP.addClass('active');

  $(window).on('scroll', function(){
    var nowTop = $(window).scrollTop();

    if( nowTop >= originOffset - winH/1.5 ){
      originH.addClass('active');
      originp.addClass('active');

    } else {
      originH.removeClass('active');
      originp.removeClass('active');
    };
  });

  var history       = $('.historyOfLogo');
  var historyH      = history.children('h2');
  var historyOffset = historyH.offset().top;
  var tuning        = $('#tuning');
  var tuningH       = tuning.children('h3');

  var corporation   = $('#corporation');
  var corporationH  = corporation.children('h2');
  var corporOffset  = corporationH.offset().top;

  $(window).on('scroll', function(){

    var nowTop = $(window).scrollTop();

    if( nowTop >= historyOffset - winH ){
      historyH.addClass('active');
      tuningH.addClass('active');
    } else {
      historyH.removeClass('active');
      tuningH.removeClass('active');
    };

    if( nowTop >= corporOffset - winH ){
      corporationH.addClass('active');
    } else {
      corporationH.removeClass('active');
    };

  });


  var addr         = "../../../../img/historyOfLogo/";
  var tuner        = ["thum_2016_01.gif", "thum_1998_01.gif", "thum_1980_01.gif", "thum_1967_01.gif", "thum_1959_01.gif", "thum_1956_01.gif", "thum_1934_01.gif", "thum_1927_01.gif", "thum_1916_03.gif", "thum_1916_02.gif", "thum_1916_01.gif", "thum_1898_01.gif"];
  var yamaha          = ["thum_2016_02.gif", "thum_1998_02.gif", "thum_1987_01.gif", "thum_1980_02.gif", "thum_1967_02.gif"];

  var tuningLi    = tuning.find('li');
  var tuningImg   = tuningLi.children('.tuning_img');


  var yamahaLogo        = $('#yamahaLogo');
  var yamahaLogoH       = yamahaLogo.children('h3');
  var yamahaOffset      = yamahaLogoH.offset().top;
  var yamahaLi          = yamahaLogo.find('li');
  var yamahaImage       = yamahaLi.children('.logo_img');


  $(window).on('scroll', function(){

    var nowTop = $(window).scrollTop();

    if( nowTop >= yamahaOffset - winH ){
      yamahaLogoH.addClass('active');
    } else {
      yamahaLogoH.removeClass('active');
    };
  });


  var i           = 0;

  for(i ; i < tuner.length ; i += 1) {
    tuningLi.eq(i).children('.tuning_img').css({backgroundImage: 'url(' + addr + tuner[i] + ')'});

    yamahaLi.eq(i).children('.logo_img').css({backgroundImage: 'url(' + addr + yamaha[i] + ')'});
  };


  var moreBtn     =  $('#moreHistory > ul > li > a');

  moreBtn.on('click', function(e){
    e.preventDefault();
  });


})(jQuery);