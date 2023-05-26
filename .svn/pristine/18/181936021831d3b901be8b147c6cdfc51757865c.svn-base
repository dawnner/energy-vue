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
        var xData= ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        var yData= [8, 14, 21, 25, 23, 25, 29, 30, 32, 27, 33, 27]
        this.chart = echarts.init(this.$el);
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
            top: '2%',
            left: '7%',
            right: '3%',
            bottom: '13%',
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
            data:xData,
          }],
          yAxis: [{
            // name: '单位（KW）',
            // nameTextStyle: {
            //   color: "#9c95a4",
            //   fontSize: 12,
            // },
            type: 'value',
            min: 0,
            max: 33 + 6,
            // max: 140,
            splitNumber: 7,
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
            name: '数据统计',
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
                      color: 'rgba(236, 169, 44,0.3)',
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
            data:yData
          }]
        })
      }
    }
  }
</script>
