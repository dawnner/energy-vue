<template>
  <div style="height: 100%;position: relative;">
    <span
      style="position: absolute; top: 20%; left: 5%;width:89%;height:1px;background:#ccc; z-index: 99"
    ></span>
    <div id="barchart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    barchart(val) {
      var chartDom = document.getElementById("barchart");
      var myChart = echarts.init(chartDom);
      var option;
      console.log(val, "18");
      let name = [];
      let arr1 = [];
      let arr2 = [];
      val.forEach(item => {
        name.push(item.targetName);
        arr1.push(item.addUpGeneratingCapacity);
        arr2.push((item.mergeMachineCapacity / 10000).toFixed(2));
      });
      var data = {
        // xData: [
        //   "直调公用电厂",
        //   "地方公用电厂",
        //   "直调自备电厂",
        //   "地方自备电厂",
        //   "孤网电厂"
        // ],
        // yData1: ["40000", "30000", "20000", "30000", "50000"],
        // yData2: ["10000", "10000", "10000", "10000", "20000"],

        xData: name,
        yData1: arr1,
        yData2: arr2,
        yName1: "发电量",
        yName2: "装机容量",
        yLabel: "(亿千瓦·时)"
      };

      option = {
        title: {
          text: "在运电源企业类别",
          left: 20,
          top: 23,
          // bottom: 18,
          textStyle: {
            fontSize: 20
          }
        },
        // backgroundColor:'rgba(3, 72, 84, 1)',
        legend: {
          top: "9%",
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
          top: "35%",
          left: "1%",
          right: "3%",
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
            // min: 0,
            // max: 50000,
            splitNumber: 6,
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
            },
            nameTextStyle: {
              color: "#000",
              padding: [0, 0, -10, 0]
            }
          },
          {
            // type: "kw",
            // min: 0,
            // max: 10000,
            splitNumber: 3,
            name: "(亿千瓦)",
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
                  offset: 1,
                  color: "#2F5FFE"
                },
                {
                  offset: 0,
                  color: "#2F5FFE"
                }
              ])
            }
          },
          {
            name: data.yName2,
            yAxisIndex: 1,
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
  }
};
</script>

<style>
#barchart {
  background-size: 100% 100%;
}
</style>
