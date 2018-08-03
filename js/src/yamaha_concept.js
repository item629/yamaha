(function($){

  var mdBox      = $('.modal_box');
  var mdBg       = $('.modal_bg');
  var video      = mdBox.children('video');

  var conceptBox = $('#conceptBox');
  var conArt     = conceptBox.find('article');
  var avantBtn   = conceptBox.find('button');

  mdBox.hide();
  mdBg.hide();

  // conArt의 자식인 버튼을 클릭하면
  // 해당 순서의 video 주소를 대입해야함
  conceptBox.on('click',['a'],function(e){
    e.preventDefault();
  });

  avantBtn.on('click',['button'],function(e){
    e.preventDefault();
    var thisI = $(this).parent(conArt).index();
    console.log(thisI);


    if(thisI === 0) {
      mdBox.fadeIn();
      mdBg.fadeIn();
      mdBox.html('<video controls="controls"><source src="../video/yamaha_AvantGrand_NU1X.mp4" type="video/mp4"></video>');
    } else {
      mdBox.fadeIn();
      mdBg.fadeIn();
      mdBox.html('<video controls="controls"><source src="../video/yamaha_disklavier.mp4" type="video/mp4"></video>');
    }

  });

  mdBg.on('click', function(){
    mdBox.fadeOut();
    mdBg.fadeOut();
    mdBox.html('');
  });

})(jQuery);