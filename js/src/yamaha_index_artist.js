(function($){
  var artistBox     = $('#artistBox');
  var artiIndi      = $('.arti_indi');
  var artiIndiLi    = artiIndi.children('li');
  var vedio         = $('.vedio_list');

  var addr = "../img/artistBox/";
  var artist = [
    {"img" : "pizarro.jpg",       "title" : "동영상01"},
    {"img" : "sande.jpg",         "title" : "동영상02"},
    {"img" : "tristano.jpg",      "title" : "동영상03"},
    {"img" : "mikadze.jpg",       "title" : "동영상04"},
    {"img" : "straub.jpg",        "title" : "동영상05"},
    {"img" : "pizarro.jpg",       "title" : "동영상06"},
    {"img" : "sande.jpg",         "title" : "동영상07"},
    {"img" : "tristano.jpg",      "title" : "동영상08"},
    {"img" : "mikadze.jpg",       "title" : "동영상09"},
    {"img" : "straub.jpg",        "title" : "동영상10"},
    {"img" : "pizarro.jpg",       "title" : "동영상11"},
    {"img" : "sande.jpg",         "title" : "동영상12"},
    {"img" : "tristano.jpg",      "title" : "동영상13"},
    {"img" : "mikadze.jpg",       "title" : "동영상14"},
    {"img" : "straub.jpg",        "title" : "동영상15"},
    {"img" : "pizarro.jpg",       "title" : "동영상16"},
    {"img" : "sande.jpg",         "title" : "동영상17"},
    {"img" : "tristano.jpg",      "title" : "동영상18"},
    {"img" : "mikadze.jpg",       "title" : "동영상19"},
    {"img" : "straub.jpg",        "title" : "동영상20"}
  ]

  var i = 0;

  for( i ; i < artist.length ; i += 1 ) {
    var vedioLi = vedio.find('li').eq(0).clone();
    var li      = vedio.children('li').eq(i);

    vedio.append(vedioLi);
    li.css({backgroundImage: 'url(' + addr + artist[i].img + ')'});
    li.find('span').text(artist[i].title);
  }

  vedio.children('li').eq(artist.length).remove();

  artistBox.find('a').on('click',['a'],function(e){
    e.preventDefault();
  });

  var x = 0;

  artiIndiLi.on('click',['a'],function(e){
    e.preventDefault();
    x = $(this).index();

    var c = x;

    artiIndiLi.eq(x).addClass('active');
    artiIndiLi.eq(x).siblings('li').removeClass('active');
    var c = x * -100 + '%';
    vedio.stop().animate({marginLeft: c}, 1000);

  });

})(jQuery);