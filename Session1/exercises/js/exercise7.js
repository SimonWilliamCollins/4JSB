var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth()+1;
var year = currentDate.getFullYear();

document.write("Today is " + day + "/" + month + "/" + year);