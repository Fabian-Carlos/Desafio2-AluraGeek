import { conectaAPI } from "./conectaAPI.js";

// async function eliminarProducto(id){
//     console.log("estoy en negocio");
//     try {
//         await conectaAPI.eliminarProducto(id); 
//         document.querySelector(`[data-id="${id}"]`).remove(); 
//     } catch (error) {
//         console.error("Error al eliminar el producto:", error);
//     }
// }

export async function asignarFuncionEliminar() {
    const lista = document.querySelector("[data-lista]");
    lista.addEventListener("click", async (e) => {
        if (e.target.classList.contains("eliminar")) {
            const id = e.target.dataset.id;
            try {
                await conectaAPI.eliminarProducto(id);
                e.target.closest(".tarjeta").remove();
            } catch (error) {
                console.error("Error al eliminar el producto:", error);
            }
        }
    });
}

asignarFuncionEliminar();