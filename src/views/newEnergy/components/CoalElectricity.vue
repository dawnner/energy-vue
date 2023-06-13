<template>
  <div class="dashboard-container">
    <div style="width:100%;height:80%">
      <web-map style="width:100%;height:100%"></web-map>
    </div>
    <div style="padding: 0 20px">
      <!-- 查询条件 -->
      <el-form
        label-width="130px"
        class="query-form"
        ref="queryBody"
        :model="queryBody"
      >
        <el-form-item label="电厂名称:" class="query-title" prop="name">
          <el-input v-model="queryBody.name" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item label="机组状态:" class="query-title" prop="status">
          <el-input v-model="queryBody.status" placeholder="请输入" clearable />
        </el-form-item>
      </el-form>
      <div class="btnFlag">
        <el-button type="success" size="small" @click="queryIntegrateList">
          查询
        </el-button>
        <el-button type="success" size="small" @click="resetIntegrateList">
          重置
        </el-button>
        <el-button type="success" size="small" @click="exportIntegrateList">
          导出
        </el-button>
        <el-button type="success" size="small" @click="printIntegrateList">
          打印
        </el-button>
      </div>
      <!-- 列表表格区域 -->
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        :header-cell-style="{
          background: '#99cccc',
          color: '#000000'
        }"
        @selection-change="handleSelectionChange"
        height="400"
      >
        <el-table-column align="center" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" label="序号" width="50">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="电厂名称"
          align="center"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="province"
          align="center"
          label="机组容量(万千瓦)"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="city"
          align="center"
          label="日发电量(万千瓦)"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="供热量(GJ)"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          align="center"
          label="煤炭库存(万吨)"
          width="110"
        >
        </el-table-column>
        <el-table-column
          prop="city"
          align="center"
          label="日供煤量(万吨)"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="日耗煤量(万吨)"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          align="center"
          label="电煤可用天数(天数)"
          width="140"
        >
        </el-table-column>
        <el-table-column
          prop="city"
          align="center"
          label="机组状态"
          width="120"
        >
        </el-table-column>
        <el-table-column prop="address" align="center" label="机组">
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        :current-page="queryParams.pages"
        :page-sizes="[10, 20, 30]"
        style="text-align:right;padding-top:10px"
        :page-size="queryParams.size"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import webMap from "@/views/WebMap/mapDemo.vue";
export default {
  data() {
    return {
      // 大栏目列表数据
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      total: 0,

      // 查询参数对象1(放在请求的params里,以？形式拼接)
      queryParams: {
        pages: 1,
        size: 10
      },
      selectData: [],
      // 查询参数对象
      queryBody: {
        name: "",
        status: ""
      }
    };
  },
  mounted() {
    this.InitIntegrateList();
  },
  methods: {
    InitIntegrateList() {
      //调用接口，初始化大栏目列表
    },
    // 打印
    printIntegrateList() {},
    //点击查询按钮触发
    queryIntegrateList() {
      this.queryParams.pages = 1;
      this.InitIntegrateList();
    },
    //重置
    resetIntegrateList() {
      this.$refs.queryBody.resetFields();
      this.queryBody.PowerType = "";
      this.InitIntegrateList();
    },
    // 导出
    exportIntegrateList() {},
    //页面数据条数发生变化触发
    handleSizeChange(newPageSize) {
      this.queryParams.size = newPageSize;
      this.InitIntegrateList();
    },

    //页码发生变化触发
    handleCurrentChange(newPageNum) {
      this.queryParams.pages = newPageNum;
      this.InitIntegrateList();
    },

    handleSelectionChange(val) {
      this.selectData = val;
    }
  },
  components: {
    webMap
  }
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
  height: 100%;
}
::v-deep .el-table__body-wrapper::-webkit-scrollbar {
  width: 10px !important;
  /*滚动条宽度*/
  height: 10px !important;
  /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::v-deep .el-table__body-wrapper::-webkit-scrollbar-track {
  box-shadow: 0px 1px 3px #ccced2 inset !important;
  /*滚动条的背景区域的内阴影*/
  border-radius: 10px !important;
  /*滚动条的背景区域的圆角*/
  background-color: #ccced2 !important;
  /*滚动条的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
  box-shadow: 0px 1px 3px #428ab2 inset !important;
  /*滚动条的内阴影*/
  border-radius: 10px !important;
  /*滚动条的圆角*/
  background-color: #428ab2 !important;
  /*滚动条的背景颜色*/
}
.btnFlag {
  text-align: right;
  margin: 10px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.query-form {
  margin-top: 30px;
  display: flex;
  .query-title {
    margin: 0 95px 0;
  }
}
</style>
