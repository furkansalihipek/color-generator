const color = document.querySelector(".colorCode");

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
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

document.addEventListener("keydown", pressKey);
window.addEventListener("DOMContentLoaded", setSavedColor);
