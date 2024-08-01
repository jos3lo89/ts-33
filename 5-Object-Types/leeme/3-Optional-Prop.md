# Propiedades Opcionales

Puede hacer que una determinada propiedad sea opcional en un tipo de objeto agregando un signo de interrogación (?) después del nombre de la
propiedad.

Por ejemplo, supongamos que tiene un tipo de objeto para una persona con propiedades de nombre, edad y correo electrónico, pero desea que la
propiedad correo electrónico sea opcional. Puede hacerlo agregando un signo de interrogación después de la propiedad correo electrónico:

```ts
type Person = {
  name: string;
  age: number;
  email?: string;
};
```

Ahora, cuando crea un objeto de tipo Person, puede elegir si desea incluir o no la propiedad correo electrónico.
For example:

```ts
const joselo: Person = { name: "Joselo", age: 30 };
const lagarto: Person = { name: "Lagarto", age: 25, email: "lagarto@example.com" };
```

En este ejemplo, el objeto joselo no incluye la propiedad email, mientras que el objeto lagarto sí. Dado que la propiedad correo electrónico está 
marcada como opcional en la definición de tipo de persona, es válido crear objetos con o sin ella.

Tenga en cuenta que las propiedades opcionales deben aparecer después de las propiedades requeridas en la definición del tipo de objeto. Si intenta 
definir una propiedad opcional antes de una propiedad requerida, TypeScript le dará un error en tiempo de compilación.
