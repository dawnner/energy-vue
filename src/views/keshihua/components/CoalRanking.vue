<template>
  <div class="box">
    <div class="topBox">
      <el-select
        v-model="value"
        clearable
        placeholder="企业煤炭库存量排名"
        style="margin-left: 20px;"
      >
        <el-option value="企业煤炭库存量排名" />
      </el-select>
      <el-button
        type="primary"
        size="small"
        icon="el-icon-search"
        style="margin-left:30px;"
      >
        查询
      </el-button>
    </div>
    <el-table
      :data="dataList"
      style="width: 98%;margin-left: 1%;margin-top:10px"
      border
      :header-cell-style="{
        background: '#F7F8FA',
        color: '#000000'
      }"
    >
      <el-table-column prop="num" align="center" label="排名">
      </el-table-column>
      <el-table-column prop="name" align="center" label="企业名称">
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 15, 25]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="5"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array
    }
  },
  data() {
    return {
      value: "",
      dataList: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    getData() {
      // console.log(datas);
      this.dataList = this.datas;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.topBox {
  width: 100%;
  height: 10%;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
}
.el-button--primary {
  background: #158388 !important;
  border-color: #158388 !important;
}
/deep/.el-pagination {
  text-align: right;
  margin-top: 20px;
  margin-right: 20px;
}
</style>
