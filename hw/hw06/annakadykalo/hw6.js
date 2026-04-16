//Objects and classes
console.log("______________________Task 1_________________________");

let employee = {
    firstName: "Adam",
    lastName: "Johnson",
    position: "DevOps",
    getFullName() {
        return "Employee full name: " + this.firstName + " " + this.lastName;
    },
    addProperty(property, value) {
        this[property] = value
    },
    hasProperty(property) {
        return this.hasOwnProperty(property);
    }
};

console.log(employee.getFullName());

employee.addProperty("salary", 3000);
console.log(employee.hasProperty("salary")); // true
console.log(employee.hasProperty("age")); // false


console.log("______________________Task 2_________________________");

function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;

    this.getInfo = function () {
        return this.name + " - " + this.price + " (" + this.category + ")"
    };

    this.getPrice = function () {
        return this.price
    }

    this.applyDiscount = function (discount) {
        this.price -= price * discount / 100;
    }
    this.isCategory = function (inputCategory) {
        return inputCategory === this.category
    }
}

let p1 = new Product("Laptop", 1500, "electronics");

console.log(p1.getInfo());
// "Laptop - 1500$ (electronics)"

p1.applyDiscount(10);
console.log(p1.getPrice());
// 1350

console.log(p1.isCategory("electronics"));
// true


console.log("______________________Task 3_________________________");

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
            return 0;
        }
        this.balance -= amount;
        return amount;
    }
}

let account = new BankAccount("Anna", 1000);
console.log(account);

account.deposit(500);
console.log(account);

account.withdraw(200);
console.log(account);

console.log(account.getBalance());  // 1300

account.withdraw(2000);             // "Insufficient funds"
console.log(account.getBalance());  // 1300

account.withdraw(1);
console.log(account.getBalance());  // 1299


console.log("______________________Task 4_________________________");

class Temperature {
    constructor(value) {
        this.value = value;
    }

    static compare(t1, t2) {
        return t1.value > t2.value ? t1 : t2;
    }

    toFahrenheit() {
        return this.value * 1.8 + 32;
    }

    toKelvin() {
        return this.value + 273.15;
    }
}

let t1 = new Temperature(20);
let t2 = new Temperature(30);

console.log(t1.toFahrenheit());
// 68

console.log(t1.toKelvin());
// 293.15

console.log(Temperature.compare(t1, t2));
// returns the higher temperature


console.log("______________________Task 5_________________________");

class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    getInfo() {
        return this.brand + " moving at " + this.speed + " km/h";
    }

    accelerate(value) {
        this.speed += value;
    }
}

class Car extends Vehicle {
    constructor(brand, speed, fuel) {
        super(brand, speed);
        this.fuel = fuel;
    }

    refuel(amount) {
        this.fuel += amount;
    }
}

let car = new Car("BMW", 160, 20);
console.log(car.getInfo());          // "BMW moving at 160 km/h"

car.accelerate(30);

console.log(car.getInfo());          // "BMW moving at 190 km/h"

car.refuel(10);
console.log(car.fuel);             // 30
