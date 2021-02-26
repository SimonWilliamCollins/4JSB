var myElement = document.getElementById("intro");
var num = 1;
var output= "";

while(num <= 10){
    output=output+num+" ";
    num++;
}
myElement.innerHTML = output;