<template>
  <div style="height:100%">
    <el-container style="position: relative;">
      <button
        class="btnbtn"
        :style="[isCollapse ? { left: '62px' } : { left: '228px' }]"
        @click="isCollapse = !isCollapse"
      >
        {{ isCollapse ? ">" : "<" }}
      </button>
      <el-aside :width="isCollapse ? '64px' : '230px'">
        <el-menu
          default-active="3"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @select="changeSidebar"
          :collapse-transition="false"
        >
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">重点行业碳排放核对</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="padding:10px">
        <div style="width:100%;height:100%">
          <div class="mapTop">
            <div class="topData">
              <div class="topDataContent">
                <div class="contentTitle">
                  煤电机组CO2排放总量:
                  <span style="color:#49C2BB;font-size: 30px;margin-left: 10px;"
                    >1126633</span
                  ><span
                    style="color: #49C2BB;font-size: 15px;font-weight: normal;margin-top: 18px;margin-left: 5px;"
                  >
                    吨CO<sapn style="font-size: 12px;">2</sapn></span
                  >
                </div>
              </div>
              <div class="topDataContent">
                <div class="contentTitle">
                  煤电机组CO2强度:
                  <span style="color:#49C2BB;font-size: 30px;margin-left: 10px;"
                    >16266</span
                  ><span
                    style="color: #49C2BB;font-size: 15px;font-weight: normal;margin-top: 18px;margin-left: 5px;"
                  >
                    吨CO<sapn style="font-size: 12px;">2</sapn>/MW.H</span
                  >
                </div>
              </div>
              <div class="topDataContent">
                <div class="contentTitle">
                  纳入监管企业排放总量:
                  <span style="color:#49C2BB;font-size: 30px;margin-left: 10px;"
                    >1566633</span
                  ><span
                    style="color: #49C2BB;font-size: 15px;font-weight: normal;margin-top: 18px;margin-left: 5px;"
                  >
                    吨CO<sapn style="font-size: 12px;">2</sapn></span
                  >
                </div>
              </div>
              <div class="topDataContent">
                <div class="contentTitle">
                  纳入监管企业数量:
                  <span style="color:#49C2BB;font-size: 30px;margin-left: 10px;"
                    >56231</span
                  ><span
                    style="color: #49C2BB;font-size: 15px;font-weight: normal;margin-top: 18px;margin-left: 5px;"
                  >
                    个</span
                  >
                </div>
              </div>
            </div>
            <map-cgui style="width:100%;height:80%"></map-cgui>
          </div>
          <div
            style="width:100%;height:40%;display:flex;justify-content: space-between;padding:10px 0"
          >
            <localemissions
              style="width:49%;height:100%;background:#fff"
              ref="localEmissions"
            ></localemissions>
            <fuelcomparison
              style="width:49%;height:100%;background:#fff"
              ref="comparison"
            ></fuelcomparison>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { mapGuanliHistogram, mapGuanFuel } from "../../api/mapGl/mapgl";
import mapCgui from "../qyyngl/components/mapCgui.vue";
import localemissions from "../qyyngl/components/localEmissions.vue";
import fuelcomparison from "../qyyngl/components/fuelComparison.vue";
export default {
  data() {
    return {
      isCollapse: false, //按钮控制菜单栏的展开
      tabId: "3"
    };
  },
  components: {
    mapCgui,
    localemissions,
    fuelcomparison
  },
  methods: {
    async mapGuanliHistogram() {
      const { rows } = await mapGuanliHistogram();
      this.$refs.localEmissions.localEmissions(rows);
      console.log(rows);
    },
    changeSidebar(path) {
      console.log(path);
      this.tabId = path;
    }
    // async mapGuanFuel() {
    //   const { rows } = await mapGuanFuel();
    //   this.$refs.comparison.fuelcomparison(rows);
    //   console.log(rows);
    // }
  },
  created() {
    // 企业用能管理公司柱状图信息;
    this.mapGuanliHistogram();
    // 企业用能管理公司往年燃料对比图信息;
    // this.mapGuanFuel();
  }
};
</script>

<style scoped>
.mapTop {
  width: 100%;
  height: 70%;
  background-color: #eefffa;
}
.topData {
  width: 100%;
  height: 20%;
  /* background-color: aquamarine; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.topDataContent {
  width: 24%;
  height: 90%;
  background-color: #fff;
  border-radius: 10px;
}
.contentTitle {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
}
.titleImg {
  width: 100%;
  height: 20%;
  background-color: aqua;
}
.el-main {
  padding: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 100%;
}
label /deep/ .el-radio-button__inner {
  padding: 6px 11px;
}
section /deep/ .el-aside {
  padding: 0;
  background: none;
}
.el-container {
  height: 100%;
}
aside /deep/ .el-menu-vertical-demo {
  height: 100%;
}
section /deep/ .el-button:focus {
  outline: none;
  box-shadow: none;
  color: #000;
}

.btnbtn {
  position: absolute;
  top: 45%;
  left: 228px;
  width: 20px;
  height: 60px;
  z-index: 15;
  background: #fff;
  border: 1px solid #ccc;
  border-left: none;
}
.textFlag {
  padding-left: 11px;
}
</style>
