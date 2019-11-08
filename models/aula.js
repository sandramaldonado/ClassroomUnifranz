const mongoose = require('mongoose')
const Aula = new mongoose.Schema({
    id_aula: Number,
    codigo_aula: String
})

module.exports = mongoose.model('Aula', Aula)