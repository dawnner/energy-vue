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
  data() {
    return {
      arr1: []
    };
  },
  methods: {
    piechart1() {
      var chartDom = document.getElementById("piechart1");
      var myChart = echarts.init(chartDom);
      var option;
      let arr = JSON.parse(localStorage.getItem("listData"));
      // console.log(arr, "88");
      // arr.forEach(item => {
      //   console.log(item);
      //   this.arr1.push(item.electric_power_type)
      // });
      // var m2R2Data = [
      //   {
      //     value: arr[0].sum,
      //     name: arr[0].electric_power_type,
      //     itemStyle: { color: "#4ad2be" }
      //   },
      //   {
      //     value: 150,
      //     name: "燃机",
      //     itemStyle: { color: "#5fca94" }
      //   },
      //   {
      //     value: 10,
      //     legendname: "水电",
      //     name: "水电",
      //     itemStyle: { color: "#86e8b5" }
      //   },
      //   {
      //     value: 45,
      //     legendname: "光伏",
      //     name: "光伏",
      //     itemStyle: { color: "#5e75dd" }
      //   },
      //   {
      //     value: 150,
      //     legendname: "风电",
      //     name: "风电",
      //     itemStyle: { color: "#0bb5f3" }
      //   },
      //   {
      //     value: 150,
      //     legendname: "核电",
      //     name: "核电",
      //     itemStyle: { color: "#fd9232" }
      //   },
      //   {
      //     value: 150,
      //     legendname: "储能",
      //     name: "储能",
      //     itemStyle: { color: "#f7a667" }
      //   },
      //   {
      //     value: 150,
      //     legendname: "抽水蓄能",
      //     name: "抽水蓄能",
      //     itemStyle: { color: "#f98ba6" }
      //   },
      //   {
      //     value: 150,
      //     legendname: "生物质",
      //     name: "生物质",
      //     itemStyle: { color: "#e070fa" }
      //   },
      //   {
      //     value: 150,
      //     legendname: "其他",
      //     name: "其他",
      //     itemStyle: { color: "#a137e2" }
      //   }
      // ];

      var SumData = 585;
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
          left: "65%",
          align: "left",
          top: "31.5%",
          textStyle: {
            color: "#8C8C8C"
          },
          height: 140
        },
        color: [
          "#F9CD33",
          "#F86846",
          "#5ED8A9",
          "#83E7B5",
          "#78C446",
          "#605AD8",
          "#FFA304"
        ],
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
            data: (function() {
              // console.log(arr, "data");
              let arr1 = arr.map(item => {
                // console.log(item);
                return {
                  value: item.sum,
                  name: item.electric_power_type,
                  legendname: item.electric_power_type
                };
              });
              // console.log(arr1, "888");
              return arr1;
            })()
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
