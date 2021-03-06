//= jquery.min.js
'use strict';


//код для оформления видео
$(document).on('click','.js-videoPoster',function(e) {
    e.preventDefault();
    var poster = $(this);
    var wrapper = poster.closest('.js-videoWrapper');
    videoPlay(wrapper);
  });
  
  function videoPlay(wrapper) {
    var iframe = wrapper.find('.js-videoIframe');
    var src = iframe.data('src');
    wrapper.addClass('video__wrapper_active');
    iframe.attr('src',src);
  }



//открытие-закрытие модального окна
$('.equipment-cards__item').click(function(){
        $('.equipment-popup').addClass('equipment-popup__active');
});

$('.close').click(function(){
  $('.equipment-popup').removeClass('equipment-popup__active');
});

jQuery(function($){
	$('.equipment-popup').mouseup(function (e){ 
		var popup = $("#equipment-popup"); 
		if (!popup.is(e.target) 
		    && popup.has(e.target).length === 0) { 
        $('.equipment-popup').removeClass('equipment-popup__active');
		}
	});
});

//код для каталога


var links = [
  './img/equipment/equipment-1.png',
  './img/equipment/equipment-2.png',
  './img/equipment/equipment-3.png',
  './img/equipment/equipment-4.png',
  './img/equipment/equipment-5.png',
  ];

var thumbnails = document.querySelectorAll('.equipment__item');
var fullPhoto = document.querySelector('.equipment__full-img');

for(var i=0; i<thumbnails.length; i++){
    var addThumbnailsClickHandler = function(thumbnail, link){
    thumbnail.addEventListener('mouseenter', function(){
        fullPhoto.src = link;
      });
  }
  addThumbnailsClickHandler(thumbnails[i],links[i]);
  }


//открытие-закрытие телефонного меню
$('.burger-menu__img').click(function(){
  $('.burger-menu__info').toggleClass('active');
});

jQuery(function($){
$('.burger-menu__info').mouseup(function (e){ 
var popup = $("#burger-menu"); 
if (!popup.is(e.target) 
  && popup.has(e.target).length === 0) { 
  $('.burger-menu__info').removeClass('active');
}
});
});


//меняет контент по табам
$(".tabs-buttons__item").click(function (event) {
  const tabId = $(this).attr('data-tab-button')
  if(!tabId) return

  const wrapper = $(this).closest('.tabs-wrapper')
  
  $(this).siblings().removeClass('tabs-buttons__item_active')
  $(this).addClass('tabs-buttons__item_active')

  wrapper.children(`.tabs-content:not([data-tab-content="${tabId}"])`).removeClass('tabs-content_active')
  wrapper.children(`.tabs-content[data-tab-content="${tabId}"]`).toggleClass('tabs-content_active')
})