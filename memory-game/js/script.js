// store cards in game
var cards = ['pikachu', 'pikachu', 'squirtle', 'squirtle'];

// empty array to store cards in play
var cardsInPlay = [];

// find board in DOM and store it
var board = document.getElementById('game-board');

// create the board
function createBoard() {
  // using loop to add card elements to DOM
  for (var i=0; i<cards.length; i++) {
    
    // creating cards
    var cardElement = document.createElement('div');
    
    // adding class to card
    cardElement.className = 'card';
            
    //creating custom attribute with array indexes to serve unique IDs
    cardElement.setAttribute('data-card', cards[i]);
    
    //add an event handler to run function isTwoCards when card is clicked
    cardElement.addEventListener('click', isTwoCards);

    // add cards to board
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}

//storing and checking cards in play
function isTwoCards() {
  // add cards to cardsInPlay Array 
  cardsInPlay.push(this.getAttribute('data-card'));
	
	// render cards
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'squirtle') {
		this.innerHTML = "<img src='images/pikachu.jpg'>"; //pikachu 
	} else {
		this.innerHTML = "<img src='images/squirtle.jpg'>"; //squirtle
	}
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // functional call to see if cards in play are a match
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}

//check if cards are a match
function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry :( give it another shot.");

  }
}

//function call to create game board
createBoard();