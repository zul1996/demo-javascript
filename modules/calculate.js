export function taxCalculation(moneySavings) {
  let taxPercentage = 3 / 100;
  let incomeTax = moneySavings * taxPercentage * 12;
  //   let incomeTax = (moneySavings * taxPercentage );
  return incomeTax;
}

export function totalCalculation(moneySavings) {
  let tax = taxCalculation();
  let income = moneySavings + tax;
  return income.toFixed(2);
}
