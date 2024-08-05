// class #1 (properties annotations)
class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person1("Jose", 23);
console.log(person1);

// class #2 (class fields)
class Person2 {
  name: string;
  age: number;
  location: string = "Perú";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person2 = new Person2("lacost", 23);
console.log(person2);

// class #3 (readonly props)
class Person3 {
  readonly name: string;
  readonly age: number;
  location: string = "Perú";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person3 = new Person3("Joselo", 30);
console.log(person3.age);
// person.age = 20; // ERROR

// class #4 (public modifier)
class Person4 {
  public name: string;
  public age: number;
  location: string = "Perú";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person4 = new Person4("Jose", 30);
person4.age = 20;
console.log(person4.age);
