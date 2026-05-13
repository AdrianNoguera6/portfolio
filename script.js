// =========================================
// 1. LÓGICA PARA COPIAR EL CORREO
// =========================================

// Buscamos los elementos en el HTML usando los 'id' que les pusimos
const botonCopiar = document.getElementById('boton-copiar');
const textoCorreo = document.getElementById('texto-correo');

// Le decimos al botón que se quede "escuchando" hasta que alguien haga un 'click'
botonCopiar.addEventListener('click', function() {
    
    // Guardamos tu correo en una variable
    const miCorreo = 'adriannogueraesteban@gmail.com';

    // Usamos una herramienta de los navegadores modernos para copiar texto
    navigator.clipboard.writeText(miCorreo).then(function() {
        
        // ¡Éxito! Cambiamos el texto para avisar al usuario
        textoCorreo.innerText = "¡Copiado al portapapeles!";
        
        // Le añadimos la clase CSS que lo pone verde
        textoCorreo.classList.add('texto-copiado');

        // Usamos un temporizador (setTimeout) para devolverlo a la normalidad tras 2 segundos
        setTimeout(function() {
            textoCorreo.innerText = miCorreo; // Vuelve a poner el correo
            textoCorreo.classList.remove('texto-copiado'); // Le quita el color verde
        }, 2000); 

    }).catch(function(err) {
        // Por si acaso hay un error en algún navegador antiguo
        console.error('No se pudo copiar el texto: ', err);
    });
});


// =========================================
// 2. LÓGICA DEL MODO CLARO / OSCURO
// =========================================

// Buscamos el botón y el cuerpo de la página
const btnTema = document.getElementById('btn-tema');
const cuerpoPagina = document.body;

// Comprobamos si el usuario ya tenía el modo claro guardado de antes en la memoria del navegador
const temaGuardado = localStorage.getItem('tema-portfolio');

// Si en la memoria dice 'claro', le ponemos la clase directamente y cambiamos el icono a la luna
if (temaGuardado === 'claro') {
    cuerpoPagina.classList.add('modo-claro');
    btnTema.innerText = '🌙';
}

// Le decimos al botón qué hacer cuando le hagan clic
btnTema.addEventListener('click', function() {
    // La función toggle() añade la clase si no la tiene, y se la quita si ya la tiene
    cuerpoPagina.classList.toggle('modo-claro');

    // Comprobamos qué modo quedó activado para cambiar el icono y guardarlo en memoria
    if (cuerpoPagina.classList.contains('modo-claro')) {
        btnTema.innerText = '🌙'; // Ponemos la luna si está en modo claro
        localStorage.setItem('tema-portfolio', 'claro'); // Guardamos la preferencia
    } else {
        btnTema.innerText = '☀️'; // Ponemos el sol si está en modo oscuro
        localStorage.setItem('tema-portfolio', 'oscuro'); // Guardamos la preferencia
    }
});