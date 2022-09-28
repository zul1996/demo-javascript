import { taxCalculation, totalCalculation } from "./modules/calculate.js";

const savingsMoneyFormElement = document.getElementById("savings-area-form");
const savingsMoneyInputElement = document.getElementById("savings-money");
const totalSavingsTaxMoneyResult = document.getElementById(
  "totalsavingstax-area-result"
);
const totalSavingsMoneyResult = document.getElementById(
  "totalsavings-area-result"
);
const errorMessageElement = document.getElementById("error-message");

savingsMoneyFormElement.addEventListener("submit", (Event) => {
  try {
    event.preventDefault();

    const moneySavings = savingsMoneyInputElement.valueAsNumber;

    if (moneySavings <= 100_000) {
      throw new Error("Money Must be over Rp 100.000");
    }
    if (!moneySavings) {
      throw new Error("Value must exist");
    }

    const resultMoneyTaxSavings = taxCalculation(moneySavings);
    const resultMoneySavings = totalCalculation(moneySavings);

    if (!resultMoneySavings || !resultMoneyTaxSavings) {
      throw new Error("Result is undefined");
    }

    errorMessageElement.innerText = "";
    totalSavingsTaxMoneyResult.innerHTML = `Rp ${resultMoneyTaxSavings}`;
    totalSavingsMoneyResult.innerHTML = `Rp ${resultMoneySavings}`;
  } catch (error) {
    console.log(error);
    errorMessageElement.innerText = "";
    totalSavingsTaxMoneyResult.innerHTML = "Money Must be over Rp 100.000";
    totalSavingsMoneyResult.innerHTML = "Money Must be over Rp 100.000";
  }
});
