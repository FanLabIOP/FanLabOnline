import request from '@/utils/request'

export function getCount() {
  return request({
    url: '/home/getCount',
    method: 'post'
  })
}

export function addCount(data) {
  return request({
    url: '/home/addCount',
    method: 'post',
    data
  })
}
