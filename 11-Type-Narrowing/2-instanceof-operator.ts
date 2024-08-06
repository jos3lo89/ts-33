class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

// Función de ejemplo con protección de tipo instanceof
function animalSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    // Dentro de este bloque, TypeScript sabe que 'animal' es una instancia de Dog
    animal.bark();
  } else {
    // Dentro de este bloque, TypeScript sabe que 'animal' es una instancia de Cat
    animal.meow();
  }
}

// Ejemplo de uso
const dog = new Dog();
const cat = new Cat();

animalSound(dog); // Salidad: Woof!
animalSound(cat); // Salidad: Meow!
