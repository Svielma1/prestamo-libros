const express = require('express')
require('./db')
const Propiedad = require('./Propiedad')

const app = express();
app.use(express.json())

app.delete('/propiedades/:_id', (req, res) => {
    Propiedad.findByIdAndDelete(req.params._id, req.body, {new: true})
    .then(propiedad => {
        if(!propiedad) {
            return res.status(404).json({message: 'Propiedad no encontrada'})
        }
        res.json({message: 'Propiedad eliminada.'})
    })
    .catch(err => {
        console.error("Error al eliminar la propiedad ", err);
        res.status(500).json({error: 'Error interno del Servidor.'});
    });
})

const port = process.env.PORT || 2004
app.listen(port, () => console.log(`Servidor compilado desde el puert ${port}.`))