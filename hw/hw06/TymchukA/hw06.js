//Task 1. Object With Dynamic Properties
const employee = {
  firstName: "Alina",
  lastName: "BArbutsa",
  position: "QA Lead",

  // Returns full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Adds a new property dynamically
  addProperty(key, value) {
    this[key] = value;
  },

  // Checks if property exists
  hasProperty(key) {
    return this.hasOwnProperty(key);
  }
};

//Task 2. Constructor Function for Products
// Constructor function for Product
function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}

// Method to return product information
Product.prototype.getInfo = function() {
  return `Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
};

// Method to apply a discount to the price
Product.prototype.applyDiscount = function(discountPercent) {
  const discountAmount = this.price * (discountPercent / 100);
  this.price -= discountAmount;
  return this.price;
};

// Method to check if the product belongs to a given category
Product.prototype.isInCategory = function(targetCategory) {
  return this.category.toLowerCase() === targetCategory.toLowerCase();
};

//Example usage:
//const laptop = new Product('Laptop', 999.99, 'Electronics');
//console.log(laptop.getInfo()); // Product: Laptop, Price: $999.99, Category: Electronics
//console.log(laptop.applyDiscount(10)); // 899.99 (after 10% discount)
//console.log(laptop.isInCategory('Electronics')); // true
//console.log(laptop.isInCategory('Books')); // false

//Task 3. Bank Account Class
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  // Add money to the account
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  // Withdraw money (no negative balance allowed)
  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive");
      return;
    }

    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }

    this.balance -= amount;
  }

  // Get current balance
  getBalance() {
    return this.balance;
  }
}

//const account = new BankAccount("Alice", 1000);
//account.deposit(500);
//console.log(account.getBalance()); // 1500
//account.withdraw(200);
//console.log(account.getBalance()); // 1300
//account.withdraw(2000); // "Insufficient funds"
//console.log(account.getBalance()); // 1300

//Task 4. Class with Static Method
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  // Convert to Fahrenheit
  toFahrenheit() {
    return (this.celsius * 9 / 5) + 32;
  }

  // Convert to Kelvin
  toKelvin() {
    return this.celsius + 273.15;
  }

  // Static method to compare two temperatures
  static compare(temp1, temp2) {
    return temp1.celsius > temp2.celsius ? temp1 : temp2;
  }
}

// Example usage:
//const temp1 = new Temperature(25);
//const temp2 = new Temperature(30);    
//console.log(temp1.toFahrenheit()); // 77
//console.log(temp1.toKelvin()); // 298.15
//const hotterTemp = Temperature.compare(temp1, temp2);
//console.log(`Hotter temperature: ${hotterTemp.celsius}°C`); // Hotter temperature: 30°C

//Task 5. Inheritance with Classes
class Vehicle {
  constructor(brand, speed = 0) {
    this.brand = brand;
    this.speed = speed;
  }

  // Increase speed
  accelerate(value) {
    if (value > 0) {
      this.speed += value;
    } else {
      console.log("Acceleration value must be positive");
    }
  }

  // Get vehicle info
  getInfo() {
    return `Brand: ${this.brand}, Speed: ${this.speed}`;
  }
}
class Car extends Vehicle {
  constructor(brand, speed, fuel = 0) {
    super(brand, speed);
    this.fuel = fuel;
  }

  // Add fuel
  refuel(amount) {
    if (amount > 0) {
      this.fuel += amount;
    } else {
      console.log("Fuel amount must be positive");
    }
  }
}

// Example usage:  
//const myCar = new Car("Toyota", 0, 50);
//myCar.accelerate(60);
//console.log(myCar.getInfo()); // Brand: Toyota, Speed: 60
//myCar.refuel(20);
//console.log(`Fuel: ${myCar.fuel}`); // Fuel: 70