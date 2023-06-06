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
          default-active="1"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @select="changeSidebar"
          :collapse-transition="false"
        >
          <el-menu-item index="1">
            <i class="el-icon-document"></i>
            <span slot="title">全省各单位数据展示</span>
          </el-menu-item>
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
          <map-cgui style="width:100%;height:70%"></map-cgui>
          <div style="width:100%;height:30%;display:flex">
            <localemissions
              style="width:50%;height:100%"
              ref="localEmissions"
            ></localemissions>
            <fuelcomparison
              style="width:50%;height:100%"
              ref="comparison"
            ></fuelcomparison>
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
import mapCgui from "./components/mapCgui.vue";
import localemissions from "./components/localEmissions.vue";
import fuelcomparison from "./components/fuelComparison.vue";
import energyTable from "./components/energyTable/index.vue";
import carbonManagement from "./components/carbonManagement/index.vue";
import greenManagement from "./components/GreenManagement/index.vue";
import carbonAssets from "./components/carbonAssets/index.vue";
export default {
  data() {
    return {
      isCollapse: true, //按钮控制菜单栏的展开
      tabId: "1"
    };
  },
  components: {
    mapCgui,
    localemissions,
    fuelcomparison,
    energyTable,
    carbonManagement,
    greenManagement,
    carbonAssets
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
    // 企业用能管理公司柱状图信息
    this.mapGuanliHistogram();
    // 企业用能管理公司往年燃料对比图信息
    // this.mapGuanFuel();
  }
};
</script>

<style scoped>
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
  background: #ecf6ec;
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
  background: #ecf6ec;
  border: 1px solid #ccc;
  border-left: none;
}
</style>
