$(document).ready(function(){

    $('.fadeEffect').fadeOut();

    $('.about-section-container').hover(function(){
        $(this).find('p').fadeIn(2500);
        $(this).find('img').fadeIn(2500);
        });

});