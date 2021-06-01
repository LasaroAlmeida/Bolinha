function mudaCor() {
    var obj = document.getElementById('div1');
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var a = Math.floor(Math.random() * 100);
    obj.style.backgroundColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
}


// ///////////////////////////////////////////

// // var tmp= setTimeout(mudaCor, 3000);
// //window.addEventListener('load', mudaCor);
// var tmp;
// function iniciar() {
//     tmp = setInterval(mudaCor, 50);
// }

// function parar() {
//     clearInterval(tmp);
// }

// document.getElementById("bt1").addEventListener("click", iniciar);
// document.getElementById("bt2").addEventListener("click", parar);




var px = 10;
var py = 500;

// function move() {
//     var obj = document.getElementById("div1");
//     var tecla = event.keyCode;
//     if (tecla == 37) {
//         px -= 10;
//         obj.style.left = px + "px";
//     }
//     else if (tecla == 38) {
//         py -= 10;
//         obj.style.top = py + "px";
//     }
//     else if (tecla == 39) {
//         px += 10;
//         obj.style.left = px + "px";
//     }
//     else if (tecla == 40) {
//         py += 10;
//         obj.style.top = py + "px";
//     }
//     else if (tecla == 13) {
//         alert("Evento Removido");
//         this.removeEventListener("keydown", move);
//     }
//     else {

//     }
// }

//  document.addEventListener("keydown", move);


/////////
// let i = 5;
// let j = -5;
// function movePara() {
//     px += i;
//     obj = document.getElementById("div1");
//     mudaCor();
//     obj.style.left = px + "px";
//     if (px >= 1250) {
//         i = j;
//     }
//     if (px <= 0 && i == j) {
//         i = -j;
//     }
// }





var vo = 100;
var angulo = 45;
var vox = vo * Math.cos(angulo);
var voy = vo * Math.sin(angulo);
var t = 0;
var g = 9.8;
var tmp;

function sen() {
    if (py <= 500) {
        obj = document.getElementById("div1");
        px = 10 + (vox * t);
        var aux = ((voy * t) - ((0.5 * g) * Math.pow(t, 2)));
        if ((500 - aux) > 500) {
            py = 500;
            px = vox * 2 * (voy / g);
            clearInterval(tmp);
        } else {
            py = 500 - aux;
        }
        t += 1;
        obj.style.left = px + "px";
        obj.style.top = py + "px";
    }
}

function _break() {
    clearInterval(tmp);
}


function aux() {
    tmp = setInterval(sen, 50);
}

document.getElementById("div1").addEventListener("click", aux);