enum Position {
    Manager,
    Developer,
    Designer,
    Tester
}


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
    public name: string;
    protected _age: number;
    private __email: string;
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this._age = age;
        this.__email = email;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this._age}, Email: ${this.__email}`);
    }
}

class Employee extends Person {
    position: Position;
    constructor(name: string, age: number, email: string, position: Position) {
        super(name, age, email);
        this.position = position;
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Position: ${this.position}`);
    }
    getStringInfo(): string {
        let result = "";
        result += this.name;
        result += this._age;
        result += this.__email;
        result += this.position;
        return result;
    }
}

let employee1: Employee = new Employee("Alice", 30, "test@emal.com", Position.Manager);
employee1.printInfo();
console.log(employee1._age);
// Output:
// Name: Alice, Age: 30, Email: