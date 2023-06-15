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
          default-active="4"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @select="changeSidebar"
          :collapse-transition="false"
        >
          <el-submenu index="1">
            <template slot="title">
              <!-- <i class="el-icon-location"></i> -->
              <img src="../../assets/images/nh.png" />
              <span slot="title" class="textFlag">电力保供能力</span>
            </template>
            <el-menu-item index="1-1">煤电企业库存数据分析</el-menu-item>
            <el-menu-item index="1-2">电力供应保障能力 </el-menu-item>
          </el-submenu>

          <el-menu-item index="3">
            <img src="../../assets/images/ny.png" />
            <span slot="title" class="textFlag">煤电燃机检测分析</span>
          </el-menu-item>
          <el-menu-item index="4">
            <img src="../../assets/images/gl.png" />
            <span slot="title" class="textFlag">常规电源项目管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="padding:10px">
        <web-map
          v-if="tabId == '-1'"
          style="width: 100%;height: 100%;"
        ></web-map>
        <keshihuaInventory v-if="tabId == '1-1'"></keshihuaInventory>
        <oneEnergy v-if="tabId == '1-2'"></oneEnergy>
        <coalElectricity v-if="tabId == '3'"></coalElectricity>
        <powerMent v-if="tabId == '4'"></powerMent>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import webMap from "../../views/WebMap/mapCgui.vue";
// import DistanceTool from "bmaplib.distancetool";
import coalElectricity from "./components/CoalElectricity.vue";
import keshihuaInventory from "../../views/keshihua/components/keshihuaInventory.vue";
import oneEnergy from "../../views/keshihua/components/oneEnergy.vue";
import powerMent from "../../views/keshihua/components/PowerMent.vue";
export default {
  data() {
    return {
      isCollapse: false, //按钮控制菜单栏的展开
      tabId: "4"
    };
  },
  methods: {
    changeSidebar(path) {
      console.log(path);
      this.tabId = path;
    }
  },
  components: {
    webMap,
    coalElectricity,
    keshihuaInventory,
    oneEnergy,
    powerMent
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
aside /deep/ .el-submenu__title i {
  color: #141414;
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
