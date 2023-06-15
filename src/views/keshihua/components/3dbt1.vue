<template>
  <div
    ref="chartPanel"
    id="chart-panel"
    style="width: 100%; height: 230px"
  ></div>
</template>

<script>
import { getPie3D } from "./get3D.js";
import * as echarts from "echarts";
import "echarts-gl";
export default {
  data() {
    return {
      optionData: [
        {
          name: "医药",
          value: 30,
          itemStyle: {
            opacity: 0.2,
            color: "#D6476C"
          }
        },
        {
          name: "生物",
          value: 20,
          itemStyle: {
            opacity: 0.2,
            color: "#017DC1"
          }
        },
        {
          name: "房地产",
          value: 20,
          itemStyle: {
            opacity: 0.2,
            color: "#804BC6"
          }
        },
        {
          name: "互联网",
          value: 10,
          itemStyle: {
            opacity: 0.2,
            color: "#44BA9C"
          }
        },
        {
          name: "软件",
          value: 12,
          itemStyle: {
            opacity: 0.2,
            color: "#3F14C9"
          }
        },
        {
          name: "林地",
          value: 8,
          itemStyle: {
            opacity: 0.2,
            color: "#22c4ff"
          }
        }
      ]
    };
  },
  methods: {
    draw3d() {
      // 基于准备好的dom，初始化echarts实例
      let chartPanel = echarts.init(document.getElementById("chart-panel"));
      for (let i = 0; i < this.optionData.length; i++) {
        delete this.optionData[i].itemStyle.opacity;
      }
      // 传入数据生成 option
      let series = getPie3D(this.optionData, 0);
      let option = {
        legend: {
          bottom: "0%",
          left: "center"
        },
        tooltip: {
          formatter: params => {
            // console.log(params)
            if (
              params.seriesName !== "mouseoutSeries" &&
              params.seriesName !== "pie2d"
            ) {
              return `<div style="padding:0 10px">${params.seriesName}：${(
                option.series[params.seriesIndex].pieData.proportion * 100
              ).toFixed(2)}%</div>`;
            }
          }
        },
        xAxis3D: {
          min: -1,
          max: 1
        },
        yAxis3D: {
          min: -1,
          max: 1
        },
        zAxis3D: {
          min: -1,
          max: 1
        },
        grid3D: {
          show: false, //是否显示三维笛卡尔坐标系。
          boxHeight: 20, //三维笛卡尔坐标系在三维场景中的高度
          top: "-12.5%",
          // bottom: "80%",
          // environment: "#021041", //背景
          viewControl: {
            //用于鼠标的旋转，缩放等视角控制
            alpha: 20, //角度
            distance: 250, //调整视角到主体的距离，类似调整zoom 重要
            rotateSensitivity: 0, //设置为0无法旋转
            zoomSensitivity: 0, //设置为0无法缩放
            panSensitivity: 0, //设置为0无法平移
            autoRotate: false //自动旋转
          }
        },
        series: series
      };
      chartPanel.setOption(option);
      //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
      option.series.push({
        name: "pie2d",
        type: "pie",
        label: {
          color: "#000",
          fontSize: 16,
          opacity: 1,
          //  position: 'inner',
          // formatter: "{b}\n\n",
          // padding: [0, -40],
          formatter: item => {
            //  console.log(item)
            return item.data.name + ":" + item.data.value + "家" + "";
          }
        },
        labelLine: {
          length: 20,
          length2: 20,
          lineStyle: {
            color: "#ffffff",
            width: 1.5
          }
        },
        startAngle: 321, //起始角度，支持范围[0, 360]。 //重要
        clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ["25%", "50%"],
        center: ["50%", "50%"],
        data: this.optionData,
        itemStyle: {
          opacity: 0
        },
        top: "-20%",
        avoidLabelOverlap: true //防止标签重叠
      });
      chartPanel.setOption(option);
    }
  },
  mounted() {
    this.draw3d();
    this.$nextTick(() => {
      let parent = document.getElementById("chart-panel"); // 获取父元素
      let canvas = parent.getElementsByTagName("canvas"); // 获取父元素下面的所有canvas元素
      console.log(canvas);
      canvas[1].style.transform = "rotateX(30deg)";
    });
  }
};
</script>

<style></style>
