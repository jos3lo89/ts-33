// Interfaz con método
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  person.sayHello();
}

const joselo: Person = {
  firstName: "jose",
  lastName: "luis",
  age: 23,
  sayHello() {
    console.log("What`s good");
  },
};

const luis: Person = {
  firstName: "luis",
  lastName: "galindo",
  age: 33,
  sayHello() {
    console.log("Hi there!");
  },
};

greet(joselo);
greet(luis);

// ----------------------------------
// Interface #3 Interfaz con propiedades de método
interface Song {
  songName: string;
  singerName?: string;
  printSongInfo: (songName: string, singerName: string) => string;
}

const song1: Song = {
  songName: "feelz",
  singerName: "Lil peep",
  printSongInfo(songName, singerName) {
    return `Song: ${songName} Singer: ${singerName} `;
  },
};

console.log(song1.printSongInfo("witchblades", "lil peep"))
// ----------------------------------
