import {Card} from './Card.ts';
import {Rank} from './Rank.ts';
import {Suit} from '/Suit.ts';

class Deck {
    private cards: Card[] = [];

    constructor() {
        this.setupDeck()
        this.shuffle()
    }

    private setupDeck() {
        Object.values(Suit).forEach(suit=>{
            Object.values(Rank).forEach(rank=>{
                displayCards()
            })
        })
    }

    private shuffle() {
        //implement shuffling
    }
}

