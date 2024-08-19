//Ryan Hutchings
//Unit 16.1 Project/Exercise: Car OO Challenge

describe("Part 1: Vehicle class", () => {
  it("check if new instance is made from Vehicle class and methods work", () => {
    let myCar = new Vehicle('Ford', 'Raptor', '2010');

    expect(myCar.honk()).toEqual('Beep.');
    expect(myCar.toString()).toEqual('The vehicle is a Ford Raptor from 2010.');

    let myOtherCar = new Vehicle('GMC', 'Sierra Denali', '2020');

    expect(myOtherCar.honk()).toEqual('Beep.');
    expect(myOtherCar.toString()).toEqual('The vehicle is a GMC Sierra Denali from 2020.');
  });
});

describe("Part 2: Car class", () => {
  it("check if instance is made with Car class and methods are inherited from Vehicle class", () => {
    let myCar = new Car('Ford', 'Raptor', '2010');

    expect(myCar.honk()).toBe('Beep.');
    expect(myCar.toString()).toBe('The vehicle is a Ford Raptor from 2010.');
    expect(myCar.numWheels).toEqual(4);

    let myOtherCar = new Car('GMC', 'Sierra Denali', '2020');

    expect(myOtherCar.honk()).toBe('Beep.');
    expect(myOtherCar.toString()).toBe('The vehicle is a GMC Sierra Denali from 2020.');
    expect(myCar.numWheels).toEqual(4);
  });
});

describe("Part 3: Motorcycle class", () => {
  it("check if instance is made with Motorcycle class and new methods work along with inherited ones", () => {
    let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

    expect(myFirstMotorcycle.toString()).toBe('The vehicle is a Honda Nighthawk from 2000.');
    expect(myFirstMotorcycle.honk()).toBe('Beep.');
    expect(myFirstMotorcycle.revEngine()).toBe('VROOM!!!');
    expect(myFirstMotorcycle.numWheels).toEqual(2);

    let myOtherMotorcycle = new Motorcycle('Harley-Davidson', 'Street 500', '2019');

    expect(myOtherMotorcycle.toString()).toBe('The vehicle is a Harley-Davidson Street 500 from 2019.');
    expect(myOtherMotorcycle.honk()).toBe('Beep.');
    expect(myOtherMotorcycle.revEngine()).toBe('VROOM!!!');
    expect(myOtherMotorcycle.numWheels).toEqual(2);
  });
});

describe("Part 4: Garage class", () => {
  it("check if instance is made with Garage class and add news vehicles.", () => {
    let myGarage = new Garage(4);

    expect(myGarage.vehicles.length).toEqual(0);

    expect(myGarage.add(new Motorcycle("Honda", "Nighthawk", 2050))).toBe('Vehicle added!');
    expect(myGarage.vehicles.length).toEqual(1);

    expect(myGarage.add('Tacos')).toBe('Only vehicles are allowed in here!');
    expect(myGarage.vehicles.length).toEqual(1);

    expect(myGarage.add(new Motorcycle('Harley-Davidson', 'Street 500', '2019'))).toBe('Vehicle added!');
    expect(myGarage.vehicles.length).toEqual(2);

    expect(myGarage.add(new Car('Ford', 'Raptor', '2010'))).toBe('Vehicle added!');
    expect(myGarage.vehicles.length).toEqual(3);

    expect(myGarage.add('Soldering Station')).toBe('Only vehicles are allowed in here!');
    expect(myGarage.vehicles.length).toEqual(3);

    expect(myGarage.add(new Vehicle('GMC', 'Sierra Denali', '2020'))).toBe('Vehicle added!');
    expect(myGarage.vehicles.length).toEqual(4);

    expect(garage.add(new Car("Hyundai", "Elantra", 2015))).toBe("Sorry, we're full.");
    expect(myGarage.vehicles.length).toEqual(4);

  });
});