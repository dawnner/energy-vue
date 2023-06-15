import request from "@/utils/request";

// 各市电源
export function gsdyData() {
  return request({
    url: "/system/info/cityPowerSupplyConditionQuery",
    method: "get"
  });
}

// 电源装机量
export function dyzjData() {
  return request({
    url: "/system/info/installedCapacityQuery",
    method: "get"
  });
}
