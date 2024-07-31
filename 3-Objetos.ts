type Hero = {
  name: string;
  age: number;
};

let hero: Hero = {
  name: "Thor",
  age: 1500,
};

function createHero(name: string, age: number): Hero {
  return {
    name,
    age,
  };
}

let thor = createHero("Thor", 1500);
