// Se declara la variable tipo any
const valor_numerico: any = 200

// Se usa una aserción de tipo
const altura: number = (valor_numerico as string).length

console.log("La altura es: ", altura)