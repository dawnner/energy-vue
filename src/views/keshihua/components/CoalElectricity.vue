<template>
  <div class="coalBox">
    <!-- 上 -->
    <div class="topBox">
      <div class="topLeft">
        <!-- 左上边标题 -->
        <div class="topLeftTitle">
          火电调峰能力
        </div>

        <div class="topLeftContent">
          <div class="contentImg">
            <div class="contentTitle">
              装机数量
            </div>
            <div class="contentNum">678<span>台</span></div>
          </div>
          <div class="contentImg2">
            <div class="contentTitle">
              装机规模
            </div>
            <div class="contentNum" style="color:#6D9AF9">
              10747.95<span>万千瓦</span>
            </div>
          </div>

          <div class="contentImg">
            <div class="contentTitle">
              煤电灵活性改造台数
            </div>
            <div class="contentNum">38<span>台</span></div>
          </div>
          <div class="contentImg2">
            <div class="contentTitle">
              煤电改造规模
            </div>
            <div class="contentNum" style="color:#6D9AF9">
              1817.5<span>MW</span>
            </div>
          </div>
          <div class="contentImg3">
            <div class="contentTitle">
              灵活性改造机组占比
            </div>
            <div class="contentNum" style="color:#FF6C6D">
              16.91%
            </div>
          </div>
          <div class="contentImg3">
            <div class="contentTitle">
              供热期新增调峰
            </div>
            <div class="contentNum" style="color:#FF6C6D">
              636.125<span>万千瓦</span>
            </div>
          </div>
          <div class="contentImg4">
            <div class="contentTitle">
              非供热期新增调峰
            </div>
            <div class="contentNum" style="color:#02C3A1">
              545.25<span>万千瓦</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 下 -->
    <div class="tableBox">
      <div class="tableTop">
        <div class="tableTopLeft">
          <el-form
            ref="form"
            :model="form"
            label-width="130px"
            class="query-form"
          >
            <el-form-item label="电厂名称">
              <el-input v-model="form.maxGroup"></el-input>
            </el-form-item>
            <el-form-item label="机组类型">
              <el-input v-model="form.type"></el-input>
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
        <div class="tableTopRight">
          <button
            style="background-color: #158388; color:#fff;border-radius: 4px;"
          >
            导出
          </button>
        </div>
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
          height="580"
        >
          <el-table-column align="center" type="selection" width="55">
          </el-table-column>
          <el-table-column
            align="center"
            label="序号"
            type="index"
            :index="indexFn"
          >
          </el-table-column>
          <el-table-column prop="projectNo" label="电厂名称" align="center">
          </el-table-column>
          <el-table-column
            prop="projectName"
            label="机组容量(万千瓦)"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="subprojectNum"
            align="center"
            label="日发电量(万千瓦)"
          >
          </el-table-column>
          <el-table-column prop="maxGroup" align="center" label="供热量(吉焦)">
          </el-table-column>
          <el-table-column
            prop="electricPowerType"
            align="center"
            label="机组状态"
          >
          </el-table-column>
          <el-table-column prop="powerType" align="center" label="机组">
          </el-table-column>
          <el-table-column
            prop="engineeringType"
            align="center"
            label="供热期新增调峰(万千瓦)"
          >
          </el-table-column>
          <el-table-column
            prop="projectUri"
            align="center"
            label="非供热期新增调峰(万千瓦)"
          >
          </el-table-column>
        </el-table>
      </div>

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
// import bingTu from "../components/3dbt1.vue";
import { getdataApi, getListApi } from "@/api/cgdy/cgdyindex.js";
export default {
  components: {
    // bingTu
  },
  data() {
    return {
      // 查询参数
      form: {
        pageNum: 1,
        pageSize: 10,
        maxGroup: "",
        typeof: ""
      },
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
      deatlsit: {}
    };
  },
  created() {
    // this.getdata();
    //获取列表的方法
    // this.getList();
  },
  methods: {
    //获取列表的方法
    // async getList() {
    //   this.deatlsit = {
    //     pageNum: this.pageNum,
    //     pageSize: this.pageSize,
    //     powerType: "新能源"
    //   };
    //   const { rows, total } = await getListApi(this.deatlsit);
    //   this.tableData = rows;
    //   this.total = total;
    //   console.log("新能源", this.tableData);
    // },
    //点击查询按钮触发
    // queryIntegrateList() {
    //   this.form.pageNum = 1;
    //   getListApi(this.form).then(response => {
    //     console.log(response);
    //     this.tableData = response.rows;
    //   });
    // },
    //重置
    // resetIntegrateList() {
    //   this.$refs.form.resetFields();
    //   this.form = {
    //     name: "",
    //     type: ""
    //   };
    //   this.getList();
    // },
    //序号
    indexFn(index) {
      // 前面返回的序号  前面有多少条数据
      // 前面一共有多少条 = 前面的多少页 * 每页条数
      return index + 1 + (this.pageNum - 1) * this.pageSize;
    },
    // 更新每页条数
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    //   this.pageSize = val;
    //   // 更新每页条数，页码重置为第一页
    //   // 原因：每页条数的变化后，当前页已经不是之前的当前页，需要重置
    //   this.pageNum = 1;
    //   // 根据新的页码以及最新的数据条数，请求最新的数据
    //   this.getList();
    // },
    // 获取新的页码的数据
    // handleCurrentChange(val) {
    //   this.pageNum = val;
    //   // console.log(`当前页:${val}`)
    //   // 重新获取新的页码的数据
    //   this.getList();
    // },
    handleSelectionChange(val) {
      this.selectData = val;
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
  height: 100%;
}
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
  height: 35px;
  background: #158388 !important;
  border-color: #158388 !important;
}
.el-button--succ {
  //需要更改的按钮类型
  height: 35px;
  background: #f2f3f5 !important;
  border-color: #f2f3f5 !important;
}
.contentImg {
  width: 24%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("../../../assets/CoalElectricity/1377.png");
}
.contentImg2 {
  width: 24%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("../../../assets/CoalElectricity/1378.png");
}
.contentImg3 {
  width: 24%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("../../../assets/CoalElectricity/1379.png");
}
.contentImg4 {
  width: 24%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("../../../assets/CoalElectricity/1380.png");
}
.contentTitle {
  margin-top: 10%;
  margin-left: 7%;
  font-size: 18px;
  font-family: SimHei;
  font-weight: 400;
  color: #333333;
}
::v-deep.el-table__header-wrapper .el-checkbox:last-of-type {
  display: none;
}
.coalBox {
  width: 100%;
  height: 100%;
}
.topBox {
  width: 100%;
  height: 28%;
  display: flex;
}
.topLeft {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
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
.topLeftContent {
  width: 96%;
  height: 65%;
  margin-left: 3%;
  margin-top: 25px;
  /* background-color: #158388; */
  display: flex;
  justify-content: space-between;
}

.contentImg {
  width: 20%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("../../../assets/CoalElectricity/1377.png");
}
.contentImg2 {
  width: 20%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("../../../assets/CoalElectricity/1378.png");
}
.contentImg3 {
  width: 20%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("../../../assets/CoalElectricity/1379.png");
}
.contentImg4 {
  width: 20%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("../../../assets/CoalElectricity/1380.png");
}
.contentTitle {
  margin-top: 10%;
  margin-left: 7%;
  font-size: 18px;
  font-family: SimHei;
  font-weight: 400;
  color: #333333;
}
.contentNum {
  font-size: 30px;
  font-family: SimHei;
  font-weight: 400;
  color: #ffa00a;
  width: 190px;
  height: 70%;
  word-wrap: break-word;
  text-align: center;
  margin-top: 10%;
}
.contentNum span {
  font-size: 10px;
  color: #333;
  font-weight: 400;
  margin-top: 8%;
  margin-left: 2%;
}
.topRight {
  width: 49%;
  height: 100%;
  background-color: #fff;
  margin-left: 1%;
  border-radius: 10px;
}
.cakeImgBox {
  width: 80%;
  height: 80%;
  /* background-color: #158388; */
  margin-left: 10%;
}
.tableBox {
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 10px;
}

.tableTop {
  width: 96%;
  height: 10%;
  border-bottom: 1px solid #f5f5f5;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.tableTopLeft {
  width: 50%;
  height: 100%;
  /* background-color: #ffa00a; */
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  .query-title {
    margin: 0 95px 0;
  }
}
.query-form {
  display: flex;
}
</style>
