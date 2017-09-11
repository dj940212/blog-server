import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BabelSchema = new Schema({
    babel: String
})

export default mongoose.model('Babel', BabelSchema)
