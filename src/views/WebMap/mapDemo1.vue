<template>
  <baidu-map
    class="map"
    ak="YOUR_APP_KEY"
    @ready="getMap2"
    :mapStyle="mapStyle"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
    <!-- <div class="message">
      <h5
        v-for="(item, index) in mapMessage"
        :value="item.name"
        :key="item.name"
        @click="getBaiduMapPoint(item, index)"
        :class="{ active: index === current }"
      >
        {{ item.name }}
      </h5>
    </div> -->
    <bm-control>
      <button @click="openDistanceTool">开启测距</button>
    </bm-control>
    <!-- <div style="position:absolute;top: 0px;left: 84px">
      <bm-auto-complete v-model="searchJingwei" :sugStyle="{ zIndex: 999999 }">
        <el-input
          v-model="searchJingwei"
          style="width:300px;margin-right:15px"
          placeholder="输入地址"
          clearable
        ></el-input>
      </bm-auto-complete>
      <el-button type="primary" @click="getBaiduMapPoint">搜索</el-button>
    </div> -->
    <!-- <bml-marker-clusterer :averageCenter="true"> -->
    <bm-marker
      v-for="(item, index) in mapMessage"
      :position="{ lng: item.Longitude, lat: item.Latitude }"
      :key="item.id"
      :icon="{url: item.url, size: {width: 32, height: 32}}"
      @mouseover="getBaiduMapPoint(item, index)"
      @mouseout="outBaiduMapPoint(item, index)"
    >
      <!-- <bm-label
        :content="item.name"
        :title="corporateName"
        labelStyle="{color: '#2b4391', border: 'none', boxShadow: '0 0 0 1px #2b4391', fontSize : '14px', borderRadius: '15px',}"
        :offset="{ width: -35, height: 30 }"
      /> -->
    </bm-marker>
    <!-- </bml-marker-clusterer> -->
    <bm-info-window
      :position="{ lng: Longitude, lat: Latitude }"
      :show="infoWindowShow"
      @clickclose="infoWindowClose"
      @open="infoWindowOpen"
    >
      <div class="container">
        <span>项目名称:{{ corporateName }}</span>
        <p>功率分类:{{ area }}</p>
        <p>能源模式:{{ industry }}</p>
        <p>发电模式:{{ city }}</p>
      </div>
    </bm-info-window>
    <bm-boundary
      v-for="(item, index) in cityList"
      @mouseover="getCityMapPoint(item, index)"
      :key="item.value"
      :name="item.name"
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
// import { mapEnergy } from "../../../api/mapGl/mapgl";
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
      mapStyle: {
        styleJson: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": {
                "hue": "#007fff",
                "saturation": 89
            }
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "red"
            }
          }
        ]
      },
      cityList: [
        {
          value: "1",
          name: "济南"
        },
        {
          value: "2",
          name: "青岛"
        },
        {
          value: "3",
          name: "烟台"
        },
        {
          value: "4",
          name: "潍坊"
        },
        {
          value: "5",
          name: "临沂"
        },
        {
          value: "6",
          name: "济宁"
        },
        {
          value: "7",
          name: "淄博"
        },
        {
          value: "8",
          name: "菏泽"
        },
        {
          value: "9",
          name: "德州"
        },
        {
          value: "10",
          name: "东营"
        },
        {
          value: "11",
          name: "威海"
        },
        {
          value: "12",
          name: "泰安"
        },
        {
          value: "13",
          name: "滨州"
        },
        {
          value: "14",
          name: "聊城"
        },
        {
          value: "15",
          name: "日照"
        },
        {
          value: "16",
          name: "枣庄"
        },
      ],
      mapMessage: mapDemo,
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
  unmount() {
    distanceTool && distanceTool.close();
  },
  // created () {
  //   this.mapEnergy()
  // },
  methods: {
    // async mapEnergy() {
    //   const { rows } = await mapEnergy();
    //   this.mapMessage = rows;
    //   console.log(this.mapMessage);
    // },
    getCityMapPoint (item, i) {
      if (item.name === '菏泽') {
        i.currentTarget.setFillColor('#9169db');
      }
      console.log(item, i)
    },
    getBaiduMapPoint(item, i) {
      if (item) {
        let that = this;
        that.current = i;
        that.corporateName = item.project;
        that.area = item.generation;
        that.city = item.projectclass;
        that.industry = item.powerclassification;
        let str = item.name ? item.name : this.searchJingwei;
        let myGeo = new this.BMap.Geocoder();
        myGeo.getPoint(str, function(point) {
          if (point) {
            point.lat = item.Latitude;
            point.lng = item.Longitude;
            that.map.centerAndZoom(point, 15);
            that.Latitude = item.Latitude;
            that.Longitude = item.Longitude;
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
      map.centerAndZoom(this.point, 15);
      this.BMap = BMap;
      this.map = map;
      this.distanceTool = new DistanceTool(map, { lineStroke: 2 });
      this.addMapOverlay(map, "山东");
      this.addPoints()
    },
    addPoints () {
      for(let item of this.mapMessage){
        let path = ''
        switch (item.generation) {
          case '火电':
            path = require('@/assets/images/tp.png')
            break;
          case '电化学储能':
            path = require('@/assets/images/tp.png')
            break;
          case '太阳能发电':
            path = require('@/assets/images/tp.png')
            break;
          case '生物质发电':
            path = require('@/assets/images/tp.png')
            break;
          case '风电':
            path = require('@/assets/images/tp.png')
            break;
           case '其他':
            path = require('@/assets/images/tp.png')
            break;
           case '电化学储能':
            path = require('@/assets/images/tp.png')
            break;
          case '机械（物理）储能':
            path = require('@/assets/images/tp.png')
            break;
          }
        item.url = path
      }
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
            strokeOpacity: 1,
            width: 300,
            height: 100
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
  height: 150px;
  width: 220px;
  background: #f9fdff;
  overflow: auto;
  span {
    font-size: 12px;
    font-weight: 400;
  }
  p{
    font-size: 12px;
    font-weight: 400;
  }
}
::v-deep .BMap_cpyCtrl {
  display: none !important;
}
::v-deep .anchorBL {
  display: none !important;
}
</style>
