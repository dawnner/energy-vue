<template>
  <div
    :class="className"
    :style="{ height: height, width: width }"
    ref="chartContainerParent"
  ></div>
</template>

<script>
import * as echarts from "echarts";
// import AMap from 'AMap'
const animationDuration = 3000;

export default {
  props: {
    className: {
      type: String,
      default: "mchart1",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
  },
  data() {
    return {
      mchart1: null,
      parentJson: null,
      parentCode: [370000],
      cityData: [],
      parentInfo: [
        {
          level: "city",
          code: 370000,
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      // this.initChart()
      this.getGeoJson(370000);
    });
  },
  beforeDestroy() {
    this.mchart1.dispose();
    this.mchart1 = null;
  },
  methods: {
    getGeoJson(adcode) {
      var that = this;
      that.cityData = [
        {
          name: "济南市",
          datas: 554,
          cityCode: 370100,
        },
        {
          name: "菏泽市",
          datas: 500,
          cityCode: 371700,
        },
        {
          name: "济宁市",
          datas: 200,
          cityCode: 370800,
        },
        {
          name: "德州市",
          datas: 169,
          cityCode: 371400,
        },
        {
          name: "聊城市",
          datas: 589,
          cityCode: 371500,
        },
        {
          name: "泰安市",
          datas: 500,
          cityCode: 370900,
        },
        {
          name: "临沂市",
          datas: 568,
          cityCode: 371300,
        },
        {
          name: "淄博市",
          datas: 589,
          cityCode: 370300,
        },
        {
          name: "枣庄市",
          datas: 500,
          cityCode: 370400,
        },
        {
          name: "滨州市",
          datas: 168,
          cityCode: 371600,
        },
        {
          name: "潍坊市",
          datas: 589,
          cityCode: 370700,
        },
        {
          name: "东营市",
          datas: 500,
          cityCode: 370500,
        },
        {
          name: "青岛市",
          datas: 168,
          cityCode: 370200,
        },
        {
          name: "烟台市",
          datas: 289,
          cityCode: 370600,
        },
        {
          name: "日照市",
          datas: 290,
          cityCode: 371100,
        },
        {
          name: "威海市",
          datas: 393,
          cityCode: 371000,
        },
      ];
      that.districtData = [
        {
          name: "平邑县",
          datas: 154,
        },
        {
          name: "蒙阴县",
          datas: 120,
        },
        {
          name: "费县",
          datas: 110,
        },
        {
          name: "兰陵县",
          datas: 109,
        },
        {
          name: "郯城县",
          datas: 119,
        },
        {
          name: "临沭县",
          datas: 120,
        },
        {
          name: "河东区",
          datas: 168,
        },
        {
          name: "兰山区",
          datas: 159,
        },
        {
          name: "莒南县",
          datas: 100,
        },
        {
          name: "沂南县",
          datas: 118,
        },
        {
          name: "沂水县",
          datas: 118,
        },
        {
          name: "罗庄区",
          datas: 150,
        },
      ];

      this.mchart1 = echarts.init(this.$el);
      this.mchart1.clear();
      this.mchart1.showLoading("default", {
        text: "加载中...",
        maskColor: "#2957A2",
        textColor: "#fff",
      });
      // AMapUI.loadUI(["geo/DistrictExplorer"], (DistrictExplorer) => {
      //   var districtExplorer = new DistrictExplorer();
      //   districtExplorer.loadAreaNode(adcode, function (error, areaNode) {
      //     if (error) {
      //       console.error(error);
      //       return;
      //     }
      //     let Json = areaNode.getSubFeatures();
      //     if (Json.length > 0) {
      //       that.parentJson = Json;
      //     } else if (Json.length === 0) {
      //       Json = that.parentJson.filter((item) => {
      //         if (item.properties.adcode == adcode) {
      //           return item;
      //         }
      //       });
      //       if (Json.length === 0) return;
      //     }
      //     //去获取数据
      //     that.getMapData(Json);
      //   });
      // });
    },
    getMapData(Json) {
      var that = this;
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
        济宁市: [116.7, 35.26],
      };
      var hzmap = require("./china.json");

      var mapData = Json.map((item) => {
        return {
          name: item.properties.name,
          level: item.properties.level,
          cityCode: item.properties.adcode,
          // value: [item.properties.center[0], item.properties.center[1]],
        };
      });
      if (mapData[0].level == "city") {
        for (var i = 0; i < mapData.length; i++) {
          for (var j = 0; j < that.cityData.length; j++) {
            if (that.cityData[j].name == mapData[i].name) {
              mapData[i].value1 = that.cityData[j].datas;
            }
          }
        }
        for (var k = 0; k < mapData.length; k++) {
          for (var w = 0; w < hzmap.features.length; w++) {
            if (hzmap.features[w].properties.name == mapData[k].name) {
              mapData[k].value = hzmap.features[w].properties.center;
            }
          }
        }
      } else if (mapData[0].level == "district") {
        for (var i = 0; i < mapData.length; i++) {
          for (var j = 0; j < that.districtData.length; j++) {
            if (that.districtData[j].name == mapData[i].name) {
              mapData[i].value1 = that.districtData[j].datas;
            }
          }
        }
        for (var k = 0; k < mapData.length; k++) {
          for (var w = 0; w < Json.length; w++) {
            if (Json[w].properties.name == mapData[k].name) {
              mapData[k].value = Json[w].properties.center;
            }
          }
        }
      }
      let mapJson = {};
      //geoJson必须这种格式
      mapJson.features = Json;
      this.initEcharts(mapData, mapJson);
    },
    initEcharts(mapData, mapJson) {
      var img1 = require("@/assets/voltaic/bzlbx.png");
      var img2 = require("@/assets/voltaic/bzyz.png");
      var domImg = document.createElement("img");
      domImg.style.height =
        domImg.height =
        domImg.width =
        domImg.style.width =
          "8px";
      domImg.src = require("@/assets/voltaic/bg.png");
      echarts.registerMap("Map", mapJson);
      this.mchart1.hideLoading();
      //这里加true是为了让地图重新绘制，不然如果你有筛选的时候地图会飞出去
      this.mchart1.setOption(
        {
          backgroundColor: "transparent",
          tooltip: {
            show: true,
            // triggerOn: 'click',
            trigger: "item",
            alwaysShowContent: true,
            showTip: true,
            backgroundColor: "rgba(2,7,51,0)",
            // "borderColor": 'rgb(42,102,180)',
            // "borderRadius": 8,
            // "borderWidth": 1,
            position: "inside",
            textStyle: {
              fontSize: 17,
              fontWeight: "bold",
            },

            formatter: function (params) {
              return (
                `<div style="width:3rem;display:flex;justify-content: space-around;
              flex-direction: column;align-items:center;">
              <div style="position:absolute;top:30px;left:16px;font-family: regular-font;">` +
                params.data.value1 +
                `</div><img src=` +
                img1 +
                `>
              <img style="margin-bottom:150px" src=` +
                img2 +
                `></div>`
              );
              // return params.name + '<br/>' + '容量' + ' : ' + params.data.value[2];
            },
            axisPointer: {
              type: "shadow",
              shadowStyle: {
                color: "rgba(59,146,252,0.1)",
              },
            },
          },
          geo: [
            {
              map: "Map",
              silent: true,
              roam: false,
              z: -2,
              zoom: 0.9,
              width: "100%",
              height: "95%",
              layoutCenter: ["center", "50%"],
              itemStyle: {
                normal: {
                  areaColor: "#18b1fe",
                  borderColor: "transparent",
                  shadowBlur: 35,
                  shadowColor: "#0877b7",
                  shadowOffsetX: 7,
                  shadowOffsetY: 6,
                },
              },
            },
          ],
          series: [
            {
              type: "map",
              roam: false,
              layoutCenter: ["50%", "50%"],
              zoom: 0.9,
              width: "99%",
              height: "95%",
              map: "Map", //使用
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: "#fff",
                    fontFamily: "华文细黑",
                    fontSize: 13,
                    fontWeight: "bolder",
                  },
                  padding: [20, 0, 0, 0],
                },
                emphasis: {
                  color: "fff",
                  areaColor: "#10b5f4",
                },
              },

              itemStyle: {
                emphasis: {
                  color: "fff",
                  areaColor: "#00fffc",
                },
                normal: {
                  borderColor: "#79efff",
                  borderWidth: 2,
                  areaColor: {
                    image: domImg,
                    repeat: "repeat",
                  },
                  // areaColor: "transparent",
                  shadowColor: "#166BF7",
                  shadowBlur: 20,
                  // areaColor: {
                  //   image: domImg,
                  //   repeat: 'repeat',
                  // },
                },
              },

              data: mapData,
            },
            {
              type: "scatter",
              coordinateSystem: "geo",
              z: 12,
              symbolOffset: [0, -7],
              symbolSize: [15, 15],
              showEffectOn: "render",
              rippleEffect: {
                period: 2,
                scale: 5,
                brushType: "fill",
              },
              hoverAnimation: true,
              data: mapData,
              itemStyle: {
                normal: {
                  show: true,
                  color: function (params) {
                    console.log("qq", params);
                    if (params.data.value1) {
                      // if (params.value[2] < 3000) {
                      //   return '#139071';
                      // }
                      if (
                        params.data.value1 >= 100 &&
                        params.data.value1 <= 300
                      ) {
                        return "#00fdf9";
                      }
                      if (
                        params.data.value1 >= 300 &&
                        params.data.value1 <= 600
                      ) {
                        return "#fbc601";
                      } else {
                        return "#d04132";
                      }
                      // if (params.value[2] > 5000) {
                      //   return '#d04132';
                      // }
                    }
                  },
                },
              },
            },
          ],
        },
        true
      );
      this.mchart1.off("click");
      this.mchart1.on("click", this.echartsMapClick);
      this.mchart1.dispatchAction({
        type: "showTip",
        seriesIndex: 0, //第几条series
        dataIndex: 0,
        name: "济南市",
        position: function (point, params, dom, rect, size) {
          // 固定在顶部
          return [point[0] - 20, "6%"];
        },
      });
      this.mchart1.on("mouseover", (params) => {
        this.mchart1.dispatchAction({
          type: "downplay",
        });
        var city = [];
        city.push(params.name, params.data.value1);
        this.$emit("changeCitys", city);
        this.mchart1.dispatchAction({
          type: "highlight",
          name: params.name,
        });
      });
      this.mchart1.dispatchAction({
        type: "highlight",
        name: "济南市",
      });
      this.mchart1.on("georoam", function (params) {
        var that = this;
        var option1 = that.mchart1.getOption();
        if (params.zoom != null && params.zoom != undefined) {
          option1.geo[1].zoom = option1.geo[0].zoom;
          option1.geo[1].center = option1.geo[0].center;
        } else {
          option1.geo[1].center = option1.geo[0].center;
        }
        this.mchart1.setOption(option1);
        console.log("123", option1);
      });
      window.addEventListener("resize", () => {
        this.mchart1.resize();
      });
    },
    //下钻方法
    echartsMapClick(params) {
      var that = this;
      if (
        that.parentInfo[that.parentInfo.length - 1].code == params.data.cityCode
      ) {
        return;
      }
      let data = params.data;
      if (data.level == "city" && data.cityCode == "371300") {
        that.parentInfo.push({
          level: data.level,
          code: data.cityCode,
        });
        that.getGeoJson(data.cityCode);
      } else if (data.level == "district") {
        that.parentInfo.push({
          level: data.level,
          code: data.cityCode,
        });
        that.getGeoJson(data.cityCode);
      }
      // let cityCode = params.data.cityCode
      // if (params.data.level == 'city' && cityCode == '371300') {
      //   this.parentCode.push(cityCode)
      //   this.getGeoJson(cityCode)
      // } else if (params.data.level == 'district') {
      //   this.parentCode.push(cityCode)
      //   this.getGeoJson(cityCode)
      // }
    },
    backUp() {
      var that = this;
      if (that.parentInfo.length === 1) {
        return;
      }
      that.parentInfo.pop();
      that.getGeoJson(that.parentInfo[that.parentInfo.length - 1].code);
    },
  },
};
</script>
