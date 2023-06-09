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
      let option = {
        backgroundColor: "#fff",
        series: [
          {
            type: "gauge",
            name: "外层辅助",
            radius: "95%",
            startAngle: "180",
            endAngle: "0",
            center: ["50%", "70%"],
            //splitNumber: '120',
            detail: {
              show: false
            },
            data: [
              {
                value: 1
              }
            ],
            // data: [{value: 1, name: 90}],
            title: {
              show: true,
              offsetCenter: [0, 30],
              textStyle: {
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "微软雅黑",
                fontSize: 10
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [0, "rgb(228,93,11)"],
                  [
                    0.5,
                    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: "rgb(228,93,11)"
                      },
                      {
                        offset: 0.8,
                        color: "rgb(235,205,6)"
                      }
                    ])
                  ],
                  [
                    0.9,
                    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: "rgb(13,211,97)"
                      },
                      {
                        offset: 0.6,
                        color: "rgb(235,205,6)"
                      }
                    ])
                  ],
                  [1, "rgb(13,211,97)"]
                ],
                width: 2,
                opacity: 1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              length: 20,
              lineStyle: {
                color: "#051932",
                width: 0,
                type: "solid"
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              // icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z', // 箭头图标
              length: "10%",
              width: 8,
              offsetCenter: [0, "-65%"], // 箭头位置
              itemStyle: {
                color: "#f64649" // 箭头颜色
              }
            }
          },
          {
            name: "内层数据刻度",
            type: "gauge",
            startAngle: "180",
            endAngle: "0",
            radius: "79%",
            min: 0,
            max: 25,
            splitNumber: 5, // 横线数
            center: ["50%", "70%"],
            axisLine: {
              lineStyle: {
                width: 10,
                color: [
                  [0, "rgb(228,93,11)"],
                  [
                    0.5,
                    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: "rgb(228,93,11)"
                      },
                      {
                        offset: 0.8,
                        color: "rgb(235,205,6)"
                      }
                    ])
                  ],
                  [
                    0.9,
                    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: "rgb(13,211,97)"
                      },
                      {
                        offset: 0.6,
                        color: "rgb(235,205,6)"
                      }
                    ])
                  ],
                  [1, "rgb(13,211,97)"]
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
              offsetCenter: ["0", "-20%"],
              fontSize: 10,
              color: "rgb(0,191,255)"
            },
            itemStyle: {
              normal: {
                color: "rgb(0,191,255)"
              }
            },
            pointer: {
              show: false
            },
            data: [
              {
                value: 15
              }
            ],
            silent: false
          },
          {
            name: "最内层线",
            type: "gauge",
            radius: "55%", // 位置
            center: ["50%", "70%"],
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              show: true,
              lineStyle: {
                // 轴线样式
                width: 120, // 宽度
                color: "#fff"
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
              show: false
            }
          }
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

<style>
#echartsone {
  background-size: 100% 100%;
}
</style>
