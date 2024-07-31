# Anotaciones

En TypeScript, las anotaciones se utilizan para especificar el tipo de datos de una variable, parámetro, valor de retorno de función y otros tipos
de valores. Las anotaciones ayudan a los desarrolladores a detectar errores al principio del desarrollo al permitirles especificar qué tipos de
valores se pueden asignar a una variable determinada o pasar como argumento a una función.

Las anotaciones se especifican mediante una sintaxis que implica colocar dos puntos: seguidos del tipo de datos después del nombre de la variable o
el nombre del argumento. Por ejemplo, el siguiente código declara una variable llamada name con un tipo de cadena:

```ts
let name: string = "Joselo";
```

# Anotaciones de Cadena

```ts
let message: string = "Hola, mundo!";
```

En este ejemplo, estamos declarando un mensaje variable y asignándole un valor de tipo string. Los dos puntos: se utilizan para anotar el tipo de
variable.

Esto le dice a TypeScript que el mensaje variable solo puede contener un valor que sea una cadena. Si intentáramos asignar un valor de un tipo
diferente a esta variable, TypeScript arrojaría un error.

# Anotaciones Numéricas

```ts
let myNumber: number = 23;
```

En este ejemplo, estamos declarando una variable myNumber con el número de anotación de tipo. Esto significa que el valor asignado a myNumber debe
ser un valor numérico.

Si intentamos asignar un valor no numérico a myNumber, TypeScript mostrará un error:

```ts
let myNumber: number = "Hola, mundo!"; // Error: "¡Hola, mundo!"'no se puede asignar al tipo 'numerico'.
```

# Anotaciones Booleanas

```ts
let isCompleted: boolean = true;
```

En este ejemplo, estamos declarando que una variable isCompleted con la anotación de tipo booleano. Esto significa que el valor asignado a
isCompleted debe ser true o false.

Si intentamos asignar un valor no booleano a isCompleted, TypeScript mostrará un error:

```ts
let isCompleted: boolean = "si"; // Error: Type 'string' no se puede asignar al tipo ' booleano'.
```

# Inferencia de Tipo

La inferencia de tipos es una característica de TypeScript que permite al compilador determinar automáticamente el tipo de una variable en función
de su valor. En otras palabras, si declara una variable sin especificar explícitamente su tipo, TypeScript intentará inferir el tipo en función del
valor que le asigne.

Aquí hay un ejemplo:

```ts
let myString = "Hola, mundo!";
```

En este ejemplo, estamos declarando una variable myString sin especificar su tipo. Sin embargo, dado que le estamos asignando un valor de
tipo string, TypeScript inferirá que myString tiene un tipo de string.

La inferencia de tipos puede ayudar a reducir el código repetitivo y hacer que su código sea más conciso, pero es importante recordar que no
siempre es perfecto y, a veces, es posible que deba anotar explícitamente las variables para evitar comportamientos inesperados.

# Tipo any

TypeScript tiene un tipo any especial que se puede usar para representar cualquier tipo. Cuando una variable se anota con any type, TypeScript le
permitirá tener cualquier valor y deshabilitará todas las comprobaciones de tipo para esa variable y sus propiedades.

```ts
let myVariable: any = "Hola, mundo!";
```

En este ejemplo, estamos declarando una variable myVariable con la anotación de tipo any. Esto significa que myVariable puede tener cualquier
valor, incluidos valores de diferentes tipos. Por ejemplo, podríamos asignar un valor numérico a myVariable más adelante sin que TypeScript genere
un error.

Si bien el tipo any puede ser útil en ciertas situaciones, debe usarse con moderación. El uso excesivo de cualquiera puede llevar a código sin tipo
y dificultar la detección de errores relacionados con el tipo durante el desarrollo. Por lo general, es mejor usar tipos más específicos siempre
que sea posible para obtener los beneficios de la verificación de tipos de Typescripts.
