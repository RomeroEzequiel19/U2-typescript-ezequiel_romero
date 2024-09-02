// Se define la case
class Car {
    make: string;

    constructor(make: string) {
      this.make = make;
    }
    drive(): void {
      console.log(`Driving a [${this.make}]`);
    }
  }
  
const miAuto = new Car("Ford");
  