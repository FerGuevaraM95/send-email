// VARIABLES
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');


// ESCUCHADOR DE EVENTOS
document.addEventListener('DOMContentLoaded', inicioApp);



// FUNCIONES

function inicioApp() {
    // desabilitar el botón de envíar
    btnEnviar.disabled = true;
}