let texto = document.querySelector("h1");
let btn = document.querySelector("button");

let colores = [
  "red",
  "blue",
  "green",
  "orange",
  "pink",
  "black",
  "yellow",
  "grey",
  "violet",
  "white",
];

btn.addEventListener("click", () => {
  let color = colores[Math.floor(Math.random() * colores.length)];

  texto.style.color = color;
});
