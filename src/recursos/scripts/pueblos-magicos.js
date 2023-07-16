const idFormularioRegistro = 'formulario-de-registro';
const idReporteRegistro = 'reporte-de-registro';

const DOMINIO_VALIDO = [
    'hotmail.com',
    'live.com',
    'yahoo.com',
    'aol.com',
    'gmail.com'
];

const REPORTE = [];

const actualizarReporte = ({mensaje}) => {
    REPORTE.push(mensaje);
}

const esDominioValido = (dominio) => {
    const resultado = DOMINIO_VALIDO.some(dominioValido => {
        return dominio.includes(dominioValido);
    });
    actualizarReporte({mensaje: `El Dominio es ${resultado ? 'valido' : 'invalido'}`});
    return resultado;
}

const esNombreValido = (nombre, usuario) => {
    const resultado = nombre !== usuario;
    actualizarReporte({mensaje: `El Nombre es ${resultado ? 'valido' : 'invalido'}`});
    return resultado;
}
const esUsuarioValido = (usuario, contrasenia) => {
    const resultado = usuario !== contrasenia;
    actualizarReporte({mensaje: `El Usuario es ${resultado ? 'valido' : 'invalido'}`});
    return resultado;
}

const esContraseniaValida = (usuario, contrasenia) => {
    const resultado = !contrasenia.includes(usuario);
    actualizarReporte({mensaje: `La Contrasenia es ${resultado ? 'valido' : 'invalido'}`});
    return resultado;
}

const esTelefonoValido = (telefono) => {
    const resultado = Number(telefono) > 0;
    actualizarReporte({mensaje: `El Telefono es ${resultado ? 'valido' : 'invalido'}`});
    return resultado
}

addEventListener("DOMContentLoaded", (event) => {
    const elementoFormulario = window.document.getElementById(idFormularioRegistro);
    const elementoReporte = window.document.getElementById(idReporteRegistro);

    if (elementoFormulario) {

        elementoFormulario.addEventListener('submit', (evento) => {
            REPORTE.length = 0;
            evento.preventDefault();
            const [
                nombre,
                correo,
                telefono,
                usuario,
                contrasenia
            ] = elementoFormulario.getElementsByTagName('input');

            const esFormaValida = (
                esNombreValido(nombre.value, usuario.value) &&
                esUsuarioValido(usuario.value, contrasenia.value) &&
                esContraseniaValida(usuario.value, contrasenia.value) &&
                esDominioValido(correo.value) &&
                esTelefonoValido(telefono.value)
            );

            const reporteFormateado = REPORTE.reduce((lista, mensaje) => {
                return `${lista}
                <li>${mensaje}</li>
                `;
            }, '');

            elementoReporte.setAttribute('class', '');
            elementoReporte.setAttribute('class', `reporte ${esFormaValida ? 'valido' : 'invalido'}`);
            elementoReporte.innerHTML = reporteFormateado;
        })
    }

});
