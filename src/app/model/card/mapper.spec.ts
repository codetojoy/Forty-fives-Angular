import { Card, Ordinal, Suit } from "./card.model";
import { Mapper } from "./mapper";

const getCardIdTestCases = [
  { ord: Ordinal.ACE, suit: Suit.CLUBS, expected: 0 },
  { ord: Ordinal.TWO, suit: Suit.CLUBS, expected: 1 },
  { ord: Ordinal.THREE, suit: Suit.CLUBS, expected: 2 },
  { ord: Ordinal.FOUR, suit: Suit.CLUBS, expected: 3 },
  { ord: Ordinal.FIVE, suit: Suit.CLUBS, expected: 4 },
  { ord: Ordinal.SIX, suit: Suit.CLUBS, expected: 5 },
  { ord: Ordinal.SEVEN, suit: Suit.CLUBS, expected: 6 },
  { ord: Ordinal.EIGHT, suit: Suit.CLUBS, expected: 7 },
  { ord: Ordinal.NINE, suit: Suit.CLUBS, expected: 8 },
  { ord: Ordinal.TEN, suit: Suit.CLUBS, expected: 9 },
  { ord: Ordinal.JACK, suit: Suit.CLUBS, expected: 10 },
  { ord: Ordinal.QUEEN, suit: Suit.CLUBS, expected: 11 },
  { ord: Ordinal.KING, suit: Suit.CLUBS, expected: 12 },
  { ord: Ordinal.ACE, suit: Suit.DIAMONDS, expected: 0 + 1 * 13 },
  { ord: Ordinal.TWO, suit: Suit.DIAMONDS, expected: 1 + 1 * 13 },
  { ord: Ordinal.THREE, suit: Suit.DIAMONDS, expected: 2 + 1 * 13 },
  { ord: Ordinal.FOUR, suit: Suit.DIAMONDS, expected: 3 + 1 * 13 },
  { ord: Ordinal.FIVE, suit: Suit.DIAMONDS, expected: 4 + 1 * 13 },
  { ord: Ordinal.SIX, suit: Suit.DIAMONDS, expected: 5 + 1 * 13 },
  { ord: Ordinal.SEVEN, suit: Suit.DIAMONDS, expected: 6 + 1 * 13 },
  { ord: Ordinal.EIGHT, suit: Suit.DIAMONDS, expected: 7 + 1 * 13 },
  { ord: Ordinal.NINE, suit: Suit.DIAMONDS, expected: 8 + 1 * 13 },
  { ord: Ordinal.TEN, suit: Suit.DIAMONDS, expected: 9 + 1 * 13 },
  { ord: Ordinal.JACK, suit: Suit.DIAMONDS, expected: 10 + 1 * 13 },
  { ord: Ordinal.QUEEN, suit: Suit.DIAMONDS, expected: 11 + 1 * 13 },
  { ord: Ordinal.KING, suit: Suit.DIAMONDS, expected: 12 + 1 * 13 },
  { ord: Ordinal.ACE, suit: Suit.HEARTS, expected: 0 + 2 * 13 },
  { ord: Ordinal.TWO, suit: Suit.HEARTS, expected: 1 + 2 * 13 },
  { ord: Ordinal.THREE, suit: Suit.HEARTS, expected: 2 + 2 * 13 },
  { ord: Ordinal.FOUR, suit: Suit.HEARTS, expected: 3 + 2 * 13 },
  { ord: Ordinal.FIVE, suit: Suit.HEARTS, expected: 4 + 2 * 13 },
  { ord: Ordinal.SIX, suit: Suit.HEARTS, expected: 5 + 2 * 13 },
  { ord: Ordinal.SEVEN, suit: Suit.HEARTS, expected: 6 + 2 * 13 },
  { ord: Ordinal.EIGHT, suit: Suit.HEARTS, expected: 7 + 2 * 13 },
  { ord: Ordinal.NINE, suit: Suit.HEARTS, expected: 8 + 2 * 13 },
  { ord: Ordinal.TEN, suit: Suit.HEARTS, expected: 9 + 2 * 13 },
  { ord: Ordinal.JACK, suit: Suit.HEARTS, expected: 10 + 2 * 13 },
  { ord: Ordinal.QUEEN, suit: Suit.HEARTS, expected: 11 + 2 * 13 },
  { ord: Ordinal.KING, suit: Suit.HEARTS, expected: 12 + 2 * 13 },
  { ord: Ordinal.ACE, suit: Suit.SPADES, expected: 0 + 3 * 13 },
  { ord: Ordinal.TWO, suit: Suit.SPADES, expected: 1 + 3 * 13 },
  { ord: Ordinal.THREE, suit: Suit.SPADES, expected: 2 + 3 * 13 },
  { ord: Ordinal.FOUR, suit: Suit.SPADES, expected: 3 + 3 * 13 },
  { ord: Ordinal.FIVE, suit: Suit.SPADES, expected: 4 + 3 * 13 },
  { ord: Ordinal.SIX, suit: Suit.SPADES, expected: 5 + 3 * 13 },
  { ord: Ordinal.SEVEN, suit: Suit.SPADES, expected: 6 + 3 * 13 },
  { ord: Ordinal.EIGHT, suit: Suit.SPADES, expected: 7 + 3 * 13 },
  { ord: Ordinal.NINE, suit: Suit.SPADES, expected: 8 + 3 * 13 },
  { ord: Ordinal.TEN, suit: Suit.SPADES, expected: 9 + 3 * 13 },
  { ord: Ordinal.JACK, suit: Suit.SPADES, expected: 10 + 3 * 13 },
  { ord: Ordinal.QUEEN, suit: Suit.SPADES, expected: 11 + 3 * 13 },
  { ord: Ordinal.KING, suit: Suit.SPADES, expected: 12 + 3 * 13 },
];

