import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ArticleSchema = new Schema({
    title: String,
    babel: [String],
    content: String,
    comment: String,
    description: String,
    meta: {
        createAt: {
            type: Date, 
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

ArticleSchema.pre('save', function( next ) {
    if ( this.isNew ) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    }else {
        this.meta.updateAt = Date.now()
    }

    next()
})

export default mongoose.model('Article', ArticleSchema)
