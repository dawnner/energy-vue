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
        default: 'wchart4'
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
        wchart4: null,
        wholeNum4: 88,
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      if (!this.wchart4) {
        return
      }
      this.wchart4.dispose()
      this.wchart4 = null
    },
    methods: {
      initChart() {
        var data = {
          value: this.wholeNum4,
          name: '完成率'
        }
        this.wchart4 = echarts.init(this.$el)
        this.wchart4.clear()
        this.wchart4.setOption({
          data: [{
            name: data.name,
          }],
          series: [{ // 主圆环
            name: data.name,
            type: 'pie',
            center: ['50%', '58%'],
            radius: ['48%', '88%'],
            startAngle: 225,
            color: [{
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: '#0dde79' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#08b562' // 100% 处的颜色
              }]
            }, 'transparent'],
            hoverAnimation: true,
            legendHoverLink: false,
            z: 10,
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
              value: 75 * data.value / 100
            }, {
              value: 100 - (75 * data.value / 100)
            }]
          }, { // 背景圆环
            name: '',
            type: 'pie',
            center: ['50%', '58%'],
            radius: ['48%', '88%'],
            silent: true,
            startAngle: 225,
            labelLine: {
              normal: {
                show: false
              }
            },
            z: 5,
            data: [{
              value: 75,
              itemStyle: {
                color: '#0D2270',
                borderWidth: 2,
              }
            }, {
              value: 25,
              itemStyle: {
                color: 'transparent'
              }
            }]
          }]
        })
        window.addEventListener("resize", () => {
          this.wchart4.resize();
        });
      }
    }
  }
</script>
