const mongoose = require('mongoose')

const ContactoSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    email: {
        type: Number,
        required: true
    }
});

const RolSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    nombreRol: {
        type: String,
        required: true
    },
    maxTextos: {
        type: Number,
        required: true
    },
    diasPrestamo: {
        type: Number,
        required: true
    },
    renovaciones: {
        type: Number,
        required: true
    }
});

const UsuarioSchema = new mongoose.Schema({
    rut: {
        type: String,
        required: true
    },
    nombres: {
        type: String,
        required: true
    },
    Apellidos: {
        type: String,
        required: true
    },
    prestamoId: {
        type: String,
        required: true
    },
    rolId: {
        type: Number,
        required: true
    },
    contactoId: {
        type: Number,
        required: true
    },
    estadoUsuario: {
        type: Number,
        required: true
    }
},{_id: false});

const DeudaSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    textos: {
        type: String,
        required: true
    },
    diasAtraso: {
        type: Number,
        required: true
    },
    monto: {
        type: Number,
        required: true
    }
});

const PrestamoSchema = new mongoose.Schema({
    rut: {
        type: String,
        required: true
    },
    fechaPrestamo: {
        type: Date,
        default: Date.now
    },
    fechaDevolucion: { // Revisar como introducir fecha de devolucion
        type: Date,
        required: true
    },
    cantidadTextos: {
        type: Number,
        required: true
    },
    ejemplaresIsbn: {
        type: String,
        required: true
    },
    deudasId: {
        type: Number,
        required: true
    }
});

const EjemplarSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    estadoEjemplar: {
        type: String,
        required: true
    },
    libroId: {
        type: Number,
        required: true
    }
},{_id: false});

const LibroSchema = new mongoose.Schema({
        _id:{
            type: Number,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        autor: {
            type: String,
            required: true   
        },
        editorial: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true
        }
});

const Prestamo = mongoose.model('prestamo', PrestamoSchema, 'prestamos') // (Nombre modelo, Estructura modelo, Coleccion donde se guarda)
module.exports = Prestamo