export default function esURL(campo){
    const url=campo.value;
    console.log(campo.value)
    if(validarInicio(url)&& validarFinal(url)){

    }else{
        campo.setCustomValidity("No es una url valida.");
    }
}

function validarInicio(url){
    let primerosCaracteres=url.slice(0,8);
    console.log(primerosCaracteres);
    return primerosCaracteres=="https://";
}

function validarFinal(url){
    let ultimosCaracteres=url.slice(-4);
    let extensionesValidas=[".jpg",".png",".bmp",".gif"];
    return extensionesValidas.includes(ultimosCaracteres);
}