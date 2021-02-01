import { Player } from "./player.model";
import { Card } from "./card/card.model";

export class Table {
  private _players: Player[] = [];
  private _topCard: Card;
  private _roundNum: number = 0;

  constructor(players: Player[]) {
    this._players = players;
  }

  get players(): Player[] {
    return this._players;
  }

  get topCard(): Card {
    return this._topCard;
  }

  /*
  get trumpSuit(): Suit {
    return this._trumpSuit;
  }

  get leadingCard() {
    return this._leadingCard;
  }

  set leadingCard(value: Card) {
    this._leadingCard = value;
  }
  */

  set topCard(value: Card) {
    this._topCard = value;
    // this._trumpSuit = value.suit;
  }
}
