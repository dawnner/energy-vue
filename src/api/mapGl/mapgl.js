import request from '@/utils/request'
// 企业用能管理公司信息
export function mapGuanli(query) {
    return request({
      url: '/system/carbon/list',
      method: 'get',
      params: query
    })
  }
  // 企业用能管理公司柱状图信息
  export function mapGuanliHistogram(query) {
    return request({
      url: '/system/carbon/listBycity',
      method: 'get',
      params: query
    })
  }
  // 企业用能管理公司往年燃料对比图信息
  export function mapGuanFuel(query) {
    return request({
      url: '/system/carbon//listByFuelType',
      method: 'get',
      params: query
    })
  }