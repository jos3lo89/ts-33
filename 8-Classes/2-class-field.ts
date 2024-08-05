class Player {
  first: string;
  last: string;
  score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const dog1 = new Player("jose", "cardenas");
console.log(dog1.score);
