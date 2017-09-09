import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BabelSchema = new Schema({
    babel: [String],
    id: String
})

export default mongoose.model('Babel', BabelSchema)
