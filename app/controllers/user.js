import mongoose from 'mongoose'
import UserMod from '../models/user'
import uuid from 'uuid'

class User {
    constructor() {}

    async register(ctx) {
        const username = ctx.request.body.username
        const password = ctx.request.body.password

        let user = new UserMod({
            username: username,
            password: password,
            salt: uuid.v4()
        })
    }

    async login(ctx) {
        const username = ctx.request.body.username
        const password = ctx.request.body.password

        let user = UserMod.findOne({username: username, password: password})

        if (user) {
            ctx.cookies.set('userId', user._id, {
                httpOnly: false,
                sameSite: 'strict'
            });

            ctx.body={
                message: 'success',
            }
        }
    }
}

export default new User()