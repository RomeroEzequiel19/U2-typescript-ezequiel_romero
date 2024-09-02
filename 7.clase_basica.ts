// Se define la clase
class Car {
    make: string = "";

    drive(): void {
      console.log(`Driving a [${this.make}]`);
    }
}

const auto = new Car();
auto.make = "Corolla"
  