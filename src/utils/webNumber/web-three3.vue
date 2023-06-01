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
        协会完成《火电机组储能调频技术开发与应用》技术成果鉴定会
      </div>
      <p style="cursor:pointer;color:#031e59">来源：山东省电力行业协会</p>
      <div style="line-height: 1.8;">
        5月19日，山东省电力行业协会通过视频会议的方式召开了由大唐临清热电有限公司完成的“火电机组储能调频技术开发与应用”技术成果鉴定会。
        本次会议由山东省电力行业协会组织召开，会议邀请了青岛大学、山东大学、西安交通大学、大唐集团科研院、华电电科院山东分院等相关专家组成鉴定委员会。
        会上，鉴定委员会听取了项目的研究工作报告、技术经济分析报告、科技查新报告等汇报，审阅了相关鉴定资料。鉴定委员会认为,项目针对350MW超临界燃煤热电联产机组，在大流量（350t/h工业供汽+300
        t/h采暖供热）工况下无法进行调频的现状，开发了一套电化学储能辅助机组调频系统，实现全工况下单机组和双机组同时调频；项目采用改进型单芯180Ah大容量1C倍率电池，通过2并12串组合方式，实现了单芯电池运行中充放电电流小，发热量低，大幅提高了储能系统的安全性。项目采用机器人储能舱智能巡检，通过与BMS和EMS多系统数据共享，实现了储能系统运行状态参数的实时监测和分析。项目成果整体达到国内领先水平，通过技术成果鉴定。
        下一步，协会将积极协助项目完成单位继续做好项目成果总结，发挥行业平台作用，推动成果广泛应用。
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
