import jwt from 'jsonwebtoken'
import { secret_key } from '../config.js'

const { sign } = jwt

function jwtSign(user) {
    return sign(user, secret_key, { expiresIn: '1d' })
}

export default jwtSign
