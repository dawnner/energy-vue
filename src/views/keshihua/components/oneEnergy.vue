<template>
  <div class="oneEnergyBox">
    <!-- 上部分 -->
    <div class="oneEnergyTop">
      <!-- 左 -->
      <div class="leftTop">
        <!-- 左边盒子内容 -->
        <div class="leftTopBox">
          <div class="leftContent">
            <div class="leftContentTop">
              <div style="display: flex;align-items: center;">
                <img src="../../../assets/gdbz/left2.png" alt="" />
                <span class="fontStyle">常规电源</span>
              </div>
            </div>

            <div class="leftContentBottom">
              计划发电1000wkw 发电占比30%
            </div>
          </div>
          <div class="leftImg">
            <img src="../../../assets/gdbz/left1.png" alt="" />
          </div>
        </div>
      </div>

      <!-- 中 -->
      <div class="cententTop">
        <div class="leftTopBox">
          <div class="leftContent">
            <div class="leftContentTop">
              <div style="display: flex;align-items: center;">
                <img src="../../../assets/gdbz/centent1.png" alt="" />
                <span class="fontStyle">新能源</span>
              </div>
            </div>

            <div class="leftContentBottom">
              计划发电1000wkw 发电占比30%
            </div>
          </div>
          <div class="leftImg">
            <img src="../../../assets/gdbz/centent2.png" alt="" />
          </div>
        </div>
      </div>

      <!-- 右 -->
      <div class="rightTop">
        <div class="leftTopBox">
          <div class="leftContent">
            <div class="leftContentTop">
              <div style="display: flex;align-items: center;">
                <img src="../../../assets/gdbz/right1.png" alt="" />
                <span class="fontStyle">外电入鲁</span>
              </div>
            </div>

            <div class="leftContentBottom">
              供应计划发电1000wkw 发电占比30%
            </div>
          </div>
          <div class="leftImg">
            <img src="../../../assets/gdbz/right2.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 图表 -->
    <div class="myEcharts">
      <gybzEcharts style="width: 100%; height: 100%"></gybzEcharts>
    </div>

    <!-- 表格 -->
    <div class="tableBox">
      <el-table :data="tableData" style="width: 100%">
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
  </div>
</template>

<script>
import gybzEcharts from "../components/gybzEcharts.vue";
export default {
  name: "oneEnergy",
  components: {
    gybzEcharts
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
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.oneEnergyBox {
  width: 100%;
}
.oneEnergyTop {
  width: 100%;
  height: 170px;
  background-color: #fff;
  border-radius: 9px;
  display: flex;
}
.leftTop {
  width: 33%;
  height: 100%;
  background: linear-gradient(to right, #46e0d6, #1099d1);
  border-radius: 9px;
}
.cententTop {
  width: 32%;
  height: 100%;
  background: linear-gradient(to right, #f8cf8b, #f35969);
  border-radius: 9px;
  margin: 0px 1%;
}
.rightTop {
  width: 33%;
  height: 100%;
  background: linear-gradient(to right, #a7cdfe, #764ffd);
  border-radius: 9px;
}
.leftTopBox {
  width: 90%;
  height: 70%;
  // background-color: #fff;
  margin-top: 4.5%;
  margin-left: 7%;
  display: flex;
}
.leftContent {
  width: 80%;
  height: 100%;
  // background-color: #f35969;
}
.leftImg {
  width: 20%;
  height: 100%;
  // background-color: #f8cf8b;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fontStyle {
  font-size: 18px;
  color: #fff;
  margin-left: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
}
.leftContentBottom {
  font-size: 24px;
  font-family: SimHei;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-top: 30px;
}
.myEcharts {
  width: 100%;
  height: 500px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
}
.tableBox {
  margin-top: 10px;
}
</style>
