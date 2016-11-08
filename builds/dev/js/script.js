$( document ).ready(function() {

  $('.parallax-landing').
          parallax({imageSrc: '../images/home.jpg',
                    position: 'top'});

  $('.parallax-testimonials').
          parallax({imageSrc: '../images/testimonial.jpg',
                    position: 'top'});


  $('.video').fitVids();

  $("#owl-carousel").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });

});
