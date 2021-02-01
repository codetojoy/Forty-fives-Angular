import { Card } from "./card/card.model";
import { Hand } from "./card/hand.model";

export class Player {
  private _name: string;
  private _isInteractive: boolean = false;
  private _hand: Hand = new Hand();

  constructor(name: string, isInteractive?: boolean) {
    this._name = name;
    if (isInteractive) {
      this._isInteractive = isInteractive;
    }
  }

  emitLog(): string {
    return `TRACER hand: ${this.hand.toString()}`;
  }

  // -------------- getters / setters

  get name(): string {
    return this._name;
  }

  get isInteractive(): boolean {
    return this._isInteractive;
  }

  get hand(): Hand {
    return this._hand;
  }
}
