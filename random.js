let btn = document.querySelector("button");



btn.addEventListener("mouseenter", function() {
    let h3 = document.querySelector("h3");
    let div = document.querySelector("div");
    randomcolor = saycolor();
    h3.innerText = randomcolor;
    btn.style.color = randomcolor;
    div.style.backgroundColor = randomcolor;
});

function saycolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

