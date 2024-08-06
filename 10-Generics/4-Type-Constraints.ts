// Escriba la restricción usando la palabra clave 'extends'

interface Identifiable {
  id: number;
}
// Función genérica con una restricción de tipo

function mergeObjects<T extends Identifiable, U extends Record<string, any>>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

// Ejemplo de uso
const object1 = { id: 1, name: "Object 1" };
const object2 = { id: 2, description: "Object 2" };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);
// Salida: { id: 1, name: 'Object 1', description: 'Object 2' }
