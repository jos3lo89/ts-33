type User = {
  name: string;
  age: number;
  location: string;
};

function printUserInfo(user: User) {
  return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
}

const result = printUserInfo({ name: "jose luis", age: 23, location: "Perú" });

console.log(result);
