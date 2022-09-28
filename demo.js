// TEST

console.log("Muhammad Zulkarnaen Indranto");
console.log("catamyst batch 1");

// Javascript Variable

var nickName = "Muhammad Zulkarnaen Indranto";
let age = "26";
const job = "Front-End";

age = "30";
nickName = "flatena";

console.log(nickName, age, job);
console.log([nickName, age, job]);

const messages = ["Hello", "World"];
messages[0] = 123456;

console.log(messages);

// fizz buzz logic tes

let isAnswer = "";

for (let number = 1; number <= 35; number++) {
  let changeNumber = number;

  if (number % 3 === 0 && number % 5 === 0) {
    changeNumber = "Fizz Buzz";
  } else if (number % 3 === 0) {
    changeNumber = "Fizz";
  } else if (number % 5 === 0) {
    changeNumber = "Buzz";
  }
  isAnswer = isAnswer + `${changeNumber}, `;
}
const correctAnswer =
  "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, ";

const isCorrect = correctAnswer === isAnswer;

console.log(isCorrect);
console.log(isAnswer);

// TEST LIKE FIZZ BUZZ
/*
Write a javascript program that displays the numbers from 10 to 100. 
But for multiples of 4 print "Penny" instead of the number and for multiples of 6 print "Leonard". 
For numbers which are multiples of both 4 and 6 print "Bazzinga"
*/

let isAnswer1 = "";

for (let number = 10; number <= 100; number++) {
  // console.log(number);
  let multipleNumber = number;

  if (number % 4 === 0 && number % 6 === 0) {
    multipleNumber = "Bazzinga";
  } else if (number % 4 === 0) {
    multipleNumber = "Penny";
  } else if (number % 6 === 0) {
    multipleNumber = "Leonard";
  }
  isAnswer1 = isAnswer1 + `${multipleNumber}, `;
  // console.log(multipleNumber);
}

console.log(isAnswer1);

// Salary App

const employeeActiveDays = prompt("Enter your active days?");
const employeeTotalDays = 22;
const salaryPerDay = 200_000; // IDR / Rp / Rupiah
const totalSalary = salaryPerDay * employeeActiveDays;

if (employeeActiveDays < 10) {
  console.log(
    `You don't get salary because you only work for ${employeeActiveDays} day(s)`
  );
} else if (employeeActiveDays >= 10) {
  console.log("You get a salary of Rp " + totalSalary);
}

// Pisahkan Genap dan Ganjil dari angka 1 s/d 100

let oddNumber = [];
let evenNumber = [];

for (let number = 0; number <= 100; number++) {
  if (number % 2 == 0) {
    oddNumber = [...oddNumber, number];
  } else {
    evenNumber = [...evenNumber, number];
  }
}

console.log({ oddNumber, evenNumber });

// Bilagan prima

let isPrime = [];

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
  let number = 0;

  for (let divider = 1; divider <= currentNumber; divider++) {
    if (currentNumber % divider == 0) {
      number = number + 1;
    }
  }
  if (number == 2) {
    isPrime = [...isPrime, currentNumber];
  }
}

console.log(isPrime);

// Bilagan fibonachi

let isFibonacci = [];
let n1 = 0;
let n2 = 1;

for (let number = 0; number < 10; number++) {
  if (number === 0 || number === 1) {
    isFibonacci = [...isFibonacci, number];
  } else {
    let total = n1 + n2;
    isFibonacci = [...isFibonacci, total];
    n1 = n2;
    n2 = total;
  }
}

console.log(isFibonacci);

// Andi menabung 750.000 dibulan pertama dan mendapatkann bunga sebesar 6%
// pada bulan berikutnya, setiap bulan berikutnya andi menyisihkan 3% dari tabunggan
// dan maksimal yang diseparateMoneykan 3% dari 800.000 total tabungan andi 1 tahun

// let money = 750_000
// let hasil = "";

// for (let month = 1; month <= 12; month++) {
//     let tax = 0
//     let separateMoney = 0

//     if (month > 1) {
//         tax = money * 6 / 100;
//         if (money + tax > 800_000) {
//             separateMoney = 800_000 * 3 / 100
//         } else {
//             separateMoney = (money + tax) * 3 / 100;
//         }
//     }
//     hasil += ` start savings: ${money.toFixed(2)} \n Tax : ${tax} \n separateMoney : ${separateMoney} \n Money per Month ${month} : ${((money + tax) - separateMoney).toFixed(2)} \n -------- \n `;
//     money = (money + tax) - separateMoney;
// }

// console.log(hasil);

// LETS MAKE SAVING INTEREST MONEY

// let money = 1_800_000
// let isAnswer = "";

// function taxCalculation() {
//     let taxPercentage = 3 / 100
//     let incomeTax = money * taxPercentage * 30 / 365
//     return incomeTax
// }

// function earnCalculationPerMonth() {
//     for (let month = 1; month <= 12; month++) {
//         tax = 0
//         tax = money + taxCalculation()
//         isAnswer += ` Calender : ${month} month  \n Saving money ${money.toFixed(2)} \n earn tax ${taxCalculation().toFixed(2)} \n ---------- \n `
//         money = money + taxCalculation()
//     }

//     console.log(isAnswer);
// }

// console.log(earnCalculationPerMonth());
