<template>
  <div class="home">
    <div class="module-box" style="display: flex">
      <!-- 左 -->
      <div class="box-left" style="width: 25%">
        <div class="zbjk">
          <div class="onekk">
            <span
              style="width:4px;height:18px;background:#158388;margin-right:5px"
            ></span
            >指标监控
          </div>
          <div class="zbjk-bom">
            <huanxingtu style="width: 100%; height: 100%"></huanxingtu>
          </div>
        </div>
        <div class="jhdl">
          <barchart ref="barchart" style="width: 100%; height: 100%"></barchart>
        </div>
        <div class="dyjrqk">
          <dyjrqk ref="dyjrqk" style="width: 100%; height: 100%"></dyjrqk>
        </div>
      </div>
      <!-- 右 -->
      <div class="right-box" style="width: 75%; height: 100%">
        <!-- 右上部 -->
        <div
          class="right-box-top"
          style="width: 100%; height: 66%; display: flex"
        >
          <div class="right-box-top-left" style="width: 63.5%; height: 100%;">
            <el-button
              class="back"
              v-if="mapNameList.length > 1"
              @click="goback()"
              >返回</el-button
            >
            <div style="display: flex; z-index: 99; cursor: pointer">
              <div
                :class="index == mapNameList.length - 1 ? 'city1' : 'city2'"
                v-for="(item, index) in mapNameList"
                :key="index"
                @click="clickName(item, index)"
              >
                {{ item.name }}
              </div>
            </div>
            <map-plan
              ref="mapxz"
              @mapName="mapName"
              style="width: 100%; height: 97%"
            ></map-plan>
          </div>
          <div class="right-box-top-right" style="width: 36.5%; height: 100%">
            <div class="right-corner-one">
              <waterball
                ref="waterball"
                style="width: 100%; height: 100%"
              ></waterball>
            </div>

            <div class="right-corner-two">
              <doublechart
                ref="doublechart"
                style="width: 100%; height: 100%"
              ></doublechart>
            </div>
            <div class="right-corner-three">
              <jhdl ref="jhdl"></jhdl>
            </div>
          </div>
        </div>
        <!-- 右下部 -->
        <div class="right-box-bottom">
          <div class="bottom-corner1">
            <piechart1
              ref="piechart1"
              style="width: 100%; height: 100%"
            ></piechart1>
          </div>
          <div class="bottom-corner2">
            <piechart2 style="width: 100%; height: 100%"></piechart2>
          </div>
          <div class="bottom-corner3">
            <zcfw style="width: 100%; height: 100%"></zcfw>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsdyData, dyzjData } from "../components/qingqiu/gsdyjk";
import { mapTypeApi } from "@/api/mapGl/mapgl.js";
import {
  fdqsData,
  fdlData,
  dyqyData,
  dljhData
} from "../components/qingqiu/fdqs";
import Imgss from "../../../assets/images/shujukuai.png";
import huanxingtu from "../components/pages/huanxingtu.vue";
import Jhdl from "../components/pages/jhdl.vue";
import dyjrqk from "../components/pages/dyjrqk.vue";
import mapPlan from "../components/pages/mapPlan.vue";
import waterball from "../components/pages/shuiqiutu.vue";
import doublechart from "../components/pages/doublechart.vue";
import barchart from "../components/pages/barchart.vue";
import piechart1 from "../components/pages/piechart1.vue";
import piechart2 from "../components/pages/piechart2.vue";
import zcfw from "../components/pages/zcfw.vue";
export default {
  name: "Index",
  components: {
    Jhdl,
    dyjrqk,
    mapPlan,
    huanxingtu,
    waterball,
    doublechart,
    barchart,
    piechart1,
    piechart2,
    zcfw
  },
  data() {
    return {
      mapNameList: [
        {
          name: "山东省"
        }
      ],
      value1: "",
      maplist: []
    };
  },
  created() {
    this.gsdyData();
    this.dyzjData();
    this.fdqsData();
    this.fdlData();
    this.dyqyData();
    this.dljhData();
  },
  mounted() {
    this.getmapType();
  },
  methods: {
    //首页地图信息加载
    async getmapType() {
      const { data } = await mapTypeApi();
      // console.log("地图ddd", data);
      this.maplist = data;
      this.$refs.mapxz.getmaplist(this.maplist);
      console.log("地图", this.maplist);
      this.mapName();
    },
    async gsdyData() {
      const { data } = await gsdyData();
      this.$refs.dyjrqk.dyjrqk(data);
    },
    async dljhData() {
      const { data } = await dljhData();
      // console.log(data);
      this.$refs.jhdl.analysisHistogram1(data);
    },
    async dyqyData() {
      const { rows } = await dyqyData();
      // console.log(rows, "shuju");
      this.$refs.barchart.barchart(rows);
    },
    async fdlData() {
      let date = new Date();
      let newData =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      console.log(newData);
      const { data } = await fdlData({ extDateTime: newData });
      // console.log(rows, "数据");
      this.$refs.waterball.waterball(data);
    },
    async dyzjData() {
      const { data } = await dyzjData();
      this.$refs.piechart1.piechart1(data);
    },
    async fdqsData() {
      const { data } = await fdqsData();
      // console.log(data, "shuju");
      this.$refs.doublechart.doublechart(data);
    },
    goback() {
      // this.$nextTick(() => {
      this.$refs.mapxz.change();
      console.log(
        "点击返回",
        this.mapNameList[this.mapNameList.length - 2].name
      );
      this.$refs.mapxz.initChart(
        this.mapNameList[this.mapNameList.length - 2].name,
        this.mapNameList
      );
      // });
      var index = this.mapNameList.length - 2;
      this.mapNameList.splice(index + 1, this.mapNameList.length - 1 - index);
      console.log("mapNameList-1", this.mapNameList);
    },
    clickName(e, index) {
      this.$nextTick(() => {
        this.$refs.mapxz.change();
        this.$refs.mapxz.initChart(e.name, this.mapNameList, this.maplist);
      });
      this.mapNameList.splice(index + 1, this.mapNameList.length - 1 - index);
    },
    mapName(e, mapname) {
      // console.log("index页面接收传值", mapname);
      var name = "";
      if (e) {
        name = e;
        if (mapname.features.length == 1) {
          this.$message({
            message: "没有更多数据！",
            type: "warning"
          });
        } else {
          this.mapNameList.push({ name: e });
        }
      } else {
        name = "山东省";
      }

      this.mapname = mapname;
      this.$nextTick(() => {
        this.$refs.mapxz.initChart(name, this.mapNameList, this.maplist);
      });
    }
  }
};
</script>

<style scoped>
.el-input--medium .el-input__inner {
  background: transparent !important;
  width: 5.2rem;
  border-color: #3adee1;
  border-radius: 18px;
  color: #fff !important;
  font-size: 0.75rem;
  text-align: center;
  height: 1.6rem;
}

.el-input__suffix {
  top: 5px;
  width: 1.4rem;
}

