var myElement = document.getElementById("intro");
var guess = -1;
var str = "";
var numTries = 1;
var number = Math.floor(Math.random()*10) + 1;
alert("The random number is "+number);
document.body.style.backgroundColor = "#99ccff";
myElement.style.textAlign = "center";

guess = prompt("pick a number between 1 and 10", "");
while(number != guess && numTries < 3){
    if (number < guess)
    alert("Too high");
    else 
        if (number > guess)
            alert("too low");
    numTries++
    guess = prompt("Pick a number between and 10", "");
}

if (number == guess && numTries ==1){
    document.body.style.backgroundColor = "yellow";
    myElement.style.fontcolor = "black";
    str = "<h1>CONGRATULATIONS!!<br/>YOU WIN!!<br/>The number is "+number+"<br/>It only took you 1 guess</h1>";
} else if (number == guess){
    str = "<h1>YOU WIN!!<br/>It took you "+numTries+" guesses!<br/>The number is "+number+"</h1>";
} else {
    document.body.style.backgroundColor = "red";
    str="<h1>YOU LOSE!!<br/>It took you more than 3 guesses!<br/>The number was "+number+"</h1>";
}
myElement.innerHTML = str;