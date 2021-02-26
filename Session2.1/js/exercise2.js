var myElement = document.getElementById("intro");
var age = 0;

age = parseInt(prompt("Enter your age: ", "0"));

while(age < 0 || age >130){
    alert("you have entered an incorrect age.\n the age must be 0-130");
    age = parseInt(prompt("Enter your age: ", "0"));
}
myElement.innerHTML = "the validated age is " +age;