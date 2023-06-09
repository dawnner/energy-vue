<template>
  <div style="height: 100%; width: 100%; display: flex; align-content: center">
    <div id="waterball" style="height: 100%; width: 25%"></div>
    <div id="water3" style="height: 100%; width: 25%"></div>
    <div id="water2" style="height: 100%; width: 25%"></div>
    <div id="water4" style="height: 100%; width: 25%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import echartsLiquidfill from "echarts-liquidfill"; //在这里引入水球图
export default {
  mounted() {
    this.waterball();
    this.water2();
    this.water3();
    this.water4();
  },
  methods: {
    waterball() {
      var chartDom = document.getElementById("waterball");
      var myChart = echarts.init(chartDom);
      var option;
      let text = "全网发电量";
      option = {
        title: [
          {
            text: text,
            textStyle: { fontSize: 16, color: "#158388" },
            textAlign: "center",
            top: "10%",
            left: "47%",
            bottom: "middle"
          },
          {
            subtext: "19054.12万 KW·h", //副标题
            // itemGap: 80, //主副标题间距
            left: "4%", //标题的位置 默认是left，其余还有center、right属性
            top: "70%",
            subtextStyle: {
              color: "#D124FA",
              fontSize: 14,
              fontWeight: "600",
              textAlign: "center"
            }
          }
        ],
        series: [
          {
            // name: "合格率",
            type: "liquidFill",
            color: ["#E23BED", "#B352FC"],
            data: [
              0.8,
              {
                value: 0.8,
                direction: "left"
              }
            ],
            center: ["50%", "50%"],
            radius: "50%",
            outline: {
              borderDistance: 3,
              itemStyle: {
                borderWidth: 2,
                borderColor: "#F6E5FB"
              }
            },
            backgroundStyle: {
              color: "#fff"
            },
            itemStyle: {
              opacity: 0.95,
              shadowColor: "rgba(0, 0, 0, 0)"
            },
            label: {
              //   formatter: function (p) {
              //     return `{b|${p.value * 100}}%\n{a|${p.seriesName}}`;
              //   },
              rich: {
                a: {
                  fontSize: 14
                }
              },
              position: ["50%", "70%"],
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "SourceHanSansCN",
              color: "#FFF"
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
    water2() {
      var chartDom = document.getElementById("water2");
      var myChart = echarts.init(chartDom);
      var option;
      let text = "新能源发电量";
      option = {
        title: [
          {
            text: text,
            textStyle: { fontSize: 16, color: "#158388" },
            textAlign: "center",
            top: "10%",
            left: "47%",
            bottom: "middle"
          },
          {
            subtext: "1905.12万 KW·h", //副标题
            // itemGap: 80, //主副标题间距
            left: "4%", //标题的位置 默认是left，其余还有center、right属性
            top: "70%",
            subtextStyle: {
              color: "#29E8A8",
              fontSize: 14,
              fontWeight: "600",
              textAlign: "center"
            }
          }
        ],
        series: [
          {
            // name: "合格率",
            type: "liquidFill",
            color: ["#23C2DD", "#29E8A8"],
            data: [
              0.8,
              {
                value: 0.8,
                direction: "left"
              }
            ],
            center: ["50%", "50%"],
            radius: "50%",
            outline: {
              borderDistance: 3,
              itemStyle: {
                borderWidth: 2,
                borderColor: "#F6E5FB"
              }
            },
            backgroundStyle: {
              color: "#fff"
            },
            itemStyle: {
              opacity: 0.95,
              shadowColor: "rgba(0, 0, 0, 0)"
            },
            label: {
              //   formatter: function (p) {
              //     return `{b|${p.value * 100}}%\n{a|${p.seriesName}}`;
              //   },
              rich: {
                a: {
                  fontSize: 14
                }
              },
              position: ["50%", "70%"],
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "SourceHanSansCN",
              color: "#FFF"
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
    water3() {
      var chartDom = document.getElementById("water3");
      var myChart = echarts.init(chartDom);
      var option;
      let text = "常规电源发电量";
      option = {
        title: [
          {
            text: text,
            textStyle: { fontSize: 16, color: "#158388" },
            textAlign: "center",
            top: "10%",
            left: "45%",
            bottom: "middle"
          },
          {
            subtext: "1905.12万 KW·h", //副标题
            // itemGap: 80, //主副标题间距
            left: "4%", //标题的位置 默认是left，其余还有center、right属性
            top: "70%",
            subtextStyle: {
              color: "#24CAFD",
              fontSize: 14,
              fontWeight: "600",
              textAlign: "center"
            }
          }
        ],
        series: [
          {
            // name: "合格率",
            type: "liquidFill",
            color: ["#1DA5F9", "#24CAFD"],
            data: [
              0.5,
              {
                value: 0.5,
                direction: "left"
              }
            ],
            center: ["50%", "50%"],
            radius: "50%",
            outline: {
              borderDistance: 3,
              itemStyle: {
                borderWidth: 2,
                borderColor: "#F6E5FB"
              }
            },
            backgroundStyle: {
              color: "#fff"
            },
            itemStyle: {
              opacity: 0.95,
              shadowColor: "rgba(0, 0, 0, 0)"
            },
            label: {
              //   formatter: function (p) {
              //     return `{b|${p.value * 100}}%\n{a|${p.seriesName}}`;
              //   },
              rich: {
                a: {
                  fontSize: 14
                }
              },
              position: ["50%", "70%"],
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "SourceHanSansCN",
              color: "#FFF"
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
    water4() {
      var chartDom = document.getElementById("water4");
      var myChart = echarts.init(chartDom);
      var option;
      let text = "储能发电量";
      option = {
        title: [
          {
            text: text,
            textStyle: { fontSize: 16, color: "#158388" },
            textAlign: "center",
            top: "10%",
            left: "47%",
            bottom: "middle"
          },
          {
            subtext: "1905.12万 KW·h", //副标题
            // itemGap: 80, //主副标题间距
            left: "4%", //标题的位置 默认是left，其余还有center、right属性
            top: "70%",
            subtextStyle: {
              color: "#FEE21D",
              fontSize: 14,
              fontWeight: "600",
              textAlign: "center"
            }
          }
        ],
        series: [
          {
            // name: "合格率",
            type: "liquidFill",
            color: ["#FA8429", "#FEE21D"],
            data: [
              0.4,
              {
                value: 0.4,
                direction: "left"
              }
            ],
            center: ["50%", "50%"],
            radius: "50%",
            outline: {
              borderDistance: 3,
              itemStyle: {
                borderWidth: 2,
                borderColor: "#F6E5FB"
              }
            },
            backgroundStyle: {
              color: "#fff"
            },
            itemStyle: {
              opacity: 0.95,
              shadowColor: "rgba(0, 0, 0, 0)"
            },
            label: {
              //   formatter: function (p) {
              //     return `{b|${p.value * 100}}%\n{a|${p.seriesName}}`;
              //   },
              rich: {
                a: {
                  fontSize: 14
                }
              },
              position: ["50%", "70%"],
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "SourceHanSansCN",
              color: "#FFF"
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
#waterball {
  background-size: 100% 100%;
}
#water2 {
  background-size: 100% 100%;
}
#water3 {
  background-size: 100% 100%;
}
#water4 {
  background-size: 100% 100%;
}
</style>
