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
        威海市生态环境局举办2023年全市碳排放数据质量管理培训班
      </div>

      <p style="cursor:pointer;color:#031e59">来源：威海环境</p>
      <div style="line-height: 1.8;">
        准确可靠的碳排放数据是全国碳市场有效规范运行的生命线，为进一步提升我市重点排放单位碳排放数据质量管理工作，4月19日，威海市生态环境局组织举办2023年全市碳排放数据质量管理培训班，邀请山东省生态环境规划研究院应对气候变化研究所专家史晓梅作专题培训。各分局碳排放工作负责同志、全市22家碳排放重点排放单位的36名碳排放数据管理责任人参加了培训。培训中，史晓梅结合多年的碳排放数据质量管理工作经验，为大家解读《企业温室气体排放核算与报告指南发电设施》，详细讲解了...
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
