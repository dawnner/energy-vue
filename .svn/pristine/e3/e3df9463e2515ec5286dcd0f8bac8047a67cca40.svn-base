<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
  import echarts from 'echarts'
  // require('echarts/theme/macarons') // echarts theme
  import resize from './mixins/resize'

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
        var yData2= [15, 50]
        this.vchart1 = echarts.init(this.$el)
        var colorList1 = ['#3ebbc2', '#6706D7'];
        var colorList2 = ['#44ffff', '#8D47E5'];
        var colorList3 = ['#226E9D', '#412FAB'];
        var colorList4 = ['#2585BA', '#4A3DAF'];
        this.vchart1.setOption({
          grid: {
            left: '5%',
            right: '5%',
            bottom: '0%',
            top: '10%',
          },
          tooltip: {
            show:false,
            trigger: 'axis',
            axisPointer: {
              type: 'none',
            },
            formatter: function(params) {
              return (
                params[0].name +
                '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName +
                ' : ' +
                Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() +
                ' 万元<br/>'
              );
            },
          },
          xAxis: {
            show: false,
            type: 'value',
          },
          yAxis: [{
              // triggerEvent: true,
              show: true,
              inverse: true,
              data: ['较上月增加', '较去年增加'],
              axisLine: {
                show: false,
              },
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
                interval: 0,
                color: '#fff',
                align: 'left',
                margin: 80,
                fontSize: 13,
                // formatter: function(value, index) {
                //     return '{title|' + value + '}'
                // },
                rich: {
                  title: {
                    width: 165,
                  },
                },
              },
            },
            {
              type: 'category',
              inverse: true,
              axisTick: 'none',
              axisLine: 'none',
              show: true,
              axisLabel: {
                textStyle: {
                  color: '#c0c3d2',
                  fontSize: '13',
                },
                align: 'center',
                verticalAlign: 'bottom',
                lineHeight: 21,
                margin: -20,
                backgroundColor: {
                  image: require('@/assets/images/up_arrow.svg')
                },
                padding: [0, 20, 0, -30],
                formatter: function(value) {
                  return value + ' %';
                  // if (value >= 10000) {
                  //     return (value / 10000).toLocaleString() + '%';
                  // } else {
                  //     return value.toLocaleString();
                  // }
                },
              },
              data: [15, 50],
            },
          ],
          series: [{
              name: '接入光伏用户数量',
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
              barWidth: 9,
              data:yData2,
            },
            {
              name: '背景',
              type: 'bar',
              barWidth: 9,
              barGap: '-100%',
              data: [100, 100],
              itemStyle: {
                normal: {
                  color: (params) => {
                    return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: colorList3[params.dataIndex],
                      },
                      {
                        offset: 1,
                        color: colorList4[params.dataIndex],
                      },
                    ]);
                  },
                  barBorderRadius: 30,
                },
              },
            },
          ],
        })
        window.addEventListener("resize", () => {
          this.vchart1.resize();
        });
      }
    }
  }
</script>
