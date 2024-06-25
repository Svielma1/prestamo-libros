const express = require('express')
require('./db')
const Prestamo = require('../ApiMongo/Esquemas')

const app = express();
app.use(express.json())

app.delete('/prestamos/:_id', (req, res) => {
    Prestamo.findByIdAndDelete(req.params._id, req.body, {new: true})
    .then(prestamo => {
        if(!prestamo) {
            return res.status(404).json({message: 'prestamo no encontrado'})
        }
        res.json({message: 'Prestamo eliminado.'})
    })
    .catch(err => {
        console.error("Error al eliminar el prestamo ", err);
        res.status(500).json({error: 'Error interno del Servidor.'});
    });
})

const port = process.env.PORT || 2004
app.listen(port, () => console.log(`Servidor compilado desde el puert ${port}.`))