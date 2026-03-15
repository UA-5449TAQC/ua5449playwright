# TypeScript Practice Tasks

## Task 1 — Typed Utility Function

Create a function `calculateStatistics` that accepts an array of numbers and returns an object containing:

* `min` — the smallest number
* `max` — the largest number
* `average` — the average value

### Requirements

* Use proper **TypeScript types**
* The return type must be explicitly defined
* Handle the case when the array is empty (throw an error)

### Example Usage

```ts
const stats = calculateStatistics([5, 10, 15, 20]);

console.log(stats.min);      // 5
console.log(stats.max);      // 20
console.log(stats.average);  // 12.5
```

### Simple Test

```ts
console.log(calculateStatistics([1, 2, 3, 4]));
console.log(calculateStatistics([100, 200]));
```

---

# Task 2 — Interface and Object Implementation

Define an interface `User` with the following properties:

* `id: number`
* `name: string`
* `email: string`
* `isActive: boolean`

Create a function `printUserInfo(user: User): void` that prints user information in the following format:

```
User #1: John (john@email.com) - Active
```

### Example Usage

```ts
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
```

### Expected Output

```
User #1: John (john@email.com) - Active
User #2: Anna (anna@email.com) - Inactive
```

---

# Task 3 — Class with Methods

Create a class `Rectangle`.

### Properties

* `width: number`
* `height: number`

### Methods

* `getArea(): number`
* `getPerimeter(): number`
* `printInfo(): void`

### Example Usage

```ts
const rect = new Rectangle(10, 5);

console.log(rect.getArea());       // 50
console.log(rect.getPerimeter());  // 30

rect.printInfo();
```

### Expected Output

```
Rectangle 10x5
Area: 50
Perimeter: 30
```

---

# Task 4 — Class Implementing Interface

Create an interface `Playable` with the method:

```ts
play(): void
```

Create a class `VideoPlayer` that implements this interface.

### Class Properties

* `title: string`
* `duration: number` (seconds)

### Methods

* `play()`
* `getDurationInMinutes(): number`

### Example Usage

```ts
const video = new VideoPlayer("TypeScript Tutorial", 600);

video.play();

console.log(video.getDurationInMinutes());
```

### Expected Output

```
Playing TypeScript Tutorial
10
```

---

# Task 5 — Method Decorator (Logging)

Create a **method decorator** called `logExecution`.

### Behavior

The decorator should log:

* method name
* arguments
* returned result

### Example Usage

```ts
class Calculator {

  @logExecution
  add(a: number, b: number): number {
    return a + b;
  }

}

const calc = new Calculator();

const result = calc.add(2, 3);
console.log("Returned value:", result);
```

### Expected Console Output

```
Method add called with arguments: [2, 3]
Result: 5
Returned value: 5
```

---

# Goal

These tasks help practice:

* TypeScript types
* Interfaces
* Classes
* Class methods
* Decorators
* Function typing
