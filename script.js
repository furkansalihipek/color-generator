const btn = document.getElementById("btn");

function createHex() {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    console.log(hexColor)
    document.body.style.backgroundColor = hexColor;

    localStorage.setItem("background", hexColor);
}

function setSavedColor() {
    const savedColor = localStorage.getItem("background");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
}

function pressKey(key) {
    if (key.code === "Space") {
        createHex();
    }
}

document.addEventListener("keydown", pressKey);
window.addEventListener("DOMContentLoaded", setSavedColor);
btn.addEventListener("click", createHex);