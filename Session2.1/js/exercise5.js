var myElement = document.getElementById("intro");
var output= "";
document.body.style.backgroundColor ="#99ccff";

var degC=0;
var degF=0;
output="<table>";
output=output+"<tr><th>degF</th><th>degC</th></tr>";
for (degF=0; degF<= 100; degF=degF+5){
    degC=(degF-32)/1.8;
    output=output+"<tr><td>"+degF+"</td><td>"+degC.toFixed(2)+"</td></tr>";
}
myElement.innerHTML = output;