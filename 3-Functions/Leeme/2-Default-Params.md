# Parámetros Predeterminados

Los parámetros predeterminados en TypeScript le permiten especificar un valor predeterminado para un parámetro de función si no se proporciona uno
cuando se llama a la función.

Aquí hay un ejemplo:

```ts
function greet(name: string = "Mundo") {
  console.log(`Hola, ${name}!`);
}

greet(); // Salida: "Hola, Mundo!"
greet("Lagarto"); // Salida: "Hola, Lagarto!"
```

En este ejemplo, declaramos una función greet que toma un solo nombre de parámetro, que tiene un valor predeterminado de 'Mundo'. Si el parámetro
name no se proporciona cuando se llama a la función, el valor predeterminado será 'Mundo'.

Cuando llamamos a great () sin ningún argumento, genera " ¡Hola, Mundo!". Cuando llamamos a greet ('Lagarto'), salida "¡Hola, Lagarto!".
