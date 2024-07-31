// Función Regular
function double1(x: number): number {
  return x * x;
}

const rpta = double1(3);
console.log(rpta);

// usando función flecha
const double2 = (x: number): number => x * x;
const res2 = double1(10);
console.log(res2);
