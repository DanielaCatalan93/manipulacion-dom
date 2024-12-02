let btn = document.querySelector("button");
let texto = document.querySelector("p");

btn.addEventListener("click", () => {
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
});
