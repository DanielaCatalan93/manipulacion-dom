let spanTexto = document.querySelector("span");
let btn = document.querySelector("button");
let contador = 0;

btn.addEventListener("click", () => {
  spanTexto.innerHTML = contador++;
});
