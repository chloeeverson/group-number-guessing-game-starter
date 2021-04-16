$(document).ready(handleReady);
let min = 1
let max = 25
let pickedNumber = randomNumber(min, max)

function handleReady() {
  console.log("jquery is loaded!")
  //on click of button do this event
  $('#in-submit').on('click' , function(event) {
    console.log('clicked');
    //prevent refreshing of page
    event.preventDefault();
    //call add item function
    submitGuess();
    addGuess();
  })
  getGuesses();
}

function randomNumber(min, max) {
  console.log('in randomNumber');
  return Math.floor(Math.random() * (1 + max - min) + min);
  
}


function submitGuess(){
  console.log('in submitGuess');
  console.log(pickedNumber);
  if ($('#in-number-one').val() < pickedNumber){
    alert('GUESS 1 TOO LOW');
  }
  else if ($('#in-number-one').val() > pickedNumber){
    alert('GUESS 1 TOO HIGH');
  }
  else {
      alert('Guess 1 WINS!!!');
  }
  if ($('#in-number-two').val() < pickedNumber){
    alert('GUESS 2 TOO LOW');
  }
  else if ($('#in-number-two').val() > pickedNumber){
    alert('GUESS 2 TOO HIGH');
  }
  else {
    alert('Guess 2 WINS!!!');
  }
}
  
function addGuess(){
  let newGuess = {
    newGuessOne: $(`#in-number-one`).val(),
    newGuessTwo: $(`#in-number-two`).val()
  }
  console.log('Adding Guesses', newGuess);

  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: newGuess// this is goes in the request body

  })
  .then (function(response) {
    console.log('Added guess', response);
    //getQuotes(); come back after get function 
  })
  .catch(function( error ){
    console.log('Error from server', error);
    alert('Sorry, could not add your quote. Try again later.')
  })
//clear input
  $(`#in-number-one`).val('');
  $(`#in-number-two`).val('');
}

function getGuesses(){
  //ajax method returns back a Promise
  $.ajax({
      method: 'GET',
      url:'/guesses'
  })
  .then( function( response ) {
      console.log('Response from server', response);
     // the response is the array from the server
     //pass the array into our render method to display
      render( response);
      
  })
  .catch( function( error){
      console.log('Error from server', error);
      alert('Sorry, could not get quotes. Try again later.')
  })
  console.log('After making server request...');
  
}



function render(guessList){

  $(`#guesses`).empty();

  for( let item of guessList ){
    $('#guesses').append(`
      <tr>
        <td>${item.newGuessOne}</td>
        <td>${item.newGuessTwo}</td>
      </tr>
     `)
  }
}