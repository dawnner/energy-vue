<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
  import echarts from 'echarts'
  // require('echarts/theme/macarons') // echarts theme
  import resize from '../mixins/resize'

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
        default: '90%'
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
        var xData = ['09', '10', '11', '12', '13', '14', '15']

        var VALUE = [70000, 60000, 45000, 65000, 15000, 40000, 42000]

        this.Cchart = echarts.init(this.$el)
        this.Cchart.clear()
        this.Cchart.setOption({
          grid: {
            left: '14%',
            right: '12%',
            bottom: '18%',
            top: '14%',
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
            name: '日期',
            type: 'category',
            data: xData,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#22dafc'
              }
            },
            // offset: 20,
            axisTick: {
              show: false,
              length: 9,
              alignWithLabel: true,
              lineStyle: {
                color: '#22dafc'
              }
            },
            axisLabel: {
              fontSize: 12,
              color: '#fff'
            }
          },
          yAxis: {
            name: '发电量 /kws',
            type: 'value',
            min: 0,
            // splitNumber: 5,
            fontSize: 10,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#21dbfd',
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#183d4a',
                type: 'dashed'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fdffff',
              fontSize: 11
            },
            boundaryGap: ['0', '0%']
          },
          "series": [{
              name: '',
              type: 'pictorialBar',
              symbolSize: [18, 4],
              symbolOffset: ["-1%", -2],
              symbolPosition: 'end',
              z: 12,
              color: "#22ff9a",
              zlevel: 2,
              data: VALUE
            },

            {
              name: '',
              type: 'bar',
              barWidth: "18",
              itemStyle: {
                // color: "rgba(61,187,255,.16)",
                color: "rgba(3,15,58,0.8)",
                borderColor: "#23d8ff",
                borderWidth: 1.5,
                borderType: 'solid',
              },
              "label": {
                show: false,
                // formatter: '{c}' + '%',
                "position": "left",
                color: 'rgba(119,167,255,1)',
                fontSize: 12,
                textAlign: 'center'
              },
              zlevel: 2,
              data: VALUE
            },
          ]
        })
        window.addEventListener("resize", () => {
          this.Cchart.resize();
        });
      }
    }
  }
</script>
