var oddNums= document.getElementById("odd");
var evenNums= document.getElementById("even");
var output="";
document.bgColor="#99ccff";

for (num=1; num <= 100; num=num+2) {
    output=output+num+" ";
	 //output numbers 5 per line
	if (num%10 == 9) {
		output=output+"<br />";
	}
}
oddNums.innerHTML=output;
var output=""; //reset the output
for (num=2; num <= 100; num=num+2) {
    output=output+num+" ";
	/* //output numbers 5 per line
	if (num%10 == 0) {
		output=output+"<br />";
	}*/
}
evenNums.innerHTML=output;
