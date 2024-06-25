document.getElementById('mostrarOpciones').addEventListener('click', function () {
    var opcionesTextos = document.getElementById('opcionesTextos');
    if (opcionesTextos.style.display === 'none' || opcionesTextos.style.display === '') {
        opcionesTextos.style.display = 'block';
    } else {
        opcionesTextos.style.display = 'none';
    }
});

document.getElementById('agregarTexto').addEventListener('click', function () {
    var infoTextos = document.getElementById('infoTextos');
    infoTextos.classList.remove('hidden');
    infoTextos.style.display = 'block';
});

document.getElementById('formLibro').addEventListener('submit', function (event) {
    event.preventDefault();


    var isbn = document.getElementById('isbn').value;
    var titulo = document.getElementById('titulo').value;
    var autor = document.getElementById('autor').value;
    var editorial = document.getElementById('editorial').value;
    var stock = document.getElementById('stock').value;

    document.getElementById('formLibro').reset();


    var infoTextos = document.getElementById('infoTextos');
    infoTextos.classList.add('hidden');
    infoTextos.style.display = 'none';
});

