import { appendFile } from 'fs/promises'
import { error_path } from '../config.js'

export default async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        appendFile(error_path, `[${Date.now()}] ${err.message}\r\n`)
        ctx.throw(404)
        ctx.body = {
            message: '服务器维护中。',
        }
    }
}
