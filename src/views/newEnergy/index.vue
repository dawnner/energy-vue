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
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">气象数据可视化</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">分布式光伏可开放容量</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">新能源项目管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <distributed v-if="tabId == '2'"></distributed>
        <coalElectricity v-if="tabId == '3'"></coalElectricity>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import coalElectricity from "./components/CoalElectricity.vue";
import distributed from "./components/Distributed.vue";
export default {
  data() {
    return {
      isCollapse: false, //按钮控制菜单栏的展开
      tabId: "3"
    };
  },
  methods: {
    changeSidebar(path) {
      console.log(path);
      this.tabId = path;
    }
  },
  components: {
    distributed,
    coalElectricity
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
aside /deep/ .el-menu {
  background: #fff;
}
aside /deep/ .el-menu-vertical-demo {
  height: 100%;
}
section /deep/ .el-button:focus {
  outline: none;
  box-shadow: none;
  color: #000;
}

.box {
  width: 100%;
  height: 100%;
  display: flex;
}
.box-right {
  flex: 1;
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
<style></style>
