<template>
  <div style="height: 100%">
    <img
      style="position: absolute; top: 20%; left: 5%; z-index: 99"
      src="../../../../assets/images/biaotixia2.png"
      alt=""
    />
    <!-- <div class="one8">电量交换</div> -->
    <div
      id="analysisHistogram1"
      style="width: 100%; height: 100%"
      ref="chart"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    analysisHistogram1() {
      var chartDom = document.getElementById("analysisHistogram1");
      var myChartjhdl = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "电量交换",
          left: 20,
          top: 18,
          // bottom: 18,
          textStyle: {
            fontSize: 22
          }
        },

        backgroundColor: "#fff",
        tooltip: {},
        grid: {
          top: "30%",
          left: "3%",
          right: "5%",
          bottom: "5%",
          containLabel: true
        },
        legend: {
          itemGap: 50,
          top: "8%",
          right: "5%",
          data: ["外电通道完成占比", "调入电量"],
          textStyle: {
            color: "#333",
            borderColor: "#333"
          }
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: "#333"
              }
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              rotate: 45, //代表逆时针旋转
              textStyle: {
                color: "#333",
                margin: 15
              }
            },
            axisTick: {
              show: false
            },
            data: ["直流1000kv", "交流±800", "直流±800", "直流500kv"]
          }
        ],
        yAxis: [
          {
            offset: 10,
            type: "value",
            min: 0,
            max: 10000,
            splitNumber: 5,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#ddd"
              }
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              margin: 5,
              textStyle: {
                color: "#333"
              }
            },
            axisTick: {
              show: false
            }
          },
          {
            type: "value",
            // name: "bar",
            min: 0,
            max: 75,
            interval: 15,
            axisLabel: {
              formatter: "{value} %"
            }
          }
        ],
        series: [
          {
            name: "外电通道完成占比",
            type: "line",
            smooth: true, //是否平滑曲线显示
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            // symbol: 'emptyCircle',
            symbolSize: 6,
            lineStyle: {
              normal: {
                color: "#158388" // 线条颜色
              }
            },
            itemStyle: {
              color: "#545D77"
            },
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: "#333"
              }
            },
            tooltip: {
              show: false
            },
            areaStyle: {
              //区域填充样式
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
                      color: "rgba(109,207,246,1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(255,255,255,0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(109,207,246,0.6)", //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [5000, 4500, 8500, 6500]
          },
          {
            name: "调入电量",
            type: "bar",
            barWidth: 20,
            tooltip: {
              show: false
            },
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: "#333"
              }
            },
            itemStyle: {
              normal: {
                color: "#3BAFFF"
              }
            },
            data: [3900, 1800, 9800, 7800]
          }
        ]
      };
      option && myChartjhdl.setOption(option);
      let listener = function() {
        myChartjhdl.resize();
      };
      window.addEventListener("resize", listener);
    }
  },
  mounted() {
    this.analysisHistogram1();
  }
};
</script>

<style>
/* .one8 {
  font-size: 24px;
  margin-left: 28px;
  height: 60px;
  line-height: 60px;
  color: #304159;
  font-weight: 700;
  background: url("../../../assets/images/biaotixia2.png") no-repeat bottom;
} */
#analysisHistogram1 {
  background-size: 100% 100%;
}
</style>
