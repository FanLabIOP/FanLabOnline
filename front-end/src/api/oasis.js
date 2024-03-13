import requestFile from '@/utils/requestFile'
import request from '@/utils/request'

export function uploadForm(data) {
  return request({
    url: '/oasis/uploadForm',
    method: 'post',
    data
  })
}

export function uploadFile(data, param) {
  return request({
    url: '/oasis/uploadFile',
    method: 'post',
    data,
    onUploadProgress: (event) => {
      param.file.percent = (event.loaded / event.total) * 100
      param.onProgress(param.file)
    }
  })
}

export function downloadFile(data) {
  return requestFile({
    url: '/oasis/downloadFile',
    method: 'post',
    responseType: 'blob',
    data
  })
}

export function getList() {
  return request({
    url: '/oasis/list',
    method: 'get'
  })
}

export function shutdown(data) {
  return request({
    url: '/oasis/shutdown',
    method: 'post',
    data
  })
}

export function check(data) {
  return request({
    url: '/oasis/check',
    method: 'post',
    data
  })
}
