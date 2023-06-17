import request from '@/utils/request'
// 获取电源一级类型
export function getdataApi(query) {
  return request({
    url: '/system/info/engineeringClassification',
    method: 'get',
    params: query
  })
}
// 获取电源二级类型
export function getdatatwoApi(query) {
return request({
  url: '/system/info/ProjectClassification',
  method: 'get',
  params: query
})
}
  // 获取状态
export function getstateApi(query) {
  return request({
    url: '/system/from/list?gradeId=3',
    method: 'get',
    params: query
  })
}
  // 获取列表
  export function getListApi(data) {
    return request({
      url: '/system/info/list',
      method: 'get',
      params: data
    })
  }
// 导出
export function exportPostApi(query) {
  return request({
    url: '/system/info/export',
    method: 'get',
    params: query
  })
}