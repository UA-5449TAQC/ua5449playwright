// Task 1. Object With Dynamic Properties
let employee = {
  firstName: "Viktoriia",
  lastName: "Stetsenko",
  position: "QA",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  addProperty: function (key, value) {
    this[key] = value;
  },
  hasProperty: function (key) {
    return this.hasOwnProperty(key)
  },
};

console.log(employee.getFullName());
employee.addProperty("age", 27);
console.log(employee);
console.log(employee.hasProperty("firstName"));

// Task 2. Constructor Function for Products
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  getInfo() {
    return `${this.name} - $${this.price} (${this.category})`;
  }
  applyDiscount(discount) {
    this.price = this.price - (this.price * discount / 100);
    return this.price;
  }
  isCategory(category) {
    return this.category === category;
  }
}

let p1 = new Product("paper", 100, "other");

console.log(p1);
console.log(p1.getInfo());
console.log(p1.applyDiscount(10));
console.log(p1.isCategory("other"));

// Task 3. Class for Bank Account
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(value) {
    this.balance += value;
    return `Your balance - ${this.balance}`;
  }

  withdraw(value) {
    if (this.balance >= value) {
      this.balance -= value;
      return `Your balance - ${this.balance}`;
    } else {
      return `Insufficient funds. Your balance - ${this.balance}`;
    }
  }
}

let acc1 = new BankAccount("Viktoriia", 1000);

console.log(acc1.withdraw(500));
console.log(acc1.deposit(1000));

// Task 4. Class With Static Method
class Temperature {
  constructor(temperatureCelsius) {
    this.temperatureCelsius = temperatureCelsius;
  }

  toFahrenheit() {
    return `${this.temperatureCelsius}° C is ${this.temperatureCelsius * 1.8 + 32}° F`;
  }

  toKelvin() {
    return `${this.temperatureCelsius}° C is ${this.temperatureCelsius + 273.15}° K`;
  }

  static getHigher(t1, t2) {
    return t1.temperatureCelsius > t2.temperatureCelsius ? t1 : t2;
  }
}

let t1 = new Temperature(20);
let t2 = new Temperature(30);
console.log(t1.toFahrenheit());
console.log(t1.toKelvin());
console.log(Temperature.getHigher(t1, t2));

// Task 5. Inheritance – Vehicles
class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate(value) {
    return (this.speed += value);
  }

  getInfo() {
    return `${this.brand} moving at ${this.speed} km/h`;
  }
}

class Car extends Vehicle {
  constructor(brand, speed, fuel) {
    super(brand, speed);
    this.fuel = fuel;
  }
  refuel(amount) {
    return (this.fuel += amount);
  }
}

let car1 = new Car("BMW", 300, 20);

console.log(car1.accelerate(20));
console.log(car1.getInfo());
console.log(car1.refuel(20));
