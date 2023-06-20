<template>
  <div id="map" style="width: 100%; height: 100%;"></div>
</template>

<script>
var map;
var districtTask;
// 申请的key和sn
SGMap.tokenTask
  .login("03d74ff94af030fd969ad4bcffe8669a", "d8dc85c7317b39368ce8f1f651541a8d")
  .then(function() {
    initMap();
  });
export default {
  mounted() {
    this.initMap();
    this.loadPlugin();
  },
  methods: {
    loadPlugin() {
      SGMap.plugin("SGMap.DistrictTask").then(function(res) {
        districtTask = new SGMap.DistrictTask();
        initMap();
      });
    },
    initMap() {
      var map = new SGMap.Map({
        // 地图绑定的DOM元素ID
        container: "map",
        // 地图样式
        style: "aegis://styles/aegis/Streets-v2",
        // 默认缩放层级
        zoom: 6,
        // 地图中心点
        center: [117.024967066, 36.6827847272],
        // 地图默认字体
        localIdeographFontFamily: "Microsoft YoHei"
      });
      map.on("load", function(e) {
        // 矩形范围查询行政区划详细信息
        districtTask
          .searchByBounds({
            bounds: searchLocation,
            levels: "city,district",
            pageIndex: 1,
            pageSize: 10,
            extension: true
          })
          .then(function(result) {
            if (!result.data) return;
            result = result.data;
            var features = [],
              rectangleAry = _limitPoint(searchLocation[0], searchLocation[1]);

            // 显示查询行政区划范围
            // 省：蓝线
            map.addLayer({
              id: "province-line",
              type: "line",
              source: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: []
                }
              },
              layout: {
                "line-cap": "round",
                "line-join": "round"
              },
              paint: {
                "line-color": "#3995ea",
                "line-width": 2
              }
            });
            // 市：绿面、绿线
            map.addLayer({
              id: "city-polygon",
              type: "fill",
              source: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: []
                }
              },
              paint: {
                "fill-color": "#206bf5",
                "fill-opacity": 0.5
              }
            });
            map.addLayer({
              id: "city-line",
              type: "line",
              source: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: []
                }
              },
              paint: {
                "line-color": "#206bf5",
                "line-width": 3
              }
            });
            // 区/县：红面
            map.addLayer({
              id: "district-polygon",
              type: "fill",
              source: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: []
                }
              },
              paint: {
                "fill-color": "#f2f520",
                "fill-opacity": 0.7
              }
            });

            var provinceFeatures = [],
              cityFeatures = [],
              districtFeatures = [];

            for (var i = 0; i < result.districts.length; i++) {
              if (result.districts[i].level == "province") {
                provinceFeatures.push({
                  type: "Feature",
                  geometry: result.districts[i].shape
                });
              } else if (result.districts[i].level == "city") {
                cityFeatures.push({
                  type: "Feature",
                  geometry: result.districts[i].shape
                });
              } else if (result.districts[i].level == "district") {
                districtFeatures.push({
                  type: "Feature",
                  geometry: result.districts[i].shape
                });
              }
            }

            map.getSource("province-line").setData({
              type: "FeatureCollection",
              features: provinceFeatures
            });
            map.getSource("city-polygon").setData({
              type: "FeatureCollection",
              features: cityFeatures
            });
            map.getSource("city-line").setData({
              type: "FeatureCollection",
              features: cityFeatures
            });
            map.getSource("district-polygon").setData({
              type: "FeatureCollection",
              features: districtFeatures
            });

            // 显示查询范围
            map.addLayer({
              id: "zoom-line",
              type: "line",
              source: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      geometry: {
                        type: "Polygon",
                        coordinates: [rectangleAry.line]
                      },
                      properties: {
                        id: "drawRectangleId_15554047957712"
                      }
                    }
                  ]
                }
              },
              layout: {
                "line-cap": "round",
                "line-join": "round"
              },
              paint: {
                "line-color": "#f52020",
                "line-width": 3
              }
            });
          });
      });
    },
    // 计算矩形四个点位置
    _limitPoint(a1, a2) {
      var minX = Math.min(a1[0], a2[0]),
        maxY = Math.max(a1[1], a2[1]),
        maxX = Math.max(a1[0], a2[0]),
        minY = Math.min(a1[1], a2[1]);

      return {
        point: [
          [minX, maxY],
          [maxX, maxY],
          [maxX, minY],
          [minX, minY]
        ],
        line: [
          [minX, maxY],
          [maxX, maxY],
          [maxX, minY],
          [minX, minY],
          [minX, maxY]
        ]
      };
    }
  }
};
</script>

<style></style>
