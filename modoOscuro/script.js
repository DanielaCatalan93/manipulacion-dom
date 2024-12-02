let btn = document.querySelector("button");
let texto = document.querySelector("p");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  if (
    texto.style.color === "white" &&
    btn.style.color === "black" &&
    btn.style.border === "1px solid white" &&
    body.style.backgroundColor === "black"
  ) {
    texto.style.color = "black";
    btn.style.color = "black";
    btn.style.border = "1px solid black";
    btn.innerHTML = "Cambiar a modo oscuro.";
    body.style.backgroundColor = "white";
  } else {
    texto.style.color = "white";
    btn.style.color = "black";
    btn.style.border = "1px solid white";
    btn.innerHTML = "Cambiar a modo claro.";
    body.style.backgroundColor = "black";
  }
});
