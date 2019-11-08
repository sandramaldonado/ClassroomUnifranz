const mongoose = require('mongoose');
var Carrera = mongoose.model('Carrera');
var Schema = mongoose.Schema;
const Estudiante = new mongoose.Schema({
    ci: Number,
    nombres: String,
    apellido_paterno: String,
    apellido_materno: String,
    fecha_nacimiento: String,
    id_carrera: {type: Schema.ObjectId, ref: Carrera},
    id_materias: Array 
})

module.exports = mongoose.model('Post', Estudiante)