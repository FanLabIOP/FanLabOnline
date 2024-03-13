
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    avatar: 'avatar.png',
    name: 'Super Admin'
  },
  'editor-token': {
    avatar: 'avatar.png',
    name: 'Normal Editor'
  }
}

module.exports = [
  // user sendCode
  {
    url: '/user/sendCode',
    type: 'post',
    response: config => {
      return {
        code: 20000
      }
    }
  },

  // user signup
  {
    url: '/user/signup',
    type: 'post',
    response: _ => {
      return {
        code: 20000
      }
    }
  },

  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const token = tokens['admin']

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: {
          token: 'admin-token'
        }
      }
    }
  },

  // get user info
  {
    url: '/user/info',
    type: 'post',
    response: _ => {
      const info = users['admin-token']

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: {
          avatar: 'user',
          name: 'Super Admin'
        }
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000
      }
    }
  }
]
