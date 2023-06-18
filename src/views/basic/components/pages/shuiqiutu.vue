<template>
  <div
    style="height: 100%; width: 100%; display: flex; align-items: center;justify-content: space-around;"
  >
    <div class="shuiqiuone">
      <div class="ImgBox">
        <img src="../../../../assets/CoalElectricity/组 1371.png" alt="" />
      </div>
      <div class="titleBox">
        全网发电量
      </div>
      <div class="numBox">
        15666.12
      </div>
      <div class="danwei">
        (万KW·h)
      </div>
    </div>
    <div class="shuiqiuone" style="background-color: #FFF6F8;">
      <div class="ImgBox">
        <img src="../../../../assets/CoalElectricity/1372.png" alt="" />
      </div>
      <div class="titleBox">
        常规电源发电量
      </div>
      <div class="numBox" style="color: #FA6C8D;">
        14666.12
      </div>
      <div class="danwei">
        (万KW·h)
      </div>
    </div>
    <div class="shuiqiuone" style="background-color: #F8F3FF;">
      <div class="ImgBox">
        <img src="../../../../assets/CoalElectricity/1373.png" alt="" />
      </div>
      <div class="titleBox">
        新能源发电量
      </div>
      <div class="numBox" style="color: #9B6CEF;">
        13666.12
      </div>
      <div class="danwei">
        (万KW·h)
      </div>
    </div>
    <div class="shuiqiuone" style="background-color: #FFF7F3;">
      <div class="ImgBox">
        <img src="../../../../assets/CoalElectricity/1374.png" alt="" />
      </div>
      <div class="titleBox">
        储能发电量
      </div>
      <div class="numBox" style="color: #F8925A;">
        12666.12
      </div>
      <div class="danwei">
        (万KW·h)
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.shuiqiuone {
  width: 22%;
  height: 90%;
  background-color: #eefffa;
  border-bottom: 0px;
}
.ImgBox {
  width: 100%;
  height: 42%;
  /* background-color: aqua; */
  /* margin: 0 auto; */
  text-align: center;
}
.titleBox {
  width: 100%;
  height: 13%;
  /* background-color: aquamarine; */
  margin-top: 5px;
  text-align: center;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
}
.numBox {
  width: 100%;
  height: 15%;
  /* background-color: violet; */
  margin-top: 10px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #47d4bb;
  text-align: center;
}
.danwei {
  width: 100%;
  height: 15%;
  /* background-color: tomato; */
  font-size: 14px;
  font-family: SimHei;
  font-weight: 400;
  color: #666666;
  text-align: center;
  margin-top: 5px;
}
</style>
