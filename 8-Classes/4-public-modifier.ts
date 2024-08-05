class Player3 {
    public readonly first: string;
    public readonly last: string;
    public score: number = 0;
  
    constructor(first: string, last: string) {
      this.first = first;
      this.last = last;
    }
  }
  
  const dog3 = new Player3("jose", "lo");
  console.log(dog1.score);