
let count = 20;
class User {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    print() {
        console.log(`User ${this.name} is ${this.age} years old, and count is ${count}`)
    }
}
export {count, User};


interface IUser {
    name: string;
    age: number;
    city?: string;
}

let user1: IUser = {
    name: "Anna",
    age: 35,
    city: "Kyiv"
}

let user2: IUser = {
    name: "Anna",
    age: 35,
}
