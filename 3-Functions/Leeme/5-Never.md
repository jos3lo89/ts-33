# Never

La palabra clave never se usa para indicar que una función no devolverá nada, o que una variable nunca puede tener un valor.

Estos son algunos casos de uso comunes para el tipo never:

1.Una función que siempre arroja un error:

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

La función anterior toma un message de tipo string, arroja un error con ese mensaje y nunca devuelve nada. El tipo de retorno de esta función es never.

2. Una función que tiene un bucle infinito:

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

La función anterior tiene un bucle infinito, por lo que nunca devolverá nada. Su tipo de devolución también es never.

3. Una variable que nunca puede tener un valor:

```ts
let x: never;

function neverReturns(): never {
  while (true) {}
}

x = neverReturns(); // This line will cause a compile-time error because the function never returns
```

En este ejemplo, la variable x se declara como de tipo never. Dado que no se le asigna ningún valor, no puede tener un valor. Si intentamos asignarle un valor usando una función que nunca devuelve (como neverReturns ()), TypeScript generará un error en tiempo de compilación.

El tipo never es útil para indicar que nunca se deben alcanzar ciertas rutas de código o que ciertos valores son imposibles. Puede ayudar a detectar errores en tiempo de compilación en lugar de en tiempo de ejecución.
