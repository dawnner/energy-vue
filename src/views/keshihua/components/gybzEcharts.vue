<template>
  <div style="height: 100%;width: 100%;">
    <div
      id="echartsone"
      style="width: 100%; height: 100%;padding-top:30px"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import Redirect from "../../redirect.vue";
export default {
  mounted() {
    this.echartsone();
  },
  methods: {
    echartsone() {
      var chartDom = document.getElementById("echartsone");
      var myChart = echarts.init(chartDom);
      let option = {
        title: {
          text: "(kw)",
          padding: [20, 55],
          textStyle: {
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: [
            {
              name: "全省用电负荷曲线",
              icon: "roundRect"
            },
            { name: "用电缺口负荷曲线", icon: "roundRect" },
            { name: "全省发电负荷曲线", icon: "roundRect" }
          ],
          itemWidth: 20,
          itemHeight: 10
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: [
              "2020/05/08",
              "2020/05/08",
              "2020/05/08",
              "2020/05/08",
              "2020/05/08",
              "2020/05/08",
              "2020/05/08",
              "2020/05/08",
              "2020/05/08"
            ],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 900,
            splitNumber: 9,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "全省用电负荷曲线",
            type: "line",
            symbol: "circle",
            // stack: "Total",
            smooth: true,
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [50, 232, 100, 350, 400, 45, 100, 400, 300],
            itemStyle: {
              color: "#25A9CE"
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(41,186,211,0.2)"
                  },
                  {
                    offset: 1,
                    color: "rgba(41,186,211,0)"
                  }
                ],
                global: false
              }
            },
            showSymbol: false
          },
          {
            name: "用电缺口负荷曲线",
            symbol: "circle",
            smooth: true,
            type: "line",
            // stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [20, 200, 150, 300, 600, 400, 520, 450, 250],
            itemStyle: {
              color: "#F28E7B"
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(241,142,125,0.2)"
                  },
                  {
                    offset: 1,
                    color: "rgba(241,142,125,0)"
                  }
                ],
                global: false
              }
            },
            showSymbol: false
          },
          {
            name: "全省发电负荷曲线",
            symbol: "circle",
            smooth: true,
            type: "line",
            // stack: "Total",
            label: {
              show: true,
              position: "top"
            },
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [100, 300, 450, 270, 160, 50, 400, 600, 350],
            itemStyle: {
              color: "#8B83F9"
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(125,72,255,0.2)"
                  },
                  {
                    offset: 1,
                    color: "rgba(0,180,255,0)"
                  }
                ],
                global: false
              }
            },
            showSymbol: false
          }
        ]
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
#echartsone {
  background-size: 100% 100%;
}
</style>
