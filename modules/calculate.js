export function taxCalculation(moneySavings) {
  let taxPercentage = 3 / 100;
  let incomeTax = moneySavings * taxPercentage * 12;
  //   let incomeTax = (moneySavings * taxPercentage );
  return incomeTax;
}

export function totalCalculation(moneySavings) {
  let tax = taxCalculation(moneySavings);
  let income = moneySavings * 12 + tax;
  return income.toFixed(2);
}
