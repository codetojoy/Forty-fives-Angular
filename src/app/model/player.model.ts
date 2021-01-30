export class Player {
  private _name: string;
  private _isInteractive: boolean = false;

  constructor(name: string, isInteractive?: boolean) {
    this._name = name;
    if (isInteractive) {
      this._isInteractive = isInteractive;
    }
  }

  // -------------- getters / setters

  get name(): string {
    return this._name;
  }

  get isInteractive(): boolean {
    return this._isInteractive;
  }
  /*
  get hand(): Hand {
    return this._hand;
  }
  */
}
