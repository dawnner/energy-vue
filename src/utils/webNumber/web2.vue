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
        河北省生态环境厅到景县碳排放重点企业进行帮扶调研
      </div>
      <p style="cursor:pointer;color:#031e59">来源：景县环保发布1</p>
      <div style="line-height: 1.8;">
        4月26日，河北省生态环境厅应对气候变化处刘英敏副处长、徐光仪主任，衡水市生态环境局副局长崔延斌、大气科科长张辉等领导到景县春源热力有限公司对我县碳排放重点企业进行帮扶调研。帮扶中通过听取汇报、查看现场等方式，对企业碳排放管理工作开展情况进行了详细了解。刘英敏副处长一行首先会议听取了企业碳排放报告核查机构关于核查工作进度的汇报，了解核查工作中存在的困难和问题。组织专家对核查工作中遇到的困难和问题进行了解答。同时对企业开展帮扶调研，切实了解企业在历年度碳排...
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
