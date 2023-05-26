import request from '@/utils/request'

// 查询公告列表
export function listPoweStation(query) {
  return request({
    url: '/pm/stationinfo/list',
    method: 'get',
    params: query
  })
}
