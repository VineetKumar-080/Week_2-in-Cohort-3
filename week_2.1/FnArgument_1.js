function sum(a, b) {
return a + b;
}

function multiply(a, b) {
return a * b;
}

function subtract(a, b) {
return a - b;
}

function divide(a, b) {
return a / b;
}

function doOperation(a, b, op) {
let val = op(a, b)
return val;
}

const ans = doOperation(1,2,sum);
console.log();
