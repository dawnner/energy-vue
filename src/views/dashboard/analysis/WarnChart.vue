<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
  import echarts from 'echarts'
  // require('echarts/theme/macarons') // echarts theme
  import resize from '../mixins/resize'

  const animationDuration = 3000

  export default {
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: 'vchart1'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      }
    },
    data() {
      return {
        vchart1: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      if (!this.vchart1) {
        return
      }
      this.vchart1.dispose()
      this.vchart1 = null
    },
    methods: {
      initChart() {
        this.vchart1 = echarts.init(this.$el)
        let list = [{
          name: '较上月增幅',
          value: 55
        }];
        let yName = list.map((item) => item.name);
        let xData = list.map((item) => item.value);
        let barWidth = 11;
        this.vchart1.setOption({
          xAxis: {
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          },
          grid: {
            containLabel: true,
            left:'13%',
            top: 0,
            right:'8%',
            bottom: 0
          },
          yAxis: [{
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show:false,
              margin: 10,
              textStyle: {
                fontSize: 14,
                color: '#fff'
              }
            },
            data: yName,
          }],
          series: [{ //内
              type: 'bar',
              barWidth,
              legendHoverLink: false,
              symbolRepeat: true,
              silent: true,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [{
                    offset: 0,
                    color: '#ff7200' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#ffd223' // 100% 处的颜色
                  }]
                }
              },
              label: {
                normal: {
                  color: '#cfd1dd',
                  show: true,
                  position: [0, '-20px'],
                  textStyle: {
                    fontSize: 13,
                  },
                  formatter: function(a, b) {
                    return a.name;
                  },
                },
              },
              data: list,
              z: 1,
              animationEasing: 'elasticOut'
            },
            { // 背景
              type: 'pictorialBar',
              animationDuration: 0,
              symbolRepeat: 'fixed',
              symbolMargin: '20%',
              symbol: 'roundRect',
              symbolSize: [6, barWidth],
              itemStyle: {
                normal: {
                  color: '#1a2861',

                }
              },

              data: [100],
              z: 0,
              animationEasing: 'elasticOut'
            },
            { //分隔
              type: 'pictorialBar',
              itemStyle: {
                color: '#1a2861'
              },
              symbolRepeat: 'fixed',
              symbolMargin: 4,
              symbol: 'roundRect',
              symbolClip: true,
              symbolSize: [2, barWidth],
              symbolPosition: 'start',
              symbolOffset: [-2, 0],
              data: list,
              z: 2,
              animationEasing: 'elasticOut',
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  offset: [-5, -5],
                  // distance: 30,
                  textStyle: {
                    color: '#afd2e8',
                    fontSize: 12,
                  },
                  align: 'right',
                  verticalAlign: 'bottom',
                  lineHeight: 21,
                  formatter: function(a, b) {
                    return `${a.value}%`
                  }
                },

              },
            }
          ]
        })
        window.addEventListener("resize", () => {
          this.vchart1.resize();
        });
      }
    }
  }
</script>
