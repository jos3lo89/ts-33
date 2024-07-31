let texto: string = "hola mundo";
let numero: number = 23;
let boleano: boolean = true;
let textoArray: string[] = ["hola", "mundo"];
let numeroArray: number[] = [1, 2, 3, 4];
let obj: object = { name: "jose luis", lastName: "galindo cardenas" };
let fnct: () => void = (): void => {
  console.log("Hola desde function");
};

/* TS es capaz de inferir los datos */
const persona = {
  name: "Pepe",
  age: 33,
};

let a = 22;
let b = 1;
let c = "wadafa";

/* Ts incapaz de inferir el tipo */

//Caulquier tipo de dato
// Ignora el tipado de TS
let anyValue: any = "wadafa"; // any

let unknowVaue: unknown = "was";
