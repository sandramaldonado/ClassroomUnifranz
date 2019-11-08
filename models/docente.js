const mongoose = require('mongoose');
var Materia = mongoose.model('Materia');

const Docente = new mongoose.Schema({
    ci: Number,
    nombre: String,
    apellido_paterno: String,
    apellido_materno: String,
    fecha_nacimiento: String,
    id_materias: {type: Schema.ObjectId, ref: Materia}  
})

module.exports = mongoose.model('Docente', Docente)