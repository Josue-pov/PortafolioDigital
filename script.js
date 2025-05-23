      function mostrarSeccion(id) { // Cambia la sección activa
        document.querySelectorAll('section').forEach(seccion => // Elimina la clase activa de todas las secciones
        {
          seccion.classList.remove('activa');
        });
        document.getElementById(id).classList.add('activa'); // Agrega la clase activa a la sección seleccionada
      }

window.onload = function(){
    mostrarSeccion('acercade');
}

// Botón "Volver arriba"
const btnVolverArriba = document.getElementById('btn-volver-arriba');

// Mostrar u ocultar botón al hacer scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        btnVolverArriba.classList.add('mostrar');
    } else {
        btnVolverArriba.classList.remove('mostrar');
    }
});

// Scroll suave al hacer clic
btnVolverArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});