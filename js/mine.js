$(window).scroll(function(){
  var wScroll = $(window).scrollTop();
  if (wScroll > 200)
  {
      $("#myBtn").fadeIn(500)
  }
  else
  {
      $("#myBtn").fadeOut(500)
  }
});


$("#myBtn").click(function(){
    $("body").animate({scrollTop:'0'},1500)
})



$(document).ready(function()
{
  $("#loading").fadeOut(4000,function(){
    $("body").css("overflow","auto")
  })
})






$(window).scroll(function(){
  var wScroll = $(window).scrollTop();
  if (wScroll > 500)
  {
      $(".messi").css("backgroundColor","black")
  }
  else
  {
      $(".messi").css("backgroundColor","transparent")  
  }
});


$(window).scroll(function(){
    var wScroll = $(window).scrollTop();
    if (wScroll > 200)
    {
        $(".messsi").css("backgroundColor","black")
    }
    else
    {
        $(".messsi").css("backgroundColor","transparent")  
    }
  });
  
 
  new WOW().init();



$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      
      slideSpeed : 100,
      paginationSpeed : 400,
      singleItem:true,
     
      items : 1,
     
 
      // "singleItem:true" is a shortcut for:
     
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});




jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});













var myInfo = document.getElementById('textarea'),
    
    mySpan = document.getElementById('span');

myInfo.onkeyup = function () {
    
    'use strict';
    
    mySpan.textContent = 100 - this.value.length;
    
    if (mySpan.textContent < 0) {
        
        mySpan.textContent = 'your available Message finished';
        mySpan.style.color = '#D62E33'
        mySpan.style.fontSize = 25;

        mySpan.style.fontWeight = 700;
        
    }
   
     else {
        
        mySpan.style.color = '#38b143'
        mySpan.style.fontSize = 25;
        mySpan.style.fontWeight = 500;

    }
    if  (mySpan.textContent < 16)
    {
        mySpan.style.color = '#D62E33'
        mySpan.style.fontSize = 35;
        mySpan.style.fontWeight = 700;

    }
    
}





