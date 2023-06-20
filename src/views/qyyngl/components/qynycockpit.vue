<template>
  <div class="Box">
    <div class="headerBox">
      <div class="headerImg">
        <img src="../../../assets/CoalElectricity/头部.png" alt="" />
      </div>
      <div class="headerTitle">
        山东电网企业能源驾驶舱
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Box {
  width: 100%;
  height: 100%;
}
.headerBox {
  width: 100%;
  height: 10%;
  /* background-color: aquamarine; */
  position: relative;
}
.headerTitle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -75%);
  font-size: 40px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  line-height: 28px;
}
</style>
