<template>
  <div style="height: 100%; width:100%">
    <div
      id="fuelcomparison"
      style="width: 100%; height: 100%"
      ref="comparison"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.fuelcomparison();
  },
  methods: {
    fuelcomparison(res) {
      console.log(res);
      // const name1 = []; //类型
      // const age1 = []; //数据1
      // const age2 = []; //数据2
      // const age3 = []; //数据2
      // res.forEach(obj => {
      //   name1.push(obj.fuelType);
      //   age1.push(obj.twentyEmissions); //20年
      //   age2.push(obj.twentyOneEmissions); //21年
      //   age3.push(obj.twentyTwoEmissions); //22年
      // });
      // let num20 = age1.reduce((old, now) => {
      //   return old + now;
      // }, 0);
      const arr1 = [10, 10, 10];
      const arr2 = [20, 20, 80];
      // const age1 = [500000, 10000];
      // const age2 = [600000, 15000];
      // const age3 = [800000, 20000];
      let num1 = [];
      let num2 = [];
      const ree1 = ((arr1[0] / (arr1[0] + arr2[0])) * 100).toFixed(2);
      const ree2 = ((arr2[0] / (arr1[0] + arr2[0])) * 100).toFixed(2);
      const ree3 = ((arr1[1] / (arr1[1] + arr2[1])) * 100).toFixed(2);
      const ree4 = ((arr2[1] / (arr1[1] + arr2[1])) * 100).toFixed(2);
      const ree5 = ((arr1[2] / (arr1[2] + arr2[2])) * 100).toFixed(2);
      const ree6 = ((arr2[2] / (arr1[2] + arr2[2])) * 100).toFixed(2);
      num1 = [ree1, ree3, ree5];
      num2 = [ree2, ree4, ree6];
      // console.log(num20);
      var chartDom = document.getElementById("fuelcomparison");
      var myChart = echarts.init(chartDom),
        option = {
          backgroundColor: "#fff",
          title: {
            text: "往年燃料对比图",
            left: "center"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(e) {
              console.log(e);

              return e[0].data + e[1].data;
            }
          },
          toolbox: {
            show: false,
            feature: {
              magicType: { show: true, type: ["line", "bar"] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          legend: {
            bottom: "1%",
            data: ["掺煤", "燃煤"]
          },
          grid: {
            top: "15%",
            left: "3%",
            right: "4%",
            bottom: "15%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: [
                "2020年机组排放(tCO2)",
                "2021年机组排放(tCO2)",
                "2022年机组排放(tCO2)"
              ],
              axisLabel: {
                interval: 0
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              // max: 700, // 设置最大值是多少
              max: 100, // 设置最大值是多少
              splitNumber: 10, // 设置分几段显示
              axisLabel: {
                show: true,
                interval: "auto",
                formatter: "{value} %" // 给每个数值添加%
              },
              show: true
            }
          ],
          series: [
            {
              name: "掺煤",
              type: "bar",
              barWidth: "40%",
              itemStyle: {
                normal: {
                  color: "#589cd6"
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(e) {
                    return arr2[e.dataIndex];
                  },
                  position: "inside"
                }
              },
              stack: "信息",
              // data: [age1[1], age2[1], age3[1]]
              data: num2
            },
            {
              name: "燃煤",
              type: "bar",
              itemStyle: {
                normal: {
                  color: "#f67c2a"
                }
              },
              label: {
                normal: {
                  show: true,
                  position: "inside",
                  formatter: function(e) {
                    return arr1[e.dataIndex];
                  },
                  textStyle: {
                    color: "#000"
                  }
                }
              },
              stack: "信息",
              // data: [age1[0], age2[0], age3[0]]
              data: num1
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
#fuelcomparison {
  background-size: 100% 100%;
}
</style>
