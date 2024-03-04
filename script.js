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

    document.addEventListener('DOMContentLoaded', function () {
        let tipoElementoColumna1 = "";
        let tipoElementoColumna2 = "";
    
        const columna1 = document.querySelector('.columna1');
        const columna2 = document.querySelector('.columna2');

        columna2.addEventListener('click', function (event) {
            const elementoClicado = event.target.closest('.elementos2');
            if (elementoClicado) {
                tipoElementoColumna2 = elementoClicado.id; // Asumimos que la id del elemento es el tipo de material
                
            }
        });

        columna1.addEventListener('click', function (event) {
            const elementoClicado = event.target.closest('.elementos');
            if (elementoClicado) {
                tipoElementoColumna1 = elementoClicado.id; // Asumimos que la id del elemento es el tipo de material
                mostrarAlerta('toca primero la columna de la izquierda con las materias primas');
            }
        });
        
        function mostrarAlerta(texto) {
            alert(texto);
        }
    });

