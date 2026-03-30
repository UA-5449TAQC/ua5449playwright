// Task 1 — Typed Utility Function

function calculateStatistics(numbers: number[]): {  min: number; max: number; average: number;} {
    if (numbers.length === 0) {
        throw new Error("The array cannot be empty."); //do not use console.log because then I should return void, but I need object
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    let sum: number = 0;
    for (const num of numbers) {
        sum += num;
    }
    const average = sum / numbers.length;

    return { min, max, average };
}

let stats = calculateStatistics([5, 10, 15, 20]);

console.log(stats.min);      // 5
console.log(stats.max);      // 20
console.log(stats.average);  // 12.5

console.log(calculateStatistics([1, 2, 3, 4]));
console.log(calculateStatistics([100, 200]));

//Task 2 — Interface and Object Implementation

interface User {
    id: number
    name: string
    email: string
    isActive: boolean
}

function printUserInfo(user: User): void {
    const activeStatus: string = user.isActive ? "Active" : "Inactive";
    console.log(`User #${user.id}: ${user.name} (${user.email}) - ${activeStatus}`);
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

//Task 3 — Class with Methods

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
        console.log(`Rectangle ${this.width}x${this.height}\nArea: ${this.getArea()}\nPerimeter: ${this.getPerimeter()}`);
    }
}

const rect = new Rectangle(10, 5);

console.log(rect.getArea());       // 50
console.log(rect.getPerimeter());  // 30

rect.printInfo();

//Task 4 — Class Implementing Interface

interface Playable {
    play(): void;
}

class VideoPlayer implements Playable {
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

// Task 5 — Method Decorator (Logging)

function logExecution(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method ${propertyKey} called with arguments: ${args}`);
        return originalMethod.apply(this, args);
    };

}

class Calculator {

  @logExecution
  add(a: number, b: number): number {
    return a + b;
  }

}

const calc = new Calculator();

const result = calc.add(2, 3);
console.log("Returned value:", result);