console.log("Up and running!");


var cards = [
		{
			rank: "queen",
			suite: "hearts",
			cardImage: "img/queen-of-hearts.png"
		},
		{
			rank: "queen",
			suite: "diamonds",
			cardImage: "img/queen-of-diamonds.png"
		},
		{
			rank: "king",
			suite: "hearts",
			cardImage: "img/king-of-hearts.png"
		},
		{
			rank: "king",
			suite: "diamonds",
			cardImage: "img/king-of-diamonds.png"
		}
	];

var cardsInPlay = [];

var clearCards = function () {
	cardsInPlay = [];
	createBoard ();
}

var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match! Click OK to start a new game!");
			clearCards ();

		} else {
			alert("So sorry, no match. sad face. Don't worry, you can try again by clicking OK. There's only so many matches, ya know?");
			clearCards ();
		}
	} 

}

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suite);
	console.log(cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage);
	
	checkForMatch();

}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'img/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard()