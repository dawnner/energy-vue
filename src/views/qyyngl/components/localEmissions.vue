<template>
  <div style="height: 100%; width:100%">
    <div class="titles">
      <span>各地市火电企业往年碳排历史数据</span>
    </div>
    <div id="localEmissions" style="width: 100%; height: 85%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    // this.analysisHistogram2();
  },
  methods: {
    localEmissions(val) {
      console.log(val);
      const citys = []; //城市
      const numbar1 = []; //数据1
      const numbar2 = []; //数据2
      const numbar3 = []; //数据2
      val.forEach(obj => {
        citys.push(obj.city);
        numbar1.push(obj.twentyEmissions);
        numbar2.push(obj.twentyOneEmissions);
        numbar3.push(obj.twentytWOEmissions);
      });

      var chartDom = document.getElementById("localEmissions");
      var myChart = echarts.init(chartDom);
      // var option;
      let xData = [];
      var data1Arr = []; // 数据1
      var data2Arr = []; // 数据2
      var data3Arr = []; // 数据3
      xData = citys;
      data1Arr = numbar1;
      data2Arr = numbar2;
      data3Arr = numbar3;
      var dataName = [
        "2020年机组排放(tCO2)",
        "2021年机组排放(tCO2)",
        "2022年机组排放(tCO2)"
      ];
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
              color: "#ABCFFF"
            },
            {
              offset: 1,
              color: "#3288FC"
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
              color: "#FED599"
            },
            {
              offset: 1,
              color: "#FFA60D"
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
              color: "#BCE5AB"
            },
            {
              offset: 1,
              color: "#9ED386"
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
        backgroundColor: "#fff",
        // title: {
        //   text: "各地市CO2往年对比",
        //   left: "40%",
        //   top: 8,
        //   // bottom: 18,
        //   textStyle: {
        //     fontSize: 18
        //   }
        // },

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
          // top: 23,
          // right: 10,
          bottom: 2, // 设置图例距离底部的距离
          center: "center", // 将图例居中显示
          data: dataName,
          // right: "35%",
          // top: "0",
          //icon: "circle",
          // itemWidth: 24, // 设置宽度
          // itemHeight: 14, // 设置高度
          itemGap: 5,
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
          top: 35,
          bottom: "10%", //下边距,
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
            // min: 0,
            // max: 20000000,
            splitNumber: 10,
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
#localEmissions {
  background-size: 100% 100%;
}
.titles {
  width: 98%;
  height: 15%;
  /* background-color: aqua; */
  margin-left: 2%;
  display: flex;
  align-items: flex-end;
}
.titles span {
  border-left: 4px solid #158388;
  font-size: 20px;
  padding-left: 10px;
}
</style>
