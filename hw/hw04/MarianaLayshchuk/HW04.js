// 1

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 2

let i = 10;

while (i>=1) {
    console.log(i);
i--;
}

console.log("Start!")

// 3

const numbers = [5, 12, 8, 0, 10];
i = 0;
let finalsum = 0;

do {
    if (numbers[i] === 0) {
        break;
    }

    finalsum +=numbers[i];
    i++;
}
while (i < numbers.length);
console.log(finalsum);

// 4

const users = ["ivan", "olga", "petro", "anna"];

for (let n = 0; n < users.length; n++) {
  users[n] = users[n][0].toUpperCase() + users[n].slice(1);
}

console.log(users);

 // 5

 const new_array = [3, 5, 12, 8, 9, 7, 4, 0]
 i = 0;
 while (i < new_array.length) {
    if (new_array[i] === 7) {
    console.log("Знайдено!");
    break;
  }
  i++;
    }

 // 6

 for (let k = 1; k <= 15; k++) {

  if (k % 3 === 0) {
    continue; // пропускаємо числа, кратні 3
  }
  console.log(k);
}
