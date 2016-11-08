$( document ).ready(function() {

  $('.parallax-landing').
          parallax({imageSrc: '../images/home.jpg',
                    position: 'top'});

  $('.parallax-testimonials').
          parallax({imageSrc: '../images/testimonial.jpg',
                    position: 'top'});


  $('.video').fitVids();

});
