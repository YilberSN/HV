var nombre = document.getElementById('nombre');
var servicio = document.getElementById('servicio');
var correo = document.getElementById('correo');
var mensaje = document.getElementById('mensaje');
var error = document.getElementById('error');

function validacion(){
    var mensajeError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingresa tu nombre, ejemplo: "Yilber Serrano"');
    }else if(servicio.value === null || servicio.value === ''){
        mensajeError.push('Selecciona un servicio a consultar');
    }else if(correo.value === null || correo.value === '' || !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo.value))){
        mensajeError.push('Ingresa un correo valido, ejemplo: "correo@dominio.com"');
    }else  if(mensaje.value === null || mensaje.value === ''){
        mensajeError.push('Ingresa tu mensaje, ejemplo:"Hola, me gustaria contactarte para un proyecto"');
    }else{
        alert('Mensaje enviado correctamente');
    }
    error.innerHTML = mensajeError.join(', ');
    return false;
}