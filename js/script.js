$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({ 
      responsive:{
        0:{
          items:1
        },
        768:{
          items:2
        },
        1180:{
          items:3
        }
      },
      margin: 10,
      loop: true,
      nav: true
    });
  });