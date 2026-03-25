"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position;
(function (Position) {
    Position[Position["Manager"] = 0] = "Manager";
    Position[Position["Developer"] = 1] = "Developer";
    Position[Position["Designer"] = 2] = "Designer";
    Position[Position["Tester"] = 3] = "Tester";
})(Position || (Position = {}));
// class Employee {
//     public name: string;
//     protected _age: number;
//     private __position: Position;
//     constructor(name: string, age: number, position: Position) {
//         this.name = name;
//         this._age = age;
//         this.__position = position;
//     }
//     get age(): number {
//         return this._age;
//     }
//     set age(value: number) {
//         this._age = value;
//     }
//     get position(): Position {
//         return this.__position;
//     }
//     set position(value: Position) {
//         this.__position = value;
//     }
// }
// let employee1:Employee = new Employee("Alice", 30, Position.Manager);
// console.log(employee1.name); // Output: Alice
// console.log(employee1.age); // Output: 30
// console.log(employee1.position); // Output: 0 (Manager)
class Person {
    name;
    _age;
    __email;
    constructor(name, age, email) {
        this.name = name;
        this._age = age;
        this.__email = email;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Age: ${this._age}, Email: ${this.__email}`);
    }
}
class Employee extends Person {
    position;
    constructor(name, age, email, position) {
        super(name, age, email);
        this.position = position;
    }
    printInfo() {
        super.printInfo();
        console.log(`Position: ${this.position}`);
    }
    getStringInfo() {
        let result = "";
        result += this.name;
        result += this._age;
        result += this.__email;
        result += this.position;
        return result;
    }
}
let employee1 = new Employee("Alice", 30, "test@emal.com", Position.Manager);
employee1.printInfo();
console.log(employee1._age);
// Output:
// Name: Alice, Age: 30, Email:
//# sourceMappingURL=class.js.map