import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

//validaciones

export default function construyeCard(nombre, precio, imagen, id) {

    const producto = document.createElement("div");
    producto.className = "tarjeta";

    producto.innerHTML = `
        <img class="producto-imagen" src="${imagen}">
        <div class="producto-datos">
        <h3>${nombre}</h3>
        <div class="datos-producto">
            <h4>$ ${precio}</h4>
            <input type="image" class="eliminar" src="imagenes/eliminar1.png" data-id="${id}" >                               
        </div>
    </div>`
    return producto;
}

async function listaProductos() {
    try {
        const listaAPI = await conectaAPI.listaProductos();
        listaAPI.forEach(element => lista
            .appendChild(construyeCard(element.nombre, element.precio, element.imagen, element.id)));
    } catch {
        lista.innerHTML = `<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
}

listaProductos();
