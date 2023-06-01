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
        烟台市首笔碳排放权质押融资业务落地中国光大银行烟台分行
      </div>
      <p style="cursor:pointer;color:#031e59">来源：大小新闻</p>
      <div style="line-height: 1.8;">
        今年2月，以全国碳排放权交易市场为平台，中国光大银行烟台分行依托总行“碳易通”金融场景，成功为莱阳市热电有限公司办理烟台市首笔碳排放权质押融资业务，支持企业在服务民生、产能提升中实现绿色低碳转型发展。莱阳市热电有限公司是莱阳地区重点供热企业，供热区域覆盖莱阳市一半的区域，为当地民生行业重点企业。为加强绿色工厂建设，推进企业绿色转型升级，莱阳市热电有限公司积极响应上级主管部门号召，深入推进老旧设备改造、工艺标准优化、节能减排与降耗增效，“我们投入资金进行...
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
