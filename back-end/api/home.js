import Router from 'koa-router'

const router = new Router()

//response for '/api/home/getCount'
router.post('/getCount', async (ctx) => {
    const ipcasCount = await ctx.$db.getCount('ipcas')
    const oasisCount = await ctx.$db.getCount('oasis')
    const vecCount = await ctx.$db.getCount('vec')
    const dimsCount = await ctx.$db.getCount('dims')
    const sapiCount = await ctx.$db.getCount('sapi')
    ctx.response.body = {
        code: 20000,
        data: {
            ipcasCount,
            oasisCount,
            vecCount,
            dimsCount,
            sapiCount,
        },
    }
})

//response for '/api/home/addCount'
router.post('/addCount', async (ctx) => {
    ctx.$db.addCount(ctx.request.fields.name)
    ctx.response.body = {
        code: 20000,
    }
})

export default router.routes()
