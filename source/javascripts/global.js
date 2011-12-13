$(function(){
    var donate = $('.donate');
    
    donate.find('a')
        .bind('click', function(e){
            e.preventDefault();
            donate.toggleClass('brasileiro');
        });
   
   // $('#countdown').countdown({ 
   //        until: new Date(2011, 12 - 1, 11),
   //        layout: '{d<}{dn}{d>}'
   //    });
});
