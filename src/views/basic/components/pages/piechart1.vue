<template>
  <div style="height: 100%; position: relative">
    <img
      style="position: absolute; top: 50px; left: 5%; z-index: 99; width: 80%"
      src="../../../../assets/images/biaotixia2.png"
      alt=""
    />
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
      var legends = [
        "煤电",
        "燃机",
        "水电",
        "光伏",
        "风电",
        "核电",
        "储能",
        "抽水蓄能",
        "生物质",
        "其他"
      ];
      var colors = [
        "#4ad2be",
        "#5fca94",
        "#86e8b5",
        "#5e75dd",
        "#0bb5f3",
        "#fd9232",
        "#f7a667",
        "#f98ba6",
        "#e070fa",
        "#a137e2"
      ].reverse();
      option = {
        title: {
          text: "电源装机占比",
          left: 19,
          top: 18,
          // bottom: 18,
          textStyle: {
            fontSize: 21
          }
        },
        color: colors,
        legend: {
          orient: "vertical",
          top: "25%",
          right: "5%",
          itemGap: 4,
          // itemWidth: 16,
          // itemHeight: 16,
          textStyle: {
            color: "#000",
            fontSize: 12
          },
          data: legends
        },
        toolbox: {
          show: false
        },

        tooltip: {
          trigger: "item",
          formatter: "{b}: {d}%",
          backgroundColor: "rgba(47,37,198,0.75)",
          borderColor: "#2880FF",
          borderWidth: 1,
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: ["30%", "70%"],
            center: ["35%", "60%"],
            roseType: "area",
            label: {
              show: true,
              position: "inner", //显示在扇形上
              formatter: "{d}%", //显示内容
              textStyle: {
                color: "white", // 改变标示文字的颜色
                fontSize: 14 //文字大小
              }
            },
            labelLine: { show: false },
            selectedOffset: 30,
            selectedMode: true,
            itemStyle: {
              borderRadius: 0
            },
            data: [
              {
                name: "煤电",
                value: 20
              },
              {
                name: "燃机",
                value: 18
              },
              {
                name: "水电",
                value: 17
              },
              {
                name: "光伏",
                value: 17
              },
              {
                name: "风电",
                value: 16
              },
              {
                name: "核电",
                value: 15
              },
              {
                name: "储能",
                value: 14
              },
              {
                name: "抽水蓄能",
                value: 13
              },
              {
                name: "生物质",
                value: 11
              },
              {
                name: "其他",
                value: 10
              }
            ]
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
