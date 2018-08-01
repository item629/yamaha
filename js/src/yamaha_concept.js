(function($){

  var mdBox      = $('.modal_box');
  var mdBg       = $('.modal_bg');

  var conceptBox = $('#conceptBox');
  var avantBtn   = conceptBox.find('button');

  mdBox.hide();
  mdBg.hide();

  conceptBox.on('click',['a'],function(e){
    e.preventDefault();
  });

  avantBtn.on('click',['button'],function(e){
    e.preventDefault();
    var thisI = $(this).index();

    mdBox.fadeIn();
    mdBg.fadeIn();
  });

  mdBg.on('click', function(){
    mdBox.fadeOut();
    mdBg.fadeOut();
  });

})(jQuery);