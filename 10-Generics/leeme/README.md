# Generics

En TypeScript, los genéricos le permiten crear componentes reutilizables que pueden funcionar con una variedad de tipos. Los genéricos le permiten definir funciones, clases e interfaces que pueden funcionar con diferentes tipos de datos sin tener que duplicar código.

Aquí hay un ejemplo de cómo definir una función genérica en TypeScript:

```ts
function reverse<T>(items: T[]): T[] {
  const reversed = [];
  for (let i = items.length - 1; i >= 0; i--) {
    reversed.push(items[i]);
  }
  return reversed;
}
```

En este ejemplo, reverse es una función genérica que toma una matriz de tipo T y devuelve una nueva matriz del mismo tipo T. La sintaxis <T> en la definición de reverse indica que T es un parámetro de tipo genérico. Cuando llama a la función inversa, especifica el tipo real que T debería representar.

Por ejemplo, si desea invertir una matriz de cadenas, llamaría a reverse de esta manera:

```ts
const names = ["Alice", "Bob", "Charlie"];
const reversedNames = reverse<string>(names);
```

En este caso, string es el tipo real que representa T, por lo que la función inversa devuelve una matriz de cadenas.

Los genéricos también se pueden usar con clases e interfaces en TypeScript. Por ejemplo, así es como podría definir una interfaz genérica para un almacén de valores clave:

```ts
interface KeyValueStore<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V): void;
}
```

En este ejemplo, KeyValueStore es una interfaz genérica que tiene dos parámetros de tipo K y V. Estos parámetros de tipo se utilizan para definir los tipos de claves y valores en el almacén clave-valor. Los métodos get y set se definen para obtener y establecer valores en el almacén.

Los genéricos le permiten escribir código que es más flexible y reutilizable, ya que puede funcionar con una amplia variedad de tipos de datos.
