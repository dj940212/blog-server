import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ActivitySchema = new Schema({
    updated: [String],
    created: [String],
    level: {
        type: String,
        default: '0'
    },
    date: {
        type: Date,
        default: Date.now()
    },
})

export default mongoose.model('Activity', ActivitySchema)