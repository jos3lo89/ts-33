function add(x: number, y: number): number {
  return x + y;
}

console.log(add(2, 31));

function saludar(name: string): void {
  console.log(`Hola ${name.toUpperCase()}`);
}

saludar("pepe");

function getInfo(persona: { name: string; age: number }) {
  return `Hola mi nombre es ${persona.name} y tengo ${persona.age} años`;
}

console.log(getInfo({ name: "joselo", age: 33 }));

function wadafa(fn: (name: string) => void) {
  fn("joselo");
  fn("gothangelsinner");
}

const sayHi = (name: string): void => {
  console.log(`Hola ${name} desde una funcion como parametro`);
};

wadafa(sayHi);

/* Tipar arroy fucntions */
const sumar = (x: number, y: number): number => {
  return x + y;
};

const restar: (x: number, y: number) => number = (x, y) => {
  return x - y;
};

/* Never -> nunca va llegar a terminar  la funcion   y no devolvera nadd */

function throwError(message: string): never {
  console.log("1");
  throw new Error(message);
  console.log("2");
}

// throwError("error throw");

/* Inferencia en funciones anonimas segun el contexto */

const avengers = ["Hulk", "Thor", "Flecha"];

avengers.forEach((avenger) => {
  console.log(avenger);
});
