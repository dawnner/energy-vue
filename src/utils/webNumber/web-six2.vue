<template>
  <div class="box">
    <div style="height: 100px;"></div>
    <div class="box-one">NEWS</div>
    <div class="box-two">双碳资讯</div>
    <div class="box-three">
      <span class="three1">创建时间：2023-05-15</span>
      <span class="three2"
        ><i class="el-icon-star-on" style="color:darkgoldenrod"></i>收藏</span
      >
      <span class="three3"><i class="el-icon-view"></i> 浏览量：4</span>
    </div>
    <div class="box-four">
      <div style="text-align: center;font-size:25px">
        国电电力秦皇岛公司3号机组高低旁供热灵活性改造工程公开招标中标候选人公示
      </div>
      <p style="cursor:pointer;color:#031e59">来源：国家能源招标网</p>
      <div style="line-height: 1.8;">
        项目名称：国电电力秦皇岛公司3号机组高低旁供热灵活性改造工程公开招标
        招标编号及包号：CEZB230003034001 一、中标候选人情况
        标段（包）编号：CEZB230003034001 载明内容 第一中标候选人 第二中标候选人
        名称 中国能源建设集团江苏省电力建设第三工程有限公司
        中国电建集团河北工程有限公司 投标报价（人民币万元）1479.877071
        1492.000000 质量（如有） 满足要求 满足要求 工期（交货期）
        施工工期30，具体开工时间以招标方通知为准。30 资格能力条件 满足要求...
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
