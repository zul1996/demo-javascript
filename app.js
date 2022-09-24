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
