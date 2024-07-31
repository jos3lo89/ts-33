# Anotaciones de Parámetros de Función

Function parameter annotations in TypeScript are used to specify the expected types of the parameters that a function takes.Las anotaciones de
parámetros de función en TypeScript se utilizan para especificar los tipos esperados de los parámetros que toma una función.

Aquí hay un ejemplo:

```ts
function greet(name: string) {
  console.log(`Hola, ${name}!`);
}
```

En este ejemplo, estamos declarando una función greet con un solo nombre de parámetro. El parámetro name está anotado con el tipo string, lo que
significa que solo puede aceptar valores de cadena.

```ts
greet(42); // Error: El argumento de tipo 'number' no se puede asignar al parámetro de tipo 'string'.
```

Si llamamos a la función greet con un valor que no sea string, TypeScript mostrará un error:
