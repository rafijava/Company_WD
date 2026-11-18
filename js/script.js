function showDateTime(){
let now = new Date();
document.getElementById("datetime").innerHTML = now.toLocaleString();
}

setInterval(showDateTime,1000);


function contactConfirm(){
alert("Thank you! Your message has been sent.");
}