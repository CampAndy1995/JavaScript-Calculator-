// Function to perform addition
function add(num1, num2) {
    return num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to perform multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to perform division
function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

// Function to clear the calculator
function clearCalculator() {
    document.getElementById("result").innerHTML = "";
}

// Function to calculate and display result
function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;

    var result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}

