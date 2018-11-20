/* FUNCION PARA VALIDAR LOS ARCHIVOS SUBIDOS POR EL USUARIO */

/*
    para poder realizar esta validacion se debe pasar como parametro el evento del input
*/

function verificarArchivo(event, Tipo) {

    console.log(event.target);
    
    let ext = event.target.value.match(/\.([^\.]+)$/)[1],
        peso = event.target.files["0"].size,
        retorno = {
            Msj: "",
            status: false
        };

    switch (Tipo) {
        case 'img':
            let verExt = ext === 'jpg' || ext === 'bmp' || ext === 'png' || ext === 'tif' || ext === 'gif';

            if (!verExt) {
                retorno.Msj = 'Archivo no admitido';
                retorno.status = true;
                break;
            }

            if (peso > 512000) {
                retorno.Msj = 'Archivo excede el tamaño maximo';
                retorno.status = true;
                break;
            };
            break;
        default:
            break;
    }

    return retorno;
}
