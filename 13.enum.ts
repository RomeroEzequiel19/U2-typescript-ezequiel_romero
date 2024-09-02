enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue"
}

// Se hace la funcion para obtener el mensaje del color
function mensajeDelColor(color: Color): string {
  return `El color es ${color}`;
}

// Se llama a la función con un valor del enum
const message = mensajeDelColor(Color.Green);
console.log(message)
