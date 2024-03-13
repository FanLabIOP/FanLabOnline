const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': [0, 1, 2],
    time: '@datetime',
    path: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/oasis/list',
    type: 'get',
    response: (config) => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/ipcas/list',
    type: 'get',
    response: (config) => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
