const express = require('express')
require('./db')
const Propiedad = require('./Propiedad')

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    Propiedad.find()
    .then(propiedad => {
        if(!propiedad) {
            return res.status(404).json({message: 'Propiedad no encontrada.'})
        } else {
            res.json(propiedad)
        }
    })
    .catch(err => {
        console.error("Error al buscar el restaurante :", err)
        res.status(500).json({error: 'Error interno del servidor.'})
    });
});

const port = process.env.PORT || 2000
app.listen(port, () => console.log(`Servidor ejecutado en el puerto ${port}`))