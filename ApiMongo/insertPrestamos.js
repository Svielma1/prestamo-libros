const express = require('express')
require('./db')
const Prestamo = require('../ApiMongo/Esquemas')

const app = express();
app.use(express.json())

app.post('/prestamos', (req, res)=> {
    const newPrestamo = new Prestamo(req.body);
    newPrestamo.save()
        .then(prestamo => res.status(201).json(prestamo))
        .catch(err => {
            console.error("Error al insertar el prestamo. ", err);
            res.status(500),json({error: 'Error interno del servidor.'})
        })
});

const port = process.env.PORT || 2002
app.listen(port, () => console.log(`Servidor compilado en el puerto ${port}`))