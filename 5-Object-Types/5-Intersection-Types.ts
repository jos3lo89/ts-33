type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type UserDetails = UserInfo & AccountDetails;

const joselos: UserDetails = {
  first: "joselo",
  last: "hh",
  age: 23,
  email: "joselo@gmail.com",
  password: "passssssss",
};

console.log(
  `Name: (${joselos.first} ${joselos.last}) Age: (${joselos.age}) Email: (${joselos.email}) Password: (${joselos.password})`
);
