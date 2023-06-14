<template>
  <div style="height: 100%;width: 100%;">
    <div id="chartsContent" style="width:500px;height:150px;"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import Redirect from "../../redirect.vue";
export default {
  mounted() {
    this.echartsone();
  },
  methods: {
    echartsone() {
      var chartDom = document.getElementById("chartsContent");
      var myChart = echarts.init(chartDom);
      let option = {
        // title: {
        //   text: "Referer of a Website",
        //   subtext: "Fake Data",
        //   left: "center"
        // },
        tooltip: {
          trigger: "item"
        },
        color: ["#24E2C9", "#09CCFC"],
        // legend: {
        //   orient: "vertical",
        //   left: "left"
        // },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "非热电机组" },
              // { value: 735, name: "Direct" },
              // { value: 580, name: "Email" },
              // { value: 484, name: "Union Ads" },
              { value: 300, name: "热电机组" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      option && myChart.setOption(option);

      window.onresize = function() {
        setTimeout(function() {
          myChart.resize();
        }, 10);
      };
    }
  }
};
</script>

<style>
#echartsone {
  background-size: 100% 100%;
}
.container {
  width: 560px;
  height: 164px;
  background-color: #000000;
  position: relative;
}

.imgContent {
  width: 164px;
  height: 86px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}
</style>
