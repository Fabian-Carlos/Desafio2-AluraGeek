export default function esPrecio(campo) {
    const precio = campo.value;
    console.log(campo)
    console.log(campo.value)
    const expresion = /^[0-9]+$/;
    if (!expresion.test(precio)) {
        campo.setCustomValidity("No es un precio válido");
    } else {
        if (precio == 0) {
            campo.setCustomValidity("Debe ser mayor que cero");
        }
    }

}