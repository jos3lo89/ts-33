# Interface

En TypeScript, una interfaz es una forma de definir un contrato para una forma específica de un objeto. Define las propiedades y métodos que debe tener un objeto para ser considerado compatible con esa interfaz.

Para crear una interfaz, use la palabra clave interface seguida del nombre de la interfaz y las propiedades y métodos que debe contener, como este:

```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}
```

En este ejemplo, estamos definiendo una interfaz llamada Person que requiere que cualquier objeto que la implemente tenga propiedades FirstName, LastName y age que sean de tipo string, string y number, respectivamente. También requiere que un objeto que implemente la interfaz Person tenga un método llamado sayHello que no acepte argumentos y no devuelva nada (void).

Luego puede usar esta interfaz para verificar si un objeto coincide con su forma, así:

```ts
function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  person.sayHello();
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello() {
    console.log("Hi there!");
  },
};

greet(john);
```

En este ejemplo, estamos definiendo una función llamada greet que toma un objeto Person como argumento y registra un mensaje de saludo usando sus propiedades FirstName y LastName. También estamos llamando al método sayHello en el objeto Person.

Luego, estamos creando un objeto john que implementa la interfaz Person y lo pasamos a la función greet. Dado que john coincide con la forma de la interfaz Person, el código se ejecuta sin errores.

Las interfaces son una herramienta poderosa en TypeScript que le permite hacer cumplir la seguridad de los tipos y hacer que su código sea más fácil de mantener y leer.

# Extendiendo las Interfaces

Puede usar la palabra clave extends para extender una interfaz. Aquí hay un ejemplo:

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

En este ejemplo, tenemos una interfaz Animal con una propiedad name. Luego creamos una nueva interfaz de Perro que extiende la interfaz de Animal usando la palabra clave extends. La interfaz de Perro agrega una propiedad de raza a la interfaz de animal base.

Cuando amplía una interfaz, la nueva interfaz hereda todas las propiedades y métodos de la interfaz base, y también puede agregar nuevas propiedades o métodos a la nueva interfaz.
