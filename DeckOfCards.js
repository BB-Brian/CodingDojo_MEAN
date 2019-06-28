// Assignment: Deck of Cards
// Create a Card class. A card should have the following functionality:

// Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// Each Card should have a numerical value (1-13)
// Each Card should have a show method (log the card's information to the console)
// Create a Deck class. A deck should have the following functionality:

class Card {
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
    }
    show() {
        console.log(`${this.name} of ${this.suit}`)
    }
}


//test
let Unicorn = new Card("Uni", "five", "5");
Unicorn.show();


// The Deck should contain the 52 standard Cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random Card
// Deal should return the Card that was dealt and remove it from the Deck
// Now create a Player class. A Player should have the following functionality:

// class Deck {
//     constructor() {
//         this.cards = this.reset();
//         this.shuffle();
//         this.shuffle();
//         this.shuffle();
//         this.shuffle();
//     }
//     reset() {
//         let result = [];
//         ["Hearts", "Spades", "Clubs", "Diamonds"].forEach(suit => {
//             ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"].forEach((card, idx) => {
//                 result.push(new Card(suit, card, idx + 1))
//             })
//         })
//         return result;
//     }
//     shuffle() {
//         for(let i = 51; i > 0; i--){
//             let rdx = Math.floor(Math.random() * i - 0 + 1);
//             let temp = this.cards[rdx];
//             this.cards[rdx] = this.cards[i];
//             this.cards[i] = temp;
//         }
//     }
//     deal() {
//         return this.cards.pop();
//     }
// }

// let myDeck = new Deck();
// // console.log(myDeck);
// // console.log(myDeck.deal());

// class Player {
//     constructor(name, deck = new Deck()) {
//         this.name = name;
//         this.hand = [];
//         let num = 5;
//         while(num -- > 0) {
//             this.draw(deck);
//         } 
//     }
//     draw(deck) {
//         this.hand.push(deck.deal());
//     }
//     discard() {
//         return this.hand.pop();
//     }
// }

// let Robot = new Player("Robot");
// console.log(Robot);
// console.log(Robot.discard());

// // The Player should have a name
// // The Player should have a hand (an array of cards taken from a Deck)
// // The Player should be able to take a Card (use the deck.deal method)
// // The Player should be able to discard a Card

