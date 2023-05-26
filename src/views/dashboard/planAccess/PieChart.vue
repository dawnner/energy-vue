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
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '300px'
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
        var colorList1 = ['#4B98D1', '#FF6240', '#16D899', '#F4FB77', '#FFAF2E']
        var colorList2 = ['#6A6DB0', '#FF1F1A', '#24D973', '#FEEA2A', '#FF6F05']
        this.chart = echarts.init(this.$el)
        var pieData = [{
            value: 110,
            name: '开放欢迎区'
          }, {
            value: 140,
            name: '鼓励推荐区'
          },
          {
            value: 180,
            name: '储能布置区'
          },
          {
            value: 260,
            name: '预警评估区'
          },
          {
            value: 310,
            name: '控制分流区'
          }

        ];
        var sum = 0;
        pieData.forEach((item) => {
          sum += Number(item.value);
        });
        this.chart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
          },
          // legend: {
          //   left: '5%',
          //   top: '5%',
          //   textStyle: {
          //     color: "#fff"
          //   },
          //   itemWidth: 10,
          //   itemHeight: 10,
          //   itemGap: 15
          // },
          visualMap: {
            show: false,
            min: 500,
            max: 600,
            inRange: {
              //colorLightness: [0, 1]
            }
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: pieData,
            // data: pieData.sort(function(a, b) {
            //   return a.value - b.value
            // }),
            roseType: 'radius',
            itemStyle: {
              normal: {
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
              }
            },
            label: {
              position: 'outside',
              normal: {
                formatter: (params) => {
                  return '{txt|' + ((params.value * 100) / sum).toFixed(0) + '%}'
                },
                padding: [0, -30],
                height: 25,
                rich: {
                  // c: {
                  //   color: '#8dabc8',
                  //   fontSize: 10,
                  //   align: 'left'
                  // },
                  txt: {
                    color: '#61D9C6',
                    fontSize: 11,
                    width: 10,
                    height: 10,
                    padding: [10, 10, 0, 0],
                  },
                },
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: '#61D9C6',
                },
                smooth: 0.1,
                length: 2,
                length2: 20,

              }
            }
          }]
        })
      }
    }
  }
</script>
