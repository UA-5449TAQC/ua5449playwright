
// let n = 0;

// while (n < 10) {
//     console.log(n);
//     n++;
// }

// console.log('Done!');

// let m = 0;

// do {
//     console.log(m);
//     m++;
// } while (m < 10);
// console.log('Done!');

// arr = [1, 2, 3, 4, 5];
// // while (arr.length > 0) {
// //     console.log(arr.pop());
// // }

// let i = 0;
// while (i < arr.length) {
//     console.log("arr[" + i + "] = " + arr[i]);
//     i++;
// }

// arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log("arr[" + i + "] = " + arr[i]);
// }
// for (let i = 0 , j = 0; i < arr.length; i++ , j+=2) {
//     console.log("arr[" + i + "] = " + arr[i] + " (j = " + j + ")");
// }

// const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// cities[cities.length + 2] = "Philadelphia";
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] === undefined) {
//         continue;
//     }
//     console.log("cities[" + i + "] = " + cities[i]);
// }
// for (const index in cities) {
//     cities[index] = cities[index].toUpperCase();
//     console.log("cities[" + index + "] = " + cities[index]);
// }
// // console.log(index)

// const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// // cities = ["Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
// cities[0] = "Philadelphia";
// cities.push("San Antonio");
// console.log(cities);

// // const n = 10;
// // n++;

// const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// for (const index in cities) {
//     console.log("cities[" + index + "] = " + cities[index]);
//     cities.push("City " + index);
// }
// console.log(cities);
// for (let i=0; i < cities.length; i++) {
//     let city = cities[i];
//     console.log("cities[" + i + "] = " + cities[i]);
//     cities.push("City " + i);
//     if (i >= 10) {
//         break;
//     }
// }
// console.log(city);
// let, var, const, empty;

// for (let i = 0; i < 5; i++) {
//     a = i;
//     var b = i+1;
//     let c = i+2;
//     const d = i+3;
//     console.log("Inside loop: a = " + a + ", b = " + b + ", c = " + c + ", d = " + d);
// }
// console.log(a);
// console.log(b);
// // console.log(c);
// // console.log(d);

// function test() {
//     var d = 1000;
//     for (let i = 0; i < 5; i++) {
//         a = i;
//         var b = i+1;
//         let c = i+2;
//         const d = i+3;
//         console.log("Inside loop: a = " + a + ", b = " + b + ", c = " + c + ", d = " + d);
//     }
//     console.log("Inside function: a = " + a + ", b = " + b);
//     // console.log("Inside function: c = " + c + ", d = " + d);
// }

// test();
// console.log(a);
// console.log(d);
// console.log(b);
// console.log(c);
// console.log(d);
// for (var i = 0; i < 5; i++) {
//     console.log("i = " + i);
//     setTimeout(function() {
//         console.log("st i = " + i);
//     }, 1000);
// }

// for (let i = 0; i < 5; i++) {
//     console.log("i = " + i);
//     setTimeout(function() {
//         console.log("st i = " + i);
//     }, 1000);
//     console.log(i);
// }

// let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// cities[cities.length + 2] = "Philadelphia";
// for (let city of cities) {
//     console.log(city);
//     if (city !== undefined) {
//         city = city.toUpperCase();
//     }
//     console.log(city);

// }

// console.log(cities);



// while (true) {
//     let num = Math.random()*10;
//     console.log("Generated number: " + num);
//     if (num > 8) {
//         break;
//     }
//     if (num < 4) {
//         continue;
//     }
//     console.log("\tYou entered: " + num);
// }


for (let i = 0; i < 10; i++) {
    console.log("i = " + i);
    for (let j = 0; j < 10; j++) {
        console.log("\tj = " + j);
        if (i === j) {
            console.log("\t\tSkipping inner loop");
            continue;
        }
        console.log("\ti = " + i + ", j = " + j);
        if (j+3 > i ) {
            console.log("\t\tBreaking inner loop");
            break;
        }
    }
}