let btnColor = document.querySelector("button");
let backgroundColor = document.querySelector("h1");
let fondo = document.querySelector("body");

const colores = [
  "yellow",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "cyan",
  "gray",
  "violet",
  "salmon",
  "gold",
  "indigo",
  "silver",
];

btnColor.addEventListener("click", function () {
  let color = colores[Math.floor(Math.random() * colores.length)];
  fondo.style.backgroundColor = color;
  backgroundColor.innerHTML = `Background Color: ${color}`;
});
