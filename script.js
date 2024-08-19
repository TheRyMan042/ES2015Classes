//Ryan Hutchings
//Unit 16.1 Project/Exercise: Car OO Challenge

//Part 1
class Vehicle {
  //save values in the constructor
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return 'Beep.';
  }
  toString() {
    return `The vehicle is a ${this.make + ' ' + this.model} from ${this.year}.`
  }
}

//testing case
// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// console.log(myFirstVehicle.honk()); // "Beep!"
// console.log(myFirstVehicle.toString()); // "The vehicle is a Honda Monster Truck from 1999."

//Part 2
//extends helps inherit the Vehicle class
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year); //saves values and gets methods from Vehicle class
    this.numWheels = 4;
  }
}

//testing case
let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString()); // "The vehicle is a Toyota Corolla from 2005."
console.log(myFirstCar.honk());     // "Beep!"
console.log(myFirstCar.numWheels);  // 4


//Part 3
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year); //saves values and gets methods from Vehicle class
    this.numWheels = 2;
  }
  revEngine() {
    return 'VROOM!!!';
  }
}

//testing case
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
console.log(myFirstMotorcycle.toString());
// "The vehicle is a Honda Nighthawk from 2000."
console.log(myFirstMotorcycle.honk());     // "Beep."
console.log(myFirstMotorcycle.revEngine()); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels);  // 2


//Part 4
class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(newVehicle) {
    //check if garage is full
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    //check if newVehicles is even a vehicle
    if (newVehicle instanceof Vehicle) {
      this.vehicles.push(newVehicle);
      return 'Vehicle added!';
    } else {
      return 'Only vehicles are allowed in here!';
    }
  }
}

//testing case
let garage = new Garage(2);
console.log(garage.vehicles); // []
console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // "Vehicle added!"
console.log(garage.vehicles); // [Car]
console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
// "Vehicle added!"
console.log(garage.vehicles); // [Car, Motorcycle]

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)));
// "Sorry, we're full."
