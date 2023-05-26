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
        this.chart = echarts.init(this.$el)
        var pieData = [{
            value: 485,
            name: '济南'
          },
          {
            value: 460,
            name: '青岛'
          },
          {
            value: 420,
            name: '烟台'
          },
          {
            value: 405,
            name: '威海'
          }, {
            value: 385,
            name: '东营'
          },
          {
            value:360,
            name: '淄博'
          },
          {
            value: 334,
            name: '潍坊'
          },
          {
            value: 310,
            name: '日照'
          }, {
            value: 274,
            name: '菏泽'
          },
          {
            value: 252,
            name: '枣庄'
          }, {
            value: 231,
            name: '德州'
          },
          {
            value:219,
            name: '滨州'
          },
          {
            value: 174,
            name: '临沂'
          },
          {
            value: 161,
            name: '济宁'
          },
          {
            value: 150,
            name: '聊城'
          },
          {
            value: 147,
            name: '泰安'
          },
        ];
        var sum = 0;
        pieData.forEach((item) => {
          sum += Number(item.value);
        });
        this.chart.clear();
        this.chart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
          },
          legend: {
            position:'center',
            width:230,
            top:'2%',
            textStyle: {
              color: "#fff"
            },
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 15
          },
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
            center: ['52%', '61%'],
            radius: ['20%', '63%'],
            color: ['#10b9f8', '#ff6a6a', '#90ed7d', '#f7a35c', '#8085e9', '#920783',
              '#ebde7e', '#601986',
              '#a48b78', '#2a9bb7', '#d13cd3', '#58af24', '#a32222', '#1f47cf',
              '#D96A50', '#f2efde', '#0661A3'
            ],
            data: pieData.sort(function(a, b) {
              return b.value - a.value
            }),
            roseType: 'radius',

            label: {
              position: 'outside',
              normal: {
                formatter: (params) => {
                  return '{txt|' + ((params.value * 100) / sum).toFixed(2) + '%}'
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
                    color: '#8dabc8',
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
                  color: '#8dabc8',
                },
                smooth: 0.1,
                length: 12,
                length2: 15,

              }
            }
          }]
        })
      }
    }
  }
</script>
