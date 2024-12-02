let btnRegister = document.querySelector("button");

btnRegister.addEventListener("click", (event) => {
  event.preventDefault();

  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;
  let phoneNumber = document.getElementById("phoneNumber").value;

  if (
    fullName.trim() === "" ||
    email.trim() === "" ||
    password1.trim() === "" ||
    password2.trim() === ""
  ) {
    alert(`Debes completar los campos vacíos.`);
  } else if (password1 !== password2) {
    alert(`Las contraseñas deben coincidir.`);
  } else if (isNaN(phoneNumber)) {
    alert(`Debes ingresar un número válido.`);
  } else {
    alert(`Formulario enviado.`);
  }
});
