var myElement = document.getElementById("intro");
var output = "";
var num = 0;

for(num = 100 ; num > 0; num--){
    output=output+num+" ";
    if (num%10 == 0){
        output=output+"<br />";
    }
}
myElement.innerHTML = output;