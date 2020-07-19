$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible();
  $('.owl-carousel').owlCarousel({
    margin:10,
    responsive:{
        0:{
            items:1
          }
      }
  });
  $('.bxslider').bxSlider({
  mode: 'fade',
  adaptiveHeight:false,
  auto:true,
  pager:false,
  captions: true
  });

  $('#bxslider-one').bxSlider({
  controls:true,
  mode: 'horizontal',
  auto:true,
  pager:false,
  minSlides: 2,
  maxSlides: 2,
  slideWidth: 500,
  slideMargin: 3
  });


    $('#bxslider-two').bxSlider({
    controls:true,
    mode: 'horizontal',
    auto:true,
    pager:false,
    });

    $('#bxslider-three').bxSlider({
    controls:true,
    mode: 'horizontal',
    auto:false,
    pager:false,
    minSlides: 2,
    maxSlides: 2,
    slideWidth: 500,
    slideMargin: 3
    });


  var nt_example1 = $('#nt-example1').newsTicker({
      row_height: 80,
      max_rows: 1,
      duration: 4000,
      prevButton: $('#nt-example1-prev'),
      nextButton: $('#nt-example1-next')
  });


  var owl = $('.owl-carousel');
  owl.owlCarousel();
  // Go to the next item
  $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBtn').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  })

  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.carousel').carousel('next');
  $('.carousel').carousel('next', 3); // Move next n times.

  // Previous slide
  $('.carousel').carousel('prev');
  $('.carousel').carousel('prev', 4); // Move prev n times.

  $('.dropdown-button').dropdown({
    hover: false, // Activate on hover
    belowOrigin: true, // Displays dropdown below the button
  }
);
var countDownDate = new Date("Jul 25, 2017 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);







$('#owl-one').owlCarousel({
  items:3,
  merge:true,
  loop:true,
  margin:10,
  video:true,
  lazyLoad:true,
  center:true,
  videoHeight: 300,
  videoWidth: 600,
  responsive:{
      480:{
          items:2
      },
      600:{
          items:4
      }
  }
})











})
