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

  /* SCROLL-ANIMATION  */

  document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    
    
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
