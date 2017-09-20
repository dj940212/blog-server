import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    salt: String,
    token: String

})

export default mongoose.model('User', UserSchema)