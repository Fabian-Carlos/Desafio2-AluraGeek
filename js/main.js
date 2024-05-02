import { tiposError, mensajes } from "./customErrors.js";
import esURL from "./validaImagen.js";
import esPrecio from "./validaPrecio.js";

const camposFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector(".formulario");


formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    precio: e.target.elements["precio"].value,
    imagen: e.target.elements["imagen"].value,
    
  };
  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  console.log(listaRespuestas);
});

camposFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
  console.log(campo.validity);
  let mensaje = "";
  campo.setCustomValidity("");

  if (campo.id == "imagen" && campo.value != "") {
    esURL(campo);
  }
  if (campo.id == "precio" && campo.value != "") {
    esPrecio(campo);
  }

  tiposError.forEach((error) => {
    if (campo.validity[error]) {
      mensaje = mensajes[campo.id][error];
    }
  });

  const mensajeError = campo.nextElementSibling;

  const validarInputCheck = campo.checkValidity();

  if (!validarInputCheck) {
    mensajeError.textContent = mensaje;
  } else {
    mensajeError.textContent = "";
  }
}
