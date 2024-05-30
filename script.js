const color = document.querySelector(".colorCode");
const button = document.querySelector(".btn");
const drawer = document.querySelector(".drawer");
const drawerText = document.getElementById("drawerText");

function createHex() {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

    adjustTextColor(hexColor);

    localStorage.setItem("background", hexColor);
}

function setSavedColor() {
    const savedColor = localStorage.getItem("background");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        adjustTextColor(savedColor);
    }
}

function pressKey(key) {
    if (key.code === "Space") {
        createHex();
    }
}

function adjustTextColor(bgColor) {
    const rgb = hexToRgb(bgColor);
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    const textColor = brightness > 128 ? 'black' : 'white';

    document.body.style.color = textColor;

    const icons = document.querySelectorAll(".icons a");
    icons.forEach(icon => {
        icon.style.color = textColor;
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.color = textColor;
    }); 
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function hexInfo() {
    if (drawerText.style.display === "block") {
        drawerText.style.display = "none";
    }
    else {
        drawerText.style.display = "block";
    }
}
drawer.addEventListener("click", hexInfo);
document.addEventListener("keydown", pressKey);
document.addEventListener("click", createHex);
window.addEventListener("DOMContentLoaded", setSavedColor);