const mongoose = require('mongoose')
var Docente = mongoose.model('Docente');
var Estudiante = mongoose.model('Estudiante');
const Curso = new mongoose.Schema({
    id_curso: Number,
    id_materia: String,
    ci_docente: {type: Schema.ObjectId, ref: Docente},
    gestion: String,
    ci_estudiante:{type: Schema.ObjectId, ref: Estudiante}
})

module.exports = mongoose.model('Curso', Curso)