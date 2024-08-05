# Tuplas

En TypeScript, una tupla es un tipo que representa una matriz con un número fijo de elementos, donde cada elemento puede tener un tipo diferente. El orden
de los tipos en la definición de tupla corresponde al orden de los valores en la matriz real. Las tuplas son similares a las matrices, pero tienen una
estructura específica y se pueden usar para modelar secuencias finitas con longitudes conocidas.

Puede definir un tipo de tupla especificando los tipos de sus elementos entre corchetes, separados por comas:

```ts
let myTuple: [string, number] = ["hola", 42];
```

Esto declara una variable myTuple de tipo [string, number], lo que significa que es una matriz con dos elementos: el primer elemento debe ser una cadena y 
el segundo elemento debe ser un número. Puede acceder a elementos individuales de una tupla utilizando la sintaxis de indexación:

```ts
let myTuple: [string, number] = ["hola", 42];
console.log(myTuple[0]); // "hola"
console.log(myTuple[1]); // 42
```

Tenga en cuenta que también puede usar la sintaxis de desestructuración para extraer elementos individuales de una tupla:

```ts
let myTuple: [string, number] = ["hola", 42];
let [first, second] = myTuple;
console.log(first); // "hola"
console.log(second); // 42
```

Las tuplas son útiles cuando necesita representar un conjunto fijo de valores donde cada valor tiene un tipo diferente. Por ejemplo, puede usar una tupla
para representar un punto 2D con coordenadas x e y:

```ts
let point: [number, number] = [10, 20];
```

O puede usar una tupla para representar el nombre y la edad de una persona:

```ts
let person: [string, number] = ["Jose Luis", 30];
```

# Enums

En TypeScript, los Enums son una forma de definir un conjunto de constantes con nombre. Los Enums permiten definir una colección de valores relacionados
que se pueden usar indistintamente en su código.

Por ejemplo, supongamos que está creando una aplicación meteorológica y desea definir un conjunto de posibles condiciones meteorológicas como "soleado", 
"nublado"," lluvioso " y "nevado". Podrías definir una enumeración como esta:

```ts
enum WeatherConditions {
  soleado,
  nublado,
  lluvioso,
  nevado,
}
```

En este ejemplo, WeatherConditions es el nombre de la enumeración y cada uno de los valores (por ejemplo, Soleado, Nublado,etc.) se le asigna un valor 
numérico automático a partir de 0. También puede asignar valores específicos a cada miembro de enumeración de esta manera:

```ts
enum WeatherConditions {
  Soleado = "soleado",
  Nublado = "nublado",
  Lluvioso = "lluvioso",
  Nevado = "nevado",
}
```

En este caso, a cada miembro de enumeración se le asigna explícitamente un valor de cadena.

Puede usar enumeraciones en su código refiriéndose a ellas por su nombre, por ejemplo:

```ts
const currentWather = WeatherConditions.Soleado;
console.log(`El clima actual es ${currentWather}`);
// Salida: El clima actual es soleado
```

Los Enums son una herramienta útil para crear código más legible y fácil de mantener al proporcionar una forma de definir un conjunto de valores
relacionados con nombres claros y significativos.
