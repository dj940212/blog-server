import Koa from 'koa'
import Router from './router/routes.js'
import mongoose from 'mongoose'
import logger from 'koa-logger'
import session from 'koa-session'
import bodyParser from 'koa-bodyparser'
const db = 'mongodb://blog_runner:dj15155620677@59.110.164.55:27017/blog'

mongoose.connect(db)
mongoose.connection.on("connected",() => {
    console.log('连接数据库成功')
})

const app = new Koa()
const router = Router()

app.use(logger())
app.use(session(app))
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())


app.listen(3000)
console.log('blog-server is starting at port 3000')