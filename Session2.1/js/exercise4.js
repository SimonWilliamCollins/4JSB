var evenNums = document.getElementById("even");
var oddNums = document.getElementById("odd");

var output = "";

for (num = 1; num <= 100; num=num+2){
    output=output+num+" ";
    if (num%10 == 9){
        output=output+"<br />";
    }
}
oddNums.innerHTML = output;
var output = "";

for(num = 1 ; num <= 100; num=num+2){
    output=output+num+" ";
    
}
evenNums.innerHTML = output;