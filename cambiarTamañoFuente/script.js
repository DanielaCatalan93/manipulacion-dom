let btnUno = document.querySelector(".btnUno");
let btnDos = document.querySelector(".btnDos");
let btnTres = document.querySelector(".btnTres");
let texto = document.querySelector("p");

btnUno.addEventListener("click", () => {
  texto.style.fontSize = "20px";
});

btnDos.addEventListener("click", () => {
  texto.style.fontSize = "30px";
});

btnTres.addEventListener("click", () => {
  texto.style.fontSize = "40px";
});
