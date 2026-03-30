// Task 1. Object With Dynamic Properties

employee = {
    firstName: "Terry",
    lastName: "Barterry",
    position: "CEO",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    addProperty: function(propertyName, propertyValue) {
        this[propertyName] = propertyValue; // can't use this.propertyName, because it will be treated as a string "propertyName"
    },
    hasProperty: function(propertyName) {
        return this.hasOwnProperty(propertyName);
    }
};

console.log(employee.getFullName()); // Terry Barterry
console.log(employee.hasProperty("age")); // false
employee.addProperty("age", 45);
console.log(employee.hasProperty("age")); // true

//Task 2. Constructor Function for Products

function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.getInfo = function() {
        return `${this.name} - ${this.price}$ (${this.category})`;
    },
    this.applyDiscount = function(discount) {
        this.price = this.price - (this.price * discount / 100);
    },
    this.isCategory = function(category) {
        return this.category === category;
    },
    this.getPrice = function() {
        return `${this.price}$`;
    };
};
let p1 = new Product("Laptop", 1500, "electronics");

console.log(p1.getInfo());
// "Laptop - 1500$ (electronics)"

p1.applyDiscount(10);
console.log(p1.getPrice());
// 1350

console.log(p1.isCategory("electronics"));
// true

// Task 3. Class for Bank Account

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    };
    deposit(amount) {
        this.balance += amount;
    };
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
        }
    };
    getBalance() {
        return this.balance;
    };
};

let account = new BankAccount("Anna", 1000);

account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
// 1300
account.withdraw(2000);
// "Insufficient funds"

// Task 4. Class With Static Method

class Temperature {
    constructor(temperature) {
        this.temperature = temperature;
    };
    static compare(temp1, temp2) {
        if (temp1.temperature > temp2.temperature) {
            return temp1.temperature;
        } else if (temp1.temperature < temp2.temperature) {
            return temp2.temperature;
        } else {
            return "Temperatures are equal";
        }
    };
    toFahrenheit() {
        return this.temperature * 9 / 5 + 32;
    };
    toKelvin() {
        return this.temperature + 273.15;
    };
};
let t1 = new Temperature(20);
let t2 = new Temperature(30);

console.log(t1.toFahrenheit());
// 68

console.log(t1.toKelvin());
// 293.15

console.log(Temperature.compare(t1, t2));
// returns the higher temperature

// Task 5. Inheritance – Vehicles

class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    };
    accelerate(amount) {
        this.speed += amount;
    };
    getInfo() {
        return `${this.brand} moving at ${this.speed} km/h`;
    }
};

class Car extends Vehicle {
    constructor(brand, speed, fuel) {
        super(brand, speed);
        this.fuel = fuel;
    };
    refuel(amount) {
        this.fuel += amount;
    };
};

let car = new Car("Toyota", 60, 20);

car.accelerate(30);

console.log(car.getInfo());
// "Toyota moving at 90 km/h"

car.refuel(10);