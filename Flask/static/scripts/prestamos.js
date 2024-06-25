document.getElementById('mostrarOpciones').addEventListener('mouseover', function () {
    opcionesPrestamos.style.display = 'block';
});

document.getElementById('mostrarOpciones').addEventListener('mouseout', function () {
    opcionesPrestamos.style.display = 'none';
});

document.getElementById('opcionesPrestamos').addEventListener('mouseover', function () {
    opcionesPrestamos.style.display = 'block';
});

document.getElementById('opcionesPrestamos').addEventListener('mouseout', function () {
    opcionesPrestamos.style.display = 'none';
});

document.getElementById('agregarPrestamos').addEventListener('click', function () {
    var infoPrestamos = document.getElementById('infoPrestamos');
    if (infoPrestamos.style.display === 'none' || infoPrestamos.style.display === '') {
        infoPrestamos.style.display = 'block';
        tablaPrestamos.style.display = 'none';
    } else {
        infoPrestamos.style.display = 'none';
    }
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
    if (tablaPrestamos.style.display === 'none' ||tablaPrestamos.style.display === '') {
        tablaPrestamos.style.display = 'block';
        infoPrestamos.style.display = 'none';
    } else {
        tablaPrestamos.style.display = 'none';
    }
});

