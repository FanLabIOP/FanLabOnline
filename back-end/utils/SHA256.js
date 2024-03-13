import { createHash } from 'crypto'

function SHA256(pass) {
    const hash = createHash('sha256')
    return hash.update(pass).digest('hex')
}

export default SHA256
