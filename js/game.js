
//Different Pizza images
var pizza = [];
//https://realitybakes.com/wp-content/uploads/2020/02/Pizza-al-Taglio2-1.jpg
pizza[0] = './images/Pizza-al-Taglio.jpg';
//https://www.eataly.ca/wp-content/uploads/2019/12/pizza-alla-pala.jpg
pizza[1] = './images/Pizza-alla-Pala.jpg';
//https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg
pizza[2] = './images/Pizza-Napoletana.jpg';
//https://myfoodbook.com.au/sites/default/files/styles/single_recipe/public/recipe_photo/Brev20145427_0.jpg?itok=j2d5iQBG
pizza[3] = './images/Pizza-Siciliana.jpg';

//Special Pizza for the Day
var specialPizza = './images/Pizza-al-Taglio.jpg';

//Placeholder Image used
//https://www.kitchenstories.com/en/recipes/original-italian-pizza
var gameplaceholder = '/images/Game-Placeholder.png';

//No of cards Flipped
var noofGuesses = 0;

//Temporary Array to store shuffled images
var tempPizzaArray = shuffle(pizza);

//array to store clicked elements
var clickeditems = [];

//Position of the last element not clicked
var notClicked;



$(document).ready(function () {

    var errorMessages = document.getElementById("errorMessages");
    var pizzaSelected = document.getElementById("pizzaSelected");
    var gameResult = document.getElementById("gameResult");

});

//function to shuffle the image array
function shuffle (array){

    var currentIndex = array.length,temporaryValue, randomIndex;

    while( currentIndex !==0 ){

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;

  }

  return array;
}


//function to choose the pizza image to be shown to the user.
function choose(pizza){
 
    var source = $(event.target).attr('id');
    var target = document.getElementById(source);
    //Check to see if the user clicks on image more than once
    if(target.src.endsWith(gameplaceholder) == false) {
        errorMessages.innerText = "You can click on the image only once";
        $("#errorMessages").show().delay(1000).fadeOut();
        return;
    }

    //Check to see if the user selected image is undefined
    while(tempPizzaArray[pizza] === undefined){

        shuffle(tempPizzaArray);

    }

    //storing the clickeditems
    clickeditems.push(parseInt(pizza));

    //Check to see whether the selected image is not equal to the Special Pizza for the day
    if(tempPizzaArray[pizza] != specialPizza) {

            //The user has only 3 guesses.
            noofGuesses = noofGuesses + 1;
            //Setting the source of the selected image
            target.src = tempPizzaArray[pizza];
            //Delete the image from the temporary Array to shuffle it
            delete tempPizzaArray[pizza];
            //extract file name to show selected Pizza
            var fileName = displayPizzaName(target.src);
            fileName = fileName.toString();
            pizzaSelected.innerHTML = "You have clicked the wrong pizza : "+fileName;

    }
    //if selected image is equal to the special Pizza for the day.Shuffle to show some other pizza, so
    //that the user never wins
    else if(tempPizzaArray[pizza] === specialPizza ){

            noofGuesses = noofGuesses + 1;
            //repeat shuffling untill another image shows up in the array for the same place
            while(tempPizzaArray[pizza] === specialPizza || tempPizzaArray[pizza] === undefined){

                shuffle(tempPizzaArray);

            }
            target.src = tempPizzaArray[pizza];
            delete tempPizzaArray[pizza];
            var fileName = displayPizzaName(target.src);
            fileName = fileName.toString();
            pizzaSelected.innerHTML = "You have clicked the wrong pizza : "+fileName;

    }

    //User runs out of chances AND has lost the game
    if(noofGuesses === 3 ){
        
        gameResult.innerHTML = "You have Lost the game";
        //To check which image was not clicked
        for( var i = 0; i <= 3; i++ ) {
            if(clickeditems.includes(i)){

            }
            else{
                notClicked = i;
            }
        }

        document.getElementById(notClicked).src = specialPizza;
        var parent = document.getElementById(notClicked).parentElement;  
        parent.classList.add("addborder");
        //disable clicks untill refresh
        document.addEventListener("click",handler,true);
        function handler(e){
            e.stopPropagation();
        }
        return;
    }

    //function to extract pizzaname from the image source
    function displayPizzaName(source){
        var filePath  = source;
        var pathArray = filePath.split("/");
        var fileName  = pathArray[pathArray.length-1];
        pathArray = fileName.split(".");
        fileName = pathArray[0];
        return fileName;
    }
}