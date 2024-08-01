// type variableName (anotación/tipo) = {propiedad:valor}

// -------------------------
// Definir un objeto persona
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "jose luis",
  lastName: "galindo cardenas",
  age: 23,
};

// acceso a prepiedades

console.log(`Name: ${person.firstName} ${person.lastName}, age: ${person.age}`);
// -------------------------

// -------------------------
// Usar objetos como valor de retorno de la función
function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Jselo",
    age: 23,
    location: "Perú",
  };
}

const res = printUser();
console.log(res);

function printUserName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

printUserName({ firstName: "gothangelsinner", lastName: "lagarto" });
// -------------------------
