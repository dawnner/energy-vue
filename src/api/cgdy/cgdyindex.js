import request from '@/utils/request'
// 获取电源一级类型
export function getdataApi(query) {
    return request({
      url: '/system/day/list',
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