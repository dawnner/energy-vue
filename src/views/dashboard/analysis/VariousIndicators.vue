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
        var xData= [3000, 10000, 8000, 7000, 8000, 6000]
        this.vchart1 = echarts.init(this.$el)
        var colorList1 = ['#33DDF8', '#2473EF', '#33DDF8', '#2473EF', '#33DDF8', '#2473EF'];
        var colorList2 = ['#1D74AB', '#1647A9', '#1D74AB', '#1647A9', '#1D74AB', '#1647A9'];
        this.vchart1.clear()
        this.vchart1.setOption({
          grid: {
            left: '25%',
            right: '15%',
            bottom: '1%',
            top: '5%',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none',
            },
            formatter: function(params) {
              return (
                params[0].name + ' : ' + params[0].value
              );
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
                margin: 75,
                align: 'left',
                color: '#fff',
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
              data: ['三相不平衡', '电压合格率', '谐波含量', '线损异常', '发电量异常', '功率因数超限'],
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
                  fontSize: '11',
                },
                formatter: function(value) {
                  return value;
                },
              },
              data:xData,
            },
          ],
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
                        color: colorList1[params.dataIndex],
                      },
                    ]);
                  },
                },
              },
              barWidth: 8,
              data:xData,
            },
            {
              name: '背景',
              type: 'bar',
              barWidth: 8,
              barGap: '-100%',
              data: [15000, 15000, 15000, 15000, 15000, 15000],
              itemStyle: {
                normal: {
                  color: (params) => {
                    return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: colorList2[params.dataIndex],
                      },
                      {
                        offset: 1,
                        color: colorList2[params.dataIndex],
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
