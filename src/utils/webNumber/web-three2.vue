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
        热电厂召开热网改造项目首次会议
      </div>
      <p style="cursor:pointer;color:#031e59">来源：中钢热电厂</p>
      <div style="line-height: 1.8;">
        热电厂召开热网改造项目首次会议图片图片会议概况图片5月23日山西中阳钢铁有限公司中钢热电厂组织召开了热网改造技术交流会，参加会议的有供热公司、技术中心和中国市政工程华北设计研究总院，各方就现阶段供热方面存在的问题及解决方案进行了深入讨论。图片改造目的图片据悉，本次改造旨在应对逐年增加的供热面积，同时对目前存在的供回水温度偏差小、疏水温度高等问题进行优化。新热网供热能力尚存挖潜，本次我们将充分挖潜新热网的供热能力，从而缓解旧热网的供热压力，更好的满足供热需求。图片会议成果图片会议讨论初步决定，将新热网分成两路，一台加热器供沟门以下的热用户，另两台加热器新增一路供热管道至沟门与原供热管道碰口，延伸至乔家沟隔热站。下一步，经中国市政工程华北设计研究总院根据外网勘测情况，出具具体改造方案，再进行深度讨论。确保热网改造目标按期完成，为采暖季供热系统安全稳定运行打好坚实的基础。
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
