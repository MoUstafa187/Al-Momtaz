$(document).ready(function() {
  //Review section carousel
  $('.review-carousel').owlCarousel({
    
    loop: true,
    rtl: true,
    margin: 30,
    responsive: {
      0: {
        items: 1.1
      },
      768: {
        items: 2.2
      }
    }
  });
  $('#prevButton').click(function() {
    $('.review-carousel').trigger('prev.owl.carousel');
  });

  $('#nextButton').click(function() {
    $('.review-carousel').trigger('next.owl.carousel');
  });
  //teachers carousel 
  $('.teachers-carousel').owlCarousel({
    items: 3.4,
    loop: true,
    rtl: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3.4
      }
    }
  });
});
