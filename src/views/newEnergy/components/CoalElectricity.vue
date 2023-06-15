<template>
  <div class="coalBox">
    <!-- 上 -->
    <div class="topBox">
      <div class="topLeft">
        <!-- 左上边标题 -->
        <div class="topLeftTitle">
          全网调峰能力
        </div>

        <div class="topLeftContent">
          <div class="contentImg">
            <div class="contentTitle">
              装机总量
            </div>
            <div class="contentNum">232<span>台</span></div>
          </div>
          <div class="contentImg2">
            <div class="contentTitle">
              额定功率
            </div>
            <div class="contentNum" style="color:#6D9AF9">
              232<span>万千瓦</span>
            </div>
          </div>
          <div class="contentImg3">
            <div class="contentTitle">
              供热期新增调峰
            </div>
            <div class="contentNum" style="color:#FF6C6D">
              232<span>万千瓦</span>
            </div>
          </div>
          <div class="contentImg4">
            <div class="contentTitle">
              非供热期新增调峰
            </div>
            <div class="contentNum" style="color:#02C3A1">
              232<span>万千瓦</span>
            </div>
          </div>
        </div>
      </div>

      <div class="topRight">
        <!-- 右上边标题 -->
        <div class="topLeftTitle">
          机组类型占比
        </div>

        <!-- 饼状图 -->
        <div class="cakeImgBox">
          <!-- <cakeEcharts style="width: 100%;height: 100%;"></cakeEcharts> -->
        </div>
      </div>
    </div>

    <!-- 下 -->
    <div class="tableBox">
      <div class="tableTop">
        <div class="tableTopLeft">
          <div>电厂名称 <input type="text" /></div>
          <div>机组类型 <input type="text" /></div>
          <div class="btn">
            <button>
              <img src="../../../assets/CoalElectricity/6.png" alt="" />
              <span>查询</span>
            </button>
            <button
              style="background-color: #F2F3F5;color: #333333;border:none;margin-left: 20px;"
            >
              <img src="../../../assets/CoalElectricity/7.png" alt="" />
              <span>重置</span>
            </button>
          </div>
        </div>
        <div class="tableTopRight">
          <button
            style="background-color: #158388; color:#fff;border-radius: 4px;"
          >
            导出
          </button>
          <button
            style="background-color: #F5BA49; color:#fff;border-radius: 4px;margin-left: 10px;"
          >
            打印
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
          height="600"
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
// import cakeEcharts from "./cakeEcharts.vue";
import { getdataApi, getListApi } from "@/api/cgdy/cgdyindex.js";
export default {
  name: "oneEnergy",
  components: {
    // cakeEcharts
  },
  data() {
    return {
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
    this.getList();
  },
  methods: {
    //获取列表的方法
    async getList() {
      this.deatlsit = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        powerType: "新能源"
      };
      const { rows, total } = await getListApi(this.deatlsit);
      const arr = [];
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].powerType == "新能源") {
          arr.push(rows[i]);
        }
      }
      this.tableData = arr;
      this.total = total;
      console.log("常规", this.tableData);
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
  height: 30%;
  display: flex;
}
.topLeft {
  width: 50%;
  height: 100%;
  background-color: #fff;
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
.contentNum {
  margin-top: 30%;
  text-align: right;
  margin-right: 20%;
  font-size: 50px;
  font-family: SimHei;
  font-weight: 400;
  color: #ffa00a;
  line-height: 48px;
}
.contentNum span {
  font-size: 16px;
  color: #333;
  font-weight: 400;
}
.topRight {
  width: 49%;
  height: 100%;
  background-color: #fff;
  margin-left: 1%;
}
.cakeImgBox {
  width: 80%;
  height: 80%;
  /* background-color: #158388; */
  margin-left: 10%;
}
.tableBox {
  width: 100%;
  height: 70%;
  background-color: #fff;
  margin-top: 10px;
}

.tableTop {
  width: 96%;
  height: 10%;
  border-bottom: 1px solid #f5f5f5;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
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
</style>
