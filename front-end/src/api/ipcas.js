import requestFile from '@/utils/requestFile'
import request from '@/utils/request'

export function uploadForm(data) {
  return request({
    url: '/ipcas/uploadForm',
    method: 'post',
    data
  })
}

export function uploadFile(data, param) {
  return request({
    url: '/ipcas/uploadFile',
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
    url: '/ipcas/downloadFile',
    method: 'post',
    responseType: 'blob',
    data
  })
}

export function getList() {
  return request({
    url: '/ipcas/list',
    method: 'get'
  })
}

export function shutdown(data) {
  return request({
    url: '/ipcas/shutdown',
    method: 'post',
    data
  })
}

export function check(data) {
  return request({
    url: '/ipcas/check',
    method: 'post',
    data
  })
}
