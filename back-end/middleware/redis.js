import { createClient } from 'redis'

const client = createClient()

client.setCode = async (key, value) => {
    await client.connect()
    await client.set(key, value, {
        EX: 3 * 60,
        NX: true,
    })
    await client.quit()
}

client.getCode = async (key) => {
    await client.connect()
    const value = await client.get(key)
    await client.quit()
    return value
}

export default async (ctx, next) => {
    ctx.$redis = client
    await next()
}
