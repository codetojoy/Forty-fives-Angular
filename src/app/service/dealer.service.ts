import { Injectable, EventEmitter } from "@angular/core";

import { ConfigService } from "./config.service";
import { Card } from "../model/card/card.model";
import { Deck } from "../model/card/deck.model";
/*
import { AuditService } from "./audit.service";

import { Card, Hand, Kitty } from "../model/hand.model";
import { Bid, Player, Players } from "../model/player.model";
*/
import { Table } from "../model/table.model";
import { Player } from "../model/player.model";
import { Constants } from "../shared/constants";

@Injectable()
export class DealerService {
  private table: Table;
  tableChanged: EventEmitter<Table> = new EventEmitter<Table>();
  statusChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private configService: ConfigService) {}
  /*
  constructor(private auditService: AuditService, private configService: ConfigService) {
    this.configService.transparencyModeChanged.subscribe((value: boolean) => {
      this.table.setTransparencyMode(value);
      this.tableChanged.emit(this.table);
    });
  }
  */

  emitTableChanged(): void {
    // this.auditService.audit(this.table);
    this.tableChanged.emit(this.table);
  }

  newGame() {
    console.log(`TRACER DealerService newGame`);
    let players: Player[] = this.configService.getPlayers();
    this.table = new Table(players);
    let deck: Deck = new Deck();
    deck.shuffle();
    console.log(`TRACER DS cp montreal maroons`);
    this.dealHands(this.table, deck);
    this.emitTableChanged();
    /*
    const numCards: number = this.configService.getNumCards();
    const numCardsInHand: number = this.configService.getNumCardsInHand();

    let deck: Deck = new Deck(numCards);
    deck.shuffle();
    let hands: Hand[] = this.dealHands(deck.getCards(), numCardsInHand);
    hands.forEach((hand) => console.log(`TRACER hand: ${hand.toString()}`));

    this.table = this.assignToTable(hands, this.configService.getPlayers());
    this.table.assignPrizeCard();
    this.emitTableChanged();
    */
  }

  dealHands(table: Table, deck: Deck) {
    table.players.forEach((player) => this.dealHand(player, deck));
  }

  dealHand(player: Player, deck: Deck) {
    for (let i = 1; i <= Constants.NUM_CARDS_IN_HAND; i++) {
      let card: Card = deck.takeCard();
      player.hand.dealCard(card);
    }
  }

  /*
  assignToTable(hands: Hand[], players: Player[]): Table {
    let kitty: Kitty = null;
    for (let handIndex = 0; handIndex < hands.length; handIndex++) {
      let hand: Hand = hands[handIndex];
      if (handIndex == 0) {
        kitty = hand;
      } else {
        let playerIndex = handIndex - 1;
        players[playerIndex].setHand(hand);
      }
    }

    let table: Table = new Table(kitty, players);
    return table;
  }

  // TODO: test
  dealHands(cards: Card[], numCardsInHand: number): Hand[] {
    let hands: Hand[] = [];

    for (let i: number = 0, j: number = cards.length; i < j; i += numCardsInHand) {
      let cardsForHand: Card[] = cards.slice(i, i + numCardsInHand);
      let hand: Hand = new Hand(cardsForHand);
      hands.push(hand);
    }

    return hands;
  }

  playRound(userCard: Card) {
    const user: Player = new Players().findUser(this.table.players);
    // TODO: validate userCard
    // TODO: remove userCard from hand
    const bids: Bid[] = this.getBids(user.name, userCard);
    const winningBid: Bid = this.findWinningBid(bids);
    const roundWinner: Player = winningBid.player;
    this.setStatsForRound(this.table.prizeCard.value, bids, roundWinner);

    if (this.table.kitty.isEmpty()) {
      let gameWinner: Player = new Players().findGameWinner(this.table.players);
      this.statusChanged.emit(`Game winner: ${gameWinner.name}`);
      this.table.endGame();
    } else {
      this.table.assignPrizeCard();
      this.statusChanged.emit(`Round winner: ${roundWinner.name}! (${this.table.prizeCard.value} points)`);
    }

    this.emitTableChanged();
  }

  setStatsForRound(prizeValue: number, bids: Bid[], winner: Player) {
    bids.forEach((bid) => {
      let player: Player = bid.player;
      if (player.name === winner.name) {
        player.getPlayerStats().addPoints(prizeValue);
        player.getPlayerStats().incNumRoundsWon();
      }
    });
  }

  findWinningBid(bids: Bid[]): Bid {
    return bids.reduce((acc, bid) => {
      let result: Bid = bid;
      if (acc && acc.card.value > bid.card.value) {
        result = acc;
      }
      return result;
    }, null);
  }

  getBids(userName: string, userCard: Card): Bid[] {
    let bids: Bid[] = [];

    this.table.players.forEach((player) => {
      const isUser: boolean = player.name === userName;
      const bid: Bid = this.getBid(player, isUser, userCard);
      bids.push(bid);
      this.table.discardCardForAudit(bid.card);
    });

    return bids;
  }

  getBid(player: Player, isUser: boolean, userCard: Card): Bid {
    let bid: Bid = null;

    if (isUser) {
      bid = player.makeUserBid(userCard);
    } else {
      bid = player.getBid(this.table.getPrizeCard(), this.configService.getMaxCard());
    }

    return bid;
  }
  */
}
