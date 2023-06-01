<template>
  <div id="container"></div>
</template>

<script>
// import { mapGuanli } from "../../../api/mapGl/mapgl";
import bus from "../../../eventBus/eventBus";
import imagesss from "../../../assets/images/map_icon_r.png";
import AMapLoader from "@amap/amap-jsapi-loader";
window._AMapSecurityConfig = {
  securityJsCode: "b278926643457f8a7ff32d15ade6448d"
};
export default {
  components: {
    imagesss
  },
  data() {
    return {
      map: null,
      autoOptions: {
        input: ""
      },
      searchPlaceInput: "",
      auto: null,
      placeSearch: null,
      list: [], // 接数据的
      lists: [
        {
          name: "济南热电有限公司",
          lnglats: [113.312566, 23.085073],
          economize: "山东省",
          City: "济南市",
          County: "天桥区",
          type: "电力",
          code: 4412
        },
        {
          name: "济南东新热电有限公司",
          lnglats: [113.480794, 23.177896],
          economize: "山东省",
          City: "济南市",
          County: "历下区",
          type: "电力",
          code: 4412
        },
        {
          name: "华能济南黄台发电有限公司",
          lnglats: [113.220556, 23.10718],
          economize: "山东省",
          City: "济南市",
          County: "历城区",
          type: "电力",
          code: 4412
        },
        {
          name: "华电章丘发电有限公司",
          lnglats: [113.365438, 23.124231],
          economize: "山东省",
          City: "济南市",
          County: "章丘区",
          type: "电力",
          code: 4412
        }
      ]
    };
  },
  created() {
    bus.$on("share_id", val => {
      this.autoOptions.input = val.search_id;
      this.searchPlaceInput = val.input;
    });
    // this.mapGuanli();
  },
  watch: {
    searchPlaceInput(newValue) {
      if (newValue != null) {
        console.log(newValue);
        this.placeSearch.search(newValue);
      }
    }
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "157a4234955876457fff5a8d1a6e0d94", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          "AMap.ToolBar",
          "AMap.Scale",
          "AMap.HawkEye",
          "AMap.MapType",
          "AMap.Geolocation",
          "AMap.AutoComplete",
          "AMap.PlaceSearch",
          "AMap.Marker",
          "AMap.MarkerClusterer"
        ] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then(AMap => {
          this.map = new AMap.Map("container", {
            resizeEnable: true,
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 8, //初始化地图级别
            center: [117.120098, 36.6512] //初始化地图中心点位置
          });
          this.map.addControl(new AMap.Scale());
          this.map.addControl(new AMap.ToolBar());
          this.map.addControl(new AMap.HawkEye());
          this.map.addControl(new AMap.MapType());
          this.map.addControl(new AMap.Geolocation());
          this.auto = new AMap.AutoComplete(this.autoOptions);
          this.placeSearch = new AMap.PlaceSearch({
            map: this.map
          }); //构造地点查询类
          this.auto.on("select", this.select);
          this.setMapMarker();
        })
        .catch(e => {
          console.log(e);
        });
    },
    setMapMarker() {
      // 创建 AMap.Icon 实例
      let icon = new AMap.Icon({
        size: new AMap.Size(36, 36), // 图标尺寸
        // image: "../../../assets/images/map_icon_r.png", // Icon的图像
        image: imagesss, // Icon的图像
        imageSize: new AMap.Size(24, 30), // 根据所设置的大小拉伸或压缩图片
        imageOffset: new AMap.Pixel(0, 0) // 图像相对展示区域的偏移量，适于雪碧图等
      });
      let makerList = [];
      var styles = [
        {
          url: "../../../assets/images/map_icon_b.png",
          size: new AMap.Size(32, 32),
          offset: new AMap.Pixel(-16, -30)
        },
        {
          url: "../../../assets/images/map_icon_g.png",
          size: new AMap.Size(32, 32),
          offset: new AMap.Pixel(-16, -30)
        },
        {
          url: "../../../assets/images/map_icon_y.png",
          size: new AMap.Size(48, 48),
          offset: new AMap.Pixel(-24, -45),
          textColor: "#CC0066"
        }
      ];
      var points = [
        { lnglat: ["108.939621", "34.343147"] },
        { lnglat: ["113.370643", "22.938827"] },
        { lnglat: ["112.985037", "23.15046"] },
        { lnglat: ["110.361899", "20.026695"] },
        { lnglat: ["121.434529", "31.215641"] }
      ];
      points.forEach(item => {
        // 遍历生成多个标记点
        let marker = new AMap.Marker({
          map: this.map,
          zIndex: 9999999,
          icon: icon, // 添加 Icon 实例
          offset: new AMap.Pixel(-13, -30), //icon中心点的偏移量
          position: item.lnglat // 经纬度对象new AMap.LngLat(x, y)，也可以是经纬度构成的一维数组[116.39, 39.9]
        });
        makerList.push(marker);
      });

      this.map.add(makerList);
      // 自动适应显示想显示的范围区域
      this.map.setFitView();

      map.plugin(["AMap.MarkerClusterer"], function() {
        cluster = new AMap.MarkerClusterer(
          map, // 地图实例
          points, // 海量点数据，数据中需包含经纬度信息字段 lnglat
          {
            styles: styles
          }
        );
      });
      /* 聚合功能 */
      // var sts = [
      //   {
      //     url:
      //       "http://isdapp.shandong.gov.cn/ceshicomp/resources/lnzbslc/dbx5x.png",
      //     size: new AMap.Size(32, 32),
      //     offset: new AMap.Pixel(-16, -16),
      //     textColor: "#fff"
      //   }
      // ];
      // new AMap.MarkerClusterer(that.map, that.makerList, {
      //   styles: sts,
      //   gridSize: 60
      // });
    },

    select(e) {
      this.placeSearch.setCity(e.poi.adcode);
      this.placeSearch.search(e.poi.name); //关键字查询查询
    }
    // 请求点标记数据
    // async mapGuanli() {
    //   const { rows } = await mapGuanli();
    //   this.list = rows;
    //   console.log(this.list);
    // }
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  }
};
</script>

<style scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}
</style>
