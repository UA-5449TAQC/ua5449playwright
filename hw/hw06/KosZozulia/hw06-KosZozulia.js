// TASK 1. Object With Dynamic Properties

let employee = {
    firstName: "Kos",
    lastName: "Zozulia",
    position: "QA Engineer",
       getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    addProperty: function(propertyName, value) {
        this[propertyName] = value;
    },
    
    propertyExist: function(propertyName) {
        return this.hasOwnProperty(propertyName);
    }
};

console.log(employee.getFullName()); 

employee.addProperty("salary", 10000);
console.log(employee.salary); 
console.log(employee.propertyExist("salary")); 
console.log(employee.propertyExist("age")); 


// TASK 2. Constructor Function for Products
function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
    
    // Method to return product information
    this.getInfo = function() {
        return this.name + " - " + this.price + "$ (" + this.category + ")";
    };
    
     this.Discount = function(discountPercent) {
        this.price = this.price - (this.price * discountPercent / 100);
    };
    
    this.getPrice = function() {
        return this.price;
    };
    
    this.isCategory = function(categoryName) {
        return this.category === categoryName;
    };
}


let p1 = new Product("Laptop", 1500, "electronics");
console.log(p1.getInfo()); 
p1.Discount(10);
console.log(p1.getPrice()); 
console.log(p1.isCategory("electronics")); 
console.log(p1.isCategory("books"));

//TASK 3. Class for Bank Account

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    deposit(amount) {
        this.balance += amount;
    }
        withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient funds";
        }
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}

let account = new BankAccount("Kos", 1000);
account.deposit(500);
console.log(account.getBalance());
account.withdraw(200);
console.log(account.getBalance());
console.log(account.withdraw(2000)); 
console.log(account.getBalance()); 

//TASK 4. Class With Static Method
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    
    toFahrenheit() {
        return (this.celsius * 9/5) + 32;
    }
    toKelvin() {
        return this.celsius + 273.15;
    }
    static compare(temp1, temp2) {
        if (temp1.celsius > temp2.celsius) {
            return temp1;
        } else {
            return temp2;
        }
    }
}

let t1 = new Temperature(20);
let t2 = new Temperature(30);
console.log(t1.toFahrenheit()); 
console.log(t1.toKelvin()); 
let higherTemp = Temperature.compare(t1, t2);
console.log("Higher temperature: " + higherTemp.celsius + "°C"); 

// TASK 5. Inheritance – Vehicles

// Parent class Vehicle
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    
    // Method to increase speed
    accelerate(value) {
        this.speed += value;
    }
    
    // Method to get vehicle information
    getInfo() {
        return this.brand + " moving at " + this.speed + " km/h";
    }
}

// Child class Car that extends Vehicle
class Car extends Vehicle {
    constructor(brand, speed, fuel) {
        super(brand, speed); // Call parent constructor
        this.fuel = fuel;
    }
    
    // Method to add fuel
    refuel(amount) {
        this.fuel += amount;
    }
    
    // Method to get fuel level
    getFuel() {
        return this.fuel;
    }
}

// Test examples
let car = new Car("Toyota", 60, 20);

car.accelerate(30);
console.log(car.getInfo()); // "Toyota moving at 90 km/h"

car.refuel(10);
console.log("Fuel level: " + car.getFuel()); // 30
