<template>
  <div
    :class="className"
    :style="{ height: height, width: width }"
    ref="chartContainerParent"
  />
</template>

<script>
import echarts from "echarts";
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
      var hzmap = require("./data-shandong.json");
      var mapname = hzmap;
      var img1 = "image://" + require("@/assets/images/map_icon_g.png");
      var img2 = "image://" + require("@/assets/images/map_icon_b.png");
      var img3 = "image://" + require("@/assets/images/map_icon_y.png");
      var img4 = "image://" + require("@/assets/images/map_icon_r.png");
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
        烟台市: [120.75, 37.38],
        威海市: [122, 37.2],
        日照市: [119.1, 35.62],
        济宁市: [116.7, 35.26]
      };
      var data = [
        {
          name: "济南市",
          datas: 8354
        },
        {
          name: "菏泽市",
          datas: 4500
        },
        {
          name: "济宁市",
          datas: 3200
        },
        {
          name: "德州市",
          datas: 4169
        },
        {
          name: "聊城市",
          datas: 2589
        },
        {
          name: "泰安市",
          datas: 4500
        },
        {
          name: "临沂市",
          datas: 6768
        },
        {
          name: "淄博市",
          datas: 2589
        },
        {
          name: "枣庄市",
          datas: 2500
        },
        {
          name: "滨州市",
          datas: 3768
        },
        {
          name: "潍坊市",
          datas: 3589
        },
        {
          name: "东营市",
          datas: 1500
        },
        {
          name: "青岛市",
          datas: 8768
        },
        {
          name: "烟台市",
          datas: 5589
        },
        {
          name: "日照市",
          datas: 4590
        },
        {
          name: "威海市",
          datas: 3793
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
            show: true,
            trigger: "item",
            backgroundColor: "rgba(2,7,51,0.8)",
            borderColor: "rgb(42,102,180)",
            borderRadius: 8,
            borderWidth: 1,
            padding: 10,
            textStyle: {
              fontSize: 12
            },
            formatter: function(params) {
              return (
                params.name + "<br/>" + "容量" + " : " + params.data.value[2]
              );
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
              width: "100%",
              height: "95%",
              layoutCenter: ["center", "50%"],
              itemStyle: {
                normal: {
                  areaColor: "transparent",
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
              layoutCenter: ["50.2%", "50.1%"],
              zoom: 0.9,
              width: "100%",
              height: "96%",
              roam: false,
              itemStyle: {
                normal: {
                  areaColor: "transparent",
                  borderColor: "#78A3E4",
                  borderWidth: 1.2,
                  shadowColor: "#166BF7",
                  shadowBlur: 10
                },
                emphasis: {
                  areaColor: "#10b5f4",
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
              zlevel: -3,
              layoutCenter: ["50.3%", "50.6%"],
              zoom: 0.9,
              width: "100%",
              height: "97.5%",
              roam: false,
              itemStyle: {
                normal: {
                  areaColor: "transparent",
                  borderColor: "#78A3E4",
                  borderWidth: 1.2,
                  shadowColor: "#166BF7",
                  shadowBlur: 10
                  // shadowOffsetX: 0,
                  // shadowOffsetY: 2,
                },
                emphasis: {
                  areaColor: "#10b5f4",
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
              zlevel: -5,
              layoutCenter: ["50.3%", "50.3%"],
              zoom: 0.9,
              width: "100%",
              height: "99%",
              roam: false,
              itemStyle: {
                normal: {
                  areaColor: "transparent",
                  borderColor: "#78A3E4",
                  borderWidth: 1.2,
                  shadowColor: "#166BF7",
                  shadowBlur: 10
                  // shadowOffsetX: 0,
                  // shadowOffsetY: 2,
                },
                emphasis: {
                  areaColor: "#10b5f4",
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
              layoutCenter: ["50%", "50%"],
              zoom: 0.9,
              width: "99%",
              height: "95%",
              roam: false,
              map: "shandong", //使用
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: "#fff"
                  },
                  padding: [20, 0, 0, 0]
                },
                emphasis: {
                  color: "fff",
                  areaColor: "#10b5f4"
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
                  areaColor: "transparent",
                  shadowColor: "#166BF7",
                  shadowBlur: 20
                  // areaColor: {
                  //   image: domImg,
                  //   repeat: 'repeat',
                  // },
                }
              },

              data: convertData(data)
            },

            {
              name: "",
              type: "scatter",
              coordinateSystem: "geo",
              symbol: function(value, params) {
                if (params.value) {
                  if (params.value[2] < 3000) {
                    return img1;
                  }
                  if (params.value[2] >= 4000 && params.value[2] <= 5000) {
                    return img3;
                  }
                  if (params.value[2] >= 3000 && params.value[2] <= 4000) {
                    return img2;
                  }
                  if (params.value[2] > 5000) {
                    return img4;
                  }
                }
              },
              symbolSize: [33, 31],
              symbolOffset: [0, -10],
              z: 999,
              data: convertData(data)
            },
            {
              type: "effectScatter",
              coordinateSystem: "geo",
              z: 12,
              symbolOffset: [0, -7],
              symbolSize: [10, 7],
              showEffectOn: "render",
              rippleEffect: {
                period: 2,
                scale: 5,
                brushType: "fill"
              },
              hoverAnimation: true,
              data: convertData(data),
              itemStyle: {
                normal: {
                  show: true,
                  color: function(params) {
                    if (params.value) {
                      if (params.value[2] < 3000) {
                        return "#139071";
                      }
                      if (params.value[2] >= 4000 && params.value[2] <= 5000) {
                        return "#BB963F";
                      }
                      if (params.value[2] >= 3000 && params.value[2] <= 4000) {
                        return "#33ABC9";
                      }
                      if (params.value[2] > 5000) {
                        return "#d04132";
                      }
                    }
                  }
                }
              }
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
