const color = document.querySelector(".colorCode");
const button = document.getElementById('btn');
const drawerIcon = document.getElementById('drawerIcon');
const drawerText = document.getElementById('drawerText');
const drawerTextIcon = document.getElementById('drawerTextIcon');

function createHex() {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
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
    drawerText.classList.toggle('open');
    if (drawerText.classList.contains('open')) {
        drawerIcon.style.visibility = "hidden";
    } else {
        setTimeout(() => {
            drawerIcon.style.visibility = "visible";
        }, 250);
    }
}

function mobileText() {
    if (window.innerWidth < 768) {
        button.innerText = "Touch me!";
        button.disabled = false;
    } else {
        button.innerText = "Press Space!";
        button.disabled = true;
    }
}

drawerIcon.addEventListener("click", hexInfo);
drawerTextIcon.addEventListener("click", hexInfo);
document.addEventListener("keydown", pressKey);
button.addEventListener("click", createHex);
window.addEventListener("DOMContentLoaded", setSavedColor(), mobileText())
window.addEventListener("resize", mobileText);