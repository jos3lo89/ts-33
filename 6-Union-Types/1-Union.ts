let password: string | number = 33;

type UserInfo1 = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails1 = {
  email: string;
  password: string;
};

let user3: UserInfo1 | AccountDetails1 = {
  first: "joselo",
  last: "hhhhh",
  age: 23,
};

console.log(user3);

const items5: (number | string)[] = [1, 2, "Hola"];
console.log(items5);
