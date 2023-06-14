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
          <cakeEcharts style="width: 100%;height: 100%;"></cakeEcharts>
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
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="date" label="日期" width="80" align="center">
          </el-table-column>
          <el-table-column prop="name" label="1" width="180" align="center">
          </el-table-column>
          <el-table-column prop="address" label="2" align="center">
          </el-table-column>
          <el-table-column prop="address" label="3" align="center">
          </el-table-column>
          <el-table-column prop="address" label="4" align="center">
          </el-table-column>
          <el-table-column prop="address" label="5" align="center">
          </el-table-column>
          <el-table-column prop="address" label="6" align="center">
          </el-table-column
          ><el-table-column prop="address" label="2" align="center">
          </el-table-column>
          <el-table-column prop="address" label="7" align="center">
          </el-table-column>
          <el-table-column prop="address" label="8" align="center">
          </el-table-column>
          <el-table-column prop="address" label="9" align="center">
          </el-table-column>
          <el-table-column prop="address" label="10" align="center">
          </el-table-column>
        </el-table>
      </div>

      <!-- 分页 -->
      <div class="pageBox">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import cakeEcharts from "./cakeEcharts.vue";
export default {
  name: "oneEnergy",
  components: {
    cakeEcharts
  },
  data() {
    return {
      tableData: [
        {
          date: "用电负荷(kw)",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "发电负荷(kw)",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "外电负荷(kw)",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "外电负荷(kw)",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "外电负荷(kw)",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "外电负荷(kw)",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "外电负荷(kw)",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "外电负荷(kw)",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
/deep/.el-table__header-wrapper .el-checkbox:last-of-type {
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
  align-items: center;
  justify-content: center;
}
.btn span {
  margin-left: 5px;
}
.tableCenter {
  width: 96%;
  height: 75%;
  background-color: #ffa00a;
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
</style>
