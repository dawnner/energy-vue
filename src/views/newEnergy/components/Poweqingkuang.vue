<template>
  <div class="box">
    <div class="topBox">
      <div class="topTwo">
        <div class="tableTopLeft">
          <div>电源类型 <input type="text" /></div>
          <div>发电类型 <input type="text" /></div>
          <div>流程类型 <input type="text" /></div>
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
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column
            prop="date"
            label="项目编号"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="项目名称"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="address" label="电源分类" align="center">
          </el-table-column>
          <el-table-column prop="address" label="发电类型" align="center">
          </el-table-column>
          <el-table-column prop="address" label="项目类型" align="center">
          </el-table-column>
          <el-table-column prop="address" label="企业名称" align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="统一社会信用代码"
            align="center"
          >
          </el-table-column
          ><el-table-column prop="address" label="所属最高集团" align="center">
          </el-table-column>
          <el-table-column prop="address" label="接入电压等级" align="center">
          </el-table-column>
          <el-table-column prop="address" label="流程状态" align="center">
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
export default {
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
  }
};
</script>

<style scoped>
/deep/.el-table__header-wrapper .el-checkbox:last-of-type {
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
  width: 60%;
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
</style>
