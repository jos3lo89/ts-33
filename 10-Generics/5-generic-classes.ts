// Clase genérica
class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

// Ejemplo de uso
const stringBox = new Box<string>("Hola, TypesScript!");
console.log(stringBox.getContent()); // Salida: Hola, TypesScript!
stringBox.setContent("new content");
console.log(stringBox.getContent()); // Salida: new content

const numberBox = new Box<number>(42);
console.log(numberBox.getContent()); // Salida: 42
numberBox.setContent(33);
console.log(numberBox.getContent()); // Salida: 33
