import Router from 'koa-router'
import koajwt from 'koa-jwt'
import { secret_key } from '../config.js'
import user from './user.js'
import home from './home.js'
import oasis from './oasis.js'
import ipcas from './ipcas.js'
import sapi from './sapi.js'

const router = new Router()

//jwt
router.use(
    koajwt({
        secret: secret_key,
    }).unless({
        path: [/\/user\/login/, /\/user\/sendCode/, /\/user\/signup/],
    })
)

//response for '/api/user'
router.use('/user', user)

//response for '/api/home'
router.use('/home', home)

//response for '/api/oasis'
router.use('/oasis', oasis)

//response for '/api/ipcas'
router.use('/ipcas', ipcas)

//response for '/api/sapi'
router.use('/sapi', sapi)

export default router.routes()
