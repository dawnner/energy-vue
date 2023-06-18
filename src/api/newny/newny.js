import request from '@/utils/request'
// 全省可开放总容量
export function newSumApi() {
    return request({
      url: '/system/capacity/openCapacitySum',
      method: 'get',
    })
  }
  //排名
  export function newRankingListApi() {
    return request({
      url: '/system/capacity/openCapacityRankingList',
      method: 'get',
    })
  }
 // 分布式光伏信息
export function newcapacityApi(query) {
    return request({
      url: '/system/capacity/list',
      method: 'get',
      params: query
    })
  }
  // 导出
export function exportcapacityApi(query) {
  return request({
    url: '/system/capacity/export',
    method: 'get',
    params: query
  })
}