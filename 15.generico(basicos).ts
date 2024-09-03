// Funcion genérica identity
function identity<T>(value: T): T {
    return value;
}
// Tipo number
console.log(identity(42));
// Tipo string
console.log(identity("hello"));
// Tipo boolean
console.log(identity(true));

  