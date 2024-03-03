// Seleccionamos todas las imágenes con la clase "elementos" y les asignamos el evento de clic
const imagenes = document.querySelectorAll('.elementos img');

imagenes.forEach(function(imagen) {
    imagen.addEventListener('click', function() {
        // Toggle: si la imagen tiene la clase "blur", la quitamos, si no la tiene, la añadimos
        this.classList.toggle('blur');
    });
});

