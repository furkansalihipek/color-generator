const btn = document.getElementById("btn");

function createHex() {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    console.log(hexColor)
    document.body.style.backgroundColor = hexColor;
}
btn.addEventListener("click", createHex);