import Koa from 'koa'
import convert from 'koa-convert'
import cors from '@koa/cors'
import staticCache from 'koa-static-cache'
import body from 'koa-better-body'
import router from './router/index.js'
import { port, upload_dir, static_dir, cors_domin } from './config.js'
import error from './middleware/errorHandler.js'
import log from './middleware/log.js'
import db from './middleware/db.js'
import redis from './middleware/redis.js'

//server
const server = new Koa()
server.listen(port)
console.log(port)

//error
server.use(error)

//log
server.use(log)

//cors
server.use(
    cors({
        origin: cors_domin,
        credentials: true,
    })
)

//database
server.use(db)

//redis
server.use(redis)

//post
server.use(
    convert(
        body({
            uploadDir: upload_dir,
        })
    )
)

//router
server.use(router)

//static
server.use(
    convert(
        staticCache(static_dir, {
            alias: {
                '/': '/index.html',
            },
        })
    )
)
