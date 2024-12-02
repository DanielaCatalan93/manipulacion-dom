let spanHora = document.getElementById("hora");
let spanFecha = document.getElementById("fecha");

let horaActual = new Date();
let hora = horaActual.getHours();
let minutos = horaActual.getMinutes();
let segundos = horaActual.getSeconds();

let fechaActual = new Date();
let diaMes = fechaActual.getDay(); // desde el 1-31
let mes = fechaActual.getMonth() + 1; // desde el 0-11
let year = fechaActual.getFullYear();

let diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

let diaSemana = diasSemana[horaActual.getDate()];

spanHora.innerHTML = `${hora}:${minutos}:${segundos}`;
spanFecha.innerHTML = `${diaSemana} ${diaMes}/${mes}/${year}`;
