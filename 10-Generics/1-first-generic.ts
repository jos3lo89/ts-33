// ------------- Sin Genericos -------------
// function printNumber(item: number, defaultValue: number): [number, number] {
//   return [item, defaultValue];
// }

// function printString(item: string, defaultValue: string): [string, string] {
//   return [item, defaultValue];
// }

// function printBoolean(
//   item: boolean,
//   defaultValue: boolean
// ): [boolean, boolean] {
//   return [item, defaultValue];
// }

// // Example usage
// const num = printNumber(42, 0);
// console.log(num); // Outputs: [42, 0]

// const str = printString("hello", "world");
// console.log(str); // Outputs: ['hello', 'world']

// const bool = printBoolean(true, false);
// console.log(bool); // Outputs: [true, false]
// -----------------------------------

// --------------- Usando Genericos ---------------

function uniqueDataTypeFunc<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

// Ejemplo usando

const num = uniqueDataTypeFunc(42, 0);
console.log(num); // Salida: [42, 0]

const str = uniqueDataTypeFunc("Hola", "Mundo");
console.log(str); // Salida: ["Hola", "Mundo"]

// Ejemplo de uso con un tipo personalizado

interface Dog {
  name: string;
  breed: string;
}

const dogPair = uniqueDataTypeFunc<Dog>(
  {
    name: "Buddy",
    breed: "Labrador",
  },
  {
    name: "default",
    breed: "Unknow",
  }
);

console.log(dogPair); // Salidad: [ {name: "Buddy", breed: "Labrador" }, { name: "default", breed "Unknow", }]
