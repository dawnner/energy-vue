<template>
  <div style="height:100%">
    <el-container style="position: relative;">
      <el-button
        style="position: absolute;top:45%;left:228px;width:20px;height:60px;z-index:15"
        :style="[
          isCollapse ? { left: '62px', top: '90px' } : { left: '228px' }
        ]"
        @click="isCollapse = !isCollapse"
        >{{ isCollapse ? ">" : "<" }}</el-button
      >
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
            <span slot="title">煤电燃机检测分析</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">常规电源项目管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <web-map
          v-if="tabId == '1'"
          style="width: 100%;height: 100%;"
        ></web-map>
        <keshihuaInventory v-else></keshihuaInventory>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import webMap from "../../views/WebMap/mapCgui.vue";
import DistanceTool from "bmaplib.distancetool";
import coalElectricity from "../../views/keshihua/components/CoalElectricity.vue";
import distributed from "../../views/keshihua/components/Distributed.vue";
import keshihuaInventory from "../../views/keshihua/components/keshihuaInventory.vue";
import oneEnergy from "../../views/keshihua/components/oneEnergy.vue";
import powerMent from "../../views/keshihua/components/PowerMent.vue";
export default {
  data() {
    return {
      isCollapse: true, //按钮控制菜单栏的展开
      tabId: ""
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
    distributed,
    coalElectricity,
    keshihuaInventory,
    oneEnergy,
    powerMent
  }
};
</script>

<style scoped>
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
aside /deep/ .el-menu {
  background: #ecf6ec;
}
section /deep/ .el-button {
  padding: 10px 5px;
  background: #ecf6ec;
  border: 1px solid #ecf6ec;
}
section /deep/ .el-button:focus {
  outline: none;
  box-shadow: none;
  color: #000;
}

/deep/ .el-submenu__title i {
  color: #909399 !important;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
}
.box-right {
  flex: 1;
}
</style>
<style></style>
