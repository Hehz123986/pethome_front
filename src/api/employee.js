import request from '@/utils/request'

// 获取所有的department 的数据
export function addEmployee(data) {
  return request({
    url: '/api/employee/add',
    method: 'post',
    data
  })
}

export function find(query) {
  return request({
    url: '/api/employee/list',
    method: 'get',
    params: query
  })
}

export function deleteEmployee(params) {
  return request({
    url: '/api/employee/delete',
    method: 'post',
    params
  })
}
export function updateEmployee(params) {
  return request({
    url: '/api/employee/update',
    method: 'post',
    params
  })
}
