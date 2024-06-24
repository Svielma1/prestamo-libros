const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://sebastianvielma03:Inacap123@serverinacap.aw3r9qk.mongodb.net/bibliotecap?retryWrites=true&w=majority&appName=ServerInacap'

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado a la base de datos.'))
.catch(err => console.log(err))

module.exports = mongoose