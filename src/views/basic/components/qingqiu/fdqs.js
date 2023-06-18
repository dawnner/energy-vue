import request from "@/utils/request";

// 发电趋势
export function fdqsData() {
  return request({
    url: "/system/tmr/monthGeneratingCapacity",
    method: "get"
  });
}
