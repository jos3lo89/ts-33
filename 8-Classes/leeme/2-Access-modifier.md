# Modificadores de Acceso

En TypeScript, puede usar modificadores de acceso para controlar la visibilidad de los miembros de la clase(propiedades y métodos). Los modificadores de acceso determinan las formas en que se puede acceder a los miembros de la clase desde dentro y fuera de la clase.

Hay tres tipos de modificadores de acceso en TypeScript:

public: Se puede acceder a los miembros marcados como públicos desde cualquier lugar, tanto dentro como fuera de la clase.

private: Solo se puede acceder a los miembros marcados como privados desde la clase en la que están definidos.

protected: Se puede acceder a los miembros marcados como protegidos desde la clase en la que están definidos, así como desde cualquier subclase que amplíe la clase.

Aquí hay un ejemplo:

```ts
class Animal {
  public name: string;
  private age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getName(): string {
    return this.name;
  }

  private getAge(): number {
    return this.age;
  }

  protected getSpecies(): string {
    return this.species;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Canine");
  }

  public getInfo(): string {
    return `${this.getName()} is a ${this.getSpecies()} and is ${
      this.age
    } years old.`;
  }
}
```

En este ejemplo, definimos una clase Animal con tres propiedades: nombre, edad y especie. Anotamos estas propiedades con diferentes
modificadores de acceso (público, privado y protegido) para controlar su visibilidad.

También definimos tres métodos (getName, getAge y get Species) que corresponden a las tres propiedades. Nuevamente, anotamos estos métodos
con diferentes modificadores de acceso para controlar su visibilidad.

Luego definimos una clase de Perro que extiende la clase de Animal. Dado que la especie está marcada como protegida, se puede acceder a ella
desde la clase de perro. Definimos un método (getInfo) que usa los métodos getName y get Species para devolver una cadena con información
sobre el perro.

Tenga en cuenta que cuando crea una instancia de la clase Dog, debe proporcionar valores para las propiedades name y age definidas en la
clase Animal, pero no para la propiedad species, ya que ya está definida en el constructor de la clase Dog. También tenga en cuenta que el
método getAge está marcado como privado, por lo que solo se puede llamar desde dentro de la clase Animal y no se puede acceder desde fuera de
la clase o sus subclases.
