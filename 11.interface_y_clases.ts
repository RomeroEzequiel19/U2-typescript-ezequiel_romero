interface Shape {
    area(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }

    area(): number {
      return Math.PI * (this.radius ** 2);
    }
}
  
const ciruclo = new Circle(5);
console.log(`El area del círculo es: ${ciruclo.area()}`);
  