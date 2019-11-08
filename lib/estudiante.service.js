const Estudiante = require('../models/estudiante')

module.exports = {
    async getPosts() {
        const Estudiantes = await Estudiante.find({}).sort({ "ci": -1 })

        return Estudiantes
    },
    async getPost(ci) {
        const currentStudent = await Estudiante.findById(ci)
        return currentStudent
    },
    async createOrUpdatePost(estudiante) {
        if(estudiante._ci) {
            const updatedEstudiante = await Estudiante.findByIdAndUpdate(estudiante._ci, estudiante, { new: true })
            return updatedEstudiante
        }

        const newEstudiante = await Estudiante.create(estudiante)
        return newEstudiante
    },
    async deletePost(ci) {
        const deletedEstudiante = await Estudiante.findByIdAndRemove(ci)
        return deletedEstudiante
    }
}