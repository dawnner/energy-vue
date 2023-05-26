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
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '95%'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      initChart() {
        var xData = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
          '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
          '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'
        ]
        var yData = [6, 13, 14, 16, 14, 14, 15, 16, 16.5, 16, 17, 18.5, 15, 15.9, 16.2, 16.2, 16.2, 17, 17.8, 18.4, 17,
          16, 17, 18
        ]
        this.chart = echarts.init(this.$el)
        this.chart.clear();
        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            // 坐标轴指示器，坐标轴触发有效(axis)
            axisPointer: {
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: "{b} : {c}"
          },
          grid: {
            top: '7%',
            left: '7%',
            right: '3%',
            bottom: '14%',
            // height:'51%',
            // containLabel: true,
          },
          legend: {
            itemGap: 50,
            data: ['人员出入总数'],
            textStyle: {
              color: '#f9f9f9',
              borderColor: '#fff'
            },
          },
          xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#707993'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#9ebfdb',
                fontSize: 11,
              },
            },
            axisTick: {
              show: false,
            },
            data: xData
          }],
          yAxis: [{
            // name: '发电量（KW）',
            // nameTextStyle: {
            //   color: "#9c95a4",
            //   fontSize: 12,
            // },
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#4b567f',
                type: 'dashed'
              }
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                color: '#9ebfdb',

              },
            },
            axisTick: {
              show: false,
            },
          }],
          series: [{
            name: '',
            type: 'line',
            smooth: false, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#ffb70a", // 线条颜色
              },
            },
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#fff',
              }
            },
            itemStyle: {
              normal: {
                color: "#fff",
                borderColor: '#ffb70a'

              }
            },

            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [{
                      offset: 0,
                      color: 'rgba(236, 169, 44,0.5)',
                    },
                    {
                      offset: 1,
                      color: 'transparent',
                    },
                  ],
                  false
                ),
              },
            },
            data: yData
          }]
        })
      }
    }
  }
</script>
