let monthly_salary = 5000.00;
console.log(monthly_salary);

let tax_percentage = 0.23;


let monthly_tax = monthly_salary * tax_percentage;
console.log(monthly_tax.toFixed(2));

console.log(`The tax on $${monthly_salary.toFixed(2)}  is $${monthly_tax} after income tax taken out`)