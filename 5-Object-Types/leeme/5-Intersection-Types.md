# Tipos de Intersección

En TypeScript, un tipo de intersección es una forma de combinar varios tipos en un solo tipo que incluye todas las propiedades y métodos de cada tipo constituyente. Un tipo de intersección se denota con el símbolo &.

Por ejemplo, supongamos que tiene dos tipos de objetos: Person y Employee. El tipo Person tiene propiedades name y age, y el tipo Employee tiene propiedades id y title:

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  title: string;
};
```

Puede crear un tipo de intersección denominado PersonAndEmployee combinando los tipos Person y Employee mediante el símbolo & :

```ts
type PersonAndEmployee = Person & Employee;
```

Ahora, los objetos de tipo PersonAndEmployee incluirán todas las propiedades y métodos de los tipos Person y Employee:

```ts
const joselo: PersonAndEmployee = {
  name: "joselo",
  age: 23,
  id: 123,
  title: "Player",
};
```

En este ejemplo, el objeto joselo es de tipo PersonAndEmployee, que incluye todas las propiedades (nombre, edad, id y título) de los tipos Person y
Employee.

Los tipos de intersección pueden resultar útiles cuando necesita definir un tipo que tenga las propiedades y los métodos de varios otros tipos.
También se pueden usar con otras construcciones de tipos, como uniones y alias de tipos.
