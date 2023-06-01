<template>
  <div class="box">
    <div style="height: 100px;"></div>
    <div class="box-one">NEWS</div>
    <div class="box-two">双碳资讯</div>
    <div class="box-three">
      <span class="three1">创建时间：2023-05-11</span>
      <span class="three2"
        ><i class="el-icon-star-on" style="color:darkgoldenrod"></i>收藏</span
      >
      <span class="three3"><i class="el-icon-view"></i> 浏览量：4</span>
    </div>
    <div class="box-four">
      <div style="text-align: center;font-size:25px">
        我省对2023年全国碳市场重点任务进行部署
      </div>
      <p style="cursor:pointer;color:#031e59">来源：山西日报</p>
      <div style="line-height: 1.8;">
        为全面落实全国碳市场政策，扎实完成第二个履约周期各项工作任务，4月26日，省生态环境厅组织召开落实全国碳市场政策2023年重点任务部署会暨碳核查启动会，安排布置2023年全国碳市场重点工作任务，启动2022年度碳排放核查工作。
        建设全国碳排放权交易市场，是推动绿色低碳发展的一项重大制度创新。会议传达了生态环境部推进全国碳市场建设最新工作进展及工作要求，解读全国碳市场建设背景、制度体系、工作要点及核查工作技术要点，布置2023年我省落实全国碳市场政策重点工作任务。要求各市局、各技术单位要进一步深刻认识碳核查工作对全国碳市场平稳有序运行的重要作用，切实加强组织领导，构建工作机制，提升专业能力，确保核查质量，努力完成全国碳市场第二个履约周期工作任务。
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
