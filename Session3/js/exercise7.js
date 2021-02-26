function confirmation(){
    var answer = confirm("Leave my page?");
    if (answer){
        alert("Bye bye!");
        window.location = "http://www.google.com.au";
    } else {
        alert("thanks for sticking around!")
    }
    return;
}