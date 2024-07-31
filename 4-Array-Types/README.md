# ATipos de Matrices

En TypeScript, las matrices son un tipo de objeto que puede almacenar varios valores del mismo tipo de datos. Las matrices en TypeScript están
escritas, lo que significa que puede especificar el tipo de valores que puede contener una matriz.

Hay dos formas de definir un tipo de matriz en TypeScript:

1. Usar la notación de corchetes [] para indicar una matriz de un tipo específico:

```ts
const numbers: number[] = [1, 2, 3, 4];
```

En este ejemplo, numbers es una matriz de tipo number y contiene cuatro elementos.

2. Usar la notación genérica Array < type > para indicar una matriz de un tipo específico:

```ts
const names: Array<string> = ["jose", "luis", "gothangelsinner"];
```

En este ejemplo, names es una matriz de tipo string y contiene tres elementos.

# Multidimensional

Una matriz multidimensional es una matriz que contiene otras matrices como sus elementos. Las matrices multidimensionales se pueden definir usando la misma notación que las matrices unidimensionales, pero con corchetes anidados.

```ts
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];
```

En este ejemplo, matrix es una matriz bidimensional que contiene dos filas y dos columnas. La primera fila contiene los valores 1 y 2, y la segunda fila contiene los valores 3 y 4. Cada fila es en sí misma una matriz de números.

Puede acceder a elementos dentro de una matriz multidimensional utilizando múltiples notaciones de corchetes. Por ejemplo, para acceder al valor 1 en la matriz matricial anterior, usaría la siguiente sintaxis:

```ts
const value = matrix[0][0];
```
