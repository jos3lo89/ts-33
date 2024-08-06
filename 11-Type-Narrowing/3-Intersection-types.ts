// Defina dos tipos
type Employe = {
  id: number;
  name: string;
};

type Manager = {
  departament: string;
  role: string;
};

// Crear un tipo de intersección

type MangerWithEmployeInfo = Employe & Manager;

// Ejemplo de uso
const manager: MangerWithEmployeInfo = {
  id: 123,
  name: "jose luis",
  departament: "Engineering",
  role: "Team Leed",
};

console.log(manager.id); // Salida: 123
console.log(manager.name); // Salida: jose luis
console.log(manager.departament); // Salida: Engineering
console.log(manager.role); // Salida: Team Leed
