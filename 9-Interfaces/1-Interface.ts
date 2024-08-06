// ---------------------------
// Definición de Inteface
interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

// usando la Inteface
const computerExample: Computer = {
  name: "i7",
  ram: 16,
  hdd: 23000,
};

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);
// ---------------------------

// ---------------------------
// Inteface #1 (Interface simple)
interface Movie {
  readonly name: string; // propiedad de solo lectuta
  ratings: number;
  genra?: string; // propiedad opcional
}

const movie1: Movie = {
  name: "Jhon Wick",
  ratings: 7,
  genra: "Action",
};

// movie1.name = "Another movie" // ERROR
console.log(movie1);

// ---------------------------
