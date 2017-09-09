import mongoose from 'mongoose'

import BabelMod from '../models/babel'

class Babel {
    constructor() {

    }

    async save() {
        new BabelMod().save({id:'222333'})
    }

    async add( ctx ) {
        const newBabel = ctx.request.body.babel
        new BabelMod().save({id:'222333'})
        let babel = await BabelMod.find({id:'222333'})
        console.log(babel)
        // let endBabel
        // if (babel.length) {
        //     newBabel && babel.push(newBabel)
        //     endBabel = await BabelMod.update({id:'222333'},{$set:{babel: babel}})
        // }else {
        //     new BabelMod().save({id:'222333'})
        //     newBabel && babel.push(newBabel)
        //     console.log(babel)
        //     endBabel = await BabelMod.update({id:'222333'},{$set:{babel: babel}})
        // }
        

        ctx.body = {
            message: 'success',
            data: babel
        }
    }

    async delete(ctx) {
        const index = ctx.request.body.index
        let babel = await BabelMod.find({})
        babel.splice(index,1)
        let endBabel = await BabelMod.update({},{$set:{babel: babel}})

        ctx.body = {
            message: 'success',
            data: endBabel
        }
    }

    async list(ctx) {
        const babel = await BabelMod.find({})

        ctx.body = {
            message: 'success',
            data: babel
        }
    }
}

export default new Babel()