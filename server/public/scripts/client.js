$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  randomNumber();
  //on click of button do this event
  ('#in-submit').on('click' , function(event) {
    console.log('clicked');
    //prevent refreshing of page
    event.preventDefault();
    //call add item function
    submitGuess();
  })
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

randomNumber(1, 25);

function submitGuess();