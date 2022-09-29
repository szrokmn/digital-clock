const display = document.querySelector("#clock");
display.innerText = new Date().toLocaleTimeString("en-GB");   // yerel saati alır. en-GB  => 24 saatlik dilimi alır

setInterval(() => {
    display.innerText = new Date().toLocaleTimeString("en-GB");
}, 1000);

document.querySelector('body').addEventListener('mousemove', clockRengiDegistir);

function clockRengiDegistir(e) {   
    document.querySelector('.yazi').textContent = `r: ${e.clientX % 255} g:${e.clientY % 255} b:${(e.clientX + e.clientY) % 255}`;
    document.querySelector('#clock').style.backgroundColor = `rgb(${e.clientX % 255}, ${e.clientY % 255}, ${(e.clientX + e.clientY) % 255})`
}