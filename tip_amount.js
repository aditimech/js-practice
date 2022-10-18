let foodBill = 50.00;

let tip_percentage = 0.10;

let tip_amount = foodBill * tip_percentage;
console.log(tip_amount);
let totalBill = foodBill + tip_amount;
console.log(totalBill);

console.log(`The tip on $${foodBill.toFixed(2)} food bill is $${tip_amount}`)