<template>
  <div :class="className" :style="{height:height,width:width}" ref="chartContainerParent" />
</template>

<script>
  import echarts from 'echarts'
  const animationDuration = 3000

  export default {
    props: {
      className: {
        type: String,
        default: 'mchart1'
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
        mchart1: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      this.mchart1.dispose()
      this.mchart1 = null
    },
    methods: {
      initChart() {
        var hzmap = require('../data-shandong.json');
        var mapname = hzmap;
        let index = -1;
        var domImg = document.createElement('img');
        domImg.style.height = domImg.height = domImg.width = domImg.style.width = '8px';
        domImg.src = require('@/assets/images/ditu.png')
        this.mchart1 = echarts.init(this.$el)
        this.mchart1.showLoading('default', {
          text: '加载中...',
          maskColor: '#2957A2',
          textColor: '#fff',
        });
        setTimeout(function() {
          mapInit();
        }, 1000);
        var mapInit = () => {
          echarts.registerMap('shandong', mapname);
          let areaData = [
            ['117.121225', '36.79466', 25], // '济南'
            ['116.5', '35.66', 23], // '济宁'
            ['116.3', '35.56', 43], // '济宁'
            ['117.03', '36.48', 33],
            ['117.23', '35.8', 33],
            ['117.63', '36.18', 33],
            ['117.53', '36.38', 23],
            ['117.73', '36.38', 33],
            ['117.73', '36.18', 23],
            ['117.63', '36.58', 23],
            ['118.3', '35.55', 26], // '临沂'
            ['117.9', '35.65', 56], // '临沂'
            ['118.25', '35.95', 56],
            ['118.25', '36.1', 36],
            ['118.25', '36.23', 26],
            ['118.05', '36.66', 30], // '淄博'
            ['118.65', '35.96', 30], // '淄博'
            ['118.65', '36.3', 28], // '淄博'
            ['118.25', '36.36', 30], // '淄博'
            ['119.1', '36.58', 95], // '潍坊'
            ['118.03', '36.18', 29],
            ['118.4', '36.68', 23],
            ['118.4', '36.18', 19],
            ['119.15', '36.45', 65],
            ['119.07', '36.7', 45],
            ['118.6', '36.7', 45],
            ['118.6', '36.5', 25],
            ['118.6', '36.4', 15],
            ['118.6', '36.1', 75],
            // ['118.69', '37.56', 34], // '东营'
            // ['120.25', '36.42', 34], // '青岛'
            ['120.75', '37.08', 40], // '烟台'
            // ['119.1', '35.62', 24], // '日照'
            ['121.6', '36.96', 34] // '威海'
          ];
          this.mchart1.hideLoading();
          var option = {
            backgroundColor: 'transparent',
            tooltip: {
              show: false,
              trigger: 'item',
              "backgroundColor": 'rgba(2,7,51,0.8)',
              "borderColor": 'rgb(42,102,180)',
              "borderRadius": 10,
              "borderWidth": 1,
              "padding": 30,
              "textStyle": {
                "fontSize": 12
              },
              formatter: function(params) {
                console.log(params)
                return '容量' + '<br/>' + params.name + ' : ' + params.data.datas;
              },
              "axisPointer": {
                "type": "shadow",
                "shadowStyle": {
                  "color": "rgba(59,146,252,0.1)"
                }
              }
            },
            visualMap: {
              show: false,
              inRange: {
                color: ['#00519C', '#00BE18', '#EFC300', '#F88B00', '#FF0832'],
              },
              min: 0,
              max: 100,
              calculable: true,
              textStyle: {
                color: '#fff',
                fontSize: 12
              }
            },
            grid: {
              height: '100%',
              width: '100%'
            },
            geo: [{
              map: 'shandong',
              top: 'center',
              left: 'center',
              roam: false,
              width: '82%',
              height: '94.5%',
              zoom: 0.9,
              label: {
                normal: {
                  show: true,
                  color: '#fff'
                },
                emphasis: {
                  color: 'fff',
                  areaColor: "#10b5f4"
                },
              },
              itemStyle: {
                emphasis: {
                  color: '#fff',
                  areaColor: "#10b5f4"
                },
                normal: {
                  areaColor: {
                    image: domImg,
                    repeat: 'repeat',
                  },
                  borderColor: '#b4d1f9',
                  borderWidth: 2,
                  shadowColor: '#166BF7',
                  shadowBlur: 20,
                },
              },
            }, {
              map: 'shandong',
              top: 'center',
              left: 'center',
              roam: false,
              width: '82%',
              height: '96.5%',
              zoom: 0.9,
              zlevel: -1,
              label: {
                normal: {
                  show: false,
                }
              },
              itemStyle: {
                emphasis: {
                  color: 'fff',
                  areaColor: "#10b5f4"
                },
                normal: {
                  areaColor: 'transparent',
                  borderColor: '#78A3E4',
                  borderWidth: 1.2,
                  shadowColor: '#166BF7',
                  shadowBlur: 10,
                }
              }
            }, {
              map: 'shandong',
              top: 'center',
              left: 'center',
              roam: false,
              width: '82%',
              height: '97.9%',
              zoom: 0.9,
              zlevel: -2,
              label: {
                normal: {
                  show: false,
                }
              },
              itemStyle: {
                emphasis: {
                  color: 'fff',
                  areaColor: "#10b5f4"
                },
                normal: {
                  areaColor: 'transparent',
                  borderColor: '#78A3E4',
                  borderWidth: 1.5,
                  shadowColor: '#166BF7',
                  shadowBlur: 20,
                },
              }
            }, {
              map: 'shandong',
              top: 'center',
              left: 'center',
              roam: false,
              width: '83%',
              height: '99.3%',
              zoom: 0.9,
              zlevel: -3,
              label: {
                normal: {
                  show: false,
                }
              },
              itemStyle: {
                emphasis: {
                  color: 'fff',
                  areaColor: "#10b5f4"
                },
                normal: {
                  areaColor: 'transparent',
                  borderColor: '#78A3E4',
                  borderWidth: 1.5,
                  shadowColor: '#166BF7',
                  shadowBlur: 20,
                },
              }
            }],

            series: [{
              name: 'AQI',
              mapType: 'shandong',
              type: 'heatmap',
              coordinateSystem: 'geo',
              data: areaData,
              blurSize: 6,
              pointSize: 10,
            },{
              name: 'AQI',
              mapType: 'shandong',
              type: 'heatmap',
              coordinateSystem: 'geo',
              data: areaData,
              blurSize: 6,
              pointSize: 10,
            },{
              name: 'AQI',
              mapType: 'shandong',
              type: 'heatmap',
              coordinateSystem: 'geo',
              data: areaData,
              blurSize: 6,
              pointSize: 10,
            }]
          };
          this.mchart1.setOption(option);
          // });
        };
        window.addEventListener("resize", () => {
          this.mchart1.resize();
        });
      }
    }
  }
</script>
