import Router from 'koa-router'
import Article from '../app/controllers/article.js'
import Babel from '../app/controllers/babel'

export default () => {
	const router = new Router({ prefix: '/api' })

    // article
	router.post('/article/save', Article.save)
    router.get('/article/list', Article.list)
    router.post('/article/update', Article.update)
    router.post('/article/delete', Article.delete)
    router.get('/article/read', Article.findOne)
    router.post('/article/update/title', Article.updateTitle)
    router.post('/article/update/desc', Article.updateDesc)

    // babel
    router.get('/babel/list', Babel.list)
    router.post('/babel/add', Babel.add)
    router.post('/babel/delete', Babel.delete)

	return router
}