import Router from 'koa-router'

export default function() {
	const router = new Router({ prefix: '/api' })

	router.get('/hello', async ( ctx ) => {
		ctx.body = 'hello koa!'
	})

	router.get('/404', async ( ctx ) => {
		ctx.body = '404 page'
	})

	return router
}