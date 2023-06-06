<template>
  <div style="height: 100%">
    <img
      style="position: absolute; top: 50px; left: 5%; z-index: 99"
      src="../../../../assets/images/biaotixia2.png"
      alt=""
    />
    <div id="doublechart" style="width: 100%; height: 100%" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    doublechart() {
      var chartDom = document.getElementById("doublechart");
      var myChart = echarts.init(chartDom);
      var option;
      let xLabel = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ];
      let dataValue = [
        200,
        180,
        120,
        130,
        180,
        200,
        200,
        180,
        160,
        130,
        100,
        50
      ];
      let dataValue1 = [50, 55, 60, 65, 70, 70, 71, 80, 90, 100, 110, 105];
      let dataValue2 = [
        130,
        120,
        115,
        120,
        130,
        135,
        150,
        155,
        140,
        130,
        140,
        150
      ];
      var option = {
        // backgroundColor: '#0c2d55',
        title: {
          text: "全网发电趋势曲线",
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
            lineStyle: {
              color: "rgb(126,199,255)"
            }
          }
        },
        legend: {
          show: true,
          itemGap: 10,
          top: "9%",
          right: "3%",
          // itemWidth: 30, // 图例标记的图形宽度。
          itemGap: 5, // 图例每项之间的间隔。
          // itemHeight: 10, //  图例标记的图形高度。
          textStyle: {
            color: "#000",
            fontSize: 14,
            padding: [0, 8, 0, 8]
          }
        },
        grid: {
          top: "30%",
          left: "10%",
          right: "5%",
          bottom: "15%"
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: "rgb(41,188,245)"
              }
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              rotate: 45, //代表逆时针旋转
              textStyle: {
                color: "#000",
                fontSize: 12
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#233653"
              }
            },
            axisTick: {
              show: false
            },
            data: xLabel
          }
        ],
        yAxis: [
          {
            name: "",
            min: 0, //取0为最小刻度
            max: 200, //取100为最大刻度
            splitNumber: 2,
            nameTextStyle: {
              color: "#000",
              fontSize: 12,
              padding: [0, 60, 0, 0]
            },
            // minInterval: 1,
            type: "value",
            splitLine: {
              show: true,
              lineStyle: {
                color: "#1160a0",
                type: "dashed"
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#008de7"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#000",
                fontSize: 14
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "常规电源",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            smooth: true,
            lineStyle: {
              normal: {
                width: 3,
                color: "#00ffa2" // 线条颜色
              }
            },
            itemStyle: {
              normal: {
                color: "#00f0ff", //拐点颜色
                // borderColor: '#fff600',//拐点边框颜色
                // borderWidth: 13//拐点边框大小
                label: {
                  show: false, //开启显示
                  color: "#fff",
                  position: "top", //在上方显示
                  formatter: function(res) {
                    if (res.value) {
                      return res.value;
                    } else {
                      return 0;
                    }
                  }
                }
              }
            },
            symbolSize: 8, //设定实心点的大小
            areaStyle: {
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#00ffa230"
                    },
                    {
                      offset: 0.6,
                      color: "#00ffa220"
                    },
                    {
                      offset: 1,
                      color: "#00ffa210"
                    }
                  ],
                  false
                )
              }
            },
            data: dataValue
          },
          {
            name: "新能源",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            smooth: true,
            lineStyle: {
              normal: {
                width: 3,
                color: "#2694F9" // 线条颜色
              }
            },
            itemStyle: {
              normal: {
                color: "#2694F9", //拐点颜色
                // borderColor: '#fff600',//拐点边框颜色
                // borderWidth: 13//拐点边框大小
                label: {
                  show: false, //开启显示
                  color: "#fff",
                  position: "top", //在上方显示
                  formatter: function(res) {
                    if (res.value) {
                      return res.value;
                    } else {
                      return 0;
                    }
                  }
                }
              }
            },
            symbolSize: 8, //设定实心点的大小
            areaStyle: {
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#2694F9"
                    },
                    {
                      offset: 0.6,
                      color: "rgba(84,131,255,.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(84,131,255, 0)"
                    }
                  ],
                  false
                )
              }
            },
            data: dataValue1
          },
          {
            name: "新型储能",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            smooth: true,
            lineStyle: {
              normal: {
                width: 3,
                color: "#FDC31C" // 线条颜色
              }
            },
            itemStyle: {
              normal: {
                color: "#FDC31C", //拐点颜色
                // borderColor: '#fff600',//拐点边框颜色
                // borderWidth: 13//拐点边框大小
                label: {
                  show: false, //开启显示
                  color: "#fff",
                  position: "top", //在上方显示
                  formatter: function(res) {
                    if (res.value) {
                      return res.value;
                    } else {
                      return 0;
                    }
                  }
                }
              }
            },
            symbolSize: 8, //设定实心点的大小
            areaStyle: {
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#FDC31C"
                    },
                    {
                      offset: 0.6,
                      color: "rgba(255,248,220,.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(255,248,220, 0)"
                    }
                  ],
                  false
                )
              }
            },
            data: dataValue2
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
    this.doublechart();
  }
};
</script>

<style>
#doublechart {
  background-size: 100% 100%;
}
</style>
