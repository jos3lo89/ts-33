class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  get score(): number {
    return this._score;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;

  maxScore() {
    this._score = 9999;
  }
}

const dog6 = new Player("jose", "lo", 10);
