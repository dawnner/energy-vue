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
        中阳钢铁热电厂顺利完成2022年度碳核查
      </div>
      <p style="cursor:pointer;color:#031e59">来源：中阳钢铁</p>
      <div style="line-height: 1.8;">
        日前，由省生态环境厅委托的第三方核查机构——中国国检测试控股集团股份有限公司和山西云平台环保管家发展有限公司，联合对中阳钢铁热电厂2022年度碳排放进行现场核查。在首次会议上，双方就核查期间的工作需求、配合事项作了表态发言。图片核查过程中，核查组通过文件资料审查、现场走访、数据交叉比对等方式，对热电厂提交的碳排放报告和相关数据，收集汇总、详细核查，以此来判断数据质量控制计划的符合性，企业温室气体排放报告的真实可靠性。核查结束后，双方就存在问题进行了深入地交流和探讨。中阳钢铁表态，会继续深入贯彻落实国家的碳达峰碳中和目标任务，积极整改存在问题，扎实推进碳排放管理工作，为实现“双碳”目标勇担企业责任、履行企业担当。
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
