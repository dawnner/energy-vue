<template>
  <div
    style="width: 100%; height: 100%;display: flex;flex-direction: column;justify-content: space-between;"
  >
    <div
      style="display: flex;justify-content: space-between;align-items: center;height: 25%;margin-bottom:10px"
    >
      <el-tooltip class="item" effect="light" placement="right">
        <div slot="content">
          <img
            src="../../../../assets/CoalElectricity/公式_普通.png"
            alt=""
          />&nbsp; <span style="color: #158388;">指标公式</span
          ><br /><br />年度可再生能源发电量/年度全社会用电量
        </div>
        <div
          style="flex:1;font-size: 18px;color: #375175;white-space: nowrap;overflow: hidden;"
        >
          再生能源电力消纳责任权重
        </div>
      </el-tooltip>
      <div id="ring1" style="height: 100%; width: 24%"></div>
    </div>
    <div
      style="display: flex;justify-content: space-between;align-items: center;height: 25%;margin-bottom:10px"
    >
      <el-tooltip class="item" effect="light" placement="right">
        <div slot="content">
          <img
            src="../../../../assets/CoalElectricity/公式_普通.png"
            alt=""
          />&nbsp; <span style="color: #158388;">指标公式</span
          ><br /><br />实际风光发电量/可用发电量
        </div>
        <div
          style="flex:1;font-size: 18px;color: #375175;white-space: nowrap;overflow: hidden;"
        >
          风电光伏发电利用率
        </div>
      </el-tooltip>
      <div id="ring2" style="height: 100%; width: 24%"></div>
    </div>
    <div
      style="display: flex;justify-content: space-between;align-items: center;height: 25%;margin-bottom:10px"
    >
      <el-tooltip class="item" effect="light" placement="right">
        <div slot="content">
          <img
            src="../../../../assets/CoalElectricity/公式_普通.png"
            alt=""
          />&nbsp; <span style="color: #158388;">指标公式</span
          ><br /><br />灵活性改造煤电机组新增调节能力+抽水蓄能装机规模+<br />新型储能规模(含分布式储能)+燃机新增调节能力)/风光装机总规模
        </div>
        <div
          style="flex:1;font-size: 18px;color: #375175;white-space: nowrap;overflow: hidden;"
        >
          电力系统调节能力占比
        </div>
      </el-tooltip>
      <div id="ring3" style="height: 100%; width: 24%"></div>
    </div>
    <div
      style="display: flex;justify-content: space-between;align-items: center;height: 25%;margin-bottom:10px"
    >
      <el-tooltip class="item" effect="light" placement="right">
        <div slot="content">
          <img
            src="../../../../assets/CoalElectricity/公式_普通.png"
            alt=""
          />&nbsp; <span style="color: #158388;">指标公式</span
          ><br /><br />全社会各行业及居民生活用电/煤、油、气、热、电等终端能源消费总量的比重(100%)
        </div>
        <div
          style="flex:1;font-size: 18px;color: #375175;white-space: nowrap;overflow: hidden;"
        >
          电能占终端能源消费比重
        </div>
      </el-tooltip>
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
