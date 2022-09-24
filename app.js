// TEST 

console.log('Muhammad Zulkarnaen Indranto');
console.log('catamyst batch 1');

// Javascript Variable

var nickName = 'Muhammad Zulkarnaen Indranto';
let age = '26';
const job = "Front-End"

age = '30'
nickName = 'flatena'


console.log(nickName, age, job);
console.log([nickName, age, job])

const messages = ['Hello', 'World']
messages[0] = 123456;

console.log(messages);

// fizz buzz logic tes



let isAnswer = "";

for (let number = 1; number <= 35; number++) {
    let changeNumber = number;

    if (number % 3 === 0 && number % 5 === 0) {
        changeNumber = "Fizz Buzz";
    } else if
        (number % 3 === 0) {
        changeNumber = "Fizz"
    } else if
        (number % 5 === 0) {
        changeNumber = "Buzz"
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
    isAnswer1 = isAnswer1 + `${multipleNumber}, `
    // console.log(multipleNumber);
}

console.log(isAnswer1);

// SALARY

const employeeActiveDays = prompt('Enter your days ?')
const employeeDays = 27;
const salaryDays = 20000;

function salaryCalculation() {
    totalSalary = salaryDays * employeeActiveDays;
    return totalSalary
}

function isPayment() {

    employeePay = employeeActiveDays

    if (employeePay < 10) {
        console.log('you dont get salary')
    } else if (employeePay > 10) {
        console.log('Salary ' + salaryCalculation())
    }
    return employeePay

}

console.log(isPayment());




// function sum(a, b) {
//     // return
//     return a + b
// }

// function fixSalary(salary, tax) {
//     const taxPercentage = tax / 100
//     const taxAmout = salary * taxPercentage
//     const isSalary = sum(salary, taxAmout)
//     return isSalary

// }


// console.log(fixSalary(4000000, 11))
