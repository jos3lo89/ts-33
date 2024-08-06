// Original Interface

interface Car2 {
  brand: string;
  start(): void;
}

// Fusión de declaración (Extencion de interfaz)
interface Car2 {
  model: string;
  stop(): void;
}

// usando la extención de la interface
const myCar2: Car2 = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Car started");
  },
  stop() {
    console.log("Car stopped");
  },
};

// ------------------------------------

interface User2 {
  firstName: string;
  lastName: string;
  age: number;
}

interface User2 {
  printUserInfo(
    firstName: string,
    lastName: string,
    age: number
  ): string | number;
}

const joselo2: User2 = {
  firstName: "joselo",
  lastName: "galindo cardenas",
  age: 23,
  printUserInfo(firstName, lastName, age) {
    return `Name ${firstName} ${lastName}, Age: ${age}`;
  },
};

console.log(joselo2.printUserInfo("jose luis", "galindo cardenas", 23));
