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
        default: 'schart'
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
        schart: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      if (!this.schart) {
        return
      }
      this.schart.dispose()
      this.schart = null
    },
    methods: {
      initChart() {
        var data = [224, 202, 182, 160, 140, 135, 115, 100, 85, 66, 60, 55, 50, 40, 30, 20];
        var className = ['济南', '青岛', '淄博', '临沂', '枣庄', '东营', '烟台', '潍坊',
          '济宁', '泰安', '威海', '日照', '滨州', '德州', '聊城', '菏泽'
        ];
        var colorList1 = ['#ec2c26', '#ea4e26', '#ea4f26', '#ea8c20',
          '#eaad1c', '#055fa2', '#39afbc', '#055fa2', '#39afbc', '#055fa2', '#39afbc',
          '#055fa2', '#39afbc', '#055fa2', '#39afbc', '#055fa2'
        ];
        var colorList2 = ['#ec2c26', '#ea4e26', '#ea6927', '#ea8c20',
          '#eaad1c', '#0fb4f3', '#31f8fb', '#0fb4f3', '#31f8fb', '#0fb4f3', '#31f8fb',
          '#0fb4f3', '#31f8fb', '#0fb4f3', '#31f8fb', '#0fb4f3'
        ];
        var colorList3 = ['#5f1839', '#5e2539', '#5e2f38', '#5e3d36',
          '#5e4b35', '#043d70', '#155d83', '#043d70', '#155d83', '#043d70', '#155d83', '#043d70', '#155d83',
          '#043d70', '#155d83', '#043d70'
        ];
        var defaultData = [250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250];
        this.schart = echarts.init(this.$el)
        this.schart.setOption({
          grid: {
            left: '18%',
            right: '2%',
            bottom: '2%',
            top: '2%',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none',
            },
            formatter: function(params) {
              return params[0].name + ':' + params[0].value
            },
          },
          xAxis: {
            show: false,
            type: 'value',
          },
          yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#b7ddf2'
              },
              interval: 0,
              formatter: function(params, index) {
                if (index <= 4) {
                  return '{idx' + index + '|' + '}  {title|' + params + '}'
                }
                if (index > 4) {
                  return '{title|' + params + '}'
                }
              },
              rich: {
                idx0: {
                  backgroundColor: {
                    image: require('@/assets/images-yxfx/one.png')
                  },
                },
                idx1: {
                  backgroundColor: {
                    image: require('@/assets/images-yxfx/two.png')
                  }
                },
                idx2: {
                  backgroundColor: {
                    image: require('@/assets/images-yxfx/three.png')
                  }
                },
                idx3: {
                  backgroundColor: {
                    image: require('@/assets/images-yxfx/four.png')
                  }
                },
                idx4: {
                  backgroundColor: {
                    image: require('@/assets/images-yxfx/five.png')
                  }
                },
              }
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
            data: className
          }, {
            zlevel: 5,
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              inside: true,
              align: 'right',
              textStyle: {
                color: '#b7ddf2',
                fontSize: '12'
              },
              formatter: function(value) {
                return value;
              },
            },
            data: data
          }],
          series: [{
              name: '',
              type: 'bar',
              zlevel: 1,
              itemStyle: {
                normal: {
                  barBorderRadius: 30,
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
              },
              barWidth: 9,
              data: data.sort(function(a, b) {
                return a.value - b.value
              }),
            },
            {
              name: '背景',
              type: 'bar',
              barWidth: 9,
              barGap: '-100%',
              data: defaultData,
              itemStyle: {
                normal: {
                  color: (params) => {
                    return colorList3[params.dataIndex]
                  },
                  barBorderRadius: 30,
                },
              },
            },
          ],
        })
        window.addEventListener("resize", () => {
          this.schart.resize();
        });
      }
    }
  }
</script>
