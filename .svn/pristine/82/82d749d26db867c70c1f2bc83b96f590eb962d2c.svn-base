<template>
   <div>
    <div id="container" style="width:800px; height:500px"></div>
   </div>
</template>
<script>
  import AMap from 'AMap';
  var markers;
  var map;
  import {
    listPoweStation
  } from "@/api/system/map";

  export default {
    data(){
      return{
        queryParams: {},
        powerStationList: []
      }
    },
    mounted: function () {
      this.getList()
    },
    methods: {
      /** 查询电站列表 */
      getList() {
        this.loading = true;
        listPoweStation(this.queryParams).then(response => {
          markers = response.rows;
          this.total = response.total;
          this.loading = false;
          this.init();
        });
      },
      init: function () {
        map = new AMap.Map('container', {
          center: [118.678963,36.329944],
          resizeEnable: true,
          zoom: 7,
          rotateEnable:true,
          pitchEnable:true,
          //pitch:80,
          //rotation:-15,
          viewMode:'3D',//开启3D视图,默认为关闭
          buildingAnimation:true,//楼块出现是否带动画
          expandZoomRange:true,
          zooms:[3,20],
          mapStyle: 'amap://styles/330a61974b02ef0615ffa44a4755cdbf'
        })
        map.addControl(new AMap.ControlBar({
          showZoomBar:false,
          showControlButton:true,
          position:{
            right:'10px',
            top:'10px'
          }
        }))
       /* AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
          map.addControl(new AMap.ToolBar())
          map.addControl(new AMap.Scale())
        })*/

        map.clearMap();  // 清除地图覆盖物

        // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
        markers.forEach(function(marker) {
          new AMap.Marker({
            map: map,
            icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png",
            position: [marker.stationLat, marker.stationLong],
            offset: new AMap.Pixel(-13, -30)
          });
        });
      }
    }
  }
</script>
<style>
</style>
