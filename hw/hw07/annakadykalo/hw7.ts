console.log("______________________Task 1_________________________");


function calculateStatistics(numbers: number[]): { min: number; max: number; average: number } {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let sum = 0;
    let min = numbers[0];
    let max = numbers[0];

    for (let num of numbers) {
        sum += num;
        if (num < min) min = num;
        if (num > max) max = num;
    }

    let average = sum / numbers.length;

    return { min, max, average };
}

let stats1 = calculateStatistics([10, 20, 30, 40, 50]);
console.log(`Min: ${stats1.min}, Max: ${stats1.max}, Average: ${stats1.average}`);

// let stats2 = calculateStatistics([]);   //will throw an error because the array is empty
// console.log(`Min: ${stats2.min}, Max: ${stats2.max}, Average: ${stats2.average}`);


console.log("______________________Task 2_________________________");

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function printUserInfo(user: User): void {
    enum IsActive {
        Inactive,
        Active
    }

    console.log(`User #${user.id}: ${user.name} (${user.email}) - ${IsActive[user.isActive ? 1 : 0]}`);
}

const user1: User = {
    id: 1,
    name: "John",
    email: "john@email.com",
    isActive: true
};

const user2: User = {
    id: 2,
    name: "Anna",
    email: "anna@email.com",
    isActive: false
};

printUserInfo(user1);
printUserInfo(user2);


console.log("______________________Task 3_________________________");

class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
    printInfo(): void {
        console.log(`Rectangle ${this.width}x${this.height} \nArea: ${this.getArea()} \nPerimeter: ${this.getPerimeter()}`)
    }
}

const rect = new Rectangle(10, 5);

console.log(rect.getArea());       // 50
console.log(rect.getPerimeter());  // 30

rect.printInfo();


console.log("______________________Task 4_________________________");

interface Playlable {
    play(): void;
}
class VideoPlayer implements Playlable {
    title: string;
    duration: number;

    constructor(title: string, duration: number) {
        this.title = title;
        this.duration = duration;
    }

    play(): void {
        console.log(`Playing ${this.title}`);

    }
    getDurationInMinutes(): number {
        return this.duration / 60;
    }
}

const video = new VideoPlayer("TypeScript Tutorial", 600);

video.play();

console.log(video.getDurationInMinutes());


console.log("______________________Task 5_________________________");

function logExecution(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    console.log(descriptor);

    descriptor.value = function (...args: any[]) {
        console.log(`Method ${propertyKey} called with arguments: [${args}]`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    };

    return descriptor;
}

class Calculator {

    @logExecution
    add(a: number, b: number): number {
        console.log(`Executing add with arguments: ${a}, ${b}`);
        return a + b;
    }
}

const calc = new Calculator();

const result = calc.add(2, 3);
console.log("Returned value:", result);