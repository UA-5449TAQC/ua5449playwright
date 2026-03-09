````md
# 🧠 Homework: JavaScript Objects and Classes (Advanced Tasks)

These tasks are based on the lecture about **Objects, Classes, and OOP principles in JavaScript**.  
Your goal is to **design your own implementations**.

⚠️ Important:
- Do **not** copy solutions from the internet.
- Think about **object structure, methods, and class design**.
- Only **usage examples are provided**, not implementations.

---

# 🔹 Task 1. Object With Dynamic Properties

Create an object `employee` that stores information about a worker.

Requirements:

- Store the following properties:
  - `firstName`
  - `lastName`
  - `position`
- Add a method that returns the **full name of the employee**.
- Add a method that allows **adding new properties dynamically**.
- Add a method that checks if a property exists using `hasOwnProperty()`.

### Example usage

```javascript
employee.getFullName(); 
// "John Smith"

employee.addProperty("salary", 3000);

employee.hasProperty("salary"); 
// true

employee.hasProperty("age"); 
// false
````

---

# 🔹 Task 2. Constructor Function for Products

Create a **constructor function** `Product`.

Requirements:

Each product should contain:

* `name`
* `price`
* `category`

Add methods that:

* return product information
* apply a discount to the price
* check if the product belongs to a given category

### Example usage

```javascript
let p1 = new Product("Laptop", 1500, "electronics");

p1.getInfo();
// "Laptop - 1500$ (electronics)"

p1.applyDiscount(10);
p1.getPrice();
// 1350

p1.isCategory("electronics");
// true
```

---

# 🔹 Task 3. Class for Bank Account

Create a class `BankAccount`.

Requirements:

Properties:

* `owner`
* `balance`

Methods:

* `deposit(amount)`
* `withdraw(amount)`
* `getBalance()`

Rules:

* Withdrawal should not allow the balance to become negative.

### Example usage

```javascript
let account = new BankAccount("Anna", 1000);

account.deposit(500);

account.withdraw(200);

account.getBalance();
// 1300

account.withdraw(2000);
// "Insufficient funds"
```

---

# 🔹 Task 4. Class With Static Method

Create a class `Temperature`.

Requirements:

* Store temperature value in Celsius.
* Add methods to convert temperature:

  * to Fahrenheit
  * to Kelvin
* Add a **static method** that compares two temperatures and returns the higher one.

### Example usage

```javascript
let t1 = new Temperature(20);
let t2 = new Temperature(30);

t1.toFahrenheit();
// 68

t1.toKelvin();
// 293.15

Temperature.compare(t1, t2);
// returns the higher temperature
```

---

# 🔹 Task 5. Inheritance – Vehicles

Create a class hierarchy.

### Parent class

`Vehicle`

Properties:

* `brand`
* `speed`

Methods:

* `accelerate(value)`
* `getInfo()`

### Child class

`Car` that extends `Vehicle`.

Additional property:

* `fuel`

Additional method:

* `refuel(amount)`

### Example usage

```javascript
let car = new Car("Toyota", 60, 20);

car.accelerate(30);

car.getInfo();
// "Toyota moving at 90 km/h"

car.refuel(10);
```

---

# ✅ Submission Requirements

* Use **ES6 syntax**
* Implement **objects, constructor functions, and classes**
* Follow **OOP principles**
* Write **clean, readable code**
* Separate tasks clearly with comments

Submit the solution via **Pull Request**.

```

If you want, I can also make a **much stronger “TAQC-style” version (harder for students to cheat with ChatGPT)** where tasks require **multiple interacting classes and edge-case validation**.
```
