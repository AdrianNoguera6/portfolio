// 1. Buscamos los elementos en el HTML usando los 'id' que les pusimos
const botonCopiar = document.getElementById('boton-copiar');
const textoCorreo = document.getElementById('texto-correo');

// 2. Le decimos al botón que se quede "escuchando" hasta que alguien haga un 'click'
botonCopiar.addEventListener('click', function() {
    
    // 3. Guardamos tu correo en una variable
    const miCorreo = 'adriannogueraesteban@gmail.com';

    // 4. Usamos una herramienta de los navegadores modernos para copiar texto
    navigator.clipboard.writeText(miCorreo).then(function() {
        
        // 5. ¡Éxito! Cambiamos el texto para avisar al usuario
        textoCorreo.innerText = "¡Copiado al portapapeles!";
        
        // Le añadimos la clase CSS que lo pone verde
        textoCorreo.classList.add('texto-copiado');

        // 6. Usamos un temporizador (setTimeout) para devolverlo a la normalidad tras 2 segundos
        setTimeout(function() {
            textoCorreo.innerText = miCorreo; // Vuelve a poner el correo
            textoCorreo.classList.remove('texto-copiado'); // Le quita el color verde
        }, 2000); // 2000 milisegundos equivalen a 2 segundos

    }).catch(function(err) {
        // Por si acaso hay un error en algún navegador antiguo
        console.error('No se pudo copiar el texto: ', err);
    });
});