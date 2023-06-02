<template>
  <div style="width:100%;height:100%;position: relative;">
    <map-cgui style="width:100%;height:70%"></map-cgui>
    <div style="width:100%;height:25%;display:flex">
      <localemissions
        style="width:50%;height:100%"
        ref="localEmissions"
      ></localemissions>
      <fuelcomparison
        style="width:50%;height:100%"
        ref="comparison"
      ></fuelcomparison>
    </div>
  </div>
</template>

<script>
import { mapGuanliHistogram, mapGuanFuel } from "../../api/mapGl/mapgl";
import mapCgui from "./components/mapCgui.vue";
import localemissions from "./components/localEmissions.vue";
import fuelcomparison from "./components/fuelComparison.vue";
export default {
  data() {
    return {};
  },
  components: { mapCgui, localemissions, fuelcomparison },
  methods: {
    async mapGuanliHistogram() {
      const { rows } = await mapGuanliHistogram();
      this.$refs.localEmissions.localEmissions(rows);
      console.log(rows);
    }
    // async mapGuanFuel() {
    //   const { rows } = await mapGuanFuel();
    //   this.$refs.comparison.fuelcomparison(rows);
    //   console.log(rows);
    // }
  },
  created() {
    // 企业用能管理公司柱状图信息
    this.mapGuanliHistogram();
    // 企业用能管理公司往年燃料对比图信息
    // this.mapGuanFuel();
  }
};
</script>

<style></style>
