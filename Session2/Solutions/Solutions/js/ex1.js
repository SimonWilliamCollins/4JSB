var myElement= document.getElementById("intro");
var num=1;
var output="";
document.bgColor="#ccff99";
while (num<=10) {
	//output=output+num+" ";
	output=output+num+"<br />";
	num++;
}
myElement.innerHTML=output;
