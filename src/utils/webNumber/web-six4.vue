<template>
  <div class="box">
    <div style="height: 100px;"></div>
    <div class="box-one">NEWS</div>
    <div class="box-two">双碳资讯</div>
    <div class="box-three">
      <span class="three1">创建时间：2023-04-21</span>
      <span class="three2"
        ><i class="el-icon-star-on" style="color:darkgoldenrod"></i>收藏</span
      >
      <span class="three3"><i class="el-icon-view"></i> 浏览量：5</span>
    </div>
    <div class="box-four">
      <div style="text-align: center;font-size:25px">
        国电电力三河公司1号机组深调峰给水系统改造及控制、燃烧系统优化工程公开招标项目招标公告
      </div>

      <p style="cursor:pointer;color:#031e59">来源：国家能源招标网</p>
      <div style="line-height: 1.8;">
        第一章 公开招标 1.招标条件
        本招标项目名称为：国电电力三河公司1号机组深调峰给水系统改造及控制、燃烧系统优化工程公开招标，项目招标编号为：CEZB230004124，招标人为三河发电有限责任公司，项目单位为：三河发电有限责任公司，资金来源为自筹。招标代理机构为国家能源集团国际工程咨询有限公司。本项目已具备招标条件，现对该项目进行国内资格后审公开招标。
        2.项目概况与招标范围 2.1
        项目概况、招标范围及标段（包）划分：项目概况：十四五”期间，我国的能源生产结构和消费结构呈现...
      </div>
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
