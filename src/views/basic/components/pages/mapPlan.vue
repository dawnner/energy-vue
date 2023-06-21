<template>
  <div
    :class="className"
    :style="{ height: height, width: width }"
    ref="chartContainerParent"
  />
</template>

<script>
// import resize from '../dashboard/mixins/resize.js'
import * as echarts from "echarts";
const animationDuration = 3000;
import { pinyin } from "pinyin-pro";
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
      mchart1: null,
      maplists: []
    };
  },
  mounted() {
    // this.$nextTick(() => {
    // 	this.initChart()
    // });

    window.addEventListener("resize", () => {
      if (this.mchart1) {
        this.mchart1.resize();
      }
    });
  },
  beforeDestroy() {
    // if (!this.mchart1) {
    //   return;
    // }
    // this.mchart1.dispose()
    this.mchart1 = null;
  },
  methods: {
    getmaplist(val) {
      console.log("valval", val);
      this.maplists = val;
    },
    change() {
      if (this.mchart1 !== undefined) {
        this.mchart1.dispose();
      }
    },
    initChart(name, mapNameList, val) {
      console.log("打印3.3.....", val);
      var datass = [];
      var value = "";
      for (var i = 0; i < val.length; i++) {
        datass.push({
          name: val[i].acceptancePowerUnit,
          value: val[i].conventionData,
          value1: val[i].newEnergyData,
          value2: val[i].storedEnergyData
        });
      }
      console.log("有没有数据", datass);

      var img1 = require("../../../../assets/images/shujukuai.png");
      var img2 = require("../../../../assets/images/biaotixia3.png");
      // var data = [
      //   {
      //     name: "济南市",
      //     value: 83,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "菏泽市",
      //     value: 4500,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "济宁市",
      //     value: 3200,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "德州市",
      //     value: 4169,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "聊城市",
      //     value: 2589,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "泰安市",
      //     value: 4500,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "临沂市",
      //     value: 6768,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "淄博市",
      //     value: 2589,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "枣庄市",
      //     value: 2500,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "滨州市",
      //     value: 3768,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "潍坊市",
      //     value: 3589,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "东营市",
      //     value: 1500,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "青岛市",
      //     value: 8768,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "烟台市",
      //     value: 5589,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "日照市",
      //     value: 4590,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   },
      //   {
      //     name: "威海市",
      //     value: 3793,
      //     list: [
      //       {
      //         name: "常规电源装机量",
      //         number: "650万 kW"
      //       },
      //       {
      //         name: "常规电源发电量",
      //         number: "4500万 kW·h"
      //       },
      //       {
      //         name: "新能源装机量",
      //         number: "500万 kW"
      //       },
      //       {
      //         name: "新能源发电量",
      //         number: "3000万 kW·h"
      //       },
      //       {
      //         name: "储能装机量",
      //         number: "70亿万 kW"
      //       },
      //       {
      //         name: "储能发电量",
      //         number: "9.15亿万 kW·h"
      //       }
      //     ]
      //   }
      // ];
      var data = [];
      data = val;
      var geowidth = "90%";
      var geoheight = "90%";
      console.log("地图页面接收传值", name, mapNameList);
      let flag = ""; //因为枣庄和济南 都有市中区 所以根据flag来判断是枣庄还是济南
      // var hzmap = require("./data-shandong.json");
      var hzmap1 = require("./data-shandong.json");
      var hzmap2 = require("../components/map_json/jinan.json");
      var hzmap3 = require("../components/map_json/qingdao.json");
      var hzmap4 = require("../components/map_json/binzhou.json");
      var hzmap5 = require("../components/map_json/dezhou.json");
      var hzmap6 = require("../components/map_json/dongying.json");
      var hzmap7 = require("../components/map_json/heze.json");
      var hzmap8 = require("../components/map_json/jining.json");
      var hzmap9 = require("../components/map_json/liaocheng.json");
      var hzmap10 = require("../components/map_json/linyi.json");
      var hzmap11 = require("../components/map_json/rizhao.json");
      var hzmap12 = require("../components/map_json/taian.json");
      var hzmap13 = require("../components/map_json/weifang.json");
      var hzmap14 = require("../components/map_json/weihai.json");
      var hzmap15 = require("../components/map_json/yantai.json");
      var hzmap16 = require("../components/map_json/zaozhuang.json");
      var hzmap17 = require("../components/map_json/zibo.json");
      var mapname;
      if (name == "山东省") {
        mapname = hzmap1;
        geowidth = "96%";
        geoheight = "96%";
      } else if (name == "济南市") {
        mapname = hzmap2;
      } else if (name == "青岛市") {
        mapname = hzmap3;
      } else if (name == "滨州市") {
        mapname = hzmap4;
      } else if (name == "德州市") {
        mapname = hzmap5;
      } else if (name == "东营市") {
        mapname = hzmap6;
      } else if (name == "菏泽市") {
        mapname = hzmap7;
      } else if (name == "济宁市") {
        mapname = hzmap8;
      } else if (name == "聊城市") {
        mapname = hzmap9;
      } else if (name == "临沂市") {
        mapname = hzmap10;
      } else if (name == "日照市") {
        mapname = hzmap11;
      } else if (name == "泰安市") {
        mapname = hzmap12;
      } else if (name == "潍坊市") {
        mapname = hzmap13;
      } else if (name == "威海市") {
        mapname = hzmap14;
      } else if (name == "烟台市") {
        mapname = hzmap15;
      } else if (name == "枣庄市") {
        mapname = hzmap16;
      } else if (name == "淄博市") {
        mapname = hzmap17;
      } else {
        let cityPath = "";
        let cityName = "";
        //有两个拼音是lanshan的区
        if (
          name == "岚山区" ||
          (mapNameList.length == 3 &&
            mapNameList[1].name == "枣庄市" &&
            mapNameList[2].name == "市中区")
        ) {
          cityName = pinyin(name, {
            toneType: "none"
          }).replace(/\s*/g, "");
          console.log("cityName", cityName);
          cityPath = require(`../components/map_json/all/${cityName}.json`);
        } else {
          //只有两个字的区县 json文件的命名是全名 大于2个字的 去掉了最后一个字（区/县）
          //例如：莘县命名xinxian，历下区命名为lixia，所以这里需要处理一下
          if (name.length > 2) {
            name = name.slice(0, -1);
          }
          cityName = pinyin(name, {
            toneType: "none"
          }).replace(/\s*/g, "");
          cityPath = require(`../components/map_json/all/${cityName}.json`);
        }
        mapname = cityPath;
      }

      let index = -1;
      // var domImg = document.createElement('img');
      // domImg.style.height = domImg.height = domImg.width = domImg.style.width = '8px';
      // domImg.src = require('@/assets/images/control/ditu.png');
      this.mchart1 = echarts.init(this.$el);
      this.mchart1.clear();
      this.mchart1.off("click"); //取消重复点击事件
      this.mchart1.showLoading("default", {
        text: "加载中...",
        maskColor: "#12585f",
        textColor: "#fff"
      });
      // this.mchart1.on("click", params => {
      //   if (this.mchart1 !== undefined) {
      //     this.mchart1.dispose();
      //   }
      //   console.log("params------------", params);
      //   this.$emit("mapName", params.data, mapname);
      // });
      // echarts.registerMap("shandong", mapname);
      setTimeout(function() {
        mapInit();
      }, 100);
      var mapInit = () => {
        echarts.registerMap("shandong", mapname);
        let areaData = [
          ["117.101550", "36.89460", 90], // '济南'
          ["117.101550", "36.79460", 70], // '济南'
          ["117.101550", "36.99990", 45], // '济南'
          ["117.101550", "36.79490", 45], // '济南'
          ["116.990000", "36.89490", 30], // '济南'
          ["117.100000", "36.89490", 30], // '济南'
          ["116.950000", "36.79490", 30], // '济南'
          ["117.100000", "36.75490", 30], // '济南'
          ["116.900000", "36.69490", 30], // '济南'
          ["117.100000", "36.59490", 30], // '济南'
          ["116.900000", "36.59490", 30], // '济南'
          ["117.100000", "36.49490", 30], // '济南'
          ["116.800000", "36.49490", 30], // '济南'
          ["116.5", "35.66", 23], // '济宁'
          ["116.3", "35.56", 43], // '济宁'
          // ['117.03', '36.48', 33],
          // ['117.23', '35.8', 33],
          // ['117.63', '36.18', 33],
          // ['117.53', '36.38', 23],
          // ['117.73', '36.38', 33],
          // ['117.73', '36.18', 23],
          // ['117.63', '36.58', 23],
          ["118.3", "35.55", 26], // '临沂'
          ["117.9", "35.65", 56], // '临沂'
          ["118.25", "35.95", 56],
          ["118.25", "36.1", 36],
          ["118.25", "36.23", 26],
          ["118.05", "36.66", 30], // '淄博'
          ["118.65", "35.96", 30], // '淄博'
          ["118.65", "36.3", 28], // '淄博'
          ["118.25", "36.36", 30], // '淄博'
          ["119.1", "36.58", 95], // '潍坊'
          ["118.03", "36.18", 29],
          ["118.4", "36.68", 23],
          ["118.4", "36.18", 19],
          ["119.15", "36.45", 65],
          ["119.07", "36.7", 45],
          ["118.6", "36.7", 45],
          ["118.6", "36.5", 25],
          ["118.6", "36.4", 15],
          ["118.6", "36.1", 75]
          // ['118.69', '37.56', 34], // '东营'
          // ['120.25', '36.42', 34], // '青岛'
          // ['120.75', '37.08', 40], // '烟台'
          // ['119.1', '35.62', 24], // '日照'
          // ['121.6', '36.96', 34] // '威海'
        ];
        this.mchart1.hideLoading();
        var option = {
          backgroundColor: "transparent",
          tooltip: {
            //这里加true是为了让地图重新绘制，不然如果你有筛选的时候地图会飞出去
            show: false,
            // position: "right",
            // position: ["50%", "right"],
            position: function(point, params, dom, rect, size) {
              // 获取鼠标相对于容器的坐标
              var mouseX = point[0];
              var mouseY = point[1];
              // 计算悬浮框的位置
              var left = mouseX + 10; // 横向偏移量为10px
              var top = mouseY - 90; // 纵向偏移量为10px
              // 返回位置信息
              return [left, top];
            },
            alwaysShowContent: false, //是否永远显示提示框内容
            showTip: true,
            trigger: "item",
            backgroundColor: "rgba(2,7,51,0)",
            borderColor: "rgba(2,7,51,0)",
            // backgroundColor: "rgba(2,7,51,0.8)",
            // borderColor: "rgb(42,102,180)",
            // "borderRadius": 10,
            // "borderWidth": 1,
            padding: 0,
            textStyle: {
              fontSize: 12
            },
            formatter: function(params) {
              console.log("666666", params);
              // return "容量" + "<br/>" + params;
              //   return (
              //     `<div>
              //  <img src=` +
              //     img1 +
              //     `><div style="display:flex;flex-direction: column;width:100%;height:100%;">
              //     <div style="width:100%;height:10%;background-color:pink;"></div><div style="flex:1;background-color:blue;"></div>
              //     </div>
              //   </div>`
              //   );
              return (
                `<div style="width:23.5rem;height:18.5rem;background:url(` +
                img1 +
                `)no-repeat;display:flex;flex-direction: column;">
                  <div style="width:100%;height:20%;">
                    <div style="width:100%;height:100%;position:relative;padding-left:3rem;background:url(` +
                img2 +
                `)no-repeat;background-position: left 80% bottom;">
                      <div style="position:absolute;bottom:20%;color:#22F3E2;font-size:22px;">` +
                params.data.name +
                `</div>
                    </div>
                  </div>
                    <div style="flex:1;display:flex;flex-direction:column;justify-content:space-around;color:#fff;padding-left:2.5rem;padding-bottom:2.5rem;font-size:16px;">
                      <div> ` +
                "常规电源装机量: " +
                `<span style="color:#F6A23A">` +
                params.data.value +
                "亿千瓦/时" +
                `</span>
                      </div>
                      <div> ` +
                "新能源装机量: " +
                `<span style="color:#F6A23A">` +
                params.data.value1 +
                "亿千瓦/时" +
                `</span>
                      </div>
                      <div> ` +
                "新型储能装机量: " +
                `<span style="color:#F6A23A">` +
                params.data.value2 +
                "亿千瓦/时" +
                `</span>
                      </div>
                    </div>
                  </div>
                </div>`
              );
            },
            axisPointer: {
              type: "shadow",
              shadowStyle: {
                color: "rgba(59,146,252,0)"
              }
            },
            extraCssText: "box-shadow: none"
          },
          // visualMap: {
          //   show: false,
          //   inRange: {
          //     // color: ["#074383", "#1d9d4a", "#9bd55f", "#925034"],
          //   },
          //   min: 0,
          //   max: 100,
          //   calculable: true,
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 12,
          //   },
          // },
          grid: {
            height: "100%",
            width: "100%"
          },
          geo: [
            {
              map: "shandong",
              roam: false,
              zoom: 1,
              z: 1,
              top: "center",
              left: "center",
              silent: true,
              width: geowidth,
              height: geoheight,

              label: {
                show: false,
                normal: {
                  show: true,
                  color: "#fff"
                }
                // emphasis: {
                //   show: false,
                //   color: "#fff",
                //   areaColor: "#45b4b5",
                // },
              },
              itemStyle: {
                show: false,
                normal: {
                  areaColor: {
                    type: "linear",
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    // image: domImg,
                    // repeat: "repeat",
                    colorStops: [
                      {
                        offset: 0,
                        color: "#37B6BC"
                      },
                      {
                        offset: 1,
                        color: "#B6E6F0"
                      }
                    ],
                    global: false
                  },
                  // areaColor: "rgba(24, 107, 115,0.5)",
                  borderColor: "#fff",
                  borderWidth: 2
                  // shadowColor: "rgba(24, 107, 115,1)",
                  // shadowBlur: 20,
                },
                emphasis: {
                  show: false,
                  label: {
                    show: false
                  },
                  color: "#fff",
                  areaColor: "#1472F5",
                  borderColor: "#fff",
                  shadowColor: "rgba(76, 178, 181,1)"
                }
              }
            }
          ],

          series: [
            {
              type: "map",
              map: "shandong",
              top: "center",
              left: "center",
              roam: false,
              width: geowidth,
              height: geoheight,
              zoom: 1,
              z: 1,
              label: {
                normal: {
                  show: true,
                  color: "#fff"
                },
                emphasis: {
                  show: true,
                  color: "#fff",
                  areaColor: "#45b4b5"
                }
              },
              itemStyle: {
                normal: {
                  areaColor: {
                    type: "linear",
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    // image: domImg,
                    // repeat: "repeat",
                    colorStops: [
                      {
                        offset: 0,
                        color: "#37B6BC"
                      },
                      {
                        offset: 1,
                        color: "#B6E6F0"
                      }
                    ],
                    global: false
                  },
                  // areaColor: "rgba(24, 107, 115,0.5)",
                  borderColor: "#fff",
                  borderWidth: 2
                  // shadowColor: "rgba(24, 107, 115,1)",
                  // shadowBlur: 20,
                },
                emphasis: {
                  show: true,
                  label: {
                    show: false
                  },
                  color: "#fff",
                  areaColor: "#1472F5",
                  borderColor: "#fff",
                  shadowColor: "rgba(76, 178, 181,1)"
                }
              },
              data: datass
            }
          ]
        };
        this.mchart1.setOption(option);
        // });
      };
    }
  }
};
</script>
<style scoped></style>
