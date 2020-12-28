function SelfDriving(constructorFunctions: Function){
  constructorFunctions.prototype.selfDriving = true;
}

function Wheels(numbersOfWheels: number){
  return function (constructor: Function){
    constructor.prototype.wheels = numbersOfWheels;
  };
}

@SelfDriving
@Wheels(4)
class Car{
  private brand: string;
  constructor(brand: string){
    this.brand = brand;
  }
}

const nissan: Car = new Car('Nissan');
console.log(nissan.selfDriving);
console.log(nissan.wheels);