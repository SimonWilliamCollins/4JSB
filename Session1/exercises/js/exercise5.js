var TAX_RATE = 0.25;
var grossPay = 0.0;
var tax = 0.0;
var nettPay = 0.0;

grossPay = parseFloat(prompt("Enter your pay $ ","1000"));
tax = grossPay * TAX_RATE;
nettPay = grossPay - tax;
alert("nett pay is $ " + nettPay.toFixed(2));