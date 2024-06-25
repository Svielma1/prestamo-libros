const express = require('express')
require('./db')
const Prestamo = require('../ApiMongo/Esquemas')

const app = express();
app.use(express.json())

app.get('/prestamos/:rut', (req, res) => {
    Prestamo.findOne({rut: req.params.rut})
    .then(prestamo => {
        if(!prestamo) {
            return res.status(404).json({message: 'Prestamo no encontrado.'})
        } else {
            res.json(prestamo)
        }
    })
    .catch(err => {
        console.error("Error al buscar el prestamo :", err)
        res.status(500).json({error: 'Error interno del servidor.'})
    });
});

const port = process.env.PORT || 2001
app.listen(port, () => console.log(`Servidor ejecutado en el puerto ${port}`))