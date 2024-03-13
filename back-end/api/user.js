import Router from 'koa-router'
import jwtSign from '../utils/jwtSign.js'
import sendEmail from '../utils/sendEmail.js'
import SHA256 from '../utils/SHA256.js'
import { validEmail, validPass, validCode } from '../utils/validate.js'

const router = new Router()

//response for '/api/user/sendCode'
router.post('/sendCode', async (ctx) => {
    const { email } = ctx.request.fields

    if (!validEmail(email)) {
        ctx.response.body = {
            code: 60204,
            message: '请输入支持的教育邮箱（ edu 或 ac )',
        }
    } else if (await ctx.$db.getUser(email)) {
        ctx.response.body = {
            code: 60204,
            message: '该邮箱已注册',
        }
    } else if (await ctx.$redis.getCode(email)) {
        ctx.response.body = {
            code: 60203,
            message: '验证码已存在，请稍后再试',
        }
    } else {
        const code = Math.random().toString().slice(-6)
        await ctx.$redis.setCode(email, code)
        sendEmail(email, code)
        ctx.response.body = {
            code: 20000,
            message: '验证码发送成功',
        }
    }
})

//response for '/api/user/signup'
router.post('/signup', async (ctx) => {
    const { email, password, code } = ctx.request.fields

    if (!validCode(code) || !validEmail(email) || !validPass(password)) {
        ctx.response.body = {
            code: 60000,
            message: '请提交合法的注册信息',
        }
    } else if (await ctx.$db.getUser(email)) {
        ctx.response.body = {
            code: 60204,
            message: '该邮箱已注册',
        }
    } else if (code !== (await ctx.$redis.getCode(email))) {
        ctx.response.body = {
            code: 30000,
            message: '验证码错误',
        }
    } else {
        await ctx.$db.setUser(email, SHA256(password))
        ctx.response.body = {
            code: 20000,
            message: '注册成功',
        }
    }
})

//response for '/api/user/login'
router.post('/login', async (ctx) => {
    const { email, password } = ctx.request.fields
    const user = await ctx.$db.getUser(email)
    if (!validEmail(email) || !validPass(password)) {
        ctx.response.body = {
            code: 60000,
            message: '请提交合法的登陆信息',
        }
    } else if (!user) {
        ctx.response.body = {
            code: 60204,
            message: '该邮箱未注册',
        }
    } else if (SHA256(password) !== user.password) {
        ctx.response.body = {
            code: 30000,
            message: '密码错误',
        }
    } else {
        const token = jwtSign({ email, id: user.id })
        ctx.response.body = {
            code: 20000,
            message: '登陆成功',
            data: {
                token,
            },
        }
    }
})

//response for '/api/user/info'
router.post('/info', (ctx) => {
    const user = ctx.state.user

    ctx.response.body = {
        code: 20000,
        data: {
            avatar: user.email.slice(0, 4),
            name: user.email,
        },
    }
})

//response for '/api/user/logout'
router.post('/logout', (ctx) => {
    ctx.response.body = {
        code: 20000,
        message: '退出登录',
    }
})

export default router.routes()
