(function($){
  // footBox
  var footBox = $('#footBox');
  var footTitle = footBox.find('dt');
  var timed = 500;

  footTitle.nextAll().hide();

  footTitle.on('click',function(e) {
    e.preventDefault();
    var mydt = $(this);

    mydt.parent().siblings('dl').children('dd').slideUp(timed);
    var thisNext =  mydt.nextAll().css('display');


    if(thisNext === 'block') {
      mydt.nextAll().slideUp(timed);
    } else {
      mydt.nextAll().slideDown(timed);
    }
  });
})(jQuery);