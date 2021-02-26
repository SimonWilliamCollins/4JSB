var myDemo = document.getElementById("demo");

var output = "";

function odd(){
    for (num = 1; num <= 100; num=num+2)
        output=output+num+" ";
    myDemo.innerHTML = output;
}

function even(){
    for(num = 2; num <= 100; num=num+2){
        output = output+num+" ";
    }
    myDemo.innerHTML = output;
}