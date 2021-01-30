import { EventEmitter, Injectable } from '@angular/core';

import { Player } from '../model/player.model';
/*
import { Strategy } from "../model/strategy.model";
import { StrategyService } from "./strategy.service";
import { Constants } from "../util/constants";
*/

@Injectable()
export class ConfigService {
  // events for DealerService because it isn't "need to know", whereas StrategyService is
  transparencyModeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  private isTransparentMode: boolean = false;
  private players: Player[] = [];
  /*
  private numCards: number = 15;
  private maxCard: number = this.numCards;
  private numCardsInHand: number = 0;
  constructor(private strategyService: StrategyService) {
    const nextCardStrategy: Strategy = this.strategyService.getStrategy(Constants.STRATEGY_NEXT);
    const userStrategy: Strategy = this.strategyService.getStrategy(Constants.STRATEGY_USER);
    this.players.push(new Player("Beethoven", nextCardStrategy));
    this.players.push(new Player("Chopin", nextCardStrategy));
    this.players.push(new Player("Mozart", nextCardStrategy));
    this.players.push(new Player("You", userStrategy, true));
  }
  */
  constructor() {
    this.players.push(new Player('Beethoven'));
    this.players.push(new Player('Chopin'));
    this.players.push(new Player('Mozart'));
    this.players.push(new Player('You', true));
  }

  toggleTransparency(): void {
    this.isTransparentMode = !this.isTransparentMode;
    this.transparencyModeChanged.emit(this.isTransparentMode);
    console.log(`TRACER CS.tT transparency: ${this.isTransparentMode}`);
  }

  getPlayers(): Player[] {
    // this.numCardsInHand = this.numCards / (this.players.length + 1);
    return this.players;
  }

  /*
  setNumCards(value: number): void {
    this.numCards = value;
  }

  getNumCards(): number {
    return this.numCards;
  }

  getNumCardsInHand(): number {
    return this.numCardsInHand;
  }

  getMaxCard(): number {
    return this.maxCard;
  }

  getIsTransparentMode(): boolean {
    return this.isTransparentMode;
  }
  */
}
