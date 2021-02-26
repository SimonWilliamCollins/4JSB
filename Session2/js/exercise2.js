var myDemo = document.getElementById("demo");
var age;

age = parseInt(prompt("Please enter your age", "0"));

if (age <= 3){
    myDemo.style.color = "green";
    myDemo.style.fontSize = "20px";
    myDemo.style.fontWeight = "500";
    document.bgColor = "blue";
    myDemo.innerHTML = "You are a toddler";
} else if (age < 18) {
    document.bgColor = "lightblue";
    myDemo.style.color = "blue";
    myDemo.style.fontSize = "30px";
    myDemo.style.fontWeight = "600";
    myDemo.innerHTML = "You are a child";
} else if (age <= 40){
    document.bgColor = "darkblue";
    myDemo.style.color = "blue";
    myDemo.style.fontSize = "30px";
    myDemo.style.fontWeight = "600";
    myDemo.innerHTML = "You are a adult";
} else if (age <= 65){
    document.bgColor = "red";
    myDemo.style.color = "blue";
    myDemo.style.fontSize = "30px";
    myDemo.style.fontWeight = "600";
    myDemo.innerHTML = "You are a middle aged";
} else {
    document.bgColor = "yellow";
    myDemo.style.color = "red";
    myDemo.style.fontSize = "30px";
    myDemo.style.fontWeight = "600";
    myDemo.innerHTML = "You are a over the hill";
}