<template>
  <div class="dashboard-editor-container">
    <div class="top_time">
      <span>{{dayTime}}</span>
      <div class="weizhi">
		  <img src="../../assets/images/location.svg">
		  当前位置：<span style="color:#3ee5ec;">规划接入</span> > 规划接入</div>
    </div>
    <div class="content_box">
      <el-row :gutter="20" class="top_box">
        <el-col :span="6" style="height:99%;padding:15px 0;">
          <div class="warn_titleleft">
            <div class="line"></div>
            推荐接入分布式光伏地区
          </div>
          <el-row class="place_tableleft">
            <div class="place_row" v-for="(item,index) in placeList" :key="index">
              <el-col :span="6" v-if="index==0" class="title_bg0">{{item.place}}</el-col>
              <el-col :span="6" v-if="index==1" class="title_bg1">{{item.place}}</el-col>
              <el-col :span="6" v-if="index==2" class="title_bg2">{{item.place}}</el-col>
              <el-col :span="6" v-if="index>2" class="title_bg3">{{item.place}}</el-col>
              <el-col :span="18" style="height:100%;">
                <el-row class="city_right">
                  <el-col :span="8" class="box_city">{{item.place1}}</el-col>
                  <el-col :span="8" class="box_city">{{item.place2}}</el-col>
                  <el-col :span="8" class="box_city">{{item.place3}}</el-col>
                </el-row>
              </el-col>
            </div>
          </el-row>
        </el-col>
        <el-col :span="12" class="middle_map">
           <el-cascader v-model="form.options" popper-class="map-cascader" ref="elcascader" @change="elcascader" class="cascader" change-on-select :options="options" filterable :show-all-levels="false" :props="{ checkStrictly: true}">
          </el-cascader>
          <map-plan style="width: 100%;height: 100%;"></map-plan>
          <div class="map_box">
            <div class="map_color">
              <div class="lines1"></div>
              <span>储能布置区（渗透率在50%以上）</span>
            </div>
            <div class="map_color">
              <div class="lines2"></div>
              <span>控制分流区（渗透率在35%~50%）</span>
            </div>
            <div class="map_color">
              <div class="lines3"></div>
              <span>预警评估区（渗透率在20%~35%）</span>
            </div>
            <div class="map_color">
              <div class="lines4"></div>
              <span>开放欢迎区（渗透率在10%~20%）</span>
            </div>
            <div class="map_color">
              <div class="lines5"></div>
              <span>鼓励推荐区（渗透率在10%以下）</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6" style="height: 99%;padding:15px 0;">
          <div class="warn_titleleft">
            <div class="line"></div>
            谨慎接入分布式光伏地区
          </div>
          <el-row class="place_tableleft">
            <div class="place_row" v-for="(item,index) in placeList" :key="index">
              <el-col :span="6" v-if="index==0" class="title_bg0">{{item.place}}</el-col>
              <el-col :span="6" v-if="index==1" class="title_bg1">{{item.place}}</el-col>
              <el-col :span="6" v-if="index==2" class="title_bg2">{{item.place}}</el-col>
              <el-col :span="6" v-if="index>2" class="title_bg3">{{item.place}}</el-col>
              <el-col :span="18" style="height:100%;">
                <el-row class="city_right">
                  <el-col :span="8" class="box_city">{{item.place1}}</el-col>
                  <el-col :span="8" class="box_city">{{item.place2}}</el-col>
                  <el-col :span="8" class="box_city">{{item.place3}}</el-col>
                </el-row>
              </el-col>
            </div>
          </el-row>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="bottom_box" style="margin:20px 0 10px 0;">
        <el-col :span="12" class="box_bg2">
          <div style="margin-top: -10px;margin-left: -10px;">渗透率排名</div>
          <city-chart style="width: 100%;height:95%;" />

        </el-col>
        <el-col :span="12" class="box_bg3" style="margin-left:15px;">
          <div style="margin-top: -10px;margin-left: -10px;">饼状图</div>
          <div class="pie_box">
            <pie-chart style="width: 38%;height:95%;"></pie-chart>
            <div class="pie_right">
              <div class="title_box">
                <img src="../../assets/images-ghjr/tubiao_03.png">
                <div>
                  <span style="color: #10CF7F;">储能布置区</span>
                  <div>18%</div>
                </div>
              </div>
              <div class="title_box">
                <img src="../../assets/images-ghjr/tubiao_05.png">
                <div>
                  <span style="color:#DFDA15">预警评估区</span>
                  <div>26%</div>
                </div>
              </div>
              <div class="title_box">
                <img src="../../assets/images-ghjr/tubiao_07.png">
                <div>
                  <span style="color:#EA3120">鼓励推荐区</span>
                  <div>14%</div>
                </div>
              </div>
              <div class="title_box">
                <img src="../../assets/images-ghjr/tubiao_12.png">
                <div>
                  <span style="color: #F57010;">控制分流区</span>
                  <div>31%</div>
                </div>
              </div>
              <div class="title_box">
                <img src="../../assets/images-ghjr/tubiao_13.png">
                <div>
                  <span style="color: #37AFAF;">开放欢迎区</span>
                  <div>11%</div>
                </div>
              </div>

            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import CityChart from '../dashboard/planAccess/CityChart.vue'
  import PieChart from '../dashboard/planAccess/PieChart.vue'
  import mapPlan from '../dashboard/planAccess/mapPlan.vue'

  function getDate() {
    var date = new Date();
    var str = "星期" + "日一二三四五六".charAt(new Date().getDay());
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let today = date.getDate();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `${year}年 ${month}月 ${today}日 ${str}`
    // return `${year}-${month}-${today} ${hours}:${minute}:${second}`
  }
  export default {
    components: {
      CityChart,
      PieChart,
      mapPlan
    },
    data() {
      return {
        dayTime: getDate(),
        options: [{
          value:'山东省',
          label:'山东省',
          children: [{
            value: '选项1',
            label: '济南'
          }, {
            value: '选项2',
            label: '青岛'
          }, {
            value: '选项3',
            label: '烟台'
          }, {
            value: '选项4',
            label: '威海'
          }, {
            value: '选项5',
            label: '东营'
          },
          {
            value: '选项6',
            label: '淄博'
          },
          {
            value: '选项7',
            label: '潍坊'
          },
          {
            value: '选项8',
            label: '日照'
          },
          {
            value: '选项9',
            label: '菏泽'
          },
          {
            value: '选项10',
            label: '枣庄'
          },
          {
            value: '选项11',
            label: '德州'
          },
          {
            value: '选项12',
            label: '滨州'
          },
          {
            value: '选项13',
            label: '临沂'
          },
          {
            value: '选项14',
            label: '济宁'
          },
          {
            value: '选项15',
            label: '聊城'
          },
          {
            value: '选项16',
            label: '泰安'
          }]
        }
        ],
         form:{
           options:['山东省'],
         },
        placeList: [{
            place: '济南',
            place1: '平阴',
            place2: '历城',
            place3: '齐河',
          },
          {
            place: '青岛',
            place1: '胶州',
            place2: '黄岛',
            place3: '平度',
          },
          {
            place: '潍坊',
            place1: '潍城',
            place2: '寒亭',
            place3: '坊子',
          },
          {
            place: '烟台',
            place1: '芝罘',
            place2: '福山',
            place3: '莱山',
          },
          {
            place: '枣庄',
            place1: '市中',
            place2: '薛城',
            place3: '峄城',
          },
          {
            place: '济宁',
            place1: '任城',
            place2: '兖州',
            place3: '',
          },
          {
            place: '泰安',
            place1: '泰山',
            place2: '岱岳',
            place3: '',
          },
          {
            place: '德州',
            place1: '德城',
            place2: '陵城',
            place3: '',
          },
          {
            place: '东营',
            place1: '河口',
            place2: '垦利',
            place3: '',
          },
          {
            place: '日照',
            place1: '东港',
            place2: '岚山',
            place3: '',
          },
          {
            place: '临沂',
            place1: '兰山',
            place2: '罗庄',
            place3: '河东',
          }
        ],
      }
    },
    methods:{
      elcascader:function(){
         this.$refs.elcascader.dropDownVisible = false;
      }
    },
    mounted(){
      this.elcascader;
    }
  }
