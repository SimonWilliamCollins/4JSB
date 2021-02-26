var myElement= document.getElementById("intro");
var output="";
document.bgColor="#ffcccc";
var num=0;
for (num=1;num<=100;num++) {
	output=output+num+" ";
	if (num%10 == 0) {
		output=output+"<br />";
	}
}
myElement.innerHTML=output;
