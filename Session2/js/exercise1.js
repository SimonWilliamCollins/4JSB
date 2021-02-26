var myDemo = document.getElementById("demo");
var age;

age = parseInt(prompt("Please enter your age", "0"));

if (age < 15){
    myDemo.style.color = "green";
    myDemo.style.fontSize = "20px";
    myDemo.style.fontWeight = "500";
    myDemo.innerHTML = "You are a child";
} else {
    myDemo.style.color = "blue";
    myDemo.style.fontSize = "30px";
    myDemo.style.fontWeight = "600";
    myDemo.innerHTML = "you are over 15";
}