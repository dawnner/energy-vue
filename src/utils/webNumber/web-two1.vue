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
        公司圆满完成2022年度碳排放现场核查工作
      </div>

      <p style="cursor:pointer;color:#031e59">
        来源：无棣县新星热电有限责任公司
      </p>
      <div style="line-height: 1.8;">
        2023年5月10日至5月12日省环保局委派第三方中国船级社质量认证公司对我公司2022年度碳排放现场核查。
        该公司领导高度重视，精心筹划，由环保部牵头，指定专人负责相关工作的准备和实施，公司第三方零碳能源科技（山东）有限公司、县环保局相关人员共同陪同核查工作。
        核查组根据行业核查指南等相关技术规范，对公司提交的排放报告及数据质量控制计划等支撑材料进行文件评审。调阅公司提交的相关支撑材料如排污许可证、电力业务许可证、组织结构图、工艺流程图、各专业运行规程、设施台账、生产日志、检测设备和计量器具台账、支撑报送数据的原始凭证，以及数据内部质量控制和质量保证相关文件和记录等，确认报送信息的真实性、准确性以及与数据质量控制计划的符合性。
        公司将按照检查组提出的问题进行及时、全面的整改，及时纠错，确保碳排放工作向更规范、更标准的层次开展。
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
