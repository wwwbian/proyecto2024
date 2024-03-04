const imagenes = document.querySelectorAll('.elementos img');

imagenes.forEach(function(imagen) {
    imagen.addEventListener('click', function() {
        this.classList.toggle('blur');
    });
});

