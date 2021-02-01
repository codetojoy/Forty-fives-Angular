import { Card } from "./card.model";
import { Constants } from "../../shared/constants";
import { Mapper } from "./mapper";

import { Util } from "../../shared/util";

export class Deck {
  private deck: Card[] = [];

  constructor() {
    const { DECK_MIN_INDEX, NUM_CARDS_IN_DECK } = Constants;
    const mapper = new Mapper();

    for (let i = DECK_MIN_INDEX; i < NUM_CARDS_IN_DECK; i++) {
      this.deck.push(mapper.mapInt(i));
    }
  }

  takeCard(): Card {
    let result: Card = this.deck.shift();
    return result;
  }

  get cards(): Card[] {
    return this.deck.slice();
  }

  shuffle() {
    new Util().shuffle(this.deck);
  }
}
