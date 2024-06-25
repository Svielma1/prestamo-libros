const express = require('express')
require('./db')
const Prestamo = require('../ApiMongo/Esquemas')

const app = express();
app.use(express.json())

app.get('/prestamos', (req, res) => {
    Prestamo.find()
        .then(prestamos => {
            if (prestamos.length > 0){
                res.json(prestamos);
            }else{
                res.json({message: 'No se encontraron datos en la coleccion prestamos.'})
            }
        })
        .catch(err => {
            console.error("Error al buscar el prestamo :", err)
            res.status(500).json({ error: 'Error interno del servidor.' })
        });
});

const port = process.env.PORT || 2000
app.listen(port, () => console.log(`Servidor ejecutado en el puerto ${port}`))