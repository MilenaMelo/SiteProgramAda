  $(window).scroll(function() { 
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 160)
  });

  $('.carousel').carousel({
    interval: 2000
  })

  $(window).scroll(function() { 
    $(".topo-selfie-5").animate({right: '250px'}, $(this).scrollTop() > 50)
  });
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate'; 
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight*3)/4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  animeScroll();

  if(target.length) {
    window.addEventListener('scroll', function() {
      animeScroll();
    })
  }
  $("#demo01").animatedModal();