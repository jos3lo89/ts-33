function greet(person: string = "Anonimo") {
  return `Hola ${person}`;
}

const response = greet();
console.log(response);
