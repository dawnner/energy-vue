import request from "@/utils/request";

// 发电趋势
export function fdqsData() {
  return request({
    url: "/system/tmr/monthGeneratingCapacity",
    method: "get"
  });
}

export function fdlData(extDateTime) {
  return request({
    url: "/system/day/list",
    method: "get",
    params: extDateTime
  });
}

// 电源企业数量
export function dyqyData() {
  return request({
    url: "/system/particulars/list",
    method: "get"
  });
}

// 电量交换
export function dljhData() {
  return request({
    url: "/system/condition/query",
    method: "get"
  });
}
