<template>
  <div class="dashboard-editor-container">
    <div class="top_time">
      <span>{{dayTime}}</span>
      <div class="weizhi">
        <img src="../../assets/images/location.svg">
        当前位置：<span style="color:#3ee5ec;">态势感知</span> > 整体实时监测
      </div>
    </div>
    <div class="content_box">
      <el-row :gutter="20" class="top_box">
        <el-col :span="6" style="height:99%;padding:15px 0;">
          <div class="warn_titleleft">
            <div class="line"></div>
            实时监测
          </div>
          <div class="info">
            <div v-for="(item,index) in inforList" :key="index" class="info_box">
              <i class="el-icon-caret-right" style="color: #055FA2;"></i>
              <div style="padding-left: 15px;width: 120px;">{{item.name}}:</div>
              <div class="info_value">{{item.value}}</div>
            </div>
          </div>
        </el-col>
        <el-col :span="12" class="middle_map">
          <el-cascader v-model="form.options" popper-class="map-cascader" ref="elcascader" @change="elcascader" class="cascader" change-on-select :options="options" filterable :show-all-levels="false" :props="{ checkStrictly: true}">
          </el-cascader>
          <div class="energySelect">
            <el-select v-model="energyTitle" @change="changeTitle" class="select1" popper-class="selectOption" popper-append-to-body="false">
              <el-option v-for="item in optionsMap" :key="item.value" :label="item.label" :value="item.label">
              </el-option>
            </el-select>
          </div>
          <energy-map style="width: 88%;height: 100%;margin:0 auto 0 auto;" ref="mapData"/>
          <div class="map_box">
            <div class="map_color">
              <div class="lines1"></div>
              <span>{{energyTitle}}（1000-3000）</span>
            </div>
            <div class="map_color">
              <div class="lines2"></div>
              <span>{{energyTitle}}（3000-5000）</span>
            </div>
            <div class="map_color">
              <div class="lines3"></div>
              <span>{{energyTitle}}（5000-8000）</span>
            </div>
            <div class="map_color">
              <div class="lines5"></div>
              <span>{{energyTitle}}（8000以上）</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6" style="height: 99%">
          <div class="growth_top">
            <div class="growth_topbtn">
              <div v-for="(item,index) in piebtnList" :key="index" @click="choosebtn2(index)"
                :class="pieIndex==index?'growthfocus':'growthbtn'">
                <div style="transform: skew(30deg);">{{item}}</div>
              </div>
            </div>
          </div>
          <energy-pie ref="energyPie" style="width: 79%;height:98%;margin-left: 10px;"></energy-pie>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="bottom_box" style="margin:20px 0 10px 0;">
        <el-col :span="12" class="box_bg2">
          <div style="margin-top: -10px;margin-left: -10px;">发电量</div>
          <div class="growth_top">
            <span style="color:#9c95a4;font-size: 12px;">单位（KW）</span>
            <div class="growth_topbtn" style="margin-top: 10px;justify-content: flex-end;">
              <div v-for="(item,index) in growthbtnList" :key="index" @click="choosebtn1(index)"
                :class="cityIndex==index?'growthfocus':'growthbtn'">
                <div style="transform: skew(30deg);">{{item}}</div>
              </div>
            </div>
          </div>
          <power-bar ref="powerBar" style="width: 100%;height:78%;" />

        </el-col>
        <el-col :span="12" class="box_bg3" style="margin-left:15px;">
          <div style="margin-top: -10px;margin-left: -10px;">电能质量</div>
          <div class="growth_top">
            <div style="color:#9c95a4;font-size: 12px;">发电量（KW）</div>
          </div>
          <energy-line style="width: 100%;height:76%;" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import powerBar from '../dashboard/powerBar.vue'
  import energyLine from '../dashboard/energyLine.vue'
  import energyPie from '../dashboard/energyPie.vue'
  import energyMap from '../dashboard/energyMap.vue'

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
      energyLine,
      energyMap,
      energyPie,
      powerBar
    },
    data() {
      return {
        dayTime: getDate(),
        value: '山东省',
        energyTitle: '当日发电量',
        growthbtnList: ['当日', '当月', '当年'],
        piebtnList: ['当日', '当月', '当年'],
        cityIndex: 0,
        pieIndex: 0,
        inforList: [{
          name: '台区总数',
          value: 4589
        }, {
          name: '总容量',
          value: '33002.35KW'
        }, {
          name: '用户总数',
          value: 12352
        }, {
          name: '渗透率',
          value: '35.27%'
        }, {
          name: '当日发电量',
          value: '1080.40kW-h'
        }, {
          name: '当月发电量',
          value: '2080.40kW-h'
        }, {
          name: '当年发电量',
          value: '4080.40kW-h'
        }, {
          name: '异常告警(户)',
          value: 15
        }, {
          name: '保护信号(次)',
          value: 12
        }, {
          name: '储能动作(次)',
          value: 1
        }, {
          name: '开关动作(次)',
          value: 0
        }],
        optionsMap: [{
          value: '1',
          label: '当日发电量'
        }, {
          value: '2',
          label: '当月发电量'
        }, {
          value: '3',
          label: '当年发电量'
        }],
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
    methods: {
      choosebtn1(index) {
        this.cityIndex = index;
        if (index == 0) {
          this.$refs.powerBar.initChart()
        } else if (index == 1) {
          this.$refs.powerBar.initChart()
        } else if (index == 2) {
          this.$refs.powerBar.initChart()
        }
      },
      choosebtn2(index) {
        this.pieIndex = index;
        if (index == 0) {
          this.$refs.energyPie.initChart()
        } else if (index == 1) {
          this.$refs.energyPie.initChart()
        } else if (index == 2) {
          this.$refs.energyPie.initChart()
        }
      },
      changeTitle(){
        this.$refs.mapData.initChart(this.energyTitle)
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
    height: 1.6rem;
  }

  /deep/.el-input__suffix {
    top: 5px;
    width: 1.4rem;
  }

  .energySelect /deep/.el-input--medium .el-input__inner {
    width: 6.7rem;
  }
</style>
<style scoped lang="scss">
  .cascader {
    position: absolute;
    z-index: 9999;
    left: 32%;
    top: -6px;
  }

  .select1 {
    position: absolute;
    z-index: 9999;
    left: 39%;
    top: 0px;

  }

  .growth_top {
    width: 95%;
    margin: 7px auto 0 auto;
    height: 35px;
    display: flex;
    align-items: center;
    font-size: 0.9rem;

    span {
      width: 20%;
    }
  }

  .growth_topbtn {
    display: flex;
    width: 77%;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 0.9rem;
    padding-right: 20px;
    margin-left: 25px;
  }

  .growthbtn {
    width: 60px;
    height: 22px;
    text-align: center;
    font-size: 0.75rem;
    color: #B6DBF0;
    margin: 0 5px;
    cursor: pointer;
    line-height: 22px;
    background-color: #055FA2;
    border-radius: 3px;
    transform: skew(-30deg);
  }

  .growthbtn:hover {
    color: #44FFFF;
  }

  .growthfocus {
    width: 60px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    font-size: 0.75rem;
    color: #333;
    margin: 0 5px;
    cursor: pointer;
    background-color: #44FFFF;
    border-radius: 3px;
    transform: skew(-30deg);
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
      width: 77%;
      display: flex;
      align-items: center;
      margin: auto;
      font-size: 1rem;
      color: #fff;
      margin-bottom: 5px;

      .line {
        height: 1rem;
        width: 4px;
        background-color: #44ffff;
        border-radius: 3px;
        margin-right: 5px;
        margin-top: 2.5px;
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
        width: 13.1rem;
        background-image: url('../../assets/images-yxfx/energy_box.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 10px;
        position: absolute;
        bottom: 10px;
        right: 29%;
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
        height: 61%;
        display: flex;
        align-items: center;
        margin-top: 10px;

        .info {
          width: 77%;
          height: 93%;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-content: space-around;
          justify-content: center;
          margin-top: 12px;

          .info_box {
            width: 100%;
            display: flex;
            align-items: center;
            color: #D4D7DF;
            font-size: 0.75rem;
            height: 8%;
            background-color: #022664;
            padding: 0 10px 0 0;
            border-left: 4px solid #055FA2;
            margin-bottom: 7px;

            .info_value {
              width: 63%;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              padding-left: 3px;
            }

          }
        }

      }

      .bottom_box {
        width: 100%;
        height: 36%;
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
.selectOption{
  background-color: #0838aa !important;
  border-color: #157cce !important;
  .el-select-dropdown__item{
    color:#fff !important;
  }
  .el-select-dropdown__item.selected{
    background-color:#1345b1 !important;
  }
  .el-select-dropdown__item.hover,.el-select-dropdown__item:hover{
    background-color:#1345b1 !important;
  }
  .popper__arrow {
    border-top-color: #157cce !important;
    border-bottom-color: #157cce !important;
  }
  .popper__arrow::after {
    border-top-color: #0838aa !important;
    border-bottom-color: #0838aa !important;
  }
}
</style>