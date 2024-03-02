let seleccionadas = []; // Array para almacenar las imágenes seleccionadas

const elementos = document.querySelectorAll('.elementos');

elementos.forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        const clase = this.classList[1]; // Obtener la clase del elemento clickeado

        // Aplicar o remover clase de desenfoque de la imagen seleccionada
        this.classList.toggle('blur');

        // Verificar si la imagen ya está seleccionada
        if (seleccionadas.includes(clase)) {
            // Si ya está seleccionada, deseleccionarla (removerla del array)
            seleccionadas = seleccionadas.filter(item => item !== clase);
        } else {
            // Si no está seleccionada, agregarla al array
            seleccionadas.push(clase);
        }

        // Si hay dos imágenes del mismo elemento seleccionadas, desaparecerlas
        if (seleccionadas.length === 2 && seleccionadas[0] === seleccionadas[1]) {
            // Agregar animación para desaparecer las imágenes
            document.querySelectorAll(`.${seleccionadas[0]}`).forEach(function(img) {
                img.style.display = 'none'; // Ocultar la imagen
            });

            // Limpiar el array de imágenes seleccionadas después de un breve retraso para permitir que termine la animación
            setTimeout(() => {
                seleccionadas = [];
            }, 500); // 500 milisegundos (ajusta el tiempo según la duración de la animación)
        }
    });
});






