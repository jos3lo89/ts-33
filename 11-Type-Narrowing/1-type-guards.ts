// Definir un tipo de unión
type myType = string | number;

// Función de ejemplo con protector de tipos
function exampleFunction(value: myType): void {
  // Protección de tipo usando typeof
  if (typeof value === "string") {
    // Dentro de este bloque, TypeScript sabe que 'value' es una cadena
    console.log(value.toUpperCase());
  } else {
    // Dentro de este bloque, TypeScript sabe que 'value' es un número
    console.log(value.toFixed(2));
  }
}

// Ejemplo de uso
exampleFunction("Hola"); // Salida: HOLA
exampleFunction(33); // Salida: 33.00
