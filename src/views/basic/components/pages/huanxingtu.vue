<template>
  <div
    style="width: 100%; height: 100%;display: flex;flex-direction: column;justify-content: space-between;"
  >
    <div
      style="display: flex;justify-content: space-between;align-items: center;height: 25%;margin-bottom:10px"
    >
      <div
        style="flex:1;font-size: 18px;color: #375175;white-space: nowrap;overflow: hidden;"
      >
        再生能源电力消耗责任权重
      </div>
      <div id="ring1" style="height: 100%; width: 24%"></div>
    </div>
    <div
      style="display: flex;justify-content: space-between;align-items: center;height: 25%;margin-bottom:10px"
    >
      <div
        style="flex:1;font-size: 18px;color: #375175;white-space: nowrap;overflow: hidden;"
      >
        再生能源电力消耗责任权重
      </div>
      <div id="ring2" style="height: 100%; width: 24%"></div>
    </div>
    <div
      style="display: flex;justify-content: space-between;align-items: center;height: 25%;margin-bottom:10px"
    >
      <div
        style="flex:1;font-size: 18px;color: #375175;white-space: nowrap;overflow: hidden;"
      >
        再生能源电力消耗责任权重
      </div>
      <div id="ring3" style="height: 100%; width: 24%"></div>
    </div>
    <div
      style="display: flex;justify-content: space-between;align-items: center;height: 25%;margin-bottom:10px"
    >
      <div
        style="flex:1;font-size: 18px;color: #375175;white-space: nowrap;overflow: hidden;"
      >
        再生能源电力消耗责任权重
      </div>
      <div id="ring4" style="height: 100%; width: 24%"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    ring1() {
      var chartDom = document.getElementById("ring1");
      var myChart1 = echarts.init(chartDom);
      var option;
      var data = "75";
      option = {
        title: {
          text: data + "%",
          textStyle: {
            color: "#5CCDC1",
            fontSize: 15
          },
          subtext: "占比",
          subtextStyle: {
            color: "black",
            fontSize: 10
          },
          itemGap: 1,
          //   left: "center",
          //   top: "center",
          textAlign: "center",
          x: "45%",
          y: "28%"
        },
        angleAxis: {
          max: 100,
          clockwise: true, // 逆时针
          // 隐藏刻度线
          show: false
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        polar: [
          {
            center: ["50%", "50%"], //中心点位置
            radius: ["90%", "100%"] //图形大小
          }
        ],
        series: [
          {
            type: "bar",
            data: [data],
            showBackground: true,
            polarIndex: 0,
            backgroundStyle: {
              color: "#f0f2f6",
              borderWidth: 25
            },
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 25,
            itemStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#5CCDC1"
                },
                {
                  offset: 1,
                  color: "#5CCDC1"
                }
              ]),
              shadowBlur: 5,
              shadowColor: "#5CCDC1"
            }
          }
        ]
      };
      option && myChart1.setOption(option);
      let listener = function() {
        myChart1.resize();
      };
      window.addEventListener("resize", listener);
    },
    ring2() {
      var chartDom = document.getElementById("ring2");
      var myChart = echarts.init(chartDom);
      var option;
      var data = "75";
      option = {
        title: {
          text: data + "%",
          textStyle: {
            color: "#5CCDC1",
            fontSize: 15
          },
          subtext: "占比",
          subtextStyle: {
            color: "black",
            fontSize: 10
          },
          itemGap: 1,
          //   left: "center",
          //   top: "center",
          textAlign: "center",
          x: "45%",
          y: "28%"
        },
        angleAxis: {
          max: 100,
          clockwise: true, // 逆时针
          // 隐藏刻度线
          show: false
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        polar: [
          {
            center: ["50%", "50%"], //中心点位置
            radius: ["90%", "100%"] //图形大小
          }
        ],
        series: [
          {
            type: "bar",
            data: [data],
            showBackground: true,
            polarIndex: 0,
            backgroundStyle: {
              color: "#f0f2f6",
              borderWidth: 25
            },
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 25,
            itemStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#5CCDC1"
                },
                {
                  offset: 1,
                  color: "#5CCDC1"
                }
              ]),
              shadowBlur: 5,
              shadowColor: "#5CCDC1"
            }
          }
        ]
      };
      option && myChart.setOption(option);
      let listener = function() {
        myChart.resize();
      };
      window.addEventListener("resize", listener);
    },
    ring3() {
      var chartDom = document.getElementById("ring3");
      var myChart = echarts.init(chartDom);
      var option;
      var data = "75";
      option = {
        title: {
          text: data + "%",
          textStyle: {
            color: "#5CCDC1",
            fontSize: 15
          },
          subtext: "占比",
          subtextStyle: {
            color: "black",
            fontSize: 10
          },
          itemGap: 1,
          //   left: "center",
          //   top: "center",
          textAlign: "center",
          x: "45%",
          y: "28%"
        },
        angleAxis: {
          max: 100,
          clockwise: true, // 逆时针
          // 隐藏刻度线
          show: false
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        polar: [
          {
            center: ["50%", "50%"], //中心点位置
            radius: ["90%", "100%"] //图形大小
          }
        ],
        series: [
          {
            type: "bar",
            data: [data],
            showBackground: true,
            polarIndex: 0,
            backgroundStyle: {
              color: "#f0f2f6",
              borderWidth: 25
            },
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 25,
            itemStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#5CCDC1"
                },
                {
                  offset: 1,
                  color: "#5CCDC1"
                }
              ]),
              shadowBlur: 5,
              shadowColor: "#5CCDC1"
            }
          }
        ]
      };
      option && myChart.setOption(option);
      let listener = function() {
        myChart.resize();
      };
      window.addEventListener("resize", listener);
    },
    ring4() {
      var chartDom = document.getElementById("ring4");
      var myChart = echarts.init(chartDom);
      var option;
      var data = "75";
      option = {
        title: {
          text: data + "%",
          textStyle: {
            color: "#5CCDC1",
            fontSize: 15
          },
          subtext: "占比",
          subtextStyle: {
            color: "black",
            fontSize: 10
          },
          itemGap: 1,
          //   left: "center",
          //   top: "center",
          textAlign: "center",
          x: "45%",
          y: "28%"
        },
        angleAxis: {
          max: 100,
          clockwise: true, // 逆时针
          // 隐藏刻度线
          show: false
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        polar: [
          {
            center: ["50%", "50%"], //中心点位置
            radius: ["90%", "100%"] //图形大小
          }
        ],
        series: [
          {
            type: "bar",
            data: [data],
            showBackground: true,
            polarIndex: 0,
            backgroundStyle: {
              color: "#f0f2f6",
              borderWidth: 25
            },
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 25,
            itemStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#5CCDC1"
                },
                {
                  offset: 1,
                  color: "#5CCDC1"
                }
              ]),
              shadowBlur: 5,
              shadowColor: "#5CCDC1"
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
    this.ring1();
    this.ring2();
    this.ring3();
    this.ring4();
  }
};
</script>

<style>
#ring1 {
  background-size: 100% 100%;
}
#ring2 {
  background-size: 100% 100%;
}
#ring3 {
  background-size: 100% 100%;
}
#ring14 {
  background-size: 100% 100%;
}
</style>
