//1. Object with Dynamic Properties
console.log("1. Object with Dynamic Properties");

let employee = { // Creating an object
    firstName: "David",
    lastName: "Strange",
    position: "Aviator",
    experience : 10,
    FullName: function(){ // Add a method to return full name
        return this.firstName + " " + this.lastName;
    },
    addProperty: function(key, value){ // Add a method to add a property
        this[key] = value;
    },
    hasProperty: function(key){ // Add a method to check if a property exists
        return this.hasOwnProperty(key);
    }
}
console.log("Full Name: " + employee.FullName()); 
employee.addProperty("salary", 3000)
console.log("Salary property: " + employee.hasProperty("salary"));
console.log("Age property: " + employee.hasProperty("age"));

// 2. Constructor Function for Products
console.log("\n2. Constructor Function for Products");

function Product(name, price, category){ //Add a constructor function to create a product object
    this.name = name;
    this.price = price;
    this.category = category;
}
let p1 = new Product("Laptop", 1500, "electronics"); // Create a product object p1 by constructor function
p1.getInfo = function(){ // Add a method to get product information
    return this.name + " - $" + this.price + " (" + this.category + ")";
}
console.log(p1.getInfo());

p1.applydiscount = function(discount){ // Add a method to apply discount
    this.price -= this.price * (discount / 100);
}
p1.applydiscount(10);
console.log("Price with discount: $" + p1.price);

p1.iscategory = function(category){ // Add a method to check product category
    return this.category === category;
}
console.log("Is product electronics: " + p1.iscategory("electronics"));
console.log("Is product furniture: " + p1.iscategory("furniture"));
console.log("Is product electronics: " + p1.iscategory("automotive"));

//3. Class for Bank Account
console.log("\n3. Class for Bank Account");

class BankAccount { 
    constructor(accountOwner, balance){
        this.accountOwner = accountOwner;
        this.balance = balance;
    }
    
    deposit(amount){ // Add a method to deposit money
        this.balance += amount;
    }
   
    getBalance(){ // Add a method to get a balance
        return this.balance;
    }

    withdraw(amount){ // Add a method to withdraw money
        if(amount > this.balance){ // Add a verification if funds are sufficient for withdrawal
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
        }
    }
}
let account = new BankAccount("Anna", 1000);
console.log("Initial balance: $" + account.getBalance());
account.deposit(500);
console.log("Ballance after Deposit 500$: $" + account.getBalance());
account.withdraw(200);
console.log("Ballance after Withdrawal 200$: $" + account.getBalance());
account.getBalance();
console.log("Current balance: $" + account.getBalance());
account.withdraw(2000);

// 4. Class With Static Method
console.log("\n4. Class With Static Method");

class Temperature {
    constructor(celsius){
        this.celsius = celsius;
    }

    toFahrenheit(){ // Add a method to convert Celsius to Fahrenheit
        return (this.celsius * 9/5) + 32;
    }

    static fromFahrenheit(fahrenheit){ // Add a static method to create a Temperature instance from Fahrenheit
        return new Temperature((fahrenheit - 32) * 5/9);
    }

    toKelvin(){ // Add a method to convert Celsius to Kelvin
        return this.celsius + 273.15;
    }

        static compare(t1, t2){ // Add a static method to compare two Temperature and return the higher one
            return t1.celsius >= t2.celsius ? t1 : t2;
        }
}
let t1 = new Temperature(20);
console.log("Temperature1 in Fahrenheit: " + t1.toFahrenheit() + "°F");
console.log("Temperature1 in Kelvin: " + t1.toKelvin() + "K");

let t2 = new Temperature(25);
console.log("Temperature2 in Fahrenheit: " + t2.toFahrenheit() + "°F");
console.log("Temperature2 in Kelvin: " + t2.toKelvin() + "K");

let higher = Temperature.compare(t1, t2);
console.log("Higher temperature in Celciues: " + higher.celsius + "°C");
console.log("Higher temperature in Fahrenheit: " + higher.toFahrenheit() + "°F");
console.log("Higher temperature in Kelvin: " + higher.toKelvin() + "K");

// 5. Inheritance – Vehicles
console.log("\n5. Inheritance – Vehicles");

class Vehicle { // Create a base class Vehicle
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(value){ // Add a method to accelerate the vehicle
        this.speed += value;
    }
    getInfo(){ // Add a method to get vehicle information
        return `${this.brand} is moving at ${this.speed} km/h`;
    }
}

class Car extends Vehicle { // Create a subclass Car to inherit from Vehicle
    constructor(brand, speed, fuel){
        super(brand, speed);
        this.fuel = fuel;
    }
    refuel(amount){ // Add a method to refuel the car
        this.fuel += amount;
    }
    getInfo(){ // Override the getInfo method to include fuel information
        return `${this.brand} moving at ${this.speed} km/h with ${this.fuel} liters of fuel`;
    }
}
let car = new Car("Toyota", 60, 20);
car.accelerate(30);
console.log(car.getInfo());
car.refuel(10);
console.log(car.getInfo());

let car1 = new Car("ZAZ", 160, 50);
car1.accelerate(90);
console.log(car1.getInfo());
car1.refuel(-10);
console.log(car1.getInfo());