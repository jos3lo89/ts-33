# Anotaciones de Retorno de Funciones

Las anotaciones de tipo de retorno de función en TypeScript se utilizan para especificar el tipo de retorno esperado de una función.

Aquí hay un ejemplo:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

En este ejemplo, estamos declarando una función add que toma dos parámetros numéricos a y b. La función está anotada con un tipo de retorno de number, lo que significa que debe devolver un valor numérico.

Si la función no devuelve un valor que coincida con el tipo de retorno especificado, TypeScript mostrará un error:

```ts
function add(a: number, b: number): number {
  return "Hola"; // Error: El tipo 'string' no se puede asignar al tipo'number'.
}
```
