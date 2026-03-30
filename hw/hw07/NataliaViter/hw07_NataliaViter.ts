//Task 1 — Typed Utility Function

/* type Statistics = {
  min: number;
  max: number;
  average: number;
};
function calculateStatistics(numbers: number[]): Statistics {
  if (numbers.length === 0) {
    throw new Error("Array must not be empty");
  }
  let min = numbers[0];
  let max = numbers[0];
  let sum = 0;
  for (const num of numbers) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }
  const average = sum / numbers.length;
  return {
    min,
    max,
    average,
  };
}
const result = calculateStatistics([4, 5, 6, 7, 8]);
console.log(result);// { min: 4, max: 8, average: 6 }
 */

//Task 2 — Interface and Object Implementation

/* 
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
function printUserInfo(user: User): void {
  const status = user.isActive ? "Active" : "Inactive";
  console.log(`User #${user.id}: ${user.name} (${user.email}) - ${status}`);
}
const user: User = {
  id: 1,
  name: "Natalie",
  email: "viter@email.com",
  isActive: true,
};
printUserInfo(user);
// User #1: Natalie (viter@email.com) - Active
 */

//Task 3 — Class with Methods

/* class Rectangle {
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
    console.log(
      `Rectangle: width=${this.width}, height=${this.height}, area=${this.getArea()}, perimeter=${this.getPerimeter()}`
    );
  }
}
const rect = new Rectangle(8, 16);
console.log(rect.getArea());       // 128
console.log(rect.getPerimeter());  // 48
rect.printInfo();//Rectangle: width=8, height=16, area=128, perimeter=48
 */

//Task 4 — Class Implementing Interface

/* interface Playable {
  play(): void;
}
class VideoPlayer implements Playable {
  title: string;
  duration: number; // seconds
  constructor(title: string, duration: number) {
    this.title = title;
    this.duration = duration;
  }
  play(): void {
    console.log(`Playing "${this.title}"...`);
  }
  getDurationInMinutes(): number {
    return this.duration / 60;
  }
}
const video = new VideoPlayer("My Video", 480);
video.play(); // Playing "My Video"...
console.log(video.getDurationInMinutes()); // 8 */

//Task 5 — Method Decorator (Logging)

function logExecution(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Method: ${propertyKey}`);
    console.log(`Arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };
  return descriptor;
}
class Calculator {
  @logExecution
  add(a: number, b: number): number {
    return a + b;
  }
}
const calc = new Calculator();
calc.add(2, 3);
