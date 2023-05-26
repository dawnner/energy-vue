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
        default: '90%'
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
        var xData = ['1', '2', '3', '4', '5', '6', '7', '8', '9',
          '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21',
          '22', '23', '24', '25', '26', '27', '28', '29', '30'
        ]
        var yData = [2, 5, 4, 7, 5, 6, 10, 11, 13, 11, 10, 14, 12, 11, 6, 9, 17, 14, 14, 13, 13, 16,
          14, 13, 12, 10, 11, 9, 10, 13
        ]
        this.chart = echarts.init(this.$el)
        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            // 坐标轴指示器，坐标轴触发有效(axis)
            axisPointer: {
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: "{b}日 : {c}kw"
          },
          grid: {
            top: '10%',
            left: '4%',
            right: '1%',
            bottom: '15%',
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
                color: '#BEE4F8',
                fontSize: 11,
              },
            },
            axisTick: {
              show: false,
            },
            data: xData,
          }],
          yAxis: [{
            name: '',
            type: 'value',
            min: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#4D5D88',
                type: 'dashed'
              }
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                color: '#BEE4F8',

              },
            },
            axisTick: {
              show: false,
            },
          }],
          series: [{
            name: '数据统计',
            type: 'line',
            smooth: false, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbol: 'none',
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#FBB50B", // 线条颜色
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
                borderColor: '#EFBA2E'

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
                      color: 'rgba(66,62,68,0.9)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(19,31,80,0.6)',
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
