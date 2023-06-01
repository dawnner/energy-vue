<template>
  <div class="box">
    <div style="height: 100px;"></div>
    <div class="box-one">NEWS</div>
    <div class="box-two">双碳资讯</div>
    <div class="box-three">
      <span class="three1">创建时间：2023-05-16</span>
      <span class="three2"
        ><i class="el-icon-star-on" style="color:darkgoldenrod"></i>收藏</span
      >
      <span class="three3"><i class="el-icon-view"></i> 浏览量：5</span>
    </div>
    <div class="box-four">
      <div style="text-align: center;font-size:25px">
        中国工商银行晋中分行成功发放首笔煤电保供贷款
      </div>

      <p style="cursor:pointer;color:#031e59">
        来源：黄河新闻网晋中频道
      </p>
      <div style="line-height: 1.8;">
        煤电保供是2022年冬季至2023年春季我国能源保供领域的重点工作。2022年国家发改委、人民银行根据国务院保暖保供会议精神联合召开专题会议，部署金融支持煤电企业安全保供工作，要求加大对煤电企业金融支持力度，采取有力举措纾解企业实际困难。总行下发了经发改委筛选的重点保供企业名单，名单内包含晋中市辖内重点保供企业山西瑞光热电有限责任公司。工商银行晋中分行根据上级行关于加快煤电保供贷款投放工作力度要求，积极与企业对接，经过多次沟通协调，克服种种困难，在3月底前成功发...
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
