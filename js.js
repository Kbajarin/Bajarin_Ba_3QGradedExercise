var num = Math.trunc(Math.random()*1000);

var hundreds = num - (num%100);
var tens = (num%100)-(num%10); 
var ones = num%10;

var output = "Random number generated: ".concat(num.toString());
var output2 = "Breakdown: ".concat(hundreds.toString(), ", ", tens.toString(), ", ", ones.toString());
var output3 = Date();

document.getElementById("id").innerHTML = output;
document.getElementById("id2").innerHTML = output2;
document.getElementById("id3").innerHTML = output3;

//korea