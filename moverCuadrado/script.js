let btn = document.querySelector("button");
let cuadrado = document.querySelector(".cuadrado");

btn.addEventListener("click", () => {
  if (cuadrado.style.transform === "translateX(0px)") {
    cuadrado.style.transform = "translateX(200px)";
  } else {
    cuadrado.style.transform = "translateX(0px)";
  }
});
