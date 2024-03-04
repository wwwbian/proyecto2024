const imagenes = document.querySelectorAll('.elementos img');
const imagenes2 = document.querySelectorAll('.elementos2 img');

imagenes.forEach(function(imagen) {
    imagen.addEventListener('click', function() {
        // Desenfocar todos los elementos
        imagenes.forEach(function(imagen) {
            imagen.classList.add('blur');
        });
        // Quitar el desenfoque del elemento clicado
        this.classList.remove('blur');
    });
});

imagenes2.forEach(function(imagen2) {
    imagen2.addEventListener('click', function() {
        // Desenfocar todos los elementos
        imagenes2.forEach(function(imagen2) {
            imagen2.classList.add('blur');
        });
        // Quitar el desenfoque del elemento clicado
        this.classList.remove('blur');
    });
});

function manejarClic(elementos, elementoClicado) {
    elementos.forEach(function(elemento) {
        elemento.classList.add('blur');
    });
    elementoClicado.classList.remove('blur');
}


