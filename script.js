const imagenes = document.querySelectorAll('.elementos img');
const imagenes2 = document.querySelectorAll('.elementos2 img');

let errores = 0; // Inicializar el contador de errores
let aciertos = 0;

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
                mostrarAlerta('Toca primero la columna de la derecha con el elemento');
            } else {

                if (tipoElementoColumna2 != tipoElementoColumna1) {
                    mostrarAlerta(`Has hecho clik en la materia prima: "${tipoElementoColumna2}", El elemento no coincide con el otro elemento seleccionado: "${tipoElementoColumna1}". VUELVE A INTENTAR`);
                    errores++; // Incrementar el contador de errores
                    document.getElementById('contador').textContent = errores; // Actualizar el contador en el DOM
                } else {

                    if (tipoElementoColumna2 === tipoElementoColumna1) {
                        eliminarElementos('.elementos', tipoElementoColumna1);
                        eliminarElementos('.elementos2', tipoElementoColumna2);
                        mostrarAlerta("ACERTASTE");
                        aciertos++;
                        document.getElementById('contadorr').textContent = aciertos; // Actualizar el contador en el DOM
                    }
                }
            }
        }
    });

    function mostrarAlerta(texto) {
        alert(texto);
    }
});

const columnas = document.querySelectorAll('.columna1, .columna2');


function verificarElementos() {
    let todasVacias = true;
    columnas.forEach(columna => {
        if (columna.querySelectorAll('.elementos').length > 0) {
            todasVacias = false;
        }
    });
    if (todasVacias) {
        alert('GANASTE');
    }
}

// Llamar a la función inicialmente
verificarElementos();

// Escuchar el evento de eliminación de elementos
columnas.forEach(columna => {
    columna.addEventListener('DOMNodeRemoved', () => {
        verificarElementos();
    });
});
