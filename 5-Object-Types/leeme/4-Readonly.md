Puede hacer que una determinada propiedad sea de solo lectura en un tipo de objeto utilizando la palabra clave de readonly antes del nombre de la
propiedad.

Por ejemplo, supongamos que tiene un tipo de objeto para una persona con propiedades nombre, edad y correo electrónico, pero desea que la propiedad correo electrónico sea de solo lectura. Puede hacerlo agregando la palabra clave readonly antes de la propiedad email:

```ts
type Person = {
  name: string;
  age: number;
  readonly email: string;
};
```

Ahora, cuando crea un objeto de tipo Person, puede establecer las propiedades name y age como de costumbre, pero no puede cambiar la propiedad
email después de que se haya creado:

```ts
const joselo: Person = { name: "joselo", age: 23, email: "joselo@example.com" };
console.log(joselo.email); // "joselo@example.com"
// Esto dará un error en tiempo de compilación:
joselo.email = "joselo@example.com"; // ERROR
```

En este ejemplo, el objeto joselo incluye una propiedad de correo electrónico de solo lectura que se establece en "joselo@example.com" cuando se
crea el objeto. Podemos leer el valor de la propiedad email usando notación de puntos (joselo.email), pero no podemos cambiar su valor una vez que
se haya creado.

Tenga en cuenta que cualquier intento de cambiar el valor de una propiedad de solo lectura dará como resultado un error en tiempo de compilación.
También tenga en cuenta que readonly se aplica solo a la propiedad en sí, no al objeto que la contiene. En otras palabras, el objeto joselo en sí
mismo no es de solo lectura, por lo que aún puede cambiar su nombre y propiedades de antigüedad si es necesario.
