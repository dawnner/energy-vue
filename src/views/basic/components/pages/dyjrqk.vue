<template>
  <div style="height: 100%; position: relative">
    <img
      style="position: absolute; top: 50px; left: 4%; z-index: 99"
      src="../../../../assets/images/biaotixia2.png"
      alt=""
    />
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
  data() {
    return {};
  },
  methods: {
    dyjrqk(val) {
      console.log(val, "shuju ");
      let name = [];
      let arr1 = [];
      let arr2 = [];
      let arr3 = [];
      val.forEach(item => {
        name.push(item.acceptancePowerUnit);
        arr1.push(item.conventionData);
        arr2.push(item.newEnergyData);
        arr3.push(item.storedEnergyData);
      });
      var chartDom = document.getElementById("analysisHistogram2");
      var myChart = echarts.init(chartDom);
      // var option;

      let xData = name; // 类型
      var data1Arr = arr1; // 数据1
      var data2Arr = arr2; // 数据2
      var data3Arr = arr3; // 数据3
      //var data4Arr = [720, 700, 810, 815, 800, 580, 900, 720, 700]; // 数据4

      var dataName = ["常规电源", "新能源", "新型储能"];
      let zoomShow = xData.length > 10;

      let dataList = [data2Arr, data1Arr, data3Arr];
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
              color: "#FEEDDC"
            },
            {
              offset: 1,
              color: "#FFA408"
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
              color: "#657AFF"
            },
            {
              offset: 1,
              color: "#B2C3FF"
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
              color: "#9DD285"
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
          barWidth: "10", //柱型宽度
          data: dataList[index]
        });
      });

      let option = {
        title: {
          text: "在建电源接入情况",
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
            name: "(亿kW)",
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
  },
  mounted() {
    // this.analysisHistogram2();
  }
};
</script>

<style>
#analysisHistogram2 {
  background-size: 100% 100%;
}
</style>
