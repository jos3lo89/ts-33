// Interfaces para clases

interface Vehicle {
  start(): void;
  stop(): void;
}

// Clase implementando una interface

class Car implements Vehicle {
  start(): void {
    console.log("Car started");
  }

  stop(): void {
    console.log("Card stopped");
  }
}

// usando

const myCard = new Car();

myCard.start();
myCard.stop();
