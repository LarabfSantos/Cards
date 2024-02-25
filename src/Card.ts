import {Suit} from './Suit';
import {Rank} from './Rank';

class Card {
        //Properties
    public rank: Rank;
    public suit: Suit;

    //Constructor to initialize the properties
    constructor(rank: Rank, suit: Suit) {
        this.rank = rank;
        this.suit = suit;
    }
    //Method to display the cards
    public displayCards() {
        return '${this.rank} of ${this.suit}';  //this card of //this suit
    }
}
