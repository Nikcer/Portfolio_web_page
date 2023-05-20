/*  FIXEDOUTELEMENT  */
$(document).ready(function(){
  
    $("a").on('click', function(event) {
  
      
      if (this.hash !== "") {
        
        event.preventDefault();
  
       
        var hash = this.hash;
  
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          
          window.location.hash = hash;
        });
      } 
    });
  });

/* FADEOUT ELEMENT */
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



