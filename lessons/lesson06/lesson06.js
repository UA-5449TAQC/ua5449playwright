// let employee = {
//     firstName: "Peter",
//     lastName: "Peterson",
//     position: "developer",
//     experience : 4,
//     1: "one",
//     fullName: function(){
//         // console.log(this);
//         return this.firstName + " " + this.lastName; 
//     }
// }
// console.log(employee);
// console.log(employee.firstName);
// console.log(employee["lastName"]);
// console.log(employee[1]);
// console.log(employee["test key"]);
// console.log(employee.test);
// employee.test = "test value";
// console.log(employee);
// employee["test key"] = "test value";
// console.log(employee);
// console.log(employee.fullName());
// console.log(employee.fullName);
// console.log(this);


// literally creating an object
// let employee1 = {
//     firstName: "Peter",
//     lastName: "Peterson",
//     position: "developer",
//     experience : 4,
//     fullName: function(){
//         // console.log(this);
//         return this.firstName + " " + this.lastName + " - " + this.position + " with " + this.experience + " years of experience"; 
//     },
//     experienceUpdate: function(years){
//         this.experience += years;
//     }
// }
// let employee2 = {
//     firstName: "John",
//     lastName: "Johnson",
//     position: "designer",
//     experience : 2,
//     fullName: function(){
//         // console.log(this);
//         return this.firstName + " " + this.lastName + " - " + this.position + " with " + this.experience + " years of experience"; 
//     },
//     experienceUpdate: function(years){
//         this.experience += years;
//     }
// }
// console.log(employee1.fullName());
// console.log(employee2.fullName());
// employee1.experienceUpdate(2);
// employee2.experienceUpdate(3);
// console.log(employee1.fullName());
// console.log(employee2.fullName());

// let employee3 = new Object();
// employee3.firstName = "Alice";
// employee3.lastName = "Anderson";
// employee3.position = "manager";
// employee3.experience = 5;
// employee3.fullName = function(){
//     return this.firstName + " " + this.lastName + " - " + this.position + " with " + this.experience + " years of experience";
// };
// console.log(employee3.fullName());

// function constructor
// function Employee(firstName, lastName, position, experience){
//     this.allArguments = arguments;
   
//     this.firstName = firstName;
//     this.lastName = lastName;
//     if (position === undefined){
//         this.position = "trainee";
//     } else {
//         this.position = position;
//     }
//     this.experience = experience === undefined ? 0 : experience;
//     this.fullName = function(){
//         return this.firstName + " " + this.lastName + " - " + this.position + " with " + this.experience + " years of experience";
//     };
//     this.experienceUpdate = function(years){
//         this.experience += years;
//     };
//     this.allParams = function(){
//         let params = "";
//         console.log(this.allArguments);
//         for (let i = 0; i < this.allArguments.length; i++){
//             params += this.allArguments[i] + ", ";
//         }
//         return params;
//     };
// }

// employee1 = new Employee("Peter", "Peterson", "developer", 4);
// employee2 = new Employee("John", "Johnson", "designer", 2);
// employee3 = new Employee("Alice", "Anderson", "manager", 5);
// employee4 = new Employee("Bob", "Brown");

// employes = [employee1, employee2, employee3, employee4, new Employee("Charlie", "Clark", "analyst", 3, "test", "test value", "test key", "test value")];
// for (let i = 0; i < employes.length; i++){
//     employes[i].experienceUpdate(i);
//     console.log(employes[i].fullName());
//     console.log("\t" + employes[i].allParams());
// }

// console.log(employee1.hasOwnProperty("firstName"));
// console.log(employee1.hasOwnProperty("fullName"));
// console.log(employee1.hasOwnProperty("firstName1"));


