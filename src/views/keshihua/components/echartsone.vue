<template>
  <div style="height: 100%;">
    <div id="echartsone" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.echartsone();
  },
  methods: {
    echartsone() {
      var chartDom = document.getElementById("echartsone");
      var myChart = echarts.init(chartDom);
      // const chartData = { min: 0, max: 100, value: 50 };
      let option = {
        backgroundColor: "#fff",
        title: [
          {
            text: "全省煤电供应保障能力",
            left: 30,
            top: 25,
            // bottom: 18,
            textStyle: {
              fontSize: 20
            }
          },
          {
            text: "天",
            left: "53%",
            top: "65%",
            // bottom: 18,
            textStyle: {
              fontSize: 15
            }
          }
        ],
        series: [
          // 外侧灰色轴线
          {
            type: "gauge",
            radius: "90%", // 位置
            center: ["50%", "70%"],
            min: 0,
            max: 100,
            startAngle: 200,
            endAngle: -20,
            axisLine: {
              show: true,
              lineStyle: {
                // 轴线样式
                width: 3, // 宽度
                color: [
                  [
                    1,
                    {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: "#40E050" // 0% 处的颜色
                        },
                        {
                          offset: 0.3,
                          color: "#A7DE70" // 0% 处的颜色
                        },
                        {
                          offset: 0.5,
                          color: "#EDA944" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#D72626" // 100% 处的颜色
                        }
                      ],
                      global: false // 缺省为 false
                    }
                  ],
                  [1, "#E6EBF8"]
                ]
              }
            },
            axisTick: {
              // 刻度
              show: false
            },
            splitLine: {
              // 分割线
              show: false
            },
            axisLabel: {
              // 刻度标签
              show: false
            },
            pointer: {
              // 仪表盘指针
              show: false
            },
            detail: {
              show: false
            }
          },
          // 第二层的渐变色
          {
            name: "内层数据刻度",
            type: "gauge",
            startAngle: 200,
            endAngle: -20,
            radius: "79%",
            min: 0,
            max: 25,
            splitNumber: 5, // 横线数
            center: ["50%", "70%"],
            axisLine: {
              lineStyle: {
                width: 10,
                color: [
                  [
                    1,
                    {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: "#40E050" // 0% 处的颜色
                        },
                        {
                          offset: 0.3,
                          color: "#A7DE70" // 0% 处的颜色
                        },
                        {
                          offset: 0.5,
                          color: "#EDA944" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#D72626" // 100% 处的颜色
                        }
                      ],
                      global: false // 缺省为 false
                    }
                  ],
                  [1, "#E6EBF8"]
                ]
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "rgb(255,0,0)",
              distance: -10,
              fontSize: 10
            },
            detail: {
              show: true,
              offsetCenter: ["-5%", "-12%"],
              fontSize: 60,
              color: "#53BF61"
            },
            pointer: {
              show: true,
              icon: "triangle",
              offsetCenter: [0, "-70%"],
              itemStyle: {
                color: "#f64649"
                // color: "auto"
              },
              length: "20",
              width: "10"
            },
            title: {
              offsetCenter: ["0%", "15%"],
              fontSize: 15,
              color: "#ccc"
            },
            data: [
              {
                value: 15,
                name: "全省煤电供应保障能力"
              }
            ],
            silent: false
          },
          {
            startAngle: 200,
            endAngle: -20,
            name: "实际完成",
            type: "gauge",
            center: ["50%", "71%"], // 默认全局居中
            radius: "58%",
            min: 0,
            max: 100,
            splitNumber: 0,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                color: [
                  [0.66, "#dddddd"],
                  [1, "#dddddd"]
                ], // 属性lineStyle控制线条样式
                width: 4
              }
            },

            axisLabel: {
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                fontSize: 16,
                color: "rgba(30,144,255,0)"
              }
            },
            splitLine: {
              // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 0,
                color: "#444"
              }
            },
            pointer: {
              // 分隔线 指针
              color: "#666666",
              width: 0,
              length: 230
            },
            detail: {
              show: false
            }
          }
          // 带空心的小圆
          // {
          //   type: "pie",
          //   radius: ["82%", "42%"], // 位置
          //   zlevel: 10,
          //   silent: true,
          //   startAngle: 150, // 修改这个值可以改小圆点的位置（200为起始位置200到-20）
          //   endAngle: -20,
          //   data: [
          //     {
          //       name: "",
          //       value: 0.68,
          //       label: {
          //         show: false
          //       },
          //       labelLine: {
          //         show: false
          //       },
          //       itemStyle: {
          //         color: "rgba(255,255,255,0)"
          //       }
          //     },
          //     // 画中间的图标
          //     {
          //       name: "",
          //       value: 0,
          //       label: {
          //         position: "inside",
          //         backgroundColor: "rgba(48, 236, 166, 1)",
          //         borderRadius: 10,
          //         padding: 8, // 可以控制圆的大小
          //         borderWidth: 2,
          //         borderColor: "#fff"
          //       }
          //     }
          //   ]
          // }
        ]
      };
      option && myChart.setOption(option);
      window.onresize = function() {
        setTimeout(function() {
          myChart.resize();
        }, 10);
      };
    }
  }
};
</script>

<style scoped>
#echartsone {
  background-size: 100% 100%;
}
</style>
