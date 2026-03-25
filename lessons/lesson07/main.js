"use strict";
// import {User, count} from "./data";
Object.defineProperty(exports, "__esModule", { value: true });
// let user = new User("Anna", 35);
// console.log(user)
// user.print()
function decorator(originalMethod, context) {
    return function (...args) {
        console.log("Before");
        const result = originalMethod.apply(this, args);
        console.log("After");
        return result;
    };
}
class Oper {
    @decorator
    add(...ar) {
        console.log(ar);
        let sum = 0;
        for (let i = 0; i < ar.length; i++) {
            sum += ar[i];
        }
        return sum;
    }
    @decorator
    min(...ar) {
        console.log(ar);
        let min = ar[0];
        for (let i = 0; i < ar.length; i++) {
            if (min > ar[0]) {
                min = ar[0];
            }
        }
        return min;
    }
}
let o = new Oper();
let s = o.add(1, 2, 2, 3);
let m = o.min(1, 2, 2, 3);
//# sourceMappingURL=main.js.map