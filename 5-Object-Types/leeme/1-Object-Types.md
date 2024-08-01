# Función con Parámetros de Objeto

```ts
function printPerson(person: {
  name: string;
  age: number;
  isStudent: boolean;
}) {
  console.log(
    `Name: ${person.name}, Age: ${person.age}, Student: ${person.isStudent}`
  );
}

const joselo = { name: "joselo", age: 23, isStudent: true };
printPerson(joselo);
```

En este ejemplo, la función printPerson() toma un objeto como parámetro y anotamos el objeto en línea especificando sus propiedades y tipos entre
llaves.

Definimos un objeto joselo con tres propiedades que se ajustan a la forma esperada del argumento que printPerson() espera, y lo pasamos como
argumento a la función.

Este enfoque puede ser útil para anotar objetos en línea al definir parámetros de función, pero puede resultar repetitivo especificar la misma
forma en varios lugares del código. En tales casos, puede ser más conveniente usar un alias de tipo o una interfaz para reducir la duplicación y
hacer que su código sea más legible.
