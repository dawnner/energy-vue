<template>
  <div style="height: 100%;position: relative;">
    <span
      style="position: absolute; top: 28%; left: 5%;width:89%;height:1px;background:#ccc; z-index: 99"
    ></span>
    <div id="barchart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    barchart() {
      var chartDom = document.getElementById("barchart");
      var myChart = echarts.init(chartDom);
      var option;
      var data = {
        xData: [
          "直调公用电厂",
          "地方公用电厂",
          "直调自备的电厂",
          "地方自备电厂",
          "孤网电厂"
        ],
        yData1: [
          "19577.36",
          "4893.22",
          "7797.64",
          "557.50",
          "4529.94",
          "2690.19"
        ],
        yData2: ["2106.22", "400.45", "832.78", "104.02", "268.72", "468.06"],
        yName1: "发电量",
        yName2: "装机容量",
        yLabel: "（个）"
      };

      option = {
        title: {
          text: "电源企业数量",
          left: 20,
          top: 18,
          // bottom: 18,
          textStyle: {
            fontSize: 20
          }
        },
        // backgroundColor:'rgba(3, 72, 84, 1)',
        legend: {
          top: "11%",
          right: "5%",
          show: true,
          itemGap: 30,
          itemWidth: 25,
          itemHeight: 14,
          textStyle: {
            color: "#000",
            fontSize: 14,
            padding: [0, 8, 0, 8]
          },
          data: [data.yName1, data.yName2]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              fontSize: 14,
              borderColor: "#000",
              shadowOffsetY: 0
            }
          }
        },
        grid: {
          top: "52%",
          left: "1%",
          right: "5%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: data.xData,
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0, // 设置x轴名称间隔为2
              textStyle: {
                color: "#000",
                fontSize: 14,
                fontWeight: 400
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(12,116,123,0.5)"
              }
            }
          }
        ],
        yAxis: [
          {
            // type:'个',
            min: 0,
            max: 30000,
            splitNumber: 3,
            name: data.yLabel,
            nameTextStyle: {
              color: "#000"
            },
            boundaryGap: false,
            axisTick: {
              show: false
            },
            axisLabel: {
              showMaxLabel: false,
              textStyle: {
                color: "#000",
                fontSize: 14,
                fontWeight: 400
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: "dotted",
                color: "rgba(12,116,123,0.5)"
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(12,116,123,0.5)"
              }
            }
          }
        ],
        series: [
          {
            name: data.yName1,
            type: "bar",
            data: data.yData1,
            barWidth: 24,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#B4C5FF"
                },
                {
                  offset: 1,
                  color: "#3060FE"
                }
              ])
            }
          },
          {
            name: data.yName2,
            type: "bar",
            data: data.yData2,
            barWidth: 24,
            barGap: "40%",
            barCategoryGap: "30%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(255,165,0,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(255,255,224,1)"
                  }
                ])
              }
            }
          }
        ]
      };
      option && myChart.setOption(option);
      let listener = function() {
        myChart.resize();
      };
      window.addEventListener("resize", listener);
    }
  },
  mounted() {
    this.barchart();
  }
};
</script>

<style>
#barchart {
  background-size: 100% 100%;
}
</style>
