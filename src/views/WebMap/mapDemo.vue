<template>
  <baidu-map
    class="map"
    ak="YOUR_APP_KEY"
    @ready="getMap2"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
    <bm-control>
      <button @click="openDistanceTool">开启测距</button>
    </bm-control>
    <bm-marker
      v-for="(item, index) in mapMessage"
      :position="{ lng: item.longitude, lat: item.latitude }"
      :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 300, height: 157}}"
      :key="item.id"
      @mouseover="getBaiduMapPoint(item, index)"
      @mouseout="outBaiduMapPoint(item, index)"
    >
    </bm-marker>
    <!-- </bml-marker-clusterer> -->
    <bm-info-window
      :position="{ lng: longitude, lat: latitude }"
      :show="infoWindowShow"
      @clickclose="infoWindowClose"
      @open="infoWindowOpen"
    >
      <div class="container">
        <span>{{ corporateName }}</span>
        <!-- <p>地区:{{ area }}</p>
        <p>行业:{{ industry }}</p>
        <p>所在市区:{{ city }}</p> -->
      </div>
    </bm-info-window>
    <bm-boundary
      name="山东省"
      :strokeWeight="2"
      strokeColor="#f9fdff"
      :fillOpacity="0.001"
    ></bm-boundary>
    <bm-geolocation
      anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
      :showAddressBar="true"
      :autoLocation="true"
    ></bm-geolocation>
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
  </baidu-map>
</template>

<script>
// 写在自己需要用到的组件中src\views\system\user\profile\map.vue
import { BmlMarkerClusterer } from "vue-baidu-map";
import { mapEnergy } from "@/api/mapGl/mapgl";
import mapDemo from "../WebMap/mapDemo.json";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import DistanceTool from "bmaplib.distancetool";

export default {
  components: {
    BaiduMap,
    DistanceTool,
    BmlMarkerClusterer
  },
  data() {
    return {
      mapMessage: [],
      searchJingwei: "",
      corporateName: "",
      current: 0,
      infoWindowShow: false,
      longitude: "",
      latitude: "",
      area: "",
      city: "",
      industry: "",
      point: "",
      BMap: null, // 百度地图对象
      map: null // 百度地图实例
    };
  },
  unmount() {
    distanceTool && distanceTool.close();
  },
  created () {
    this.mapEnergy()
  },
  methods: {
    async mapEnergy() {
      const { rows } = await mapEnergy();
      this.mapMessage = rows;
    },
    getBaiduMapPoint(item, i) {
      if (item) {
        let that = this;
        that.current = i;
        this.corporateName = item.enterpriseName;
        that.area = item.City;
        this.city = item.County;
        that.industry = item.type;
        let str = item.name ? item.name : this.searchJingwei;
        let myGeo = new this.BMap.Geocoder();
        myGeo.getPoint(str, function(point) {
          if (point) {
            point.lat = item.latitude;
            point.lng = item.longitude;
            that.map.centerAndZoom(point, 15);
            that.latitude = item.latitude;
            that.longitude = item.longitude;
            that.infoWindowShow = true;
          }
        });
      }
    },
    outBaiduMapPoint(item, i) {
      if (item) {
        let that = this;
        that.infoWindowShow = false;
      }
    },
    infoWindowClose() {
      this.latitude = "";
      this.longitude = "";
      this.infoWindowShow = false;
    },
    infoWindowOpen() {
      this.infoWindowShow = true;
    },
    getMap2({ BMap, map }) {
      this.point = new BMap.Point(117.02, 36.4);
      map.centerAndZoom(this.point, 15);
      this.BMap = BMap;
      this.map = map;
      this.distanceTool = new DistanceTool(map, { lineStroke: 2 });
      this.addMapOverlay(map, "山东");
    },
    openDistanceTool(e) {
      const { distanceTool } = this;
      distanceTool && distanceTool.open();
    },
    addMapOverlay(map, cityName) {
      let bdary = new BMap.Boundary();
      bdary.get(cityName, rs => {
        //获取行政区域

        let EN_JW = "180, 90;"; //东北角
        let NW_JW = "-180, 90;"; //西北角
        let WS_JW = "-180, -90;"; //西南角
        let SE_JW = "180, -90;"; //东南角
        // max length index
        let maxIndex = -1;
        let maxLength = 0;
        for (let i = 0; i < rs.boundaries.length; i++) {
          if (rs.boundaries[i].length > maxLength) {
            maxLength = rs.boundaries[i].length;
            maxIndex = i;
          }
        }

        // 添加环形遮罩层(圈出最大区域，剩余遮罩)
        let ply1 = new BMap.Polygon(
          rs.boundaries[maxIndex] +
            ";" +
            rs.boundaries[maxIndex].split(";")[0] +
            ";" +
            SE_JW +
            WS_JW +
            NW_JW +
            EN_JW +
            SE_JW,
          {
            strokeColor: "#f3feff",
            fillColor: "#f3feff",
            fillOpacity: 1,
            strokeOpacity: 1
          }
        );
        // 建立多边形覆盖物
        map.addOverlay(ply1);
        // 添加边界
        var pointArray = [];
        for (var i = 0; i < rs.boundaries.length; i++) {
          var ply = new BMap.Polygon(rs.boundaries[i], {
            strokeWeight: 3,
            strokeColor: "#f9fdff",
            fillColor: "#99cdf9"
          }); //建立多边形覆盖物
          map.addOverlay(ply); //添加覆盖物
          pointArray = pointArray.concat(ply.getPath());
        }
        map.setViewport(pointArray);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 550px;
}
.container {
  height: 200px;
  width: 200px;
  overflow: auto;
  span {
    font-weight: 600;
  }
}
::v-deep .BMap_cpyCtrl {
  display: none !important;
}
::v-deep .anchorBL {
  display: none !important;
}
</style>
