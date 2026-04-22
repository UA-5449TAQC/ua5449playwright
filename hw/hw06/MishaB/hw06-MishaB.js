// Task 1. Object With Dynamic Properties
const employee = {
    firstName: "Misha",
    lastName: "B.",
    position: "Sr. QA Engineer",

    //full name
    getFullName: function() {return this.firstName + " " + this.lastName;},

    //add property
    addProperty: function(propertyName, propertyValue) {this[propertyName] = propertyValue;},

    //check if property exists
    hasProperty: function(propertyName) {return this.hasOwnProperty(propertyName);}
};

// Task 2. Construc  tor Function for Products

const Product = function(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;

    this.getInfo = function() {return `${this.name} - ${this.price}$ (${this.category})`;},
    this.applyDiscount = function(discount) {this.price = this.price - (this.price * discount / 100);},
    this.isCategory = function(category) {return this.category === category;},
    this.getPrice = function() {return `${this.price}$`;}           
};

// Task 3. Class for Bank Account
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }                       
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance() {
        return this.balance;
    }
}

//Task 4. Class With Static Method
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    toFahrenheit() {
        return (this.celsius * 9 / 5) + 32;
    }

    toKelvin() {
        return this.celsius + 273.15;
    }

    static compare(t1, t2) {
        if (t1.celsius > t2.celsius) {
            return t1;
        } else if (t1.celsius < t2.celsius) {
            return t2;
        }
        return t1;
    }
}

//  Task 5. Inheritance – Vehicles

class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(value) {
        this.speed += value;
    }
    getInfo() {
        return `${this.brand} is moving at ${this.speed} km/h`;
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