<template>
  <div style="height: 100%; position: relative">
    <div
      id="analysisHistogram2"
      style="width: 100%; height: 100%"
      ref="chart"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    // this.analysisHistogram2();
  },
  methods: {
    analysisHistogram2(j) {
      console.log(j);

      var chartDom = document.getElementById("analysisHistogram2");
      var myChart = echarts.init(chartDom);
      // var option;
      // let xData = []; // 类型
      let xData = ["济南", "青岛", "烟台", "威海", "淄博", "临沂", "菏泽"];
      var data1Arr = [8, 11, 14, 15, 17, 11, 11]; // 数据1
      var data2Arr = [7, 10, 10, 9, 11, 7, 7]; // 数据2
      var data3Arr = [6, 9, 2, 3, 8, 4, 4]; // 数据3
      //var data4Arr = [720, 700, 810, 815, 800, 580, 900, 720, 700]; // 数据4
      // xData = j;
      var dataName = ["新能源", "常规电源", "储能"];
      let zoomShow = xData.length > 10;

      let dataList = [data1Arr, data2Arr, data3Arr];
      //let colorList = ["#667BFF", "#29ACFF", "#FDAD59", ];
      let colorList = [
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#589cd6"
            },
            {
              offset: 1,
              color: "#589cd6"
            }
          ]
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#f67c2a"
            },
            {
              offset: 1,
              color: "#f67c2a"
            }
          ]
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#D8F5CB"
            },
            {
              offset: 1,
              color: "#a5a5a5"
            }
          ]
        }
      ];

      let seriousList = [];
      dataName.map((item, index) => {
        seriousList.push({
          name: dataName[index],
          label: {
            show: false
          },
          color: colorList[index],
          itemStyle: {
            barBorderRadius: [2, 2, 0, 0]
          },
          type: "bar",
          barWidth: "6", //柱型宽度
          data: dataList[index]
        });
      });

      let option = {
        title: {
          text: "各地市CO2往年对比",
          left: 20,
          top: 18,
          // bottom: 18,
          textStyle: {
            fontSize: 22
          }
        },

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none"
          },
          textStyle: {
            fontSize: 12
          }
        },
        dataZoom: [
          {
            show: zoomShow, //flase直接隐藏图形
            type: "slider",
            backgroundColor: "transparent",
            brushSelect: false, // 是否开启刷选功能
            zoomLock: false, // 是否锁定选择区域大小
            height: 7,
            //left: 'center', //滚动条靠左侧的百分比
            bottom: 0,
            startValue: 0, //滚动条的起始位置
            endValue: 8, //滚动条的截止位置（按比例分割你的柱状图x轴长度）
            handleStyle: {
              color: "#E8E8E8",
              borderColor: "#E8E8E8"
            },
            fillerColor: "#E8E8E8",
            borderColor: "transparent",
            showDetail: false,
            dataBackground: {
              areaStyle: {
                opacity: 0
              },
              lineStyle: {
                color: "transparent"
              }
            }
          }
        ],
        legend: {
          top: 23,
          right: 10,
          data: dataName,
          // right: "35%",
          // top: "0",
          //icon: "circle",
          // itemWidth: 24, // 设置宽度
          // itemHeight: 14, // 设置高度
          itemGap: 10,
          textStyle: {
            color: "rgba(0, 0, 0, 0.85)",
            fontFamily: "Source Han Sans CN-Regular",
            fontSize: 12,
            padding: [0, 0, 0, 5]
          }
        },
        grid: {
          left: "2%",
          right: "5%",
          top: 80,
          bottom: "3%", //下边距,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
              lineStyle: {
                color: "#cccccc"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              rotate: 45, //代表逆时针旋转
              color: "#808080",
              textStyle: {
                fontSize: 12,
                fontFamily: "Source Han Sans CN-Regular"
              }
            },
            data: xData
          }
        ],
        yAxis: [
          {
            nameTextStyle: {
              color: "#808080",
              fontSize: 12,
              fontFamily: "Source Han Sans CN-Regular",
              align: "left",
              padding: [0, 0, -5, 0]
            },
            type: "value",
            splitLine: {
              //y轴网格线
              lineStyle: {
                color: "rgba(0, 0, 0, 0.1)",
                type: "dashed"
              }
            },
            axisLabel: {
              //y轴文本
              //showMinLabel: false, //y轴是否设置最小刻度0
              color: "#808080",
              textStyle: {
                fontSize: 12,
                fontFamily: "Source Han Sans CN-Regular"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              //y轴线
              show: false,
              lineStyle: {
                color: "#D1D1D1"
              }
            }
          }
        ],
        series: seriousList
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
#analysisHistogram2 {
  background-size: 100% 100%;
}
</style>
