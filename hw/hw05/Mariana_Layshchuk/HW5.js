// Task 1. Conditional Sum

// Create a function:
// function sumWithConditions(limit) {}

// * Use a `while` loop.
// * Sum numbers from `1` to `limit`.
// * Skip numbers divisible by 3.
// * Stop if number becomes greater than 40.
// * Return the final sum.

function sumWithConditions(limit) {

    let number = 1;
    let sum = 0;

    while (number<=limit) {
        if (number > 40) {
        break;    
        }
    
    number++;

    if (number%3 === 0) {
        number++;
        continue;
    }

    sum +=number;
    number++;
}

return sum;
}
console.log(sumWithConditions(43));