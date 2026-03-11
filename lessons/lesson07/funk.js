// function add(a: number, b: number): number {
//     return a + b;
// }
// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }
// function logMessage(message: string): void {
//     console.log(message);
// }
// function addOrGreet(value: number | string): number | string {
//     if (typeof value === "number") {
//         return add(value, 10), logMessage(`Added 10 to ${value}`), value + 10;
//     } else {
//         return greet(value);
//     }
// }
// addOrGreet(5); // Output: 15
// addOrGreet("Alice"); // Output: "Hello, Alice!"
// function add(a: number, b: number): number;
// function add(a: string, b: number): string;
// function add(a: number | string, b: number): number | string {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//     } else if (typeof a === "string" && typeof b === "number") {
//         return a + b;
//     }   
// }
// console.log(add(5, 10)); // Output: 15
// console.log(add("Hello", 5)); // Output: "Hello5"
// console.log(add("Hello", "5")); // Output: "Hello5"
// function dispMessage(message: string, user: string = "DefUser", some: any): void {
//     console.log(`[${user}] ${message} ${some}`);
// }
// dispMessage("Hello, World!", "Alice", 123); // Output: "[Alice] Hello, World! 123"
// dispMessage("Hello, World!", undefined, 123); // Output: "[DefUser] Hello, World! 123"
// dispMessage("Hello, World!", "Bob", 123); // Output: "[Bob] Hello, World! 123"
function concatStrings() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    console.log(strings);
    return strings.join(" ");
}
console.log(concatStrings("Hello", "World", "from", "TypeScript")); // Output: "Hello World from TypeScript"
console.log(concatStrings("This", "is", "a", "test")); // Output: "This is a test"
