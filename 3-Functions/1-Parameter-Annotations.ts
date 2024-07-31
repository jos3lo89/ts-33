// Función Regular

function addOne(num: number) {
  return num + 1;
}

const result = addOne(32);
console.log(result);

// Anotaciones de funciones flecha
const double = (x: number, y: number) => x * y;
const res = double(2, 10);
console.log(res);

// También tenga en cuenta que TypeScript le advertirá si proporciona más o menos argumentos de los que especifique en el área de parámetros.
// double(2, 10, 20); // 👈 Advertencia
