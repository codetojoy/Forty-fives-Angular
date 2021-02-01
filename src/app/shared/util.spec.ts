import { Card } from "../model/card/card.model";
import { Util } from "./util";
import { C } from "./c";
import { Deck } from "../model/card/deck.model";

describe("Util", () => {
  it("should remove card", () => {
    let cards: Card[] = [C._AS, C._10H, C._KC];
    let numCards: number = cards.length;
    let card: Card = C._10H;

    // test
    new Util().removeCard(cards, card);

    expect(cards.length).toBe(numCards - 1);
  });

  it("should shuffle", () => {
    const NUM_MATCHES_THRESHOLD: number = 8;
    let deck: Deck = new Deck();
    let originalCards: Card[] = deck.cards;
    let originalTotal: number = originalCards.reduce((acc, card) => (acc += card.id), 0);

    // test
    deck.shuffle();

    let afterTotal: number = deck.cards.reduce((acc, card) => (acc += card.id), 0);
    expect(afterTotal).toEqual(originalTotal);

    let afterLength: number = deck.cards.length;
    expect(afterLength).toEqual(originalCards.length);

    let numMatches: number = 0;
    for (let index = 0; index < originalCards.length; index++) {
      let originalValue: number = originalCards[index].id;
      let newValue: number = deck.cards[index].id;
      if (originalValue === newValue) {
        numMatches++;
      }
    }
    expect(numMatches).toBeLessThan(NUM_MATCHES_THRESHOLD);
  });
});
