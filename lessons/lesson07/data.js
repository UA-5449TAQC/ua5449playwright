"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var count = 20;
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.print = function () {
        console.log("User ".concat(this.name, " is ").concat(this.age, " years old, and count is ").concat(count));
    };
    return User;
}());
exports.User = User;
