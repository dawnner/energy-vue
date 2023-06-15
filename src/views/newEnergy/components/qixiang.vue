<template>
  <div class="box">
    <div class="topBox">
      <div class="topLeft">
        <div class="topLeftNum">
          <div class="sheng">
            <p>全省光伏场站年平均太阳辐射强度</p>
            <div class="shengNum">
              <span>1156</span>
              <p>瓦/球面度</p>
            </div>
          </div>
          <div class="sheng">
            <p>全省风电场站年平均风速</p>
            <div class="shengNum" style="background-color: #EDFEFF;">
              <span style="color:#158388">213</span>
              <p>公里/小时</p>
            </div>
          </div>
        </div>

        <div class="topLeftBottom">
          <div class="topLeftData">
            <img src="../../../assets/CoalElectricity/组 1380.png" alt="" />
            <input type="text" />
            <img src="../../../assets/CoalElectricity/组 1381.png" alt="" />
          </div>
          <div class="bottomMonth">
            <div class="tuodong">
              <img src="../../../assets/CoalElectricity/24gf-play.png" alt="" />
              <el-slider v-model="value2" :show-tooltip="false"> </el-slider>
            </div>
            <div class="month">
              <div class="monthBox" v-for="item in month" :key="item.id">
                <span></span>
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottomBox">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120"> </el-table-column
        ><el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column label="操作" width="100">
          <!-- <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template> -->
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value2: 1,
      month: [
        { id: 1, name: "1月" },
        { id: 2, name: "2月" },
        { id: 3, name: "3月" },
        { id: 4, name: "4月" },
        { id: 5, name: "5月" },
        { id: 6, name: "6月" },
        { id: 7, name: "7月" },
        { id: 8, name: "8月" },
        { id: 9, name: "9月" },
        { id: 10, name: "10月" },
        { id: 11, name: "11月" },
        { id: 12, name: "12月" }
      ],
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
        }
      ]
    };
  }
};
</script>

<style scoped>
/* 设置滚动条宽度和高度 */
/deep/ .el-table__body-wrapper::-webkit-scrollbar {
  width: 8px; /* 横向滚动条 */
  height: 8px; /* 纵向滚动条 必写 */
}
/* 设置滚动条样式 */
/deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #dde;
  border-radius: 3px;
}
/deep/.el-table__header-wrapper .el-checkbox:last-of-type {
  display: none !important;
}
.topLeftBottom {
  width: 100%;
  height: 29%;
  background-color: #fff;
  margin-top: 1%;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.topBox {
  width: 99%;
  height: 55%;
  /* background-color: aqua; */
  margin: 10px;
}
.topLeft {
  width: 25%;
  height: 100%;
  /* background-color: aquamarine; */
}
.topLeftNum {
  width: 100%;
  height: 70%;
  background-color: #fff;
  overflow: hidden;
}
.sheng {
  width: 90%;
  height: 45%;
  /* background-color: bisque; */
  overflow: hidden;
  margin: 10px auto;
}
.sheng p {
  font-size: 18px;
  text-align: center;
  font-family: SimHei;
  font-weight: 400;
  color: #333333;
  margin-top: 10px;
}
.shengNum {
  width: 100%;
  height: 100%;
  background-color: #fff8ed;
}
.shengNum span {
  display: block;
  font-size: 40px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #dc9353;
  text-align: center;
  padding-top: 15px;
}
.topLeftData {
  width: 100%;
  height: 40%;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topLeftData input {
  width: 25%;
  height: 30px;
  border: none;
  background-color: #f5f5f5;
  margin: 0 20px;
  border-radius: 4px;
}
.bottomMonth {
  width: 100%;
  height: 60%;
  /* background-color: yellow; */
}
.tuodong img {
  width: 15px;
  height: 15px;
  margin: 0 10px;
}
.tuodong {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-slider {
  width: 80%;
  margin-left: 10px;
}
/deep/.el-slider__button {
  border: 2px solid #000 !important;
  background-color: #000;
}
/deep/.el-slider__bar {
  background-color: #7d7d7d;
}
/deep/ .el-slider__stop {
  background-color: #e2e2e2;
}
.month {
  display: flex;
  margin-left: 10%;
  justify-content: center;
}
.month span {
  display: block;
  width: 1px;
  height: 8px;
  background: #81838d;
  /* margin-left: 5%; */
  margin: 0 auto;
}
.monthBox {
  width: 7.5%;
  /* background-color: #7d7d7d; */
  height: 45px;
  text-align: center;
  font-size: 12px;
}

.bottomBox {
  width: 99%;
  height: 45%;
  margin: 10px;
  background-color: #fff;
}
</style>
