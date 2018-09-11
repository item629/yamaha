(function($){
  var slideBanner = $('#slide_banner');
  var slI         = slideBanner.children('ul')
  var slideLi     = slI.children('li');

  var i = 0;
  var timed = 5000;
  var setStart;

  var banClone = slideBanner.find('li').eq(0).clone();
  slideBanner.children('ul').append(banClone);

  var slideLength = slideBanner.find('li').length;
  slideBanner.children('ul').css({width: slideLength * 100 + '%'});

  var Tab = function(i){
    var x = i;    

    if( i < slideLength -1 ) {
      x = i * -100 + '%';
      slideBanner.children('ul').stop().animate({marginLeft:x});
    } else if( i == slideLength - 1 ) {
      x = i * -100 + '%';
      slideBanner.children('ul').stop().animate({marginLeft:x}, function(){
        $(this).css({marginLeft:0}, 50);
        i = 0 ;
      });
    }
  }
  

  var startSlide = function(){
    setStart = setInterval(function(){
      (i < slideLength -1) ? i += 1 : i = 1; 
      Tab(i); }, timed);
  }

  var stopSlide = function() {clearInterval( setStart ); };

  startSlide();


  var sideBox = $('#sideBox');
  var sideBtn = sideBox.children('#side_btn')
  var mainBtn = $('.mainBtn').find('a');
  var homeBtn = $('.home').find('a');

  sideBox.animate({right: '-180px'});
  $('#view').css({display:'none'});
  mainBtn.html('<span>open</span><i class="fas fa-align-left"></i>');

  mainBtn.on('click', function(e){
    e.preventDefault();

    var i = $('#view').css('display');

    // console.log(i);

    if( i === 'block' ) {
      sideBox.animate({right: '-180px'});
      $('#view').css({display:'none'});
      mainBtn.html('<span>open</span><i class="fas fa-align-left"></i>');
    } else {
      sideBox.animate({right: '0'});
      $('#view').css({display:'block'});    
      mainBtn.html('<span>esc</span><i class="fas fa-times"></i>'); 
    };

  });

  homeBtn.on('click', function(e){

    $(window).animate({scrollTop:0}, 1000);
    $('html, body').animate({scrollTop:0}, 1000);
    
  });


})(jQuery);