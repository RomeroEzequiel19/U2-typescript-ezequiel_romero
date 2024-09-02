// Se define la clase
class Car {
    private make: string

    constructor(make: string) {
      this.make = make;
    }
    drive(): void {
      console.log(`Driving a [${this.make}]`);
    }
    getMake(): string {
      return this.make;
    }
}
  
const miAuto = new Car("Ford");
console.log(`La marca del auto es: ${miAuto.getMake()}`);
  