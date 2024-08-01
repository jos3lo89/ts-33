# tipo Narrowing

En TypeScript, el tipo Narrowing es el proceso de refinar el tipo de una variable dentro de un bloque condicional de código. Esto le permite escribir código más preciso y seguro para escribir.

TypeScript proporciona varios mecanismos para reducir tipos, que incluyen:

1. Protectores de tipo: Son funciones que devuelven un valor booleano que indica si un valor es de un determinado tipo. Por ejemplo, type of se
   puede usar como protector de tipo para verificar si un valor es una string o no.

2. El operador instanceof: Comprueba si un objeto es una instancia de una clase en particular.

3. Uniones discriminadas: Este es un patrón en el que se usa una propiedad para determinar el subtipo específico de un objeto.

4. Tipos de intersección: Si dos tipos tienen propiedades superpuestas, TypeScript creará un nuevo tipo que incluya solo aquellas propiedades que
   sean comunes a ambos tipos.

Here's an example of using type narrowing with a type guard:
A continuación, se muestra un ejemplo del uso del tipo narrowing con un protector de tipos:

```ts
function printLength(strOrArray: string | string[]) {
  if (typeof strOrArray === "string") {
    console.log(strOrArray.length); // OK
  } else {
    console.log(strOrArray.length); // OK
  }
}
```

En este ejemplo, usamos el operador typeof como protector de tipo para reducir el tipo de str o matriz. Dentro del bloque if, TypeScript sabe que
strOrArray es un string, por lo que podemos llamar con seguridad a la propiedad length. De manera similar, dentro del bloque else, TypeScript sabe
que strOrArray es un Array de strings, por lo que también podemos llamar con seguridad a la propiedad length.

El narrowing types ayuda a prevenir errores en tiempo de ejecución al garantizar que nuestro código siempre funcione con variables del tipo
correcto.
