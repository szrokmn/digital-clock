const display = document.querySelector("#clock");
display.innerText = new Date().toLocaleTimeString("en-GB");   // yerel saati alır. en-GB  => 24 saatlik dilimi alır

setInterval(() => {
    display.innerText = new Date().toLocaleTimeString("en-GB");
}, 1000);