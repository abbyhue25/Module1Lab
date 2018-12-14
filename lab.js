var userName = window.prompt("Please enter your name.");
var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName;

var num1 = parseInt(window.prompt("Enter a number"));
var num2 = parseInt(window.prompt("Enter another number"));
var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");
operand1.innerHTML += num1;
operand2.innerHTML += num2;

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2;

var numbersString = num1 + " and " + num2 + " is ";
document.getElementById("addition").innerHTML = "The sum of " + numbersString + sum;
document.getElementById("subtraction").innerHTML = "The difference of " + numbersString + difference;
document.getElementById("multiplication").innerHTML = "The product of " + numbersString + product;
document.getElementById("division").innerHTML = "The quotient of " + numbersString + quotient;
document.getElementById("modulus").innerHTML = "The result of the mod operation on " + numbersString + modResult;
