class Player5 {
  //   public readonly first: string;
  //   public readonly last: string;
  //   private score: number = 0;

  constructor(
    public first: string,
    public last: string,
    private score: number
  ) {}

  private secretMethod(): void {
    console.log("Secret Method");
  }
}

const dog5 = new Player5("jose", "lo", 10);
console.log(dog5.first);
console.log(dog5.last);
