var choice = 0;
choice = parseInt(prompt("Plase enter your holiday\n 1: Hawaii\n 2: Paris\n 3: Snow\n 4: Vineyard"));

var element = document.getElementById("myImage");

switch(choice){
case 1:
        element.src = '../images/hawaii.jpg';
        break;
case 2:
        element.src = '../images/Paris.jpg';
        break;
case 3:
        element.src = '../images/snow.jpg';
        break;
default:
        element.src = '../images/vineyard.jpg';
    }
