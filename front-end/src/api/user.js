import request from '@/utils/request'

export function sendCode(data) {
  return request({
    url: '/user/sendCode',
    method: 'post',
    data
  })
}

export function signup(data) {
  return request({
    url: '/user/signup',
    method: 'post',
    data
  })
}

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'post'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
