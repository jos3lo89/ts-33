type Person = {
  name: string;
  age: number;
  readonly email: string;
};

const user1: Person = {
  name: "Lacost",
  age: 23,
  email: "test@gmail.com",
};

console.log(user1.email); // Valido
// user.email = "Lacost@gmail.com" // 🚫 No Valido