getCardIdTestCases.forEach(({ ord, suit, expected }) => {
  it(`getCardId ord: ${ord} suit: ${suit} -> ${expected}`, () => {
    let result: number = new Mapper().getCardId(ord, suit);

    expect(result).toBe(expected);
  });
});

function c(ord, suit) {
  return new Card(ord, suit);
}

const mapSimpleTestCases = [
  { ord: 1, suit: Suit.CLUBS, expected: c(Ordinal.ACE, Suit.CLUBS) },
  { ord: 2, suit: Suit.CLUBS, expected: c(Ordinal.TWO, Suit.CLUBS) },
  { ord: 3, suit: Suit.CLUBS, expected: c(Ordinal.THREE, Suit.CLUBS) },
  { ord: 4, suit: Suit.CLUBS, expected: c(Ordinal.FOUR, Suit.CLUBS) },
  { ord: 5, suit: Suit.CLUBS, expected: c(Ordinal.FIVE, Suit.CLUBS) },
  { ord: 6, suit: Suit.CLUBS, expected: c(Ordinal.SIX, Suit.CLUBS) },
  { ord: 7, suit: Suit.CLUBS, expected: c(Ordinal.SEVEN, Suit.CLUBS) },
  { ord: 8, suit: Suit.CLUBS, expected: c(Ordinal.EIGHT, Suit.CLUBS) },
  { ord: 9, suit: Suit.CLUBS, expected: c(Ordinal.NINE, Suit.CLUBS) },
  { ord: 10, suit: Suit.CLUBS, expected: c(Ordinal.TEN, Suit.CLUBS) },
  { ord: 11, suit: Suit.CLUBS, expected: c(Ordinal.JACK, Suit.CLUBS) },
  { ord: 12, suit: Suit.CLUBS, expected: c(Ordinal.QUEEN, Suit.CLUBS) },
  { ord: 13, suit: Suit.CLUBS, expected: c(Ordinal.KING, Suit.CLUBS) },
  { ord: 1, suit: Suit.DIAMONDS, expected: c(Ordinal.ACE, Suit.DIAMONDS) },
  { ord: 2, suit: Suit.DIAMONDS, expected: c(Ordinal.TWO, Suit.DIAMONDS) },
  { ord: 3, suit: Suit.DIAMONDS, expected: c(Ordinal.THREE, Suit.DIAMONDS) },
  { ord: 4, suit: Suit.DIAMONDS, expected: c(Ordinal.FOUR, Suit.DIAMONDS) },
  { ord: 5, suit: Suit.DIAMONDS, expected: c(Ordinal.FIVE, Suit.DIAMONDS) },
  { ord: 6, suit: Suit.DIAMONDS, expected: c(Ordinal.SIX, Suit.DIAMONDS) },
  { ord: 7, suit: Suit.DIAMONDS, expected: c(Ordinal.SEVEN, Suit.DIAMONDS) },
  { ord: 8, suit: Suit.DIAMONDS, expected: c(Ordinal.EIGHT, Suit.DIAMONDS) },
  { ord: 9, suit: Suit.DIAMONDS, expected: c(Ordinal.NINE, Suit.DIAMONDS) },
  { ord: 10, suit: Suit.DIAMONDS, expected: c(Ordinal.TEN, Suit.DIAMONDS) },
  { ord: 11, suit: Suit.DIAMONDS, expected: c(Ordinal.JACK, Suit.DIAMONDS) },
  { ord: 12, suit: Suit.DIAMONDS, expected: c(Ordinal.QUEEN, Suit.DIAMONDS) },
  { ord: 13, suit: Suit.DIAMONDS, expected: c(Ordinal.KING, Suit.DIAMONDS) },
  { ord: 1, suit: Suit.HEARTS, expected: c(Ordinal.ACE, Suit.HEARTS) },
  { ord: 2, suit: Suit.HEARTS, expected: c(Ordinal.TWO, Suit.HEARTS) },
  { ord: 3, suit: Suit.HEARTS, expected: c(Ordinal.THREE, Suit.HEARTS) },
  { ord: 4, suit: Suit.HEARTS, expected: c(Ordinal.FOUR, Suit.HEARTS) },
  { ord: 5, suit: Suit.HEARTS, expected: c(Ordinal.FIVE, Suit.HEARTS) },
  { ord: 6, suit: Suit.HEARTS, expected: c(Ordinal.SIX, Suit.HEARTS) },
  { ord: 7, suit: Suit.HEARTS, expected: c(Ordinal.SEVEN, Suit.HEARTS) },
  { ord: 8, suit: Suit.HEARTS, expected: c(Ordinal.EIGHT, Suit.HEARTS) },
  { ord: 9, suit: Suit.HEARTS, expected: c(Ordinal.NINE, Suit.HEARTS) },
  { ord: 10, suit: Suit.HEARTS, expected: c(Ordinal.TEN, Suit.HEARTS) },
  { ord: 11, suit: Suit.HEARTS, expected: c(Ordinal.JACK, Suit.HEARTS) },
  { ord: 12, suit: Suit.HEARTS, expected: c(Ordinal.QUEEN, Suit.HEARTS) },
  { ord: 13, suit: Suit.HEARTS, expected: c(Ordinal.KING, Suit.HEARTS) },
  { ord: 1, suit: Suit.SPADES, expected: c(Ordinal.ACE, Suit.SPADES) },
  { ord: 2, suit: Suit.SPADES, expected: c(Ordinal.TWO, Suit.SPADES) },
  { ord: 3, suit: Suit.SPADES, expected: c(Ordinal.THREE, Suit.SPADES) },
  { ord: 4, suit: Suit.SPADES, expected: c(Ordinal.FOUR, Suit.SPADES) },
  { ord: 5, suit: Suit.SPADES, expected: c(Ordinal.FIVE, Suit.SPADES) },
  { ord: 6, suit: Suit.SPADES, expected: c(Ordinal.SIX, Suit.SPADES) },
  { ord: 7, suit: Suit.SPADES, expected: c(Ordinal.SEVEN, Suit.SPADES) },
  { ord: 8, suit: Suit.SPADES, expected: c(Ordinal.EIGHT, Suit.SPADES) },
  { ord: 9, suit: Suit.SPADES, expected: c(Ordinal.NINE, Suit.SPADES) },
  { ord: 10, suit: Suit.SPADES, expected: c(Ordinal.TEN, Suit.SPADES) },
  { ord: 11, suit: Suit.SPADES, expected: c(Ordinal.JACK, Suit.SPADES) },
  { ord: 12, suit: Suit.SPADES, expected: c(Ordinal.QUEEN, Suit.SPADES) },
  { ord: 13, suit: Suit.SPADES, expected: c(Ordinal.KING, Suit.SPADES) },
];

