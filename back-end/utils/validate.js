/**
 * @param {string} edu-email
 * @returns {Boolean}
 */
export function validEmail(email) {
    return /^[\w-]{3,15}@([a-z0-9]+\.)+(?<!(edu|ac)\.([a-z0-9]+\.)*)(edu|ac)\.[a-z]+$/.test(
        email
    )
}

/**
 * @param {string} password
 * @returns {Boolean}
 */
export function validPass(password) {
    return /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z0-9]{8,20}$/.test(password)
}

/**
 * @param {string} code
 * @returns {Boolean}
 */
export function validCode(code) {
    return /^\d{6}$/.test(code)
}
