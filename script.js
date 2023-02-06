var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random")

var changeColor = function () {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"

    css.textContent = body.style.background + ";";
}
changeColor();

function randomize(){
    min = Math.ceil(100000)
    max = Math.floor(999999)
    var randomNum = Math.floor(Math.random()*(999999-100000)+100000);
    var randomNum2 = Math.floor(Math.random()*(999999-100000)+100000);
    color1.value = "#" + randomNum;
    color2.value = "#" + randomNum2;
    changeColor();
};

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
random.addEventListener("click", randomize);
