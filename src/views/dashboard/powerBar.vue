<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
  import echarts from 'echarts'
  // require('echarts/theme/macarons') // echarts theme
  import resize from './mixins/resize'

  export default {
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: 'Cchart'
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
        Cchart: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      if (!this.Cchart) {
        return
      }
      this.Cchart.dispose()
      this.Cchart = null
    },
    methods: {
      initChart() {
        var xData= ['济南', '青岛', '烟台', '威海', '东营', '淄博',
              '潍坊', '日照', '菏泽', '枣庄', '德州', '滨州', '临沂', '济宁', '聊城', '泰安'
            ]
        const CubeLeft = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0
          },
          buildPath: function(ctx, shape) {
            const xAxisPoint = shape.xAxisPoint
            const c0 = [shape.x, shape.y]
            const c1 = [shape.x - 5, shape.y - 5]
            const c2 = [xAxisPoint[0] - 5, xAxisPoint[1] - 5]
            const c3 = [xAxisPoint[0], xAxisPoint[1]]
            ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
          }
        })
        const CubeRight = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0
          },
          buildPath: function(ctx, shape) {
            const xAxisPoint = shape.xAxisPoint
            const c1 = [shape.x, shape.y]
            const c2 = [xAxisPoint[0], xAxisPoint[1]]
            const c3 = [xAxisPoint[0] + 10, xAxisPoint[1] - 5]
            const c4 = [shape.x + 10, shape.y - 5]
            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
          }
        })
        const CubeTop = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0
          },
          buildPath: function(ctx, shape) {
            const c1 = [shape.x, shape.y]
            const c2 = [shape.x + 10, shape.y - 5]
            const c3 = [shape.x + 5, shape.y - 10]
            const c4 = [shape.x - 5, shape.y - 5]
            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
          }
        })
        echarts.graphic.registerShape('CubeLeft', CubeLeft)
        echarts.graphic.registerShape('CubeRight', CubeRight)
        echarts.graphic.registerShape('CubeTop', CubeTop)
        var VALUE = [16, 17, 12, 16, 13, 17,6, 16,13,16.5, 12,17, 14.5, 16,13,14.8]
        // var Max=[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];
        var Max=[];
        for(var i=0;i<VALUE.length;i++){
          Max.push(VALUE.[i]+5)
        }
        this.Cchart = echarts.init(this.$el)
        this.Cchart.clear()
        this.Cchart.setOption({
          grid: {
            left: '8%',
            right: '5%',
            bottom: '16%',
            top: '12%',
          },
          tooltip: {
            trigger: 'axis',
            // 坐标轴指示器，坐标轴触发有效(axis)
            axisPointer: {
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: "{b} : {c}"

          },
          xAxis: {
            type: 'category',
            data:xData,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#6f7893'
              }
            },
            // offset: 20,
            axisTick: {
              show: false,
              length: 9,
              alignWithLabel: true,
              lineStyle: {
                color: '#7DFFFD'
              }
            },
            axisLabel: {
              fontSize: 12,
              color: '#95b4cd'
            }
          },
          yAxis: {
            name: '',
            type: 'value',
            min: 0,
            splitNumber: 5,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#9b94a0'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#4a537a',
                type: 'dashed'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#bee4f8',
              fontSize: 12
            },
            boundaryGap: ['0', '0%']
          },
          series: [{
            type: 'custom',
            renderItem: function(params, api) {
              const location = api.coord([api.value(0), api.value(1)])
              return {
                type: 'group',
                children: [{
                  type: 'CubeLeft',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: 'rgba(7,33,99,.6)'
                  }
                }, {
                  type: 'CubeRight',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: 'rgba(3,40,112,0.7)'
                  }
                }, {
                  type: 'CubeTop',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: 'rgba(10,40,115,.8)'
                  }
                }]
              }
            },
            data:Max
          }, {
            type: 'custom',
            renderItem: (params, api) => {
              const location = api.coord([api.value(0), api.value(1)])
              return {
                type: 'group',
                children: [{
                  type: 'CubeLeft',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0a67a5'
                      },
                      {
                        offset: 1,
                        color: '#39b3bf'
                      }
                    ])
                  }
                }, {
                  type: 'CubeRight',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0a67a5'
                      },
                      {
                        offset: 1,
                        color: '#39b3bf'
                      }
                    ])
                  }
                }, {
                  type: 'CubeTop',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1a82ae'
                      },
                      {
                        offset: 1,
                        color: '#2998B6'
                      }
                    ])
                  }
                }]
              }
            },
            data: VALUE
          }]
        })
        window.addEventListener("resize", () => {
          this.Cchart.resize();
        });
      }
    }
  }
</script>
