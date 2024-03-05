const imagenes = document.querySelectorAll('.elementos img');
const imagenes2 = document.querySelectorAll('.elementos2 img');


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
    let clicEnColumna2 = false;

    function eliminarElementos(selector, tipoElemento) {
        const elementos = document.querySelectorAll(`${selector}[id="${tipoElemento}"]`);
        elementos.forEach(function (elemento) {
            elemento.remove();
        });
    }

    const columna1 = document.querySelector('.columna1');
    const columna2 = document.querySelector('.columna2');

    columna2.addEventListener('click', function (event) {
        const elementoClicado = event.target.closest('.elementos2');
        if (elementoClicado) {
            clicEnColumna2 = true;
            tipoElementoColumna2 = elementoClicado.id; // Asumimos que la id del elemento es el tipo de material
        }
    });

     columna1.addEventListener('click', function (event) {
        const elementoClicado = event.target.closest('.elementos');
        if (elementoClicado) {
            tipoElementoColumna1 = elementoClicado.id;
            if (!clicEnColumna2) {
                mostrarAlerta('Toca primero la columna de la izquierda con las materias primas');
            } else {

                if (tipoElementoColumna2 != tipoElementoColumna1) {
                    mostrarAlerta(`Has hecho clik en la materia prima: ${tipoElementoColumna2}, la materia prima no coiside con el producto: ${tipoElementoColumna1}. VUELVE A INTENTAR`);
                }else {

                    if (tipoElementoColumna2 === tipoElementoColumna1) {
                        eliminarElementos('.elementos', tipoElementoColumna1);
                        eliminarElementos('.elementos2', tipoElementoColumna2);
                    }
                }
            } 
        }
    });

    function mostrarAlerta(texto) {
        alert(texto);
    }
});
