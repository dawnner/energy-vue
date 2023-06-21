import request from "@/utils/request";

// 发电趋势
export function fdqsData() {
  return request({
    url: "/system/tmr/monthGeneratingCapacity",
    method: "get"
  });
}

export function fdlData(query) {
  return request({
    url: "/system/day/provinceGeneratingCapacity",
    method: "get",
    params: query
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
