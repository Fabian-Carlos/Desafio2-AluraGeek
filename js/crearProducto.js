import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

//validaciones

async function crearProducto(evento){
    evento.preventDefault();
    const imagen= document.querySelector("[data-imagen]").value;
    const nombre=document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    // const precio = Math.floor(Math.random*10).toString();

    try{
        await conectaAPI.crearProducto(nombre,precio,imagen)
    
     
    }catch(e){
        alert(e);
    }
}

formulario,addEventListener("submit",evento=>crearProducto(evento));
