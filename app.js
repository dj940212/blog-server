import Koa from 'koa'
import Router from './router/routes.js'

const app = new Koa()
const router = Router()

app.use( async(ctx)=> {
	ctx.body = 'hello koa2'
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')