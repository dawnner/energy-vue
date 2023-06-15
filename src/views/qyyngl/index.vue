<template>
  <div style="height:100%;overflow-y: scroll;">
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
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @select="changeSidebar"
          :collapse-transition="false"
        >
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">各单位能耗报表填报</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">碳效管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">绿电管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title"> 公司碳资产管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div style="width:100%;height:100%" v-if="tabId == '1'">
          <map-cgui style="width:100%;height:65%"></map-cgui>
          <div style="width:100%;height:35%;display:flex">
            <div class="leftImg">
              <div class="leftTitle">各地市火电企业往年碳排历史数据</div>
              <localemissions
                style="width:100%;height:80%"
                ref="localEmissions"
              ></localemissions>
            </div>
            <div class="rightImg">
              <div class="leftTitle">碳排因子趋势分析</div>
              <fuelcomparison
                style="width:100%;height:100%"
                ref="comparison"
              ></fuelcomparison>
            </div>
          </div>
        </div>
        <energy-table v-if="tabId == '2'"></energy-table>
        <carbonManagement v-if="tabId == '3'"></carbonManagement>
        <greenManagement v-if="tabId == '4'"></greenManagement>
        <carbonAssets v-if="tabId == '5'"></carbonAssets>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGuanliHistogram, mapGuanFuel } from "../../api/mapGl/mapgl";
// import mapCgui from "./components/mapCgui.vue";
// import localemissions from "./components/localEmissions.vue";
// import fuelcomparison from "./components/fuelComparison.vue";
import energyTable from "./components/energyTable/index.vue";
import carbonManagement from "./components/carbonManagement/index.vue";
import greenManagement from "./components/GreenManagement/index.vue";
import carbonAssets from "./components/carbonAssets/index.vue";
export default {
  data() {
    return {
      isCollapse: false, //按钮控制菜单栏的展开
      tabId: "2"
    };
  },
  components: {
    // mapCgui,
    // localemissions,
    // fuelcomparison,
    energyTable,
    carbonManagement,
    greenManagement,
    carbonAssets
  },
  methods: {
    // async mapGuanliHistogram() {
    //   const { rows } = await mapGuanliHistogram();
    //   this.$refs.localEmissions.localEmissions(rows);
    //   console.log(rows);
    // },
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
    // 企业用能管理公司柱状图信息
    // this.mapGuanliHistogram();
    // 企业用能管理公司往年燃料对比图信息
    // this.mapGuanFuel();
  }
};
</script>

<style scoped>
.leftImg {
  width: 49%;
  height: 100%;
  background-color: #fff;
  margin-left: 1%;
  margin-top: 1%;
  border-radius: 10px;
  overflow: hidden;
}
.rightImg {
  width: 48%;
  height: 100%;
  background-color: #fff;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 1%;
  border-radius: 10px;
}

.leftTitle {
  border-left: 4px solid #158388;
  font-size: 20px;
  font-family: SimHei;
  font-weight: 400;
  margin-top: 22px;
  margin-bottom: -3px;
  margin-left: 22px;
  padding-left: 10px;
  color: #333333;
}
.el-main {
  padding: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  height: 100%;
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
aside /deep/ .el-menu {
  background: #fff;
}
aside /deep/ .el-menu-vertical-demo {
  height: 100%;
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
</style>
