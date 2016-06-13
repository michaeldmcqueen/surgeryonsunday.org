$(document).ready(function() {

	if(Modernizr.mq('only all')) {
		$('html').addClass('mq');
	} else {
		$('html').addClass('no-mq');
	};


  // $( ".menu-btn" ).on('click touchstart', function() {
  //       $('.menu').toggleClass('show');
  //   });

  $('.js nav ul').addClass('hide');
  $(".hamburger-menu").click(function(){
        $(".js nav ul").toggleClass('hide');
        $(".hamburger-menu").toggleClass('close');
    });

  $('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
  })

});