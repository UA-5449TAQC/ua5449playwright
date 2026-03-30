//1. Typed Utility Function
// npx ts-node hw/hw07/Yevhenii-Bodnar/Yevhenii-Bodnar.ts - command to run the code
console.log("1. Typed Utility Function");

interface Statistics { // Define an interface Statistics with min, max, and average properties
  min: number;
  max: number;
  average: number;
}

function calculateStatistics(numbers: number[]): Statistics { // Create a function calculateStatistics that takes an array of numbers and returns an object of type Statistics
  if (numbers.length === 0) {
    throw new Error("Array must not be empty");
  }

  const min = Math.min(...numbers); // Use Math.min and Math.max to calculate the minimum and maximum values in the array
  const max = Math.max(...numbers);
  const average = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;

  return { min, max, average }; // Return an object with the calculated statistics
}

const stats = calculateStatistics([5, 10, 15, 20]);
console.log(stats.min);     // 5
console.log(stats.max);     // 20
console.log(stats.average); // 12.5

console.log(calculateStatistics([1, 2, 3, 4]));
console.log(calculateStatistics([100, 200]));

//2. User Interface
console.log("\n2. User Interface");

interface User { // Define an interface User with id, name, email, and isActive properties
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function printUserInfo(user: User): void { // Add a function that prints user information in the following format  const status = user.isActive ? "Active" : "Inactive";
  const status = user.isActive ? "Active" : "Inactive";
  console.log(`User #${user.id}: ${user.name} (${user.email}) - ${status}`);
}

const user1: User = { // Create 2 user objects (user1, user2)
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

printUserInfo(user1);// Call the function for both users
printUserInfo(user2);

// 3. Class with Methods
console.log("\n3. Class with Methods");

interface Rectangle { // Define an interface Rectangle with width and height properties
  width: number;
  height: number;
}

class Rectangle implements Rectangle { // Create a class Rectangle 
  constructor(public width: number, public height: number) {}

  getArea(): number { // Add a method getArea that calculates and returns the area of the rectangle
    return this.width * this.height;
  }

  getPerimeter(): number { // Add a method getPerimeter that calculates and returns the perimeter of the rectangle
    return 2 * (this.width + this.height);
  }

  getDiagonal(): number { // Add a method getDiagonal that calculates and returns the length of the diagonal of the rectangle using the Pythagorean theorem
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }

  printInfo(): void { // Add a method printInfo that prints the rectangle's dimensions, area, perimeter, and diagonal in the following format
    console.log(`Rectangle: ${this.width} x ${this.height}`);
    console.log(`Area: ${this.getArea()}`);
    console.log(`Perimeter: ${this.getPerimeter()}`);
    console.log(`Diagonal: ${this.getDiagonal().toFixed(2)}`);
  }
}
const rect = new Rectangle(10, 5);

console.log(rect.getArea());       // 50
console.log(rect.getPerimeter());  // 30
console.log(rect.getDiagonal());   // 11.18

rect.printInfo();

// 4. Class Implementing Interface
console.log("\n4. Class Implementing Interface");

interface Playable { // Define an interface Playable with a method play 
  play(): void;
}

class VideoPlayer implements Playable { // Create a class VideoPlayer that implements the Playable interface
  title: string;
  duration:number;

  constructor(title: string, duration: number) { // Add a constructor that initializes the title and duration properties
    this.title = title;
    this.duration = duration;
  }

  play(): void {// Implement the play method to print a message in the following format
    console.log(`Playing video: ${this.title} (${this.duration} seconds)`);
  }

  getDurationInMinutes(): number { // Add a method getDurationInMinutes that returns the duration of the video in minutes
    return this.duration / 60;
  }
  getDurationInhours(): number { // Add a method getDurationInHours that returns the duration of the video in hours
    return this.duration / 3600;
  }
}

const video = new VideoPlayer("TypeScript Tutorial", 600);
video.play();
  console.log(video.getDurationInMinutes());
  console.log(video.getDurationInhours());

  // 5. Method Decorator (Logging)
console.log("\n5. Method Decorator (Logging)");

function logExecution( // Create a method decorator logExecution with target, propertyKey, and descriptor parameters
  target: object, 
  propertyKey: string, 
  descriptor: PropertyDescriptor 
): PropertyDescriptor { // Store the original method in a variable
  const originalMethod = descriptor.value; 

  descriptor.value = function (...args: unknown[]) { // Modify the method to log the method name, arguments, and return value each time it is called
    console.log(`Method ${propertyKey} called with arguments: [${args}]`); // Call the method and display in such template
    const result = originalMethod.apply(this, args);
    console.log(`Result: ${result}`);
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
const result = calc.add(2, 3);
console.log("Returned value:", result);
