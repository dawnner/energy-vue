<template>
  <baidu-map
    class="map"
    ak="YOUR_APP_KEY"
    @ready="getMap2"
    :zoom="10"
    :scroll-wheel-zoom="true"
  >
    <div class="message">
      <h5
        v-for="(item, index) in mapMessage"
        :value="item.name"
        :key="item.name"
        @click="getBaiduMapPoint(item, index)"
        :class="{ active: index === current }"
      >
        {{ item.name }}
      </h5>
    </div>
    <bm-control>
      <button @click="openDistanceTool">开启测距</button>
    </bm-control>
    <div style="position:absolute;top: 0px;left: 84px">
      <bm-auto-complete v-model="searchJingwei" :sugStyle="{ zIndex: 999999 }">
        <el-input
          v-model="searchJingwei"
          style="width:300px;margin-right:15px"
          placeholder="输入地址"
          clearable
        ></el-input>
      </bm-auto-complete>
      <el-button type="primary" @click="getBaiduMapPoint">搜索</el-button>
    </div>
    <!-- <bml-marker-clusterer :averageCenter="true"> -->
    <bm-marker
      v-for="(item, index) in mapMessage"
      :position="{ lng: item.Longitude, lat: item.Latitude }"
      :key="item.name"
      @mouseover="getBaiduMapPoint(item, index)"
      @mouseout="outBaiduMapPoint(item, index)"
    >
      <bm-label
        :content="item.name"
        :title="corporateName"
        labelStyle="{color: '#2b4391', border: 'none', boxShadow: '0 0 0 1px #2b4391', fontSize : '14px', borderRadius: '15px',}"
        :offset="{ width: -35, height: 30 }"
      />
    </bm-marker>
    <!-- </bml-marker-clusterer> -->
    <bm-info-window
      :position="{ lng: Longitude, lat: Latitude }"
      :show="infoWindowShow"
      @clickclose="infoWindowClose"
      @open="infoWindowOpen"
    >
      <div class="container">
        <span>{{ corporateName }}</span>
        <p>地区:{{ area }}</p>
        <p>行业:{{ industry }}</p>
        <p>所在市区:{{ city }}</p>
      </div>
    </bm-info-window>
    <bm-boundary
      name="山东省"
      :strokeWeight="2"
      strokeColor="blue"
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
import mapJson from "../WebMap/map.json";
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
      mapMessage: mapJson,
      searchJingwei: "",
      corporateName: "",
      current: 0,
      infoWindowShow: false,
      Longitude: "",
      Latitude: "",
      area: "",
      city: "",
      industry: "",
      point: "",
      BMap: null, // 百度地图对象
      map: null // 百度地图实例
    };
  },
  mounted() {
    console.log(this.mapMessage);

    // this.corporateName = this.mapMessage.map(item => {
    //   return item.name
    // })
    // console.log(this.corporateName)
    // for (let i= 0; i<this.mapMessage.length; i++) {
    //   this.corporateName = this.mapMessage[i].name
    //   console.log(this.corporateName)
    // }
  },
  unmount() {
    distanceTool && distanceTool.close();
  },
  methods: {
    getBaiduMapPoint(item, i) {
      if (item) {
        console.log(item);
        let that = this;
        that.current = i;
        this.corporateName = item.name;
        that.area = item.City;
        this.city = item.County;
        that.industry = item.type;
        let str = item.name ? item.name : this.searchJingwei;
        let myGeo = new this.BMap.Geocoder();
        myGeo.getPoint(str, function(point) {
          console.log(str);
          if (point) {
            console.log(point);
            point.lat = item.Latitude;
            point.lng = item.Longitude;
            that.Latitude = item.Latitude;
            that.Longitude = item.Longitude;
            that.map.centerAndZoom(point, 15);
            that.infoWindowShow = true;
          }
        });
      }
    },
    outBaiduMapPoint(item, i) {
      if (item) {
        let that = this;
        that.latitude = item.latitude;
        that.longitude = item.longitude;
        that.infoWindowShow = false;
      }
    },
    infoWindowClose() {
      this.Latitude = "";
      this.Longitude = "";
      this.infoWindowShow = false;
    },
    infoWindowOpen() {
      this.infoWindowShow = true;
    },
    getMap2({ BMap, map }) {
      this.point = new BMap.Point(117.02, 36.4);
      map.centerAndZoom(this.point, 12);
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
            strokeColor: "#fff",
            fillColor: "#fff",
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
            strokeColor: "#ffff00",
            fillColor: ""
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
.message {
  position: absolute;
  top: 53px;
  height: 400px;
  width: 200px;
  background: #fff;
  overflow: auto;
  color: #0077ca;
  margin-left: 10px;
  cursor: pointer;
}
.container {
  height: 200px;
  width: 200px;
  overflow: auto;
  span {
    font-weight: 600;
  }
}
</style>
