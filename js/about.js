$(document).ready(function(){

    $('.fadeEffect').fadeOut(0);

    $('.about-section-container').hover(function(){
        $(this).find('p').fadeIn(2500);
        $(this).find('img').fadeIn(2000);
        });

});