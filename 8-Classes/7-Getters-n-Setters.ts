// --------------------------------------------------
class Myclass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be negative");
    }

    this._myProperty = value;
  }
}

// creando una instancia
const myInstace = new Myclass();

// usando Getter
console.log(`Current value: ${myInstace.myProperty}`);

// usando Setter
myInstace.myProperty = 33;
console.log(`New Value: ${myInstace.myProperty}`);

// Intento de establecer un valor negativo (arrojará un error)
myInstace.myProperty = -33;

// --------------------------------------------------

// --------------------------------------------------
// class Player {
//   constructor(
//     public first: string,
//     public last: string,
//     private _score: number
//   ) {}

//   private secretMethod(): void {
//     console.log("Secret Method");
//   }

//   get fullName() {
//     return `${this.first} ${this.last}`;
//   }

//   get score(): number {
//     return this._score;
//   }

//   set score(newScore: number) {
//     if (newScore < 0) {
//       throw new Error("Score cannot be negative");
//     }
//     this._score = newScore;
//   }
// }

// const dog1 = new Player("Elton", "Steele", 10);
// console.log(dog1.score);
// --------------------------------------------------
