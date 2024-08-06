// Fima de función

// function getRandomKeyValuePair<T>(obj: { [key: string]: T }): { key: string; value: T } { ... }
// La función se denomina getRandomKeyValuePair.
// Es una función genérica denotada por <T>, lo que significa que puede funcionar con diferentes tipos especificados al llamar a la función.
// Parámetros:

//obj: { [key: string]: T}: La función toma un objeto (obj) con claves de tipo string y valores de tipo T.
// Este es un patrón común en TypeScript para representar un objeto similar a un diccionario donde las claves son cadenas y los valores pueden ser de cualquier tipo (T).
// Cuerpo de la Función:

// const keys = Object.keys(obj);: Obtiene una matriz de claves del objeto de entrada usando Object.keys.
// const randKey = keys[Math.floor(Math.random() * keys.length)];: Selecciona aleatoriamente una clave de la matriz de claves utilizando un índice aleatorio.
// return { key: randKey, value: obj[randKey] };: Devuelve un objeto con dos propiedades: key (la clave elegida al azar) y value (el valor correspondiente del objeto de entrada).
// Tipo de Devolución: -> return

// : { key: string; value: T }: La función devuelve un objeto con una estructura fija: una propiedad clave de tipo string y una propiedad de valor de tipo T.

// Función genérica para obtener un par clave-valor aleatorio de un objeto
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

// Ejemplo de uso con Strings
const stringObject = { a: "apple", b: "banana", c: "cherry" };
const randomStringPair = getRandomKeyValuePair<string>(stringObject);
console.log(randomStringPair);

// EJemplo de uso con Number
const numberObject = { one: 1, two: 2, three: 3, four: 4 };
const randomNumberPair = getRandomKeyValuePair<number>(numberObject);
console.log(randomNumberPair);

// Inferiendo tipo
const inferredStringPair = getRandomKeyValuePair(stringObject);
console.log(inferredStringPair);

const inferredNumberPair = getRandomKeyValuePair(numberObject);
console.log(inferredNumberPair);
// ------------------------------------------------

// ------------------------------------------------
// Función genérica para filtrar una matriz en función de una condición
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

// EJemplo de uso con Number
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers); // Salida: [2,4,6,8,10]

// Ejemplo de uso con Strings
const stringArray = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray<string>(stringArray, (word) => word.length < 6);
console.log(shortWords); // Salida: ["apple", "date"]

// Ejemplo de uso con una matriz de objetos
interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color == "Red"
);
console.log(redFruits);
// ------------------------------------------------
