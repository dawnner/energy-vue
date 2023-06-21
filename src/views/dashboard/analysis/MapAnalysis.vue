<template>
  <div
    :class="className"
    :style="{ height: height, width: width }"
    ref="chartContainerParent"
  />
</template>

<script>
// import echarts from "echarts";
import * as echarts from "echarts";
const animationDuration = 3000;

export default {
  props: {
    className: {
      type: String,
      default: "mchart1"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    }
  },
  data() {
    return {
      mchart1: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    this.mchart1.dispose();
    this.mchart1 = null;
  },
  methods: {
    initChart() {
      var hzmap = require("../data-shandong.json");
      var mapname = hzmap;
      var geoCoordMap = {
        济南市: [117.121225, 36.79466],
        菏泽市: [115.590656, 35.25375],
        德州市: [116.69, 37.25],
        聊城市: [115.92, 36.45],
        泰安市: [117.03, 36.08],
        临沂市: [118.3, 35.35],
        淄博市: [118.05, 36.66],
        枣庄市: [117.37, 34.9],
        滨州市: [117.853, 37.57],
        潍坊市: [119.1, 36.58],
        东营市: [118.69, 37.56],
        青岛市: [120.25, 36.42],
        烟台市: [120.75, 37.48],
        威海市: [122.2, 37.2],
        日照市: [119.1, 35.62],
        济宁市: [116.7, 35.26]
      };
      var data = [
        {
          name: "济南市",
          datas: 1054
        },
        {
          name: "菏泽市",
          datas: 250
        },
        {
          name: "济宁市",
          datas: 562
        },
        {
          name: "德州市",
          datas: 69
        },
        {
          name: "聊城市",
          datas: 89
        },
        {
          name: "泰安市",
          datas: 745
        },
        {
          name: "临沂市",
          datas: 368
        },
        {
          name: "淄博市",
          datas: 1123
        },
        {
          name: "枣庄市",
          datas: 1500
        },
        {
          name: "滨州市",
          datas: 68
        },
        {
          name: "潍坊市",
          datas: 870
        },
        {
          name: "东营市",
          datas: 1250
        },
        {
          name: "青岛市",
          datas: 1368
        },
        {
          name: "烟台市",
          datas: 689
        },
        {
          name: "日照市",
          datas: 659
        },
        {
          name: "威海市",
          datas: 93
        }
      ];
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].datas)
            });
          }
        }
        return res;
      };

      let index = -1;
      var domImg = document.createElement("img");
      domImg.style.height = domImg.height = domImg.width = domImg.style.width =
        "8px";
      domImg.src = require("@/assets/images/ditu.png");
      this.mchart1 = echarts.init(this.$el);
      this.mchart1.showLoading("default", {
        text: "加载中...",
        maskColor: "#2957A2",
        textColor: "#fff"
      });
      setTimeout(function() {
        mapInit();
      }, 1000);
      var mapInit = () => {
        echarts.registerMap("shandong", mapname);
        this.mchart1.hideLoading();
        var option = {
          backgroundColor: "transparent",
          tooltip: {
            show: false,
            trigger: "item",
            backgroundColor: "#fff",
            borderColor: "rgb(42,102,180)",
            borderRadius: 8,
            borderWidth: 1,
            padding: 10,
            textStyle: {
              fontSize: 12
            },
            formatter: function(params) {
              return params.name + "<br/>" + params.data.value[2] + "兆伏安";
            },
            axisPointer: {
              type: "shadow",
              shadowStyle: {
                color: "rgba(59,146,252,0.1)"
              }
            }
          },
          geo: [
            {
              map: "shandong",
              silent: true,
              roam: false,
              z: 0,
              zoom: 0.9,
              width: "91%",
              height: "95%",
              itemStyle: {
                normal: {
                  areaColor: "rgba(37, 157, 255, 0.1)",
                  areaColor: {
                    image: domImg,
                    repeat: "repeat"
                  },
                  borderColor: "transparent",
                  borderWidth: 0
                }
              }
            },
            {
              map: "shandong",
              zlevel: -2,
              zoom: 0.9,
              width: "91%",
              height: "96%",
              roam: false,
              itemStyle: {
                normal: {
                  areaColor: "rgba(37, 157, 255, 0.1)",
                  borderColor: "#78A3E4",
                  borderWidth: 1.2,
                  shadowColor: "#166BF7",
                  shadowBlur: 10
                },
                emphasis: {
                  areaColor: "#AECBF4",
                  borderWidth: 0,
                  color: "#fff",
                  label: {
                    show: false
                  }
                }
              }
            },
            {
              map: "shandong",
              zoom: 0.9,
              width: "91%",
              height: "97.5%",
              zlevel: -3,
              roam: false,
              itemStyle: {
                normal: {
                  areaColor: "rgba(37, 157, 255, 0.1)",
                  borderColor: "#78A3E4",
                  borderWidth: 1.2,
                  shadowColor: "#166BF7",
                  shadowBlur: 10
                  // shadowOffsetX: 0,
                  // shadowOffsetY: 2,
                },
                emphasis: {
                  areaColor: "#AECBF4",
                  borderWidth: 0,
                  color: "#fff",
                  label: {
                    show: false
                  }
                }
              }
            },
            {
              map: "shandong",
              zlevel: -7,
              zoom: 0.9,
              width: "91%",
              height: "99%",
              roam: false,
              itemStyle: {
                normal: {
                  areaColor: "rgba(37, 157, 255, 0.1)",
                  borderColor: "#78A3E4",
                  borderWidth: 1.2,
                  shadowColor: "#166BF7",
                  shadowBlur: 10
                  // shadowOffsetX: 0,
                  // shadowOffsetY: 2,
                },
                emphasis: {
                  areaColor: "#AECBF4",
                  borderWidth: 0,
                  color: "#fff",
                  label: {
                    show: false
                  }
                }
              }
            }
          ],
          series: [
            {
              type: "map",
              roam: true,
              zoom: 0.9,
              width: "90%",
              height: "95%",
              roam: false,
              map: "shandong", //使用
              label: {
                normal: {
                  show: false,
                  textStyle: {
                    color: "#fff"
                  }
                },
                emphasis: {
                  color: "fff",
                  areaColor: "#AECBF4"
                }
              },

              itemStyle: {
                emphasis: {
                  color: "fff",
                  areaColor: "#10b5f4"
                },
                normal: {
                  borderColor: "#b4d1f9",
                  borderWidth: 1.5,
                  areaColor: "rgba(37, 157, 255, 0.1)",
                  shadowColor: "#166BF7",
                  shadowBlur: 20
                }
              },
              data: convertData(data)
            },
            {
              type: "scatter",
              coordinateSystem: "geo",
              symbol: "image://" + require("@/assets/images-yxfx/dt-j.png"),
              symbolOffset: [0, 23],
              label: {
                normal: {
                  show: true,
                  formatter: function(params) {
                    var name = params.name;
                    var value = params.value[2];
                    var text = `{fline|${value}}\n{tline|${name}}`;
                    return name;
                  },
                  padding: [0, 0, 40, 0],
                  color: "#fff",
                  rich: {
                    fline: {
                      padding: [0, 25],
                      fontSize: 20,
                      fontWeight: 900
                    },
                    tline: {
                      padding: [0, 27],
                      color: "#fff",
                      fontSize: 12
                    }
                  }
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  areaColor: "rgba(37, 157, 255, 0.1)"
                },

                color: function(params) {
                  if (params.value) {
                    if (params.value[2] < 100) {
                      return "#11d782";
                    }
                    if (params.value[2] >= 500 && params.value[2] <= 1000) {
                      return "#f8b62d";
                    }
                    if (params.value[2] >= 100 && params.value[2] <= 500) {
                      return "#16d0ff";
                    }
                    if (params.value[2] > 1000) {
                      return "#f12749";
                    }
                  }
                }
              },
              z: 999,
              data: convertData(data)
            }
          ]
        };
        this.mchart1.setOption(option);
        // });
      };
      window.addEventListener("resize", () => {
        this.mchart1.resize();
      });
    }
  }
};
</script>
