# Getters & Setters

En TypeScript, los getters y setters se utilizan para acceder y modificar las propiedades de la clase.
Los getters y setters le permiten definir una propiedad en una clase que parece una variable simple
desde el exterior, pero internamente tiene lógica adicional para obtener y establecer el valor.

Aquí hay un ejemplo de cómo definir un getter y setter en TypeScript:

```ts
class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be negative");
    }
    this._myProperty = value;
  }
}
```

En este ejemplo, myProperty se define como una propiedad privada con un valor inicial de 0. Las palabras
clave get y set se utilizan para definir los métodos getter y setter, respectivamente.

El método get es responsable de devolver el valor de la propiedad \_myProperty, mientras que el método
set es responsable de validar el valor de entrada y establecer el valor de \_myProperty. En este caso,
estamos verificando si el valor de entrada es negativo y arrojando un error si lo es.

Para acceder a la propiedad MyProperty desde fuera de la clase, simplemente puede usar instance.
MyProperty, donde instance es una instancia de la clase MyClass. Cuando accede a mi propiedad, se llama
al método get y devuelve el valor actual de \_myProperty. Para establecer el valor de MyProperty, puede
usar instance.MyProperty = newValue, donde newValue es el nuevo valor que desea asignar a la propiedad.
Cuando asigna un valor a MyProperty, se llama al método set con el nuevo valor como entrada.
