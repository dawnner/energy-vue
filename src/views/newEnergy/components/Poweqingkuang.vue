<template>
  <div class="box">
    <div class="topBox">
      <div class="topTwo">
        <div class="tableTopLeft">
          <el-form
            label-width="80px"
            class="query-form"
            ref="from"
            :model="from"
          >
            <el-form-item label="电源类型:" class="query-title" prop="name">
              <el-input
                v-model="from.powerType"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
            <el-form-item label="发电类型:" class="query-title" prop="name">
              <el-input
                v-model="from.electricPowerType"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
            <el-form-item label="项目类型:" class="query-title" prop="name">
              <el-input
                v-model="from.projectType"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-form>
          <div class="btn">
            <button @click="queryIntegrateList">
              <img src="../../../assets/CoalElectricity/6.png" alt="" />
              <span>查询</span>
            </button>
            <button
              @click="resetIntegrateList"
              style="background-color: #F2F3F5;color: #333333;border:none;margin-left: 20px;"
            >
              <img src="../../../assets/CoalElectricity/7.png" alt="" />
              <span>重置</span>
            </button>
          </div>
        </div>
        <div class="tableTopRight">
          <button
            @click="exportIntegrateList"
            style="background-color: #158388; color:#fff;border-radius: 4px;"
          >
            导出
          </button>
          <button
            style="background-color: #5D7CE0; color:#fff;border-radius: 4px;margin-left: 10px;"
          >
            模板下载
          </button>
        </div>
      </div>

      <div class="topBottom">
        <div class="topLeftTitle">
          流程可视化展示
        </div>

        <div class="topBottomImg">
          <div class="topBottomone">
            <div class="topBottomBk">
              <img src="../../../assets/CoalElectricity/组 1373.png" alt="" />
            </div>
            <div style="text-align: center;margin-top: 20px;">01 项目可研</div>
          </div>
          <div class="line"></div>
          <div class="topBottomone">
            <div class="topBottomBk">
              <img src="../../../assets/CoalElectricity/组 1374.png" alt="" />
            </div>
            <div style="text-align: center;margin-top: 20px;">02 项目开工</div>
          </div>
          <div class="line"></div>
          <div class="topBottomone">
            <div class="topBottomBk">
              <img src="../../../assets/CoalElectricity/组 1375.png" alt="" />
            </div>
            <div style="text-align: center;margin-top: 20px;">03 项目并网</div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottomBox">
      <div class="topLeftTitle">
        接入前期数据展示
      </div>
      <!-- 表格 -->
      <div class="tableCenter">
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
            prop="projectType"
            align="center"
            label="项目类型"
            width="150"
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
      </div>

      <!-- 分页 -->
      <div class="pageBox">
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
  </div>
</template>

<script>
import { getListApi, exportPostApi } from "@/api/cgdy/cgdyindex.js";
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
      from: {
        pageNum: 1,
        pageSize: 10,
        powerType: "",
        electricPowerType: "",
        projectType: ""
      }
    };
  },
  created() {
    // this.getdata();
    //获取列表的方法
    this.getList();
  },
  methods: {
    //获取列表的方法
    async getList() {
      const { rows, total } = await getListApi(this.from);
      this.tableData = rows;
      this.total = total;
      // console.log("常规", this.tableData);
    },
    //点击查询按钮触发
    queryIntegrateList() {
      this.from.pageNum = 1;
      getListApi(this.from).then(response => {
        console.log(response);
        this.tableData = response.rows;
        this.total = response.total;
      });
    },
    //重置
    resetIntegrateList() {
      // this.$refs.queryBody.resetFields();
      this.from = {
        pageNum: 1,
        pageSize: 10,
        powerType: "",
        electricPowerType: "",
        projectType: ""
      };
      this.getList();
    },
    // 导出
    exportIntegrateList() {
      const queryParams = this.from;
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
      return index + 1 + (this.from.pageNum - 1) * this.from.pageSize;
    },
    // 更新每页条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.from.pageSize = val;
      // 更新每页条数，页码重置为第一页
      // 原因：每页条数的变化后，当前页已经不是之前的当前页，需要重置
      this.from.pageNum = 1;
      // 根据新的页码以及最新的数据条数，请求最新的数据
      this.getList();
    },
    // 获取新的页码的数据
    handleCurrentChange(val) {
      this.from.pageNum = val;
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
::v-deep.el-table__header-wrapper .el-checkbox:last-of-type {
  display: none;
}
.tableCenter {
  width: 96%;
  height: 75%;
  /* background-color: #ffa00a; */
  margin-top: 1%;
  margin-left: 2%;
  overflow-y: scroll;
}
.pageBox {
  width: 96%;
  height: 10%;
  margin-left: 2%;
  /* background-color: #ffa00a; */
  display: flex;
  align-items: center;
  justify-content: right;
}
.bottomBox {
  width: 98%;
  height: 59%;
  background-color: #fff;
  margin-left: 1%;
  margin-top: 2px;
  border-radius: 10px;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.topBox {
  width: 98%;
  height: 40%;
  background-color: #fff;
  margin: 1%;
  border-radius: 10px;
}
.topTwo {
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
}

.tableTopLeft {
  width: 75%;
  height: 100%;
  /* background-color: #ffa00a; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  color: #4e5969;
}
.tableTopLeft div {
  font-size: 14px;
}
.tableTopLeft input {
  width: 210px;
  border: none;
  height: 30px;
  background-color: #f7f8fa;
  margin-left: 10px;
}
.tableTopRight {
  width: 20%;
  height: 100%;
  /* background-color: #158388; */
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 30px;
}
.tableTopRight button {
  width: 84px;
  height: 32px;
  border: none;
}
.btn {
  display: flex;
}
.btn button {
  width: 84px;
  height: 32px;
  background-color: #158388;
  border: 1px solid #158388;
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn span {
  margin-left: 5px;
}

.topBottom {
  width: 100%;
  height: 73%;
  margin-top: 1%;
  /* background-color: #ccc; */
}
.topLeftTitle {
  width: 100%;
  display: flex;
  align-items: center;
  border-left: 4px solid #158388;
  margin: 20px;
  font-size: 20px;
  font-family: SimHei;
  font-weight: 400;
  color: #333333;
  padding-left: 9px;
}
.topBottomImg {
  width: 90%;
  height: 80%;
  /* background-color: aqua; */
  margin-left: 5%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topBottomone {
  width: 14%;
  height: 100%;
  /* background-color: aquamarine; */
  margin-top: 5px;
}
.line {
  width: 22%;
  height: 14px;
  background: #f9f9f9;
  border-radius: 7px;
}
.topBottomBk {
  width: 65%;
  height: 75%;
  background-color: #f5f5f5;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.query-form {
  display: flex;
  margin-top: 25px;
}
</style>