</script>
<style scoped>
  /deep/.el-input--medium .el-input__inner {
    background: transparent !important;
    width: 5.2rem;
    border-color: #3adee1;
    border-radius: 18px;
    color: #fff !important;
    font-size: 0.75rem;
    text-align: center;
    height: 1.8rem;
  }

  /deep/.el-input__suffix {
    top: 2px;
    width: 1.4rem;
  }
</style>
<style scoped lang="scss">
  .cascader {
    position: absolute;
    z-index: 9999;
    left: 32%;
    top: -6px;
  }

  .weizhi {
    color: #FFFFFF;
    width: 25%;
    position: absolute;
    left: 10%;
    margin-left: 130px;
    color: #efefef;
    font-size: 0.8rem;
  }

  .dashboard-editor-container {
    width: 100%;
    height: 100%;
    padding: 5px 20px 0 20px;

    .warn_titleleft {
      width: 97%;
      height: 2%;
      display: flex;
      padding-left: 14%;
      align-items: center;
      margin: auto;
      font-size: 1rem;
      color: #fff;
      margin-bottom: 20px;

      .line {
        height: 1rem;
        width: 4px;
        background-color: #44ffff;
        border-radius: 3px;
        margin-right: 5px;
        margin-top: 2.5px;
      }
    }

    .place_tableleft {
      width: 70%;
      height: 96%;
      overflow-y: auto;
      margin: auto;
      margin-top: 10px;
      font-size: 0.75rem;

      .title_bg0 {
        background-image: url('../../assets/images-ghjr/hong.png');
        background-repeat: no-repeat;
        background-size: 3.2rem 100%;
        color: #fff;
        background-position: center center;
      }

      .title_bg1 {
        background-image: url('../../assets/images-ghjr/cheng.png');
        background-repeat: no-repeat;
        background-size: 3.2rem 100%;
        text-align: center;
        background-position: center center;
        color: #fff;
      }

      .title_bg2 {
        background-image: url('../../assets/images-ghjr/huang.png');
        background-repeat: no-repeat;
        background-size: 3.2rem 100%;
        text-align: center;
        background-position: center center;
        color: #fff;
      }

      .title_bg3 {
        background-image: url('../../assets/images-ghjr/lan.png');
        background-repeat: no-repeat;
        background-size: 3.2rem 100%;
        text-align: center;
        background-position: center center;
        color: #fff;
      }

      .place_row:nth-child(odd) {
        background-color: #031356;
        color: #B6DBF0;
      }

      .place_row:nth-child(even) {
        background-color: transparent;
        color: #B6DBF0;
      }

      .place_row {
        font-size: 0.7rem;
        color: #EAEBED;
        height: 2rem;
        display: flex;
        align-items: center;
        text-align: center;
        width: 100%;

        .city_right {
          width: 100%;
          height: 2rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          overflow-y: auto;

          .box_city {
            height: 2rem;
            line-height: 2rem;
          }
        }
      }

    }

    .middle_map {
      height: 100%;
      background-image: url('../../assets/images-yxfx/dtbg.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;

      .map_box {
        color: #B6DBF0;
        font-size: 0.7rem;
        width: 16rem;
        background-image: url('../../assets/images-ghjr/tul-k.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 10px;
        position: absolute;
        bottom: 0;
        right: 26.5%;
        padding: 18px 0 12px 22px;

        .map_color {
          width: 100%;
          display: flex;
          align-items: center;
          padding-bottom: 10px;

          .lines1 {
            width: 14px;
            height: 3px;
            background-color: #00519C;
            margin-right: 10px;
          }

          .lines2 {
            width: 14px;
            height: 3px;
            background-color: #00BE18;
            margin-right: 10px;
          }

          .lines3 {
            width: 14px;
            height: 3px;
            background-color: #EFC300;
            margin-right: 10px;
          }

          .lines4 {
            width: 14px;
            height: 3px;
            background-color: #F88B00;
            margin-right: 10px;
          }

          .lines5 {
            width: 14px;
            height: 3px;
            background-color: #FF0832;
            margin-right: 10px;
          }
        }
      }
    }

    .top_time {
      color: #3adee1;
      font-size: 0.9rem;
      padding: 0 0 20px 20px;
      width: 30%;
      height: 6%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .content_box {
      width: 100%;
      height: 93%;
      color: #fff;
      font-size: 0.8rem;

      .top_box {
        width: 100%;
        height: 59%;
        display: flex;
        align-items: center;
        margin-top: 10px;

      }

      .bottom_box {
        width: 100%;
        height: 37%;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;

        .box_bg2 {
          height: 100%;
          background-image: url('../../assets/images-ghjr/left-k.png');
          background-size: 100% 100%;
          color: #3adee1;
          font-size: 0.9rem;

          .bar_title {
            color: #9c95a4;
            font-size: 12px;
            padding: 20px 0 10px 2.5%;
          }
        }

        .box_bg3 {
          background-image: url('../../assets/images-ghjr/left-k.png');
          background-size: 100% 100%;
          color: #3adee1;
          font-size: 0.9rem;

          .pie_box {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;

            .pie_right {
              width: 60%;
              padding-left: 30px;
              height: 63%;
              padding-bottom: 20px;
              display: flex;
              flex-flow: row wrap;
              align-content: space-around;
              justify-content: flex-start;
              color: #fff;
              font-size: 1rem;

              .title_box {
                width: 33%;
                display: flex;
                font-style: italic;
                align-items: center;
                line-height: 20px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;

                img {
                  width: 2.5rem;
                  height: 2.5rem;
                  margin-right: 12px;
                }

                span {
                  font-size: 0.75rem;
                  font-style: normal;

                }
              }
            }
          }

        }
      }
    }
  }
</style>
<style lang="scss">
.map-cascader{
  color: #fff;
  border: 1px solid #157cce !important;
  .el-cascader-panel {
    color: #fff !important;
    .el-cascader-menu {
      width: 100% !important;
      color: #fff !important;
      background-color: #0648bb !important;
      .el-cascader-menu__wrap {
        .el-cascader-menu__list {
          .el-cascader-node:not(.is-disabled):focus, .el-cascader-node:not(.is-disabled):hover{
            background: #006dc3 !important;
          }
        }
      }
    }
  }
}

</style>