mapSimpleTestCases.forEach(({ ord, suit, expected }) => {
  it(`mapSimple ord: ${ord} suit: ${suit} -> ${expected}`, () => {
    let result: Card = new Mapper().mapSimple(ord, suit);

    expect(result.id).toEqual(expected.id);
  });
});

const mapOrdinalTestCases = [
  { n: 0, expected: Ordinal.ACE },
  { n: 1, expected: Ordinal.TWO },
  { n: 2, expected: Ordinal.THREE },
  { n: 3, expected: Ordinal.FOUR },
  { n: 4, expected: Ordinal.FIVE },
  { n: 5, expected: Ordinal.SIX },
  { n: 6, expected: Ordinal.SEVEN },
  { n: 7, expected: Ordinal.EIGHT },
  { n: 8, expected: Ordinal.NINE },
  { n: 9, expected: Ordinal.TEN },
  { n: 10, expected: Ordinal.JACK },
  { n: 11, expected: Ordinal.QUEEN },
  { n: 12, expected: Ordinal.KING },
];

mapOrdinalTestCases.forEach(({ n, expected }) => {
  it(`mapOrdinal n: ${n} -> ${expected}`, () => {
    let result: Ordinal = new Mapper().mapOrdinal(n);

    expect(result).toBe(expected);
  });
});

