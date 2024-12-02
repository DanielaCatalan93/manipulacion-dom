let btn = document.querySelector("button");
let imagen = document.querySelector(".imagen");

let imagenes = [
  "./img/isha.jpg",
  "./img/jinx.jpg",
  "./img/vi.jpg",
  "./img/viktor.jpg",
  "./img/ambessa.jpg",
  "./img/caitlyn.jpg",
  "./img/ekko.jpg",
  "./img/jayce.jpg",
  "./img/powder.jpg",
  "./img/sevika.jpg",
  "./img/silco.jpg",
  "./img/vander.jpg",
];

btn.addEventListener("click", () => {
  let cambiarImagen = imagenes[Math.floor(Math.random() * imagenes.length)];

  imagen.src = cambiarImagen;
});
