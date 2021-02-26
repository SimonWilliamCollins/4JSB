var myElement= document.getElementById("intro");
var age = 0;
age=parseInt(prompt("Enter your age: ","0"));
while (age<0 || age>130) {
	alert("You have entered an incorrect age.\nThe age must be 0-130");
	age=parseInt(prompt("Enter your age: ","0"));
}//endwhile
myElement.innerHTML="The validated age is "+age;
