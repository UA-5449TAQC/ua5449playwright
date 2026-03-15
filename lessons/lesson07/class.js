var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this._age = age;
        this.__email = email;
    }
    Person.prototype.printInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this._age, ", Email: ").concat(this.__email));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, email, position) {
        var _this = _super.call(this, name, age, email) || this;
        _this.position = position;
        return _this;
    }
    Employee.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        console.log("Position: ".concat(this.position));
    };
    Employee.prototype.getStringInfo = function () {
        var result = "";
        result += this.name;
        result += this._age;
        result += this.__email;
        result += this.position;
        return result;
    };
    return Employee;
}(Person));
var employee1 = new Employee("Alice", 30, "test@emal.com", Position.Manager);
employee1.printInfo();
console.log(employee1._age);
// Output:
// Name: Alice, Age: 30, Email:
