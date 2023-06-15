<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tools :show-before="true">
        <el-form slot="before" :inline="true" class="demo-form-inline">
          <el-form-item label="所属行业 : ">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-form>
        <template slot="after">
          <el-button size="mini" type="success">查询</el-button>
          <el-button size="mini" type="success" @click="delFn">重置</el-button>
        </template>
      </page-tools>
      <div style="display:flex;justify-content: flex-end;margin-bottom: 20px;">
        <el-button size="mini" type="success">模板下载</el-button>
        <el-button size="mini" type="success">导入</el-button>
        <el-button size="mini" type="success">导出</el-button>
        <el-button size="mini" type="success">打印</el-button>
      </div>
      <!-- 放置表格和分页 -->
      <template>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55" align="center">
          </el-table-column>
          <el-table-column prop="date" label="序号" align="center" width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            label="能耗单位ID"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="能耗单位名称"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="所属行业"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="水排放量"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="电使用量"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="煤使用量"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column prop="name" label="气使用量" align="center">
          </el-table-column>
        </el-table>
      </template>
      <!-- 分页组件 -->
      <el-row type="flex" justify="end" align="middle" style="height: 61px">
        <el-pagination layout="prev, pager, next" :total="100" />
      </el-row>
    </div>
  </div>
</template>
<script>
import PageTools from "../../../chuneng/PageTools.vue";
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    //重置按钮
    delFn() {
      this.input = "";
    }
  },
  components: {
    PageTools
  }
};
</script>
<style scoped>
.el-form-item {
  margin: 0;
}
.dashboard-container {
  width: 100%;
  height: 100%;
}
.el-select {
  width: 200px; /* 设置组件的宽度 */
  height: 30px; /* 设置组件的高度 */
  margin-right: 20px;
}
</style>
