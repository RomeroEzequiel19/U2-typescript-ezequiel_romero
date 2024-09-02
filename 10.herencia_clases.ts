// Se define la clase Car
class Car {
    private make: string;
  
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
  
// Se crea la clase ElectriCar que extiende de car
class ElectricCar extends Car {
    batteryLife: number;

    constructor(make: string, batteryLife: number) {

      super(make);
      this.batteryLife = batteryLife;
    }
  
    charge(): void {
      console.log("El coche se está cargando");
    }
}
  
const myElectricCar = new ElectricCar("Tesla", 80);
myElectricCar.drive();
myElectricCar.charge();
console.log(`Vida de batería: ${myElectricCar.batteryLife}%`);
  