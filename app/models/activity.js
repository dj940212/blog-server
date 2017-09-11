import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ActivitySchema = new Schema({
    article: {
        type: ObjectId, 
        ref: 'Article'
    },
    operationType: String,
    date: {
        type: Date,
        default: Date.now()
    },
})

export default mongoose.model('Activity', ActivitySchema)