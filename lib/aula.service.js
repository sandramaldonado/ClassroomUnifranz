const Aula = require('../models/aula')

module.exports = {
    async getPosts() {
        const Aula = await Aula.find({}).sort({ "id_aula": -1 })

        return Aula
    },
    async getPost(id) {
        const currentAula = await Aula.findById(id)
        return currentAula
    },
    async createOrUpdatePost(aula) {
        if(aula._id) {
            const updatedAula = await Aula.findByIdAndUpdate(aula._id, aula, { new: true })
            return updatedAula
        }

        const newAula = await Aula.create(aula)
        return newAula
    },
    async deletePost(id) {
        const deletedAula = await Aula.findByIdAndRemove(id)
        return deletedAula
    }
}