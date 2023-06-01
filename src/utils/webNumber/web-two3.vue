<template>
  <div class="box">
    <div style="height: 100px;"></div>
    <div class="box-one">NEWS</div>
    <div class="box-two">双碳资讯</div>
    <div class="box-three">
      <span class="three1">创建时间：2023-04-26</span>
      <span class="three2"
        ><i class="el-icon-star-on" style="color:darkgoldenrod"></i>收藏</span
      >
      <span class="three3"><i class="el-icon-view"></i> 浏览量：8</span>
    </div>
    <div class="box-four">
      <div style="text-align: center;font-size:25px">
        开滦集团协鑫发电公司顺利完成2022年度碳排放核查工作
      </div>
      <p style="cursor:pointer;color:#031e59">来源：河北省国资委</p>
      <div style="line-height: 1.8;">
        近日,河北省生态环境厅碳排放核查组到开滦协鑫发电公司开展为期两天的“2022年度碳排放现场核查”工作，该公司相关部门专业专工配合此次核查工作。
        碳排放管理是企业节能减排和绿色低碳发展的基础工作，为顺利高效地通过此次核查工作，开滦集团协鑫发电公司安健环部率领碳排放核查迎检小组，组织碳排放咨询服务机构全面盘点2022年度碳排放数据、自查自纠数据源与证据源，深入研讨新指南与新配额分配方法,严格按照河北省生态环境厅的要求准备核查材料。核查组工作人员通过查看生产报表、生产数据监测记录、相关规章制度和有关排放证据，对该公司2022年度碳排放工作进行认真检查，并在能源管理体系建设、报表数据出处等方面提出相关建议，圆满完成了此次碳排放复查工作。
        （开滦协鑫发电公司 实业发展公司） （魏雅楠）
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
