<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tools :show-before="true">
        <!-- <span slot="before">共166条记录</span> -->
        <el-form
          slot="before"
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
        >
          <el-form-item label="电源分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <template slot="after">
          <el-button size="mini" type="success">导入</el-button>
          <el-button size="mini" type="success">导出</el-button>
        </template>
      </page-tools>
      <!-- 放置表格和分页 -->

      <el-table border>
        <el-table-column label="序号" sortable="" />
        <el-table-column label="姓名" sortable="" />
        <el-table-column label="工号" sortable="" />
        <el-table-column label="聘用形式" sortable="" />
        <el-table-column label="部门" sortable="" />
        <el-table-column label="入职时间" sortable="" />
        <el-table-column label="账户状态" sortable="" />
        <el-table-column label="操作" sortable="" fixed="right" width="280">
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <el-row type="flex" justify="center" align="middle" style="height: 60px">
        <el-pagination layout="prev, pager, next" />
      </el-row>
    </div>
  </div>
</template>
<script>
import PageTools from "./PageTools.vue";
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  methods: {},
  components: {
    PageTools
  }
};
</script>
<style scoped>
.el-form-item {
  margin: 0;
}
</style>