// class constructor
// class Employee {
//     static allInstances = [];
//     constructor(firstName, lastName, position, experience){
//         this.allArguments = arguments;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         if (position === undefined){
//             this.position = "trainee";
//         }
//         else {
//             this.position = position;
//         }   
//         this.experience = experience === undefined ? 0 : experience;
//         Employee.allInstances.push(this);
//     }
//     fullName(){
//         return this.firstName + " " + this.lastName + " - " + this.position + " with " + this.experience + " years of experience";
//     }
//     experienceUpdate(years){
//         this.experience += years;
//     }
//     allParams(){
//         let params = "";
//         console.log(this.allArguments);
//         for (let i = 0; i < this.allArguments.length; i++){
//             params += this.allArguments[i] + ", ";
//         }
//         return params;
//     }
//     static staticMethod(){
//         // console.log(this);
//         return "This is a static method";
//     }
//     static count(){
//         return Employee.allInstances.length;
//     }
//     static printAllInstances(){
//         for (let i = 0; i < Employee.allInstances.length; i++){
//             console.log(Employee.allInstances[i].fullName());
//         }
//     }
//     destroy(){
//         const index = Employee.allInstances.indexOf(this);
//         if (index > -1) {
//             Employee.allInstances.splice(index, 1);
//         }
//         delete this;
//     }
// }
// employee1 = new Employee("Peter", "Peterson", "developer", 4);
// employee2 = new Employee("John", "Johnson", "designer", 2);
// employee3 = new Employee("Alice", "Anderson", "manager", 5);
// employee4 = new Employee("Bob", "Brown");
// employee5 = new Employee("Charlie", "Clark", "analyst", 3, "test", "test value", "test key", "test value");
// employes = [employee1, employee2, employee3, employee4, employee5];
// // for (let i = 0; i < employes.length; i++){
// //     employes[i].experienceUpdate(i);
// //     console.log(employes[i].fullName());
// //     console.log("\t" + employes[i].allParams());
// // }

// // console.log(employee1.hasOwnProperty("firstName"));
// // console.log(employee1.hasOwnProperty("fullName"));
// // console.log(employee1.hasOwnProperty("firstName1"));
// // console.log(employee1 instanceof Employee);
// // console.log(Employee.fullName()); // error, fullName is not a static method of Employee class
// console.log(Employee.staticMethod());
// // console.log(employee1.staticMethod()); // error, staticMethod is not a method of employee1 instance
// console.log(Employee.count());
// // employee1.destroy();
// console.log(employee1); // undefined, employee1 is deleted
// Employee.printAllInstances();

// class Point {
//     constructor(x, y){
//         this._x = x;
//         this.__y = y;
//     }
//     getX(){
//         console.log("Getting x value");
//         return this._x;
//     }
//     setX(value){
//         console.log("Setting x to " + value);
//         this._x = value;
//     }
//     get y(){
//         console.log("Getting y value");
//         return this.__y;
//     }
//     set y(value){
//         console.log("Setting y to " + value);
//         this.__y = value;
//     }
//     coordinates(){
//         return `(${this._x}, ${this.__y})`;
//     }
//     print(){
//         console.log(`Point${this.coordinates()}`);
//     }
// }
// let point1 = new Point(2, 3);
// console.log(point1.coordinates());
// console.log(point1._x);
// console.log(point1.__y);
// point1.setX(4);
// console.log(point1.getX());
// point1.y = 6;
// console.log(point1.y);
// console.log(point1.coordinates);

// class PointColor extends Point {
//     constructor(x, y, color){
//         super(x, y);
//         this.color = color;
//     }
//     print(){
//         // super.print(); // call the print method of the parent class
//         console.log(`PointColor${this.coordinates()} with color ${this.color}`);
//     }
// }

// point2 = new PointColor(5, 6, "red");
// console.log(point2.coordinates());
// console.log(point2.color);
// point1.print();
// point2.print();

let name = "John";
let age = 30;
let city = "New York";
function getInfoCity(n){

    return "City inside function: " + city;
}
console.log("My name is name=" + name+", I am " +age+" years old and I live in " +city+".");
console.log(`My name is name=${name}, I am ${age**2} years old and I live in ${getInfoCity(city)}.`);
