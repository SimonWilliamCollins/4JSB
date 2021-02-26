var myDemo = document.getElementById("demo");
var num1;
var num2;
var code;

num1 = parseInt(prompt("input first number: ", "0"));
num2 = parseInt(prompt("enter secound number: ", "0"));
code = parseInt(prompt("enter code\n 1: sum\n 2: subtraction\n 3: multiplication\n 4: division", "1"));

switch (code){
case 1:
        myDemo.innerHTML = (num1+ " + " +num2+ " = " +(num1+num2));
        break;
case 2:
        myDemo.innerHTML = (num1+ " - " +num2+ " = " +(num1-num2));
        break;    
case 3:
        myDemo.innerHTML = (num1+ " * " +num2+ " = " +(num1*num2));
        break;
case 4:
        if (num2 != 0){
        myDemo.innerHTML = (num1+ " / " +num2+ " = " +(num1/num2));
        } else{
            alert("error. cannot dievide y 0");
        }
        break;
default:
        myDemo.innerHTML = "error in code";
    }