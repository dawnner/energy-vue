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
        default: 'wchart1'
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
        wchart1: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      if (!this.wchart1) {
        return
      }
      this.wchart1.dispose()
      this.wchart1 = null
    },
    methods: {
      initChart() {
        var colorList1 = ['#3ebbc2', '#055fa2'];
        var colorList2 = ['#44fbfc', '#10b5f4'];
        this.wchart1 = echarts.init(this.$el)
        let list = [{
          name: '累计预警数量',
          value: 3000
        },{
          name: '已处理预警数量',
          value: 2855
        }];
        let yName = list.map((item) => item.name);
        let xData = list.map((item) => item.value);
        let barWidth = 11;
        this.wchart1.setOption({
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
                color: (params) => {
                  return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                      offset: 0,
                      color: colorList1[params.dataIndex],
                    },
                    {
                      offset: 1,
                      color: colorList2[params.dataIndex],
                    },
                  ]);
                },
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

              data: [5000,5000],
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
                    return `${a.value}`
                  }
                },

              },
            }
          ]
        })
        window.addEventListener("resize", () => {
          this.wchart1.resize();
        });
      }
    }
  }
</script>
