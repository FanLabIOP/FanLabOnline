const user = require('./user')
const test = require('./test')

const mocks = [
  ...user,
  ...test
]

module.exports = {
  mocks
}
