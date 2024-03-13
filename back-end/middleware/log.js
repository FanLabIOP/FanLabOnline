import { appendFile } from 'fs/promises'
import { log_path } from '../config.js'

export default async (ctx, next) => {
    appendFile(log_path, `[${Date.now()}] ${ctx.method} ${ctx.url}\r\n`)
    await next()
}
