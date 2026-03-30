//Task 1. Object With Dynamic Properties

/* let employee = {
    firstName: 'Natalie',
    lastName: 'Viter',
    position: 'QC',
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    addProperty: function(key, value){
        this [key] = value;
    },
    hasProperty: function() {
        return this.hasOwnProperty(key);
    }
}
console.log(employee);//{ firstName: 'Natalie', lastName: 'Viter', position: 'QC' }
console.log(employee.fullName());//Natalie Viter
employee.addProperty("salary", 5000);
console.log(employee.salary);//5000
console.log(employee.hasOwnProperty("position"));//true
console.log(employee.hasOwnProperty("age"));//false */

//Task 2. Constructor Function for Products

/* let product = {
    name:'chair',
    price: 6000,
    category: 'furniture',
    applyDiscount: function(discountPercent) {
    const discountAmount = this.price * (discountPercent / 100);
    this.price = this.price - discountAmount;
    return this.price;
  },
   isInCategory: function(categoryName) {
    return this.category === categoryName;
  }
}
console.log(product);//{ name: 'chair', price: '6000', product: 'furniture' }
product.applyDiscount(10);
console.log(product.price);//5400
product.applyDiscount(90);
console.log(product.price);//540
console.log(product.isInCategory('furniture'));//true
console.log(product.isInCategory('electronics'));//false
console.log(product.isInCategory('groceries'));//false */

//Task 3. Class for Bank Account

/* class BankAccount {
    constructor (owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return false;
    }
    this.balance -= amount;
    return this.balance;
  }
  getBalance() {
    return this.balance;
  }
}
const account = new BankAccount("Natalie", 1800);
account.deposit(1200);
console.log(account.getBalance());//3000
account.withdraw(500);
console.log(account.getBalance());//2500
account.withdraw(1300);//
console.log(account.getBalance());//1200
 */

//Task 4. Class With Static Method

/* class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  toFahrenheit() {
    return (this.celsius * 9 / 5) + 32;
  }
  toKelvin() {
    return this.celsius + 273.15;
  }
  static compare(temp1, temp2) {
    return temp1.celsius > temp2.celsius ? temp1 : temp2;
  }
}
const t1 = new Temperature(16);
const t2 = new Temperature(22);
console.log(t1.toFahrenheit()); // 60.8
console.log(t1.toKelvin()); // 298.15
const higher = Temperature.compare(t1, t2);
console.log(higher.celsius); // 22 */

//Task 5. Inheritance – Vehicles

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate(value) {
    this.speed += value;
    return this.speed;
  }
  getInfo() {
    return `Brand: ${this.brand}, Speed: ${this.speed} km/h`;
  }
}
class Car extends Vehicle {
  constructor(brand, speed, fuel) {
    super(brand, speed);
    this.fuel = fuel;
  }
  refuel(amount) {
    this.fuel += amount;
    return this.fuel;
  }
}
const myCar = new Car("Toyota", 180, 30);
console.log(myCar.getInfo()); // Brand: Toyota, Speed: 180 km/h
myCar.accelerate(40);
console.log(myCar.speed); // 220
myCar.refuel(20);
console.log(myCar.fuel); // 50
