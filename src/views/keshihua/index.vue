<template>
  <div>
    页面一
    <div style="width: 1000px; height: 1000px">
      <div class="reback" @click="back">返回</div>
      <map-shandong
        @changeCitys="changeCitys"
        ref="mapBack"
        style="width: 100%; height: 60%; margin-top: 12px"
      >
      </map-shandong>
    </div>
  </div>
</template>

<script>
import MapShandong from "./MapShandong.vue";
export default {
  methods: {
    changeCitys(e) {
      this.platformList = e;
    },
    back() {
      this.$refs.mapBack.backUp();
    },
  },
  components: {
    MapShandong,
  },
};
</script>

<style>
.reback {
  position: absolute;
  left: 33%;
  bottom: 75%;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  z-index: 999;
  /* // border: 1px solid #00ffff;
  // width: 5rem;
  // height: 2rem;
  // border-radius: 15px; */
}
</style>
