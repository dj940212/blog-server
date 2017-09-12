import mongoose from 'mongoose'
import ArticleMod from '../models/article'
import ActivityMod from '../models/activity'
import uuid from 'uuid'

class Article {
    constructor() {}

    async add(ctx) {
        const key = uuid.v4()
        const title = ctx.request.body.title 
        const content = ctx.request.body.content
        const description = ctx.request.body.description
        const babel  = ctx.request.body.babel.split(',')

        let article = new ArticleMod({
            title: title,
            content: content,
            babel: babel,
            description: description
        })

        try {
            article = await article.save()
            const activity = new ActivityMod({
                article_id: article._id,
                article_title: article.title,
                operationType: 'created'
            })
            await activity.save()
        }catch(e) {
            ctx.body = {
                message: '保存失败',
            }
        }

        ctx.body = {
            message: '保存成功',
            data: article
        }
    }

    async list(ctx) {
        const count = ctx.request.body.count || 10
        const skipNum = ctx.request.body.skipNum || 0
        const sort = ctx.request.body.sort || -1

        const data = await ArticleMod.find({}).sort({'meta.createAt': sort}).skip(parseInt(skipNum)).limit(parseInt(count))

        ctx.body = {
            message: 'success',
            data: data
        }
    }

    async update(ctx) {
        const body = ctx.request.body
        const content = body.content
        const description = body.description
        const title = body.title
        const _id  = body._id

        title && await ArticleMod.update({_id: _id},{$set: {title: title}})
        content && await ArticleMod.update({_id: _id},{$set: {content: content}})
        description && await ArticleMod.update({_id: _id},{$set: {description: description}})

        // 保存操作日志
        const article = await ArticleMod.findOne({_id: _id})
        const activity = new ActivityMod({
            article_id: article._id,
            article_title: article.title,
            operationType: 'updated'
        })
        await activity.save()

        ctx.body = {
            message: 'success'
        }
    }

    async delete(ctx) {
        const _id = ctx.request.body._id
        try {
            // 保存日志
            const article = await ArticleMod.findOne({_id: _id})
            const activity = new ActivityMod({
                article_id: article._id,
                article_title: article.title,
                operationType: 'deleted'
            })
            await activity.save()
            // 删除文章
            await ArticleMod.remove({_id: _id})
        }catch(e) {
            ctx.body = {
                message: 'failed'
            }
        }

        ctx.body = {
            message: 'success'
        }
    }

    async findOne(ctx) {
        const _id = ctx.request.query._id

        if (_id) {
            const data = await ArticleMod.findOne({_id:_id})

            ctx.body = {
                message: 'success',
                data: data
            }
        }
    }

    async updateTitle(ctx) {
        const body = ctx.request.body
        const title = body.title || '[无标题]'
        const _id  = body._id

        title && await ArticleMod.update({_id: _id},{$set: {title: title}})

        ctx.body = {
            message: 'success'
        }
    }

    async updateDesc(ctx) {
        const body = ctx.request.body
        const description = body.description
        const _id  = body._id

        description && await ArticleMod.update({_id: _id},{$set: {description: description}})

        ctx.body = {
            message: 'success'
        }
    }
}

export default new Article()