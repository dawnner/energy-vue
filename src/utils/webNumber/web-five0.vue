<template>
  <div class="box">
    <div style="height: 100px;"></div>
    <div class="box-one">NEWS</div>
    <div class="box-two">双碳资讯</div>
    <div class="box-three">
      <span class="three1">创建时间：2023-05-17</span>
      <span class="three2"
        ><i class="el-icon-star-on" style="color:darkgoldenrod"></i>收藏</span
      >
      <span class="three3"><i class="el-icon-view"></i> 浏览量：5</span>
    </div>
    <div class="box-four">
      <div style="text-align: center;font-size:25px">
        600219
        南山铝业：山东南山铝业股份有限公司2022年度环境、社会及管治报告（中文版）
      </div>
      <p style="cursor:pointer;color:#031e59">来源：上海证券交易所</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box-one {
  width: 1200px;
  text-align: center;
  font-size: 50px;
  color: #031e59;
  font-weight: 700;
}
.box-two {
  width: 1200px;
  text-align: center;
  font-size: 30px;
  color: #031e59;
}
.box-three {
  width: 1200px;
  height: 30px;
  margin-bottom: 20px;
  position: relative;
  border-bottom: 2px solid #031e59;
}
.three1 {
  position: absolute;
  font-size: 13px;
  color: #9a9a9a;
  left: 0;
}
.three2 {
  position: absolute;
  font-size: 13px;
  color: #9a9a9a;
  right: 106px;
}
.three3 {
  position: absolute;
  font-size: 13px;
  color: #9a9a9a;
  right: 0;
}
.box-four {
  width: 1000px;
}
</style>
