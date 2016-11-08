$( document ).ready(function() {

  $('.parallax-landing').
          parallax({imageSrc: '../images/home.jpg',
                    position: 'top'});

  $('.parallax-testimonials').
          parallax({imageSrc: '../images/testimonial.jpg',
                    position: 'top'});

  $('.parallax-counter').
          parallax({imageSrc: '../images/fun_bg.jpg',
                    position: 'top'});


  $('.video').fitVids();

  $("#owl-carousel").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

    // $("a[rel^='prettyPhoto']").prettyPhoto();



});
