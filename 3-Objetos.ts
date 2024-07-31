type HeroPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiuniversal";

type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroBasicinfo = {
  name: string;
  age: number;
};
type HeroProperties = {
  id?: HeroId;

  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

type Hero = HeroBasicinfo & HeroProperties;

let hero: Hero = {
  name: "Thor",
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

let thor = Object.freeze(createHero({ name: "Thor", age: 1500 }));
console.log(thor);
