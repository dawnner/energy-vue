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
          <map-cgui style="width:100%;height:70%"></map-cgui>
          <div
            style="width:100%;height:30%;display:flex;justify-content: space-between;padding:10px 0"
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
