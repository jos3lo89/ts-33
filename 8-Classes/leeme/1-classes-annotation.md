# Class Anotaciones de Propiedades

Puede anotar propiedades de clase con un tipo. Esto le permite definir el tipo de datos de la propiedad y asegurarse de que siempre sea
coherente.

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

En este ejemplo, definimos una clase Person con dos propiedades: name y age. Anotamos estas propiedades con un tipo, una cadena para el
nombre y un número para la antigüedad.

Al crear una instancia de esta clase, debe proporcionar valores para las propiedades name y age:

```ts
const person = new Person("joselo", 33);
```

Esto garantiza que la propiedad name siempre sea una cadena y la propiedad age siempre sea un número, lo que hace que el código sea más
predecible y fácil de mantener.
