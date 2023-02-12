$(window).scroll(function () {
    if ($(window).width() >= 912) {
      if ($(this).scrollTop() < 40) {
        $('.upicon').fadeOut();
      } else {
        $('.upicon').fadeIn();
      }
    } else {
      $('.upicon').hide();
    }
  });
  
  
  
  
  
  
  
  