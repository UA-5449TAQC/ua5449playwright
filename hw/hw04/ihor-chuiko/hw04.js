//01

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0 ) {
        console.log(i)
    }
}
        //01 optional

        let i = 0;

        while (i <= 20) {
            if (i % 2 == 0 ) {
                console.log(i);
            }
                i++;
        }

//02

let count = 10

while (count != 0) {
    console.log(count);
    count--;
}
console.log("Старт!!");

        //02 optional

        for (i = 10; i > 0; i--) {
            console.log(i);
        }
        console.log("Старт");

//03

const numbers = [5, 6, 1, 0, 4];
let i = 0;
let sum_of_numbers = 0;

do {
    sum_of_numbers += numbers[i];
    i ++;
}
while (i < numbers.length && numbers[i] != 0);
console.log("final sum " + sum_of_numbers);

        //03 optional

        const numbers = [55, 6, 1, 3, 4];
        let i = 0;
        let sum_of_numbers = 0;

        for (i = 0; i < numbers.length; i++) {
            if (numbers[i] != 0) {
                sum_of_numbers += numbers[i];
            } else break
        }
        console.log("final sum " + sum_of_numbers);


//04 

const users = ["ivan", "olga", "petro", "anna"];

for (i = 0; i < users.length; i++) {
    users[i] = users[i][0].toUpperCase() + users[i].slice(1);
}
console.log(users);

        //04 optional

        const users = ["ivan", "olga", "petro", "anna"];
        i = 0;

        do {
            users[i] = users[i][0].toUpperCase() + users[i].slice(1);
            i++;
        } while (i < users.length);
        console.log(users);

//05 

numbers_break = [2, 4, 6, 77, 73, 8, 7 ,4];

for (i = 0; i < numbers_break.length; i++) {
    if (numbers_break[i] == 7) {
        break;
    }
    console.log(i + " елемент масиву не 7");
}
console.log("Знайдено 7 ");

        //05 optional

        numbersBreak = [2, 4, 6, 71, 73, 7, 7 ,4];
        let i = 0;

        while (numbersBreak[i] != 7 && i < numbersBreak.length) {
            console.log(i + " елемент масиву не 7")
            i++;
        }
        console.log("Знайдено 7 ");


//06

for (i = 1; i <= 15; i++) {
    if (i % 3 == 0) {
        continue
    }
    console.log(i + " не ділиться на 3");
}

        //06 optional

        let i = 1;

        do {
            if (i % 3 != 0) {
                console.log(i + " не ділиться на 3");
            }
            i++;
        } while (i <= 15);

//07

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "black"
};

for (key in car) {
    console.log(key + ":", car[key]);
}

//08

const prices = [150, 200, 50, 430, 100];
let total = 0;

for (let item of prices) {
    total += item; 
}
console.log(total);

        //08 optional

        const prices = [-150, 200, 50, 430, 100];
        let total = 0;
        let i = 0;

        do {
            total += prices[i];
            i++;
        } while (i < prices.length)
        console.log(total);

//09

let message = "JavaScript";

for (letter of message) {
    console.log(letter + "-");
}

        //09 optional

        let message = "JavaScript";
        i = 0;
        while (i < message.length) {
            console.log(message[i] + "-");
            i++;
        }

//10

const random_numb = [1, 8, 4, -33, 5, -4, -10, -344];
let max_numb = random_numb[0];

for (number of random_numb) {
    if (number > max_numb) {
        max_numb = number;
    }
}
console.log(max_numb);

        //10 optional

        const random_numb = [-1, -8, 4, -33, 5, -4, -10, 344];
        let max_numb = random_numb[0];
        let i = 0;

        while (i < random_numb.length) {
            if (random_numb[i] > max_numb) {
                max_numb = random_numb[i];
            }
            i++;
        }
        console.log(max_numb);
        