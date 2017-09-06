import mongoose from 'mongoose'

import BabelMod from '../models/babel'

class Babel {
    constructor() {}

    async add( ctx ) {
        const newBabel = ctx.request.body.babel
        let babel = await BabelMod.find({})
        if (newBabel) {
            babel = babel.push(newBabel)
        }
        const endBabel = await BabelMod.update({},{$set:{babel: babel}})

        ctx.body = {
            message: 'success',
            babel: endBabel
        }
    }

    async delete(ctx) {
        const index = ctx.request.body.index
        let babel = await BabelMod.find({})
        babel.splice(index,1)
        let endBabel = await BabelMod.update({},{$set:{babel: babel}})

        ctx.body = {
            message: 'success',
            babel: endBabel
        }
    }
}

export default new Babel()