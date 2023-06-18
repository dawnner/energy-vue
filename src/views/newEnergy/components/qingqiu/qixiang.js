import request from "@/utils/request";

// 气象数据
export function qixiangData() {
  return request({
    url: "/system/data/list",
    method: "get"
  });
}
