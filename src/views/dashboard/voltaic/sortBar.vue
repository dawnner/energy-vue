<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
  import echarts from 'echarts'
  // require('echarts/theme/macarons') // echarts theme
  import resize from '../mixins/resize'

  export default {
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: 'Schart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '98%'
      }
    },
    data() {
      return {
        Schart: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      if (!this.Schart) {
        return
      }
      this.Schart.dispose()
      this.Schart = null
    },
    methods: {
      initChart() {
        var yData = ['北市', '关山', '苏山', '马店', '丁庄', '老楼', '龙凤']
        var defaultData = [250, 250, 250, 250, 250, 250, 250];
        var defaultData1 = [220, 220, 220, 220, 220, 220, 220];
        var xData = [200, 180, 180, 162, 153, 150, 102]
        var colorList1 = ['#ff8b22', '#ff8b22', '#23ff9f', '#23ff9f', '#23ff9f', '#23ff9f', '#23ff9f'];
        var parIndex = -1;
        this.Schart = echarts.init(this.$el)
        this.Schart.clear()
        this.Schart.setOption({
          grid: {
            left: '13%',
            right: '5%',
            bottom: '10%',
            top: '4%',
          },
          tooltip: {
            trigger: 'axis',
            // 坐标轴指示器，坐标轴触发有效(axis)
            axisPointer: {
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: "{b} : {c}"

          },
          xAxis: [{
            show: false,
          }],
          yAxis: [{
              type: 'category',
              inverse: true,
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff'
                },
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              data: yData
            },
            {
              zlevel: 5,
              type: 'category',
              inverse: true,
              axisTick: 'none',
              axisLine: 'none',
              show: true,
              axisLabel: {
                show: true,
                inside: true,
                align: 'right',
                formatter: function(value, index) {
                  if (index < 2) {
                     return "{nt" + 0 + "|" + value + "}";
                  }
                  if (index > 1) {
                    return "{nt" + 1 + "|" + value + "}";
                  }
                },
                rich: {
                  nt0: {
                    color: "#ff8b22",
                    fontSize: '12',
                    fontWeight: 'bold'
                  },
                  nt1: {
                    color: "#21ff9e",
                    fontSize: '12',
                    fontWeight: 'bold',
                  }
                },
              },
              data: xData.sort(function(a, b) {
                return a.value - b.value
              }),
            }
          ],
          series: [{
              name: '条',
              type: 'bar',
              yAxisIndex: 0,
              data: xData.sort(function(a, b) {
                return a.value - b.value
              }),

              barWidth: 6,
              itemStyle: {
                normal: {
                  color: (params) => {
                    return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: colorList1[params.dataIndex],
                      },
                      {
                        offset: 1,
                        color: colorList1[params.dataIndex],
                      },
                    ]);

                  },
                  opacity: 1,
                }
              },
              z: 22
            },
            {
              name: '背景',
              type: 'bar',
              barWidth: 22,
              barGap: '-230%',
              data: defaultData,
              itemStyle: {
                normal: {
                  color: '#010e46',
                  // color: 'rgba(255,255,255,0.1)',
                  borderColor: '#09235b',
                  borderWidth: 1,
                  barBorderRadius: 3,
                }
              },
              label: {
                show: true,
                normal: {
                  color: (params) => {
                    return colorList1[params.dataIndex];
                  },
                }
              }
            },
            {
              name: '外圆',
              type: 'scatter',
              hoverAnimation: false,
              data: xData.sort(function(a, b) {
                return a.value - b.value
              }),
              label: {
                normal: {
                  show: false,
                  formatter: function(param) {
                    return param.value;
                  },
                  position: ['320%', '8%'],
                  textStyle: {
                    color: (params) => {
                      return colorList1[params.dataIndex];
                    },
                    fontSize: '13',
                    fontWeight: 'bold'
                  }
                }
              },
              symbolSize: [10, 10],
              symbolOffset: ["-2%", '-40%'],
              itemStyle: {
                normal: {
                  color: (params) => {
                    return colorList1[params.dataIndex];
                  },
                  opacity: 1,
                }
              },
            },
          ],
        })
        window.addEventListener("resize", () => {
          this.Schart.resize();
        });
      }
    }
  }
</script>
