// VARIABLES
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');


// ESCUCHADOR DE EVENTOS
// inicio de la aplicación y desabilitar botón
document.addEventListener('DOMContentLoaded', inicioApp);
// campos del formulario
email.addEventListener('blur', validarCampo);
asunto.addEventListener('blur', validarCampo);
mensaje.addEventListener('blur', validarCampo);



// FUNCIONES

function inicioApp() {
    // desabilitar el botón de envíar
    btnEnviar.disabled = true;
}

// Valida que el campo tenga algo escrito
function validarCampo() {
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    let errores = document.querySelectorAll('.error');

    // validar unicamente el email
    if(this.type === 'email') {
        validarEmail(this);
    }

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

function validarLongitud(campo) {
    if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}