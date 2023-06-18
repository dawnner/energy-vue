<template>
  <div>
    <!-- 查询条件 -->
    <web-map style="width: 100%;height: 600px;"></web-map>
    <div style="background: #FFF;border-radius: 10px;">
      <div
        style="padding-top: 1px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E2E2E2;"
      >
        <el-form
          label-width="130px"
          class="query-form"
          ref="queryBody"
          :model="queryBody"
        >
          <el-form-item
            label="发电类型:"
            style="width:400px"
            prop="electricPowerType"
          >
            <el-select
              v-model="queryBody.electricPowerType"
              clearable
              placeholder="请选择"
              style="width:100px"
              @change="getdata"
            >
              <el-option
                v-for="item in PowerSourceList"
                :key="item.index"
                :label="item"
                :value="item"
              />
            </el-select>
            <el-select
              v-model="queryBody.projectType"
              clearable
              placeholder="请选择"
              style="width:100px;margin-left:20px"
            >
              <el-option
                v-for="item in PowerTypeList"
                :key="item.index"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="状态:" prop="Type">
            <el-select
              v-model="queryBody.Type"
              clearable
              placeholder="请选择"
              @focus="getstate"
            >
              <el-option
                v-for="item in WorkDevelopmentList"
                :key="item.index"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-button
            type="primary"
            size="small"
            icon="el-icon-search"
            style="margin-left:30px;"
            @click="queryIntegrateList"
          >
            查询
          </el-button>
          <el-button
            type="succ"
            size="small"
            icon="el-icon-refresh-left"
            @click="resetIntegrateList"
          >
            重置
          </el-button>
        </el-form>
      </div>
      <div class="btnFlag">
        <el-button type="primary" size="small" @click="exportIntegrateList">
          导出
        </el-button>
      </div>
      <!-- 列表表格区域 -->
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        :header-cell-style="{
          color: '#000000'
        }"
        @selection-change="handleSelectionChange"
        height="400"
      >
        <el-table-column align="center" type="selection" width="55">
        </el-table-column>
        <el-table-column
          align="center"
          label="序号"
          type="index"
          :index="indexFn"
          width="50"
        >
        </el-table-column>
        <el-table-column prop="enterpriseName" label="企业名称" align="center">
        </el-table-column>
        <el-table-column prop="powerType" label="电源分类" align="center">
        </el-table-column>
        <el-table-column
          prop="electricPowerType"
          align="center"
          label="发电类型"
        >
        </el-table-column>
        <el-table-column prop="projectType" align="center" label="项目类型">
        </el-table-column>
        <el-table-column prop="maxGroup" align="center" label="所属最高集团">
        </el-table-column>
        <el-table-column
          prop="voltageClasses"
          align="center"
          label="接入电压等级"
        >
        </el-table-column>
        <el-table-column prop="projectUri" align="center" label="项目地址">
        </el-table-column>
        <el-table-column
          prop="periodInstalledCapacity"
          align="center"
          label="本期申报接入规模(MW)"
        >
        </el-table-column>
        <el-table-column prop="togetherTime" align="center" label="并网时间">
        </el-table-column>
        <el-table-column prop="type" align="center" label="状态">
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        style="text-align:right;padding-top:10px"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 30]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import webMap from "@/views/WebMap/mapDemo.vue";
import {
  getdataApi,
  getListApi,
  getstateApi,
  exportPostApi,
  getdatatwoApi
} from "@/api/cgdy/cgdyindex.js";
export default {
  data() {
    return {
      // 大栏目列表数据
      tableData: [],
      total: 0,

      // 查询参数对象1(放在请求的params里,以？形式拼接)

      pageNum: 1,
      pageSize: 10,
      deatlsit: {
        // pageNum: this.pageNum,
        // pageSize: this.pageSize,
        // type: "常规电源",
      },
      selectData: [],
      // 查询参数对象
      queryBody: {
        pageNum: 1,
        pageSize: 10,
        PowerType: "新型储能",
        electricPowerType: "",
        projectType: ""
        // Type: ""
      },
      WorkDevelopmentList: [],
      //发电类型
      PowerSourceList: [],
      //发电类型二级下拉菜单
      PowerTypeList: []
    };
  },
  components: {
    webMap
  },
  created() {
    //获取列表的方法
    this.getList();
  },
  mounted() {
    this.getdata();
  },
  methods: {
    // 加载电源一级类型
    async getdata(val) {
      console.log("val", val);
      const { data } = await getdataApi({ powerType: "新型储能" });
      console.log(data);
      this.PowerSourceList = data;
      if (val) {
        const res1 = await getdatatwoApi({
          powerType: "新型储能",
          electricPowerType: val
        });
        console.log(res1);
        this.PowerTypeList = res1.data;
      } else {
        this.PowerTypeList = [];
      }
    },
    //获取列表的方法
    async getList() {
      this.deatlsit = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        powerType: "新型储能"
      };
      const { rows, total } = await getListApi(this.deatlsit);
      this.tableData = rows;
      this.total = total;
      console.log("新型储能", this.tableData);
    },
    //获取状态的方法
    async getstate() {
      const { rows } = await getstateApi();
      this.WorkDevelopmentList = rows;
    },
    //点击查询按钮触发
    queryIntegrateList() {
      this.queryBody.pageNum = 1;
      getListApi(this.queryBody).then(response => {
        console.log(response);
        this.tableData = response.rows;
      });
    },
    //重置
    resetIntegrateList() {
      this.$refs.queryBody.resetFields();
      this.queryBody = {
        PowerType: "新型储能",
        electricPowerType: "",
        projectType: "",
        Type: ""
      };
      this.getList();
    },
    // 导出
    exportIntegrateList() {
      const queryParams = this.queryBody;
      this.$confirm("是否确认导出所有数据项?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return exportPostApi(queryParams);
        })
        .then(response => {
          this.download(response.msg);
        })
        .catch(() => {});
    },
    //序号
    indexFn(index) {
      // 前面返回的序号  前面有多少条数据
      // 前面一共有多少条 = 前面的多少页 * 每页条数
      return index + 1 + (this.pageNum - 1) * this.pageSize;
    },
    // 更新每页条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      // 更新每页条数，页码重置为第一页
      // 原因：每页条数的变化后，当前页已经不是之前的当前页，需要重置
      this.pageNum = 1;
      // 根据新的页码以及最新的数据条数，请求最新的数据
      this.getList();
    },
    // 获取新的页码的数据
    handleCurrentChange(val) {
      this.pageNum = val;
      // console.log(`当前页:${val}`)
      // 重新获取新的页码的数据
      this.getList();
    },

    handleSelectionChange(val) {
      this.selectData = val;
    }
  }
};
</script>

<style lang="scss" scoped>
/**
自定义el-table表格滚动栏样式
*/
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
.el-button--primary {
  //需要更改的按钮类型
  background: #158388 !important;
  border-color: #158388 !important;
}
.el-button--succ {
  //需要更改的按钮类型
  background: #f2f3f5 !important;
  border-color: #f2f3f5 !important;
}
.el-button--ess {
  //需要更改的按钮类型
  background: #f5ba49 !important;
  border-color: #f5ba49 !important;
  color: #fff;
}
.btnFlag {
  text-align: left;
  margin: 20px 30px;
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
.el-form-item {
  margin-bottom: 0;
}
.query-form {
  margin-top: 30px;
  display: flex;
}
</style>
