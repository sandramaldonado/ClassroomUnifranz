const mongoose = require('mongoose')
const Carrera = new mongoose.Schema({
    id_carrera: Number,
    Nombre: String,
    codigo_carrera: String
})

module.exports = mongoose.model('Carrera', Carrera)