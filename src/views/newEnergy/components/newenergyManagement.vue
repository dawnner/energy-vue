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
            label="电源类型一级:"
            style="width:400px"
            prop="PowerSource"
          >
            <el-select
              v-model="queryBody.PowerSource"
              clearable
              placeholder="请选择"
              style="width:100px"
            >
              <el-option
                v-for="item in PowerSourceList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-select
              v-model="queryBody.PowerType"
              clearable
              placeholder="请选择"
              style="width:100px;margin-left:20px"
            >
              <el-option
                v-for="item in PowerTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="项目前期工作进展:" prop="WorkDevelopment">
            <el-select
              v-model="queryBody.WorkDevelopment"
              clearable
              placeholder="请选择"
            >
              <el-option
                v-for="item in WorkDevelopmentList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="电厂名称:" class="query-title" prop="name">
            <el-input v-model="queryBody.name" placeholder="请输入" clearable />
          </el-form-item>
          <el-button
            type="primary"
            size="small"
            icon="el-icon-search"
            style="margin-left:30px"
          >
            查询
          </el-button>
          <el-button type="succ" size="small" icon="el-icon-refresh-left">
            重置
          </el-button>
        </el-form>
      </div>
      <div class="btnFlag">
        <el-button type="primary" size="small" @click="exportIntegrateList">
          导出
        </el-button>
        <el-button type="ess" size="small" @click="printIntegrateList">
          打印
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
        <el-table-column
          prop="projectNo"
          label="项目编号"
          align="center"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="projectName"
          label="项目名称"
          align="center"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="subprojectNum"
          align="center"
          label="子项目数量"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="maxGroup"
          align="center"
          label="最高集团"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="enterpriseName"
          align="center"
          label="企业名称"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="acceptancePowerUnit"
          align="center"
          label="受理电力公司"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="applyTime"
          align="center"
          label="申请时间"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="powerType"
          align="center"
          label="电源类型"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="electricPowerType"
          align="center"
          label="发电类型"
        >
        </el-table-column>
        <el-table-column
          prop="powerType"
          align="center"
          label="项目类型"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="engineeringType"
          align="center"
          label="工程类型"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="projectUri"
          align="center"
          label="项目地址"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="periodInstalledCapacity"
          align="center"
          label="本期装机量"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="finalInstalledCapacity"
          align="center"
          label="终期装机量"
        >
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
import { getdataApi, getListApi } from "@/api/cgdy/cgdyindex.js";
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
        name: "",
        PowerType: "",
        PowerSource: "",
        WorkDevelopment: ""
      },
      WorkDevelopmentList: [
        {
          value: "1",
          label: "未启动预可研"
        },
        {
          value: "2",
          label: "已启动预可研"
        },
        {
          value: "3",
          label: "已完成预可研查看"
        },
        {
          value: "4",
          label: "已启动可研"
        },
        {
          value: "5",
          label: "已完成可研查看"
        }
      ],
      PowerSourceList: [],
      PowerTypeList: [
        {
          value: "1",
          label: "燃煤"
        },
        {
          value: "2",
          label: "燃油"
        },
        {
          value: "3",
          label: "燃气"
        },
        {
          value: "4",
          label: "余热余压余气"
        },
        {
          value: "5",
          label: "常规水电"
        },
        {
          value: "6",
          label: "抽水蓄能"
        },
        {
          value: "7",
          label: "小水电"
        },
        {
          value: "8",
          label: "核电"
        }
      ]
    };
  },
  components: {
    webMap
  },
  created() {
    this.getdata();
    //获取列表的方法
    this.getList();
  },
  mounted() {
    this.InitIntegrateList();
  },
  methods: {
    // 加载电源一级类型
    async getdata() {
      const res1 = await getdataApi();
      console.log(res1);
      // this.subjectNa = res1;
    },
    //获取列表的方法
    async getList() {
      this.deatlsit = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        powerType: "新能源"
      };
      const { rows, total } = await getListApi(this.deatlsit);
      this.tableData = rows;
      this.total = total;
      console.log("新能源", this.tableData);
    },
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
