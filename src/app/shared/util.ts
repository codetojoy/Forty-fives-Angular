import { Card } from "../model/card/card.model";

export class Util {
  removeCard(cards: Card[], card: Card): void {
    const index: number = cards.findIndex((c) => c.id === card.id);
    if (index > -1) {
      cards.splice(index, 1);
    }
  }

  // http://stackoverflow.com/a/2450976/12704
  shuffle<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
