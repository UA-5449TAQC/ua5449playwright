//01

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0 ) {
        console.log(i)
    }
}
        //01 optional

        let i1 = 0;

        while (i1 <= 20) {
            if (i1 % 2 == 0 ) {
                console.log(i1);
            }
                i1++;
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

        const numbers3 = [55, 6, 2, 3, 4];
        let sum_of_numbers3 = 0;

        for (i = 0; i < numbers3.length; i++) {
            if (numbers3[i] != 0) {
                sum_of_numbers3 += numbers3[i];
            } else break
        }
        console.log("final sum " + sum_of_numbers3);


//04 

const users = ["ivan", "olga", "petro", "anna"];

for (i = 0; i < users.length; i++) {
    users[i] = users[i][0].toUpperCase() + users[i].slice(1);
}
console.log(users);

        //04 optional

        const users4 = ["ivan", "olga", "petro", "anna"];
        i = 0;

        do {
            users4[i] = users4[i][0].toUpperCase() + users4[i].slice(1);
            i++;
        } while (i < users4.length);
        console.log(users4);

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
        let i5 = 0;

        while (numbersBreak[i5] != 7 && i5 < numbersBreak.length) {
            console.log(i5 + " елемент масиву не 7")
            i5++;
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

        let i6 = 1;

        do {
            if (i6 % 3 != 0) {
                console.log(i6 + " не ділиться на 3");
            }
            i6++;
        } while (i6 <= 15);

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

        const prices8 = [-150, 200, 50, 430, 100];
        let total8 = 0;
        let i8 = 0;

        do {
            total8 += prices8[i8];
            i8++;
        } while (i8 < prices8.length)
        console.log(total8);

//09

let message = "JavaScript";

for (letter of message) {
    console.log(letter + "-");
}

        //09 optional

        let message2 = "JavaScript";
        i9 = 0;
        while (i9 < message2.length) {
            console.log(message2[i9] + "-");
            i9++;
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

        const random_numb2 = [-1, -8, 4, -33, 5, -4, -10, 344];
        let max_numb2 = random_numb2[0];
        let i10 = 0;

        while (i10 < random_numb2.length) {
            if (random_numb2[i10] > max_numb2) {
                max_numb2 = random_numb2[i10];
            }
            i10++;
        }
        console.log(max_numb2);
        