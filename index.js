
function attRelogio () {
var dateObject = new Date();
var data = dateObject.getDate() + "/" + dateObject.getMonth() + "/" + dateObject.getFullYear();
var hora = dateObject.getHours() + ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds();
    
document.getElementById("data").innerHTML = data;
document.getElementById("hora").innerHTML = hora;

var elem = document.querySelector("#bkg-img");

var imagem;

if (dateObject.getHours() >= 0 && dateObject.getHours() < 5) {
    imagem = "https://cdn130.picsart.com/293517849008201.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
}

if (dateObject.getHours() >= 5 && dateObject.getHours() < 10) {
    imagem = "https://i.pinimg.com/originals/bc/87/e5/bc87e5124f8d2cfe810d403adc96ad01.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
}

if (dateObject.getHours() >= 10 && dateObject.getHours() < 14) {
    imagem = "https://i.pinimg.com/originals/05/dc/14/05dc1498ad5dce13d32b957a4aef8d31.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
}

if (dateObject.getHours() >= 14 && dateObject.getHours() < 16) {
    imagem = "https://i.imgur.com/ynXbQ1G.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
}

if (dateObject.getHours() >= 16 && dateObject.getHours() < 20) {
    imagem = "https://i.pinimg.com/originals/6d/fb/c7/6dfbc74564ed8ed039734fa91b2d8f9a.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
}

if (dateObject.getHours() >= 20 && dateObject.getHours() <= 00) {
    imagem = "https://media.boingboing.net/wp-content/uploads/2015/09/coffee_in_rain_by_kirokaze-d98qb8z.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
}

if (dateObject.getHours() >= 12 && dateObject.getHours() < 0)  {
    document.getElementById("hora").innerHTML = hora + " PM";
} else {
    document.getElementById("hora").innerHTML = hora + " AM";
}

}

setInterval(attRelogio, 1000);