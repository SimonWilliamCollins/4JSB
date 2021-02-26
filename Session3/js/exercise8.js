// ex 9
function myPopup(){
    window.open("http://www.google.com.au", 
    "myWindow", 
    "status = 1, height = 400, width = 400, resizable = 0");
    return;
}
// ex 10
function myFunction(text){
    alert(text);
    return;
}
//ex 11
function myMessage(){
    alert("this message was triggered from onload event");
    return;
}
// ex 12
function mOver(obj){
    obj.innerHTML ="Thank you";
    return;
}
function mOut(obj){
    obj.innerHTML = "Mouse Over me";
    obj.style= "background-color: blue; width: 200px; height: 200px; padding: 40px;"
    return;
}
// ex 13
function displayDate(){
    var showDate = document.getElementById("thedate");
    var d = new Date()

    showDate.innerHTML = d;
}