.el-select-dropdown__list {
  background: red !important;
}
</style>
<style scoped lang="scss">
.reduction_box {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.weizhi {
  color: #ffffff;
  width: 25%;
  position: absolute;
  left: 10%;
  margin-left: 130px;
  font-size: 0.8rem;
  color: #efefef;
}

.reduction_right {
  width: 100%;
  display: flex;
  margin: 8px 0;
  justify-content: center;
  background-image: linear-gradient(to right, transparent, #0b4395);
}

.reduction_value {
  width: 50%;
  // height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1rem;
  font-weight: 580;
  padding-right: 10px;
  /* font-weight: 600; */
}

.reduction_title {
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;
  color: #b7dbf0;
  padding-right: 1rem;
}

.reduction_value1 {
  color: #90ba25;
}

.reduction_value2 {
  color: #05b693;
}

.reduction_value3 {
  color: #04a6cb;
}

.reduction_top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 83%;
}

.top_time {
  color: #3adee1;
  font-size: 0.9rem;
  padding: 0 0 20px 20px;
  width: 30%;
  height: 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-editor-container {
  width: 100%;
  height: 100%;
  padding: 5px 20px 0 20px;
}

.box-contain {
  width: 100%;
  height: 94%;
  color: #44ffff;
  padding: 5px 0px 0 0px;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  align-content: space-around;
  justify-content: space-around;
}

.contain_top {
  width: 100%;
  height: 63%;
  display: flex;

  .box_bg1 {
    height: 100%;
    background-image: url("../../../assets/images/z_upk.png");
    background-size: 100% 100%;
  }
}

.contain_bottom {
  width: 100%;
  height: 37%;
  display: flex;
  padding-top: 20px;

  .box_bg2 {
    height: 100%;
    background-image: url("../../../assets/images/z_downk.png");
    background-size: 100% 100%;
  }

  .box_bg3 {
    height: 100%;
    margin: 0 15px;
    background-image: url("../../../assets/images/z_mk.png");
    background-size: 100% 100%;
  }
}

.growth_top {
  width: 95%;
  margin: auto;
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 0.9rem;

  span {
    width: 20%;
  }
}

.growth_topbtn {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.9rem;
  padding-right: 20px;
}

.growthbtn {
  width: 60px;
  height: 22px;
  text-align: center;
  font-size: 0.75rem;
  color: #b6dbf0;
  margin: 0 5px;
  cursor: pointer;
  line-height: 22px;
  background-color: #055fa2;
  border-radius: 3px;
  transform: skew(-30deg);
}

.growthbtn:hover {
  color: #44ffff;
}

.growthfocus {
  width: 60px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  font-size: 0.75rem;
  color: #333;
  margin: 0 5px;
  cursor: pointer;
  background-color: #44ffff;
  border-radius: 3px;
  transform: skew(-30deg);
}

.whole_box {
  width: 100%;
  height: 50%;
  display: flex;
  flex-grow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;

  .whole_value {
    color: #00edff;
    font-size: 1.6rem;
    font-weight: 500;

    span {
      color: #00edff;
      font-size: 0.9rem;
      font-weight: 400;
      padding-left: 2px;
    }
  }

  .whole_value1 {
    color: #ffd725;
    font-size: 1.6rem;
    font-weight: 500;

    span {
      color: #ffd725;
      font-size: 0.9rem;
      font-weight: 400;
      padding-left: 2px;
    }
  }

  .whole_value2 {
    color: #a552f5;
    font-size: 1.6rem;
    font-weight: 500;

    span {
      color: #a552f5;
      font-size: 0.9rem;
      font-weight: 400;
      padding-left: 2px;
    }
  }

  .whole_value3 {
    color: #0dde79;
    font-size: 1.55rem;
    font-weight: 500;

    span {
      color: #0dde79;
      font-size: 0.9rem;
      font-weight: 400;
      padding-left: 4px;
    }
  }
}

.whole_content {
  width: 46%;
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
}

.whole_bottom {
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.96rem;
  background-color: #021959;
  border: 1px solid #04468d;
  border-radius: 5px;
  padding: 6px 0;
  margin-top: 6px;
}

.add_title {
  font-size: 0.7rem;
}

.whole_box span {
  color: #b6dbf0;
  font-size: 0.9rem;
  /* font-weight: 580; */
}

.left_title {
  width: 50%;
  color: #d49824;
  text-align: center;
  line-height: 20px;
  border-right: 1.5px dashed #032a7b;
}

.right_title {
  width: 50%;
  color: #0dde79;
  text-align: center;
  line-height: 20px;
}

.map_box {
  color: #b6dbf0;
  font-size: 0.7rem;
  width: 10rem;
  height: 39%;
  background-color: rgba(8, 31, 101, 0.7);
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  right: 32%;
  padding: 15px 20px;

  .map_color {
    display: flex;
    align-items: center;
    height: 21%;

    img {
      margin-right: 30px;
    }
  }
}

.cascader {
  position: absolute;
  z-index: 9999;
  left: 32%;
  top: -6px;
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
<style lang="scss">
.map-cascader {
  color: #fff;
  border: 1px solid #157cce !important;
  .el-cascader-panel {
    color: #fff !important;
    .el-cascader-menu {
      width: 100% !important;
      color: #fff !important;
      background-color: #0648bb !important;
      .el-cascader-menu__wrap {
        .el-cascader-menu__list {
          .el-cascader-node:not(.is-disabled):focus,
          .el-cascader-node:not(.is-disabled):hover {
            background: #006dc3 !important;
          }
        }
      }
    }
  }
}
</style>
<style scoped lang="scss">
.box-conter {
  height: 100%;
}
.box-right {
  height: 100%;
}
.back {
  position: absolute;
  top: 2.3rem;
  // right: 0.5rem;
  z-index: 99;
  cursor: pointer;
  // float: right;
  color: black;
  width: 67px;
  height: 35px;
  text-align: center;
  // background: url("~@/assets/images/appraise/btnbg.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 8px;
  border: none;
}
.city1 {
  color: #00cbde;
}
.city2 {
  color: #ccc;
}
.home {
  height: 100%;
  margin: 11px 10px 0 10px;
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 13px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
  .module-box {
    height: 100%;
    width: 100%;
    .box-left {
      height: 100%;
    }
    .onekk {
      display: flex;
      align-items: center;
      font-size: 20px;
      // height: 60px;
      height: 16%;
      padding: 18px 0;
      border-bottom: 1px solid #ccc;
      // margin-left: 20px;
      color: #304159;
      font-weight: 700;
      // background: url("../../../assets/images/biaotixia1.png") no-repeat bottom;
    }
    .zbjk {
      width: 100%;
      height: 35%;
      padding: 0 20px;
      margin-bottom: 20px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0px 0px 13px 0px rgba(42, 92, 254, 0.22);
      .zbjk-bom {
        height: 85%;
        // display: flex;
        // flex-direction: column;
        padding: 10px 10px;
      }
    }
    .jhdl {
      // display: flex;
      // flex-direction: column;
      position: relative;
      width: 100%;
      height: 29%;
      // padding: 0 20px;
      margin-bottom: 20px;
      background: #fff;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0px 0px 13px 0px rgba(42, 92, 254, 0.22);
    }
    .dyjrqk {
      height: 29%;
      width: 100%;
      background: #fff;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0px 0px 13px 0px rgba(42, 92, 254, 0.22);
    }
    // .right-box-top-right {
    //   position: relative;
    // }
    .right-corner-one {
      width: 100%;
      height: 25%;
      margin-top: 3px;
      margin-right: 3px;
      margin-bottom: 15px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 10px;
      box-shadow: 0px 0px 6px 0px rgba(42, 92, 254, 0.22);
    }
    .right-corner-two {
      width: 100%;
      height: 40%;
      margin-bottom: 15px;
      margin-right: 3px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 10px;
      box-shadow: 0px 0px 6px 0px rgba(42, 92, 254, 0.22);
    }
    .right-corner-three {
      width: 100%;
      height: 30%;
      margin-right: 3px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 10px;
      box-shadow: 0px 0px 6px 0px rgba(42, 92, 254, 0.22);
    }
    .right-box-bottom {
      width: 100%;
      height: 35%;
      display: flex;
      padding-top: 20px;
      padding-left: 5px;
    }
    .bottom-corner1 {
      width: 31%;
      height: 88%;
      background: #fff;
      border-radius: 10px;
      margin-right: 10px;
      box-shadow: 0px 0px 13px 0px rgba(42, 92, 254, 0.22);
    }
    .bottom-corner2 {
      width: 31%;
      height: 88%;
      background: #fff;
      border-radius: 10px;
      margin-right: 10px;
      box-shadow: 0px 0px 13px 0px rgba(42, 92, 254, 0.22);
    }
    .bottom-corner3 {
      width: 36.5%;
      height: 88%;
      background: #fff;
      border-radius: 10px;
      margin-right: 2px;
      box-shadow: 0px 0px 13px 0px rgba(42, 92, 254, 0.22);
    }
  }
}
</style>
