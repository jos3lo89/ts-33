# Type alias

Un alias de tipo es una forma de crear un nuevo nombre para un tipo existente. Le permite definir un tipo personalizado que se refiera a otro tipo
y darle un nombre más significativo o descriptivo.

Los alias de tipo se definen utilizando la palabra clave type, seguida del nombre del alias, un signo igual ( = ) y el tipo al que se refiere.

Por ejemplo:

```ts
type MyString = string;
```

Esto define un alias de tipo llamado myString que se refiere al tipo de string incorporado.

Los alias de tipo también se pueden usar para definir tipos más complejos, como tipos de objetos, tipos de funciones, tipos de unión y tipos de
intersección.

```ts
type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const myPerson: Person = { name: "joselo", age: 23 };
printPerson(myPerson);
```

En este ejemplo, hemos definido un tipo de persona utilizando un tipo de objeto que tiene propiedades de nombre y edad. Luego definimos una función
printPerson que toma un parámetro de tipo Person e imprime en consola su nombre y edad.

Finalmente, hemos creado una variable myPerson de tipo Person, la inicializamos con un objeto que tiene un nombre de "joselo" y una edad de 23
años, y la pasamos a la función printPerson.

Tenga en cuenta que estamos utilizando anotaciones de TypeScript para especificar explícitamente los tipos de variables y parámetros de función.
Esto no es estrictamente necesario en este caso porque TypeScript puede inferir los tipos a partir del contexto, pero generalmente es una buena
práctica incluir anotaciones de tipo explícitas para facilitar la lectura y el mantenimiento.
