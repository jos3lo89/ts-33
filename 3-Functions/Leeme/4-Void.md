# Void en TypeScript

En TypeScript, void es un tipo que representa la ausencia de cualquier valor. A menudo se usa como tipo de retorno para funciones que no devuelven
un valor.

Aquí hay un ejemplo:

```ts
function logMessage(message: string): void {
  console.log(`Mensaje: ${message}`);
}
```

En este ejemplo, la función logMessage toma un parámetro de message de tipo string, log imprime en la consola, pero no devuelve ningún valor. Por lo tanto, su tipo de devolución es void.
