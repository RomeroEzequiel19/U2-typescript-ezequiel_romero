// Defin la interfaz Person
interface Person {
    firstName: string;
    lastName: string;
}

// Declaro la variable "person" asignándole un objeto
let person: Person = {
    firstName: "Ezequiel",
    lastName: "Romero"
};
  
console.log(`Primer Nombre: ${person.firstName}, Apellido: ${person.lastName}`);
  