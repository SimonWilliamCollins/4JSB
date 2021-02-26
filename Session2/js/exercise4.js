var myDemo = document.getElementById("demo");
var d = new Date();
var hours = d.getHours();

if (hours < 12){
    myDemo.innerHTML = "good morning!";
} else if (hours == 12){
    myDemo.innerHTML = "Lunch Time!";
} else if (hours < 18){
    myDemo.innerHTML = "good afternoon";
} else {
    myDemo.innerHTML = "good evening";
}