const mapOrdinalErrorTestCases = [{ n: -1 }, { n: 13 }];

mapOrdinalErrorTestCases.forEach(({ n }) => {
  it(`mapOrdinalError n: ${n}`, () => {
    expect(() => {
      new Mapper().mapOrdinal(n);
    }).toThrow();
  });
});

const mapIntErrorTestCases = [{ n: -1 }, { n: 52 }];

mapIntErrorTestCases.forEach(({ n }) => {
  it(`mapOrdinalError n: ${n}`, () => {
    expect(() => {
      new Mapper().mapInt(n);
    }).toThrow();
  });
});

const mapIntTestCases = [
  { n: 0, expectedOrdinal: Ordinal.ACE, expectedSuit: Suit.CLUBS },
  { n: 1, expectedOrdinal: Ordinal.TWO, expectedSuit: Suit.CLUBS },
  { n: 2, expectedOrdinal: Ordinal.THREE, expectedSuit: Suit.CLUBS },
  { n: 3, expectedOrdinal: Ordinal.FOUR, expectedSuit: Suit.CLUBS },
  { n: 4, expectedOrdinal: Ordinal.FIVE, expectedSuit: Suit.CLUBS },
  { n: 5, expectedOrdinal: Ordinal.SIX, expectedSuit: Suit.CLUBS },
  { n: 6, expectedOrdinal: Ordinal.SEVEN, expectedSuit: Suit.CLUBS },
  { n: 7, expectedOrdinal: Ordinal.EIGHT, expectedSuit: Suit.CLUBS },
  { n: 8, expectedOrdinal: Ordinal.NINE, expectedSuit: Suit.CLUBS },
  { n: 9, expectedOrdinal: Ordinal.TEN, expectedSuit: Suit.CLUBS },
  { n: 10, expectedOrdinal: Ordinal.JACK, expectedSuit: Suit.CLUBS },
  { n: 11, expectedOrdinal: Ordinal.QUEEN, expectedSuit: Suit.CLUBS },
  { n: 12, expectedOrdinal: Ordinal.KING, expectedSuit: Suit.CLUBS },
  { n: 13, expectedOrdinal: Ordinal.ACE, expectedSuit: Suit.DIAMONDS },
  { n: 14, expectedOrdinal: Ordinal.TWO, expectedSuit: Suit.DIAMONDS },
  { n: 15, expectedOrdinal: Ordinal.THREE, expectedSuit: Suit.DIAMONDS },
  { n: 16, expectedOrdinal: Ordinal.FOUR, expectedSuit: Suit.DIAMONDS },
  { n: 17, expectedOrdinal: Ordinal.FIVE, expectedSuit: Suit.DIAMONDS },
  { n: 18, expectedOrdinal: Ordinal.SIX, expectedSuit: Suit.DIAMONDS },
  { n: 19, expectedOrdinal: Ordinal.SEVEN, expectedSuit: Suit.DIAMONDS },
  { n: 20, expectedOrdinal: Ordinal.EIGHT, expectedSuit: Suit.DIAMONDS },
  { n: 21, expectedOrdinal: Ordinal.NINE, expectedSuit: Suit.DIAMONDS },
  { n: 22, expectedOrdinal: Ordinal.TEN, expectedSuit: Suit.DIAMONDS },
  { n: 23, expectedOrdinal: Ordinal.JACK, expectedSuit: Suit.DIAMONDS },
  { n: 24, expectedOrdinal: Ordinal.QUEEN, expectedSuit: Suit.DIAMONDS },
  { n: 25, expectedOrdinal: Ordinal.KING, expectedSuit: Suit.DIAMONDS },
  { n: 26, expectedOrdinal: Ordinal.ACE, expectedSuit: Suit.HEARTS },
  { n: 27, expectedOrdinal: Ordinal.TWO, expectedSuit: Suit.HEARTS },
  { n: 28, expectedOrdinal: Ordinal.THREE, expectedSuit: Suit.HEARTS },
  { n: 29, expectedOrdinal: Ordinal.FOUR, expectedSuit: Suit.HEARTS },
  { n: 30, expectedOrdinal: Ordinal.FIVE, expectedSuit: Suit.HEARTS },
  { n: 31, expectedOrdinal: Ordinal.SIX, expectedSuit: Suit.HEARTS },
  { n: 32, expectedOrdinal: Ordinal.SEVEN, expectedSuit: Suit.HEARTS },
  { n: 33, expectedOrdinal: Ordinal.EIGHT, expectedSuit: Suit.HEARTS },
  { n: 34, expectedOrdinal: Ordinal.NINE, expectedSuit: Suit.HEARTS },
  { n: 35, expectedOrdinal: Ordinal.TEN, expectedSuit: Suit.HEARTS },
  { n: 36, expectedOrdinal: Ordinal.JACK, expectedSuit: Suit.HEARTS },
  { n: 37, expectedOrdinal: Ordinal.QUEEN, expectedSuit: Suit.HEARTS },
  { n: 38, expectedOrdinal: Ordinal.KING, expectedSuit: Suit.HEARTS },
  { n: 39, expectedOrdinal: Ordinal.ACE, expectedSuit: Suit.SPADES },
  { n: 40, expectedOrdinal: Ordinal.TWO, expectedSuit: Suit.SPADES },
  { n: 41, expectedOrdinal: Ordinal.THREE, expectedSuit: Suit.SPADES },
  { n: 42, expectedOrdinal: Ordinal.FOUR, expectedSuit: Suit.SPADES },
  { n: 43, expectedOrdinal: Ordinal.FIVE, expectedSuit: Suit.SPADES },
  { n: 44, expectedOrdinal: Ordinal.SIX, expectedSuit: Suit.SPADES },
  { n: 45, expectedOrdinal: Ordinal.SEVEN, expectedSuit: Suit.SPADES },
  { n: 46, expectedOrdinal: Ordinal.EIGHT, expectedSuit: Suit.SPADES },
  { n: 47, expectedOrdinal: Ordinal.NINE, expectedSuit: Suit.SPADES },
  { n: 48, expectedOrdinal: Ordinal.TEN, expectedSuit: Suit.SPADES },
  { n: 49, expectedOrdinal: Ordinal.JACK, expectedSuit: Suit.SPADES },
  { n: 50, expectedOrdinal: Ordinal.QUEEN, expectedSuit: Suit.SPADES },
  { n: 51, expectedOrdinal: Ordinal.KING, expectedSuit: Suit.SPADES },
];

mapIntTestCases.forEach(({ n, expectedOrdinal, expectedSuit }) => {
  it(`mapInt n: ${n} eO: ${expectedOrdinal} eS: ${expectedSuit}`, () => {
    let result: Card = new Mapper().mapInt(n);

    expect(result.id).toBe(n);
    expect(result.ordinal).toBe(expectedOrdinal);
    expect(result.suit).toBe(expectedSuit);
  });
});
