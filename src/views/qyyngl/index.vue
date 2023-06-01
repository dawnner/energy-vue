<template>
  <div style="width:100%;height:100%;position: relative;">
    <div
      style="position: absolute;top:5%;left:5%;width:400px;height:30px;z-index:22"
    >
      <search></search>
    </div>
    <!-- <map-container style="width:100%;height:100%"></map-container> -->
  </div>
</template>

<script>
import { mapGuanliHistogram } from "../../api/mapGl/mapgl";
// import MapContainer from "./components/MapContainer.vue";
import mapCgui from "./components/mapCgui.vue";
import search from "./components/search.vue";
// import { mapGuanli } from "../../api/mapGl/mapgl";
export default {
  data() {
    return {};
  },
  components: { mapCgui, search },
  methods: {
    async mapGuanliHistogram() {
      const commt = await mapGuanliHistogram();
      console.log(commt);
    }
  },
  created() {
    this.mapGuanliHistogram();
  }
};
</script>

<style></style>
