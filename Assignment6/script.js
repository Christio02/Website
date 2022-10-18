
const form = document.querySelector("form").elements;
const income = form["income"];
const wealth = form["wealth"];


const tax = form["tax"];

function calculateTax() {
        tax.value = (0.35 * income.value) + (0.25 * wealth.value);
} 




income.addEventListener("input", calculateTax);

wealth.addEventListener("input", calculateTax);



// return the tax value to the input id = tax 

c = 0.1 + 0.2 === 0.3 
console.log(c) // false
