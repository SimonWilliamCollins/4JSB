var num1;
var num2;
var answer;
var myDemo = document.getElementById("demo");
var myString;

num1 = parseInt(prompt("Enter first number", "1"));
num2 = parseInt(prompt("Enter second number", "1"));
answer = num1 + num2;
myString = num1 + " + " + num2 + " = " + answer;
answer = num1 - num2;
myString = myString + "<br />" + num1 + " - " + num2 + " = " + answer;
answer = num1 * num2;
myString = myString + "<br />" + num1 + " * " + num2 + " = " + answer;
answer = num1 / num2;
myString = myString + "<br />" + num1 + " / " + num2 + " = " + answer;
myDemo.innerHTML = myString;
myDemo.style.color = "Blue";
myDemo.style.fontSize = "40px";