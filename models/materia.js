
const mongoose = require('mongoose')
var Carrera = mongoose.model('Carrera');
const Materia = new mongoose.Schema({
    id_materia: String,
    nombre: String,
    codigo_materia: String,
    id_carrera: {type: Schema.ObjectId, ref: Carrera}
})

module.exports = mongoose.model('Materia', Materia)