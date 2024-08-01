# Tipos Literales

En TypeScript, los tipos literales le permiten especificar un valor que solo puede ser un valor literal específico. Esto significa que una variable con un tipo literal solo puede tener un valor específico y ningún otro.

Hay varios tipos de tipos literales en TypeScript:

1. Tipos literales de tipo string: Esto le permite especificar el valor exacto de un string que puede contener una variable. Por ejemplo:

```ts
let color: "red" | "blue" | "green";
color = "red"; // valido
color = "yellow"; // invalido
```

2. Tipos literales numéricos: esto le permite especificar el valor exacto de un número que puede contener una variable. Por ejemplo:

```ts
let number: 1 | 2 | 3;
number = 1; // valido
number = 4; // invalido
```

3. Tipos literales booleanos: Esto le permite especificar el valor exacto de un booleano que puede contener una variable. Por ejemplo:

```ts
let isTrue: true;
isTrue = true; // valido
isTrue = false; // invalido
```
