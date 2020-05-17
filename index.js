
function attRelogio () {
var dateObject = new Date();
var data = dateObject.getDate() + "/" + dateObject.getMonth() + "/" + dateObject.getFullYear();
var hora = dateObject.getHours() + ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds();
    
document.getElementById("data").innerHTML = data;
document.getElementById("hora").innerHTML = hora;

var elem = document.querySelector("#bkg-img");

var imagem;

var hora2 = dateObject.getHours();


if (dateObject.getHours() >= 0 && dateObject.getHours() < 5) {
    imagem = "https://i.pinimg.com/originals/c7/ab/99/c7ab9906f0e9ca33956a817d6dee34bc.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
}

if (dateObject.getHours() >= 5 && dateObject.getHours() < 10) {
    imagem = "https://i.pinimg.com/originals/bc/87/e5/bc87e5124f8d2cfe810d403adc96ad01.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
}

if (dateObject.getHours() >= 10 && dateObject.getHours() < 14) {
    imagem = "https://i.imgur.com/ng8a3u6.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
}

if (dateObject.getHours() >= 14 && dateObject.getHours() < 16) {
    imagem = "https://i.gifer.com/Xuct.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
    elem.style.backgroundSize = "cover";
}

if (dateObject.getHours() >= 16 && dateObject.getHours() < 20) {
    imagem = "https://i.pinimg.com/originals/6d/fb/c7/6dfbc74564ed8ed039734fa91b2d8f9a.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
}

if (dateObject.getHours() >= 20 && dateObject.getHours() <= 23) {
    imagem = "https://media.boingboing.net/wp-content/uploads/2015/09/coffee_in_rain_by_kirokaze-d98qb8z.gif";
    elem.style.backgroundImage = "url("+ imagem +")";
}

if (dateObject.getHours() >= 12 && dateObject.getHours() <= 23)  {
    document.getElementById("hora").innerHTML = hora + " PM";
} else {
    document.getElementById("hora").innerHTML = hora + " AM";
}

}

setInterval(attRelogio, 1000);