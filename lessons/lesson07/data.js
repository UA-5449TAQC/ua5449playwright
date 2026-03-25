"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.count = void 0;
let count = 20;
exports.count = count;
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`User ${this.name} is ${this.age} years old, and count is ${count}`);
    }
}
exports.User = User;
let user1 = {
    name: "Anna",
    age: 35,
    city: "Kyiv"
};
let user2 = {
    name: "Anna",
    age: 35,
};
//# sourceMappingURL=data.js.map