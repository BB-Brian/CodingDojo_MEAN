// Assignment: Deck of Cards
// Create a Card class. A card should have the following functionality:

// Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// Each Card should have a numerical value (1-13)
// Each Card should have a show method (log the card's information to the console)

class Card {                            // "class" indicates that we are building an object (aka constructing a class)
    constructor(suit, name, value) {    // "constructor" is a function (aka method) for a blueprint for creating the object
        this.suit = suit;               // "this.____" refers to / is like saying, "this object.this attribute ='s "the value of this variable"
        this.name = name;
        this.value = value;
    }
    show() {                                               // this "show()" method is a function we are defining within the Card class
        console.log(`${this.name} of ${this.suit}`);       // this function will print the name and suit values to the console for us to see
    }
}

// test
// let Card = new Card("Spades", "Five", 5);               // this line defines a variable named "Unicorn" and sets the value of that variable to be an instance of the Card class with the following values passed through as parameters
// Card.show();                                            // we call the "show()" function by referencing the name of the object followed by a "." followed by the function name


// Create a Deck class. A deck should have the following functionality:

// The Deck should contain the 52 standard Cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random Card
// Deal should return the Card that was dealt and remove it from the Deck

class Deck {
    constructor() {
        this.cards = this.reset();
        this.shuffle();
        this.shuffle();
        this.shuffle();
        this.shuffle();
    }
    reset() {
        let result = [];
        ["Spades", "Clubs", "Hearts", "Diamonds"].forEach(suitElement => {
            ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"].forEach((cardElement, idx) => {
                result.push(new Card(suitElement, cardElement, idx + 1));
            });
        });
        return result;
    }
    shuffle() {
        for(let i = 51; i > 0; i--) {
            let randomizeDeck = Math.floor(Math.random() * i);
            let temp = this.cards[randomizeDeck];
            this.cards[randomizeDeck] = this.cards[i]
            this.cards[i] = temp;
        }
    }
    deal() {
        return this.cards.pop();
    }
}

let newDeck = new Deck();
// console.log(newDeck);

// Now create a Player class. A Player should have the following functionality:

// The Player should have a name
// The Player should have a hand (an array of cards taken from a Deck)
// The Player should be able to take a Card (use the deck.deal method)
// The Player should be able to discard a Card

class Player {
    constructor(name, deck = new Deck()) {
        this.name = name;
        this.hand = [];
        let num = 5;
        while(num -- > 0){
            this.deal(deck);
        }
    }
    deal(deck) {
        this.hand.push(deck.deal());
    }
    discard() {
        return this.hand.pop();
    }
}

newPlayer = new Player("Brian");
console.log(newPlayer);

newPlayer.discard();
newPlayer.discard();
newPlayer.discard();