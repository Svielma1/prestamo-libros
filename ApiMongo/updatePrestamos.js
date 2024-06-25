const express = require('express')
require('./db')
const Prestamo = require('../ApiMongo/Esquemas')

const app = express();
app.use(express.json())

app.put('/prestamos/:_id', (req, res) => {
    Prestamo.findByIdAndUpdate(req.params._id, req.body, {new: true})
    .then(prestamo => {
        if(!prestamo) {
            return res.status(404).json({message: 'Prestamo no encontrada'})
        }
        res.json(prestamo)
    })
    .catch(err => {
        console.error("Error al actualizar el prestamo ", err);
        res.status(500).json({error: 'Error interno del Servidor.'});
    });
})

const port = process.env.PORT || 2003
app.listen(port, () => console.log(`Servidor compilado desde el puert ${port}.`))