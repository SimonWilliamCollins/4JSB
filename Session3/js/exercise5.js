var myDemo = document.getElementById("demo");
myDemo.style.fontSize="40px"

function getnumber(){
    var num = 0;
    num = parseInt(prompt("Please enter your number", "1"));
    return num;
}

function sum(){
    var num1 = 0;
    var num2 = 0;
    num1 = getnumber();
    num2 = getnumber();
    myDemo.innerHTML=num1+ " + " +num2+ " = " + (num1+num2);
    myDemo.style.color="blue";
    return;
}

function subtract(){
    var num1 = 0;
    var num2 = 0;
    num1 = getnumber();
    num2 = getnumber();
    myDemo.innerHTML=num1+ " - " +num2+ " = " + (num1-num2);
    myDemo.style.color="green";
    return;
}

function multiply(){
    var num1 = 0;
    var num2 = 0;
    num1 = getnumber();
    num2 = getnumber();
    myDemo.innerHTML=num1+ " * " +num2+ " = " + (num1*num2);
    myDemo.style.color="red";
    return;
}

function divide(){
    var num1 = 0;
    var num2 = 0;
    num1 = getnumber();
    num2 = getnumber();
    if (num2!=0){
        myDemo.innerHTML=num1+ " / " +num2+ " = " + (num1/num2);
        myDemo.style.color="blue";
    } else {
        myDemo.innerHTML=" ";
        alert("your have destoryed the wolrd divide by ZERO!");
    }
    return;
}