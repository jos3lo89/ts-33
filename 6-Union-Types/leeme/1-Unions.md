# Uniones

En TypeScript, las uniones se utilizan para declarar un tipo que puede tener uno de varios tipos posibles. Las uniones son útiles cuando queremos
permitir que una variable o parámetro acepte varios tipos.

La sintaxis para definir un tipo de unión en TypeScript usa el símbolo de barra vertical (|). Por ejemplo, si queremos definir una variable que puede ser un number o string, escribiríamos:

```ts
let myVar: number | string;
```

Esto significa que myVar puede contener un valor de tipo number o string.

También podemos usar uniones con parámetros de función. Por ejemplo, si tenemos una función que acepta un string o una matriz de strings, podríamos definir su parámetro de esta manera:

```ts
function foo(param: string | string[]) {
  // cuerpo de la función
}
```

Aquí, param puede contener un valor de tipo string o string[].

Las uniones también se pueden combinar con otros tipos en TypeScript, como interfaces y clases. Por ejemplo, podríamos definir una interfaz que tenga una propiedad que puede ser una string o number:

```ts
interface MyInterface {
  myProp: string | number;
}
```

En general, las uniones en TypeScript proporcionan una forma flexible de trabajar con variables y parámetros que pueden tener diferentes tipos.
