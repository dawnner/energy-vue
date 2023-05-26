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
        default: 'Rchart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '98%'
      }
    },
    data() {
      return {
        Rchart: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      if (!this.Rchart) {
        return
      }
      this.Rchart.dispose()
      this.Rchart = null
    },
    methods: {
      initChart() {
        var colorList = [
          new echarts.graphic.RadialGradient(0.5, 0.5, 1.0, [
            // 由中心向四周渐变
            {
              offset: 0,
              color: '#688d38',
            },
            {
              offset: 1,
              color: '#90b821',
            },
          ]),
          new echarts.graphic.RadialGradient(0.5, 0.5, 1.3, [
            // 由中心向四周渐变
            {
              offset: 0,
              color: '#088286',
            },
            {
              offset: 1,
              color: '#05b799',
            },
          ]),
          new echarts.graphic.RadialGradient(0.5, 0.5, 1.6, [
            // 由中心向四周渐变
            {
              offset: 0,
              color: '#086da4',
            },
            {
              offset: 1,
              color: '#04a6cb',
            },
          ]),
        ];
        this.Rchart = echarts.init(this.$el)
        this.Rchart.setOption({
          calculable: true,
          color: colorList,
          series: [{
            name: '漏斗图',
            type: 'funnel',
            left: '3%',
            right: '3%',
            top: '14%',
            bottom: '18%',
            minSize: '0%',
            maxSize: '90%',
            sort: 'ascending',
            gap: 5,
            label: {
              show: false,
              formatter: '{a|{c}}\n{b|{b}}',
              rich: {
                a: {
                  color: 'rgba(222,240,255,1)',
                  fontSize: 30,
                },
                b: {
                  color: 'rgba(101,166,196,1)',
                  fontSize: 14,
                },
              },
            },
            labelLine: {
              length: 200,
              lineStyle: {
                width: 1,
                type: 'solid',
              },
            },
            itemStyle: {
              //去掉默认白色边框线
              borderWidth: 0,
              borderColor: '#fff',
            },
            data: [{
                value: 1,
                name: ''
              },
              {
                value: 2,
                name: '容积率2'
              },
              {
                value: 3,
                name: '容积率3'
              }
            ]
          }],
        })
        window.addEventListener("resize", () => {
          this.Rchart.resize();
        });
      }
    }
  }
</script>
