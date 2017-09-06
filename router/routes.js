import Router from 'koa-router'
import Article from '../app/controllers/article.js'

export default () => {
	const router = new Router({ prefix: '/api' })

    // article
	router.post('/article/save', Article.save)
    router.get('/article/list', Article.list)
    router.post('/article/update', Article.update)
    router.post('/article/delete', Article.delete)

	return router
}