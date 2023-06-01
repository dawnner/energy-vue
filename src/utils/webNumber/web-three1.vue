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
        晋控电力蒲洲热电公司灵活性改造纯凝工况顺利通过验收
      </div>

      <p style="cursor:pointer;color:#031e59">
        来源：山西工人报
      </p>
      <div style="line-height: 1.8;">
        近日，晋控电力蒲洲热电公司灵活性改造纯凝工况验收试验全部顺利完成，标志着该公司两台机组均实现稳定工况最小出力120MW运行，为今后电网对火电机组未来调峰能力需求的变化奠定了基础。
        试验期间，该公司两台机组分别进行最小及最大出力、一次调频和AGC系统3项试验。在各项参数指标一切正常、设备稳定运行的情况下，机组及运行人员经受住考验，实现了纯凝工况最低出力120MW的深度调峰，为确定机组可调最低出力提供依据，也提升了运行人员的操作水平，为今后公司参与调峰打下坚实基础。（徐桢涛）
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
