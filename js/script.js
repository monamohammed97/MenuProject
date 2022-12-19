$('.slick-slider').slick({
  // autoplay: true,
  infinite: true,
  rtl: true,
  slidesToShow: 6, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  arrows: true, // Adds arrows to sides of slider
  responsive: [
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 3,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
