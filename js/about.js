//Set function to fire after HTML document loads
$(document).ready(function(){

    //Apply fadeOut with immidiate effect on pictures and text 
    $('.fadeEffect').fadeOut(0);

    //Set listener to detect hover action over pictures and text and then fire a function to reveal the pictures and text with the fadeIn effect
    $('.about-section-container').hover(function(){
        $(this).find('p').fadeIn(2250);
        $(this).find('img').fadeIn(2000);
        });

});

