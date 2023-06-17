<template>
  <div style="height: 100%;width: 100%;">
    <div class="titles">
      <span>碳排因子趋势分析</span>
    </div>
    <div
      id="echartsone"
      style="width: 100%; height: 85%;margin-top:-20px"
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
        // title: {
        //   text: "(kw)",
        //   padding: [20, 55],
        //   textStyle: {
        //     fontWeight: "normal"
        //   }
        // },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        // legend: {
        //   data: [
        //     {
        //       name: "全省用电负荷曲线",
        //       icon: "roundRect"
        //     },
        //     { name: "外电负荷曲线", icon: "roundRect" },
        //     { name: "全省发电负荷曲线", icon: "roundRect" }
        //   ],
        //   itemWidth: 20,
        //   itemHeight: 10
        // },
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
            max: 20000000,
            splitNumber: 10,
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
            name: "碳排因子趋势分析",
            type: "line",
            symbol: "circle",
            // stack: "Total",
            smooth: true,
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [
              6000000,
              18000000,
              1500000,
              10000000,
              500000,
              30000,
              6000000,
              200000,
              1500000,
              10000000,
              500000,
              30000
            ],
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
          }
          // {
          //   name: "外电负荷曲线",
          //   symbol: "circle",
          //   smooth: true,
          //   type: "line",
          //   // stack: "Total",
          //   areaStyle: {},
          //   emphasis: {
          //     focus: "series"
          //   },
          //   data: [20, 200, 150, 300, 600, 400, 520, 450, 250],
          //   itemStyle: {
          //     color: "#F28E7B"
          //   },
          //   areaStyle: {
          //     color: {
          //       type: "linear",
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [
          //         {
          //           offset: 0,
          //           color: "rgba(241,142,125,0.2)"
          //         },
          //         {
          //           offset: 1,
          //           color: "rgba(241,142,125,0)"
          //         }
          //       ],
          //       global: false
          //     }
          //   },
          //   showSymbol: false
          // },
          // {
          //   name: "全省发电负荷曲线",
          //   symbol: "circle",
          //   smooth: true,
          //   type: "line",
          //   // stack: "Total",
          //   label: {
          //     show: true,
          //     position: "top"
          //   },
          //   areaStyle: {},
          //   emphasis: {
          //     focus: "series"
          //   },
          //   data: [100, 300, 450, 270, 160, 50, 400, 600, 350],
          //   itemStyle: {
          //     color: "#8B83F9"
          //   },
          //   areaStyle: {
          //     color: {
          //       type: "linear",
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [
          //         {
          //           offset: 0,
          //           color: "rgba(125,72,255,0.2)"
          //         },
          //         {
          //           offset: 1,
          //           color: "rgba(0,180,255,0)"
          //         }
          //       ],
          //       global: false
          //     }
          //   },
          //   showSymbol: false
          // }
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
