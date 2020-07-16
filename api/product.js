import request from '@/utils/request'
import { types } from '@babel/core'

export function showList(params) {
  return request({
    url: '/api/list',
    method: 'get',
    baseURL: 'http://localhost:8000/',
    params
  })
}

export function postform(data) {
  return request({
    url: '/api/products/',
    method: 'post',
    baseURL: 'http://localhost:8000/',
    data,
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  })
}
const uploadUrl = 'http://localhost:8000/' + 'api/image/'
export { uploadUrl }
