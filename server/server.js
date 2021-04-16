const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
const guessArray =[];

app.get('/guesses', (req, res) => {
  console.log('Get Guesses', guessArray);
  res.send(guessArray);
})


app.post('/guesses', (req, res) => {
  let newGuess = req.body;
  console.log('Got a new guess', newGuess);
  //save the new guess
  guessArray.push(newGuess);
  res.sendStatus(201); //201 status represents Created - adding a thing 
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})


