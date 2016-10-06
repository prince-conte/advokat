 $(document).ready(function() {
  var lang = 0; 
       dinSlide = 0;
       explode = function(){

         
        if (dinSlide == 0) {
        $('#slide1').fadeOut(1000);    
        $('#slide2').fadeIn(1000);    
        $('#one').removeClass('active');    
        $('#two').addClass('active');    
        dinSlide = 1;    
        } else  {
            
        $('#slide1').fadeIn(1000);   
        $('#slide2').fadeOut(1000);
        $('#two').removeClass('active'); 
        $('#one').addClass('active');    
        dinSlide = 0;    
        }
                 
           
           
};
setInterval(explode, 8000);
     
  
     
$(window).load(function () {
  $('#slide1').fadeIn(1500);   
  $('#out1').delay(1000).fadeIn(1500);   

});
     
     
     
     
     
     
     
    $('#mobile-but').click(function() {
        
        $('#mobile').fadeIn(500);
        
        });
          
    $('#close').click(function() {
        
        $('#mobile').fadeOut(500);
        
        });
     
     
     
     
     $('#nav-left').click(function() {
         
        if (dinSlide == 0) {
        $('#slide1').fadeOut(500);    
        $('#slide2').fadeIn(500);    
        $('#one').removeClass('active');    
        $('#two').addClass('active');    
        dinSlide = 1;    
        } else  {
            
        $('#slide1').fadeIn(500);   
        $('#slide2').fadeOut(500);
        $('#two').removeClass('active'); 
        $('#one').addClass('active');    
        dinSlide = 0;    
        }
         
     

     });
 
      
     $('#nav-right').click(function() {
         
        if (dinSlide == 1) {
        $('#slide1').fadeIn(500);   
        $('#slide2').fadeOut(500);
        $('#one').addClass('active'); 
        $('#two').removeClass('active');    
        dinSlide = 0;    
        } else  {       
        $('#slide1').fadeOut(500);    
        $('#slide2').fadeIn(500);    
        $('#one').removeClass('active');    
        $('#two').addClass('active');    
        dinSlide = 1;    
        }
         
     

     });
      
     $('#two').click(function() {
   
        $('#slide1').fadeOut(500);    
        $('#slide2').fadeIn(500);    
        $('#one').removeClass('active');    
        $('#two').addClass('active');    
        dinSlide = 1;    

     });
      
     $('#one').click(function() {
   
        $('#slide1').fadeIn(500);   
        $('#slide2').fadeOut(500);
        $('#one').addClass('active'); 
        $('#two').removeClass('active');    
        dinSlide = 0;    

     });
     
     
     
     
     

 
 });




$(window).scroll(function() {

      
      
if (($(this).scrollTop() >= 350)) {
         
$('#tim-1').addClass('timer')
$('#tim-2').addClass('timer2')
$('#tim-3').addClass('timer3')

          
} else {}
    
if (($(this).scrollTop() >= 1800)) {
    
$('#tim-4').addClass('timer')  
$('#tim-5').addClass('timer2')  
    
}

    
if (($(this).scrollTop() >= 2500)) {
    
$('#tim-6').addClass('timer')   
$('#tim-7').addClass('timer2')   
$('#tim-8').addClass('timer3')  
    
}


    
if (($(this).scrollTop() >= 2700)) {
    
$('#tim-9').addClass('timer3')   
   
    
}


      
      
  
      

});   
