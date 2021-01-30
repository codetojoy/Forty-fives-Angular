import { Player } from './player.model';

export class Table {
  _players: Player[] = [];

  constructor(players: Player[]) {
    this._players = players;
  }

  get players(): Player[] {
    return this._players;
  }
}
