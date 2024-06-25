document.getElementById('mostrarOpciones').addEventListener('click', function () {
    var opcionesPrestamos = document.getElementById('opcionesPrestamos');
    if (opcionesPrestamos.style.display === 'none' || opcionesPrestamos.style.display === '') {
        opcionesPrestamos.style.display = 'block';
    } else {
        opcionesPrestamos.style.display = 'none';
    }
});

document.getElementById('agregarPrestamos').addEventListener('click', function () {
    var infoPrestamos = document.getElementById('infoPrestamos');
    infoPrestamos.classList.remove('hidden');
    infoPrestamos.style.display = 'block';
});

document.getElementById('formPrestamo').addEventListener('submit', function (event) {
    event.preventDefault();


    var usuario = document.getElementById('usuario').value;
    var fechaPrestamo = document.getElementById('fechaPrestamo').value;
    var fechaDevolucion = document.getElementById('fechaDevolucion').value;
    var cantidad = document.getElementById('cantidad').value;
    var ejemplar = document.getElementById('ejemplar').value;
    var atraso = document.getElementById('atraso').value;
    var multa = document.getElementById('multa').value;

    document.getElementById('formPrestamo').reset();


    var infoPrestamos = document.getElementById('infoPrestamos');
    infoPrestamos.classList.add('hidden');
    infoPrestamos.style.display = 'none';
});

document.getElementById('verPrestamos').addEventListener('click', function () {
    var tablaPrestamos = document.getElementById('tablaPrestamos');
    tablaPrestamos.classList.remove('hidden');
    tablaPrestamos.style.display = 'block';
});

