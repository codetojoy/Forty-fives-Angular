import { Constants } from "../../shared/constants";

export enum Ordinal {
  ACE = 0,
  TWO = 1,
  THREE = 2,
  FOUR = 3,
  FIVE = 4,
  SIX = 5,
  SEVEN = 6,
  EIGHT = 7,
  NINE = 8,
  TEN = 9,
  JACK = 10,
  QUEEN = 11,
  KING = 12,
}

export enum Suit {
  CLUBS = 0,
  DIAMONDS = 1,
  HEARTS = 2,
  SPADES = 3,
}

export class Card {
  id: number;
  suit: Suit;
  ordinal: Ordinal;

  constructor(ordinal: Ordinal, suit: Suit, id?: number) {
    if (id == null) {
      this.id = Ordinal[Ordinal[ordinal]] + Suit[Suit[suit]] * Constants.NUM_CARDS_IN_SUIT;
    } else {
      this.id = id;
    }
    this.suit = suit;
    this.ordinal = ordinal;
  }

  public getImageURL(): string {
    let ordStr = this.buildOrdinalString();
    let suitStr = this.buildSuitString();

    let result = `assets/JPEG/${ordStr}${suitStr}.jpg`;
    return result;
  }

  public isRed(): boolean {
    return this.suit === Suit.DIAMONDS || this.suit === Suit.HEARTS;
  }

  public isBlack(): boolean {
    return this.suit === Suit.CLUBS || this.suit === Suit.SPADES;
  }

  public isAceOfHearts(): boolean {
    return this.ordinal === Ordinal.ACE && this.suit === Suit.HEARTS;
  }

  public isTrump(trump: Suit): boolean {
    return this.suit === trump || this.isAceOfHearts();
  }

  public isLeadingSuit(leadingSuit: Suit): boolean {
    return this.suit === leadingSuit;
  }

  private buildOrdinalString() {
    let result = "";
    let resultOrd = this.ordinal + 1;

    let { SUIT_MIN_INDEX, SUIT_MAX_INDEX } = Constants;

    if (resultOrd < SUIT_MIN_INDEX + 1 || resultOrd > SUIT_MAX_INDEX + 1) {
      throw new TypeError("illegal value");
    }

    switch (resultOrd) {
      case 1:
        result = "A";
        break;
      case 11:
        result = "J";
        break;
      case 12:
        result = "Q";
        break;
      case 13:
        result = "K";
        break;
      default:
        result = "" + resultOrd;
        break;
    }

    return result;
  }

  private buildSuitString() {
    let result = "";

    switch (this.suit) {
      case Suit.CLUBS:
        result = "C";
        break;
      case Suit.DIAMONDS:
        result = "D";
        break;
      case Suit.HEARTS:
        result = "H";
        break;
      case Suit.SPADES:
        result = "S";
        break;
      default:
        result = "ERROR";
        break;
    }

    return result;
  }

  public toString() {
    let ordStr = this.buildOrdinalString();
    let suitStr = this.buildSuitString();

    let result = `[${ordStr} ${suitStr}]`;

    return result;
  }
}
