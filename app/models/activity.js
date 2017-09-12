import mongoose from 'mongoose'
import formatTime from '../../utils/formatTime'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ActivitySchema = new Schema({
    article_id: String,
    article_title: String,
    operationType: String,
    createAt: String,
})

ActivitySchema.pre('save', function(next) {
    this.createAt = formatTime(new Date()) 
    next()
})

export default mongoose.model('Activity', ActivitySchema)