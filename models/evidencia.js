const mongoose = require('mongoose')
var Curso = mongoose.model('Curso');
const Evidencia = new mongoose.Schema({
    ci_evidencia: Number,
    id_curso: {type: Schema.ObjectId, ref:Curso},
    hito: Number,
    titulo: String,
    ubicacion: String,
    fecha_hora: String,
    calificacion: Number
})

module.exports = mongoose.model('Evidencia', Evidencia)