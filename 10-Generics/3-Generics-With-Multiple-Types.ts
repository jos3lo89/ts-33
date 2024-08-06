// --------------------------
// Función genérica para invertir el orden de dos valores
function reversePair<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}

// Ejemplo de uso
const reversedPair = reversePair("hola", 42);
console.log(reversedPair); // Salida: [42, "hola"]
// --------------------------

// --------------------------
// Función genérica para combinar dos valores en una matriz
function combineValues<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2];
}

// Ejemplo de uso
const combinedStringAndNumber = combineValues("hola", 42);
console.log(combinedStringAndNumber); // Salida: ["hola", 42]

const combinedBooleanAndArray = combineValues(true, [1, 2, 3]);
console.log(combinedBooleanAndArray); // Salida: [true, [1, 2, 3]]
// --------------------------
