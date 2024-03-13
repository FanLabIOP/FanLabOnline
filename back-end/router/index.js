import Router from 'koa-router'
import api from '../api/index.js'

const router = new Router()

//response for '/api'
router.use('/api', api)

export default router.routes()
