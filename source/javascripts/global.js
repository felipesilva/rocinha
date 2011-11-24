$(function(){
    var donate = $('.donate');
    
    donate.find('a')
        .bind('click', function(e){
            e.preventDefault();
            donate.toggleClass('brasileiro');
        });
    
});
