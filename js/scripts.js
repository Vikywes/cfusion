        
    /*   $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();           //For controlling the Tooltip
        }); 

*/
 /*        $(document).ready(function(){
           $("#mycarousel").carousel({interval:2000});   //Controls the two carousel buttons
            
            $("#carousel-pause").click(function(){
               $("#mycarousel").carousel('pause'); 
            });
            
            $("#carousel-play").click(function(){
               $("#mycarousel").carousel('cycle'); 
            });
        });    
   
 */  
        $(document).ready(function(){                    //Toggling Play and Pause on Single Carousel Button
           $("#carousel-button").click(function(){
               if($("#carousel-button").children("span").hasClass('fa-pause'))
                   {
                       $("#mycarousel").carousel('pause');
                       $("#carousel-button").children("span").removeClass('fa-pause');
                       $("#carousel-button").children("span").addClass('fa-play');
                   }
               else if($("#carousel-button").children("span").hasClass('fa-play'))
                   {
                       $("#mycarousel").carousel('cycle');
                       $("#carousel-button").children("span").removeClass('fa-play');
                       $("#carousel-button").children("span").addClass('fa-pause');
                       
                   }
           }) ;
            
            // for Login Modal at the top of the Navbar
            $("#loginModalButton").click(function(){
                $("#loginModal").modal('toggle');    //modal.('toggle')
            });
            
            //For Reserve Button
            $("#reserveFormModal").click(function(){
                $("#reserveModal").modal('show');
            });
            
        });
