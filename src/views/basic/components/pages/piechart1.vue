<template>
  <div style="height: 100%; position: relative">
    <span
      style="position: absolute; top: 20%; left: 5%;width:89%;height:1px;background:#ccc; z-index: 99"
    ></span>
    <div id="piechart1" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    piechart1() {
      var chartDom = document.getElementById("piechart1");
      var myChart = echarts.init(chartDom);
      var option;
      var m2R2Data = [
        {
          value: 35959.52,
          legendname: "风电",
          name: "风电",
          itemStyle: { color: "#4ad2be" }
        },
        {
          value: 4675.61,
          legendname: "生物质发电",
          name: "生物质发电",
          itemStyle: { color: "#5fca94" }
        },
        {
          value: 30090.78,
          legendname: "太阳能发电",
          name: "太阳能发电",
          itemStyle: { color: "#86e8b5" }
        },
        {
          value: 417.0,
          legendname: "其他",
          name: "其他",
          itemStyle: { color: "#5e75dd" }
        },
        {
          value: 5637.65,
          legendname: "储能",
          name: "储能",
          itemStyle: { color: "#0bb5f3" }
        },
        {
          value: 87886.65,
          legendname: "火电",
          name: "火电",
          itemStyle: { color: "#fd9232" }
        },
        {
          value: 1880.47,
          legendname: "水电",
          name: "水电",
          itemStyle: { color: "#a137e2" }
        },
        {
          value: 450.0,
          legendname: "核电",
          name: "核电",
          itemStyle: { color: "#f98ba6" }
        }
      ];

      // var SumData = 585;
      option = {
        title: [
          {
            text: "电源装机量占比",
            left: 19,
            top: 18,
            // bottom: 18,
            textStyle: {
              fontSize: 20
            }
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: function(parms) {
            // var str =  parms.seriesName+"</br>"+
            var str =
              parms.marker +
              "" +
              parms.data.legendname +
              "</br>" +
              "数量：" +
              parms.data.value +
              " 个</br>" +
              "占比：" +
              parms.percent +
              "%";
            return str;
          }
        },
        legend: {
          orient: "vertical",
          left: "70%",
          align: "left",
          top: "25%",
          textStyle: {
            color: "#8C8C8C"
          },
          height: 190
        },
        series: [
          {
            name: "标题",
            type: "pie",
            center: ["35%", "60%"],
            radius: ["60%", "28%"],
            clockwise: false, //饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "outter",
                formatter: function(parms) {
                  return parms.percent + "%";
                }
              }
            },
            labelLine: {
              show: false,
              normal: {
                length: 50,
                length2: 15,
                smooth: false
              }
            },
            data: m2R2Data
          }
        ]
      };
      option && myChart.setOption(option);
      let listener = function() {
        myChart.resize();
      };
      window.addEventListener("resize", listener);
    }
  },
  mounted() {
    this.piechart1();
  }
};
</script>

<style>
#piechart1 {
  background-size: 100% 100%;
}
</style>
