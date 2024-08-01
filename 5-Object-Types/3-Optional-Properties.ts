type UserI = {
  name: string;
  age?: number;
  location: string;
};

const user: UserI = {
  name: "Joselo",
  age: 23,
  location: "Bolivian",
};

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
