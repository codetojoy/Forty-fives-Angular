import { Card, Suit } from "./card.model";
import { Util } from "../../shared/util";

export class Hand {
  private _cards: Card[] = [];

  constructor(cards?: Card[]) {
    this._cards = cards != null ? cards : [];
  }

  get cards(): Card[] {
    return this._cards.slice();
  }

  dealCard(card: Card) {
    this._cards.push(card);
  }

  sortCards(trumpSuit: Suit, leadingSuit?: Suit) {
    // new Ranker(trumpSuit, leadingSuit).customSortArray(this._cards);
  }

  getNumCards(): number {
    return this._cards.length;
  }

  containsCardOfSuit(suit: Suit): boolean {
    return this._cards.filter((c) => c.suit === suit).length > 0;
  }

  shuffleForTesting() {
    new Util().shuffle(this._cards);
  }

  public toString() {
    let result = ``;
    this._cards.map((card) => (result += ` ${card.toString()}`));

    return result;
  }
}
