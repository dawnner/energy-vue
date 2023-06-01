<template>
  <div style="width:100%;height:100%;position: relative;">
    <!-- <div
      style="position: absolute;top:5%;left:5%;width:400px;height:30px;z-index:22"
    >
      <search></search>
    </div> -->
    <!-- <map-container style="width:100%;height:100%"></map-container> -->
    <map-cgui style="width:100%;height:70%"></map-cgui>
  </div>
</template>

<script>
import { mapGuanliHistogram, mapGuanFuel } from "../../api/mapGl/mapgl";
import mapCgui from "./components/mapCgui.vue";
import search from "./components/search.vue";
export default {
  data() {
    return {};
  },
  components: { mapCgui, search },
  methods: {
    async mapGuanliHistogram() {
      const { rows } = await mapGuanliHistogram();
      console.log(rows);
    },
    async mapGuanFuel() {
      const { rows } = await mapGuanFuel();
      console.log(rows);
    }
  },
  created() {
    // 企业用能管理公司柱状图信息
    this.mapGuanliHistogram();
    // 企业用能管理公司往年燃料对比图信息
    this.mapGuanFuel();
  }
};
</script>

<style></style>
