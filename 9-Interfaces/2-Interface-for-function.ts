// ---------------------------
// EJemplo 1

// Interface de un fnción
interface MathOperation {
  (x: number, y: number): number;
}

// usando
const add: MathOperation = (a: number, b: number) => a + b;
const subtract: MathOperation = (a: number, b: number) => a - b;

console.log(add(5, 3));
console.log(subtract(7, 2));
// ---------------------------

// ---------------------------
// Ejemplo 2

// Definir una interfaz para un automóvil
interface Car {
  brand: string;
  model: string;
  year: number;
}

// Función que acepta un objeto adherido a la interfaz del automóvil
function displayCarInfo(car: Car): void {
  console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
}

// Cree un objeto que se adhiera a la interfaz del automóvil
const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};

// Llamar a la función con el objeto
displayCarInfo(myCar);
// ---------------------------
