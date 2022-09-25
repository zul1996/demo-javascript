
// LETS MAKE SAVING INTEREST MONEY

let money = 1_800_000
let isAnswer = "";

function taxCalculation() {
    let taxPercentage = 3 / 100
    let incomeTax = money * taxPercentage * 30 / 365
    return incomeTax
}

function earnCalculationPerMonth() {
    for (let month = 1; month <= 12; month++) {
        tax = 0
        if (month > 1) {
            tax = money + taxCalculation()
        }

        isAnswer += ` Calender : ${month} month  \n Saving money ${money.toFixed(2)} \n earn tax ${taxCalculation().toFixed(2)} \n ---------- \n `
        money = money + taxCalculation()
        console.log(isAnswer);
    }
}


console.log(earnCalculationPerMonth());

