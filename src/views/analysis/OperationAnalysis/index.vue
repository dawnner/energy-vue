<template>
  <div class="dashboard-editor-container">
    <div class="top_time">
      <span>{{dayTime}}</span>
      <div class="weizhi">
        <img src="../../../assets/images/location.svg">
        当前位置：<span style="color:#3ee5ec;">运行分析</span> > 运行分析
      </div>
    </div>
    <div class="content_box">
      <el-row :gutter="20" class="top_box">
        <el-col :span="6" style="height: 100%;">
          <div class="warn">
            <img src="../../../assets/images-yxfx/baoj.png">
            <div>
              <div class="warn_value">32531</div>
              <span>当前预警数量</span>
            </div>
          </div>
          <warn-chart style="width: 100%;height:18%;"></warn-chart>
          <warn-chart1 style="width: 100%;height:32%;"></warn-chart1>
        </el-col>
        <el-col :span="12" class="middle_map">
          <el-cascader v-model="form.options" popper-class="map-cascader" ref="elcascader" @change="elcascader" class="cascader" change-on-select :options="options" filterable :show-all-levels="false" :props="{ checkStrictly: true}">
          </el-cascader>
          <map-analysis style="width: 95%;height: 100%;margin:0 auto;"></map-analysis>
          <div class="map_box">
            <div class="map_color">
              <img src="../../../assets/images-yxfx/baojing_03.png">
              <span>预警数量 ：>1000</span>
            </div>
            <div class="map_color">
              <img src="../../../assets/images-yxfx/baojing_06.png">
              <span>预警数量 ：500-1000</span>
            </div>
            <div class="map_color">
              <img src="../../../assets/images-yxfx/baojing_08.png">
              <span>预警数量 ：100-500</span>
            </div>
            <div class="map_color">
              <img src="../../../assets/images-yxfx/baojing_10.png">
              <span>预警数量 ：< 100 </span>
            </div>
          </div>
        </el-col>
        <el-col :span="6" style="height: 100%;">
          <div class="warn_title">
            <div class="line"></div>
            预警数量排名
          </div>
          <warn-sort style="width: 100%;height: 90%;">

          </warn-sort>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="bottom_box" style="margin:20px 0 10px 0;">
        <el-col :span="9" class="box_bg2">
          <div style="margin-top: -8px;margin-left: -10px;color:#44FFFF ;">运行情况</div>
          <div class="photovoltaic_box">
            <div class="photovoltaic" style="width: 40%;">
              <satisfied-chart style="width: 100%;height: 55%;"></satisfied-chart>
              <div class="evaluate_title">
                <div style="display: flex;width: 100%;justify-content: center;">
                  <div style="margin-right: 5px;">并网对配网<br>影响程度：</div><span>98</span>分
                </div>
                <el-rate disabled-void-color="#7c7d7f" v-model="4.5" disabled text-color="#FFBC00"
                  score-template="{value}">
                </el-rate>
              </div>
            </div>
            <div class="photovoltaic">
              <div class="month_index">
                <div class="line"></div>
                <div>本月各项指标数量 ：</div>
              </div>
              <various-indicators style="height: 88%;width: 100%;"></various-indicators>
            </div>
          </div>
        </el-col>
        <el-col :span="15" class="right-buttom" style="margin-left:15px;">
          <div style="margin-top: -8px;margin-left: -10px;color:#44FFFF ;">预警信息</div>
          <div class="warn_btn"><span>更多</span><span>|</span><span>推荐处理策略</span></div>
          <el-row class="user_box">
            <el-col :span="3" class="left_name" style="padding-left: 30px;">序号</el-col>
            <el-col :span="2" class="left_name">台区</el-col>
            <el-col :span="1" class="left_name" style="width:5%">用户</el-col>
            <el-col :span="4" class="left_name" style="width:15.7%">预警描述</el-col>
            <el-col :span="3" class="left_name" style="width:11.6%">推荐策略</el-col>
            <el-col :span="2" class="left_name" style="width:7.8%">台区经理</el-col>
            <el-col :span="2" class="left_name">联系电话</el-col>
            <el-col :span="1" class="left_name" style="width:5.5%">状态</el-col>
            <el-col :span="2" class="left_name">发现时间</el-col>
            <el-col :span="2" class="left_name">处理时间</el-col>
            <el-col :span="2" class="left_name">验证时间</el-col>
          </el-row>
          <el-row class="user_table" id="scroll">
            <div style="width: 100%;height: 100%;" id="scroll1">
              <div class="user_row" v-for="(item,index) in userList" :key="index">
                <el-col :span="3" class="left_name">
                  <img src="../../../assets/images-yonghu/jtou.png" />{{item.id}}
                </el-col>
                <el-col :span="2" class="left_name">{{item.area}}</el-col>
                <el-col :span="1" class="left_name" style="width:5%">{{item.name}}</el-col>
                <el-col :span="4" class="left_name" style="width:15.7%">{{item.description}}</el-col>
                <el-col :span="3" class="left_name" style="width:11.6%">{{item.strategy}}</el-col>
                <el-col :span="2" class="left_name" style="width:7.8%">{{item.manager}}</el-col>
                <el-col :span="2" class="left_name">{{item.phone}}</el-col>
                <el-col :span="1" class="left_name" style="width:5.5%">{{item.state}}</el-col>
                <el-col :span="2" class="left_name">{{item.timef}}</el-col>
                <el-col :span="2" class="left_name">{{item.timec}}</el-col>
                <el-col :span="2" class="left_name">{{item.timey}}</el-col>
              </div>
            </div>
           <!-- <div id="scroll2" style="width: 100%;height: 100%;margin-top: 40px;">

            </div> -->
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import WarnChart from '../../dashboard/analysis/WarnChart.vue'
  import WarnChart1 from '../../dashboard/analysis/WarnChart1.vue'
  import MapAnalysis from '../../dashboard/analysis/MapAnalysis.vue'
  import WarnSort from '../../dashboard/analysis/WarnSort.vue'
  import VariousIndicators from '../../dashboard/analysis/VariousIndicators.vue'
  import satisfiedChart from '../../dashboard/analysis/satisfiedChart.vue'

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
      WarnChart,
      WarnChart1,
      MapAnalysis,
      WarnSort,
      VariousIndicators,
      satisfiedChart
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
        }],
         form:{
           options:['山东省'],
         },
            userList: [{
            id: 'AJKDSSAKJDH',
            area: 'HLASKJD',
            name: '张三',
            description: '在图标展示方面，提升',
            strategy: '在图标展示策略',
            manager: '张晓晨',
            phone: '15865889865',
            state: '已解决',
            timef: '2021-07-27',
            timec: '2021-07-27',
            timey: '2021-07-27'
          },
          {
            id: 'AJKDSSAKJDH',
            area: 'HLASKJD',
            name: '李四',
            description: '在图标展示方面，提升',
            strategy: '在图标展示策略',
            manager: '张晓晨',
            phone: '15865889865',
            state: '未解决',
            timef: '2021-07-27',
            timec: '2021-07-27',
            timey: '2021-07-27'
          },
          {
            id: 'AJKDSSAKJD',
            area: 'HLASKJD',
            name: '王五',
            description: '在图标展示方面，提升',
            strategy: '在图标展示策略',
            manager: '张晓晨',
            phone: '15865889865',
            state: '已解决',
            timef: '2021-07-27',
            timec: '2021-07-27',
            timey: '2021-07-27'
          },
          {
            id: 'AJKDSS',
            area: 'HLASKJD',
            name: '李萌萌',
            description: '在图标展示方面，提升',
            strategy: '在图标展示策略',
            manager: '张晓晨',
            phone: '15865889865',
            state: '已解决',
            timef: '2021-07-27',
            timec: '2021-07-27',
            timey: '2021-07-27'
          },
          {
            id: 'AJKDSSAKJD',
            area: 'HLASKJD',
            name: '王五',
            description: '在图标展示方面，提升',
            strategy: '在图标展示策略',
            manager: '张晓晨',
            phone: '15865889865',
            state: '已解决',
            timef: '2021-07-27',
            timec: '2021-07-27',
            timey: '2021-07-27'
          },
          {
            id: 'AJKDSSAKJD',
            area: 'HLASKJD',
            name: '王五',
            description: '在图标展示方面，提升',
            strategy: '在图标展示放策略',
            manager: '张晓晨',
            phone: '15865889865',
            state: '已解决',
            timef: '2021-07-27',
            timec: '2021-07-27',
            timey: '2021-07-27'
          }
        ],
        scroll:null,
        scroll1:null,
        scroll2:null
      }
    },
    mounted() {
      this.roll(40);
    },
    methods: {
      // roll(t) {
      //   this.scroll1 = document.getElementById("scroll1");
      //   this.scroll2 = document.getElementById("scroll2");
      //   this.scroll = document.getElementById("scroll");
      //   //把内容重复复制，达到滚动不间断的效果
      //   this.scroll2.innerHTML = this.scroll1.innerHTML;
      //   this.scroll.scrollTop = 0;
      //   setInterval(this.rollStart, t);
      // },
      // rollStart() {
      //   if (this.scroll.scrollTop >= this.scroll1.scrollHeight) {
      //     this.scroll.scrollTop = 0;
      //   } else {
      //     this.scroll.scrollTop++;
      //   }
      // }
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
    left: 31%;
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

    .warn_title {
      width: 100%;
      height: 2%;
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: #fff;
      margin-bottom: 20px;
      margin-left: 3%;

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
      background-image: url('../../../assets/images-yxfx/dtbg.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;

      .map_box {
        color: #B6DBF0;
        font-size: 0.7rem;
        width: 12.6rem;
        background-image: url('../../../assets/images-yxfx/kk.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 10px;
        position: absolute;
        bottom: 0;
        right: 30%;
        padding: 15px;

        .map_color {
          width: 100%;
          display: flex;
          align-items: center;
          padding-bottom: 3px;

          img {
            width: 1.8rem;
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
        height: 55.8%;
        display: flex;
        align-items: center;

        .warn {
          width: 100%;
          height: 35%;
          display: flex;
          align-items: flex-end;
          padding-bottom: 30px;
          justify-content: center;

          img {
            width: 15%;
            margin-right: 20px;
          }

          span {
            font-size: 0.7rem;
          }

          .warn_value {
            font-size: 1.6rem;
            color: #30fdff;
            font-family: regular-font;
          }
        }
      }

      .bottom_box {
        width: 100%;
        height: 42%;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;

        .box_bg2 {
          height: 100%;
          background-image: url('../../../assets/images-yxfx/zuo-k.png');
          background-size: 100% 100%;

          .photovoltaic_box {
            width: 100%;
            height: 90%;
            margin: auto;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .photovoltaic {
              width: 60%;
              height: 95%;
              display: flex;
              flex-direction: column;
              justify-content: center;

              .evaluate_title {
                width: 100%;
                height: 43%;
                text-align: center;
                font-size: 0.9rem;
                color: #AFD3EA;

                span {
                  font-family: regular-font;
                  font-size: 2.2rem;
                  color: #F8B62D;

                }
              }

              .month_index {
                display: flex;
                align-items: center;
                font-size: 0.85rem;
                color: #AFD3EA;
                letter-spacing: 1px;
                border-bottom: #4e5584 1px solid;
                padding-bottom: 10px;

                .line {
                  width: 4px;
                  height: 0.85rem;
                  border-radius: 3px;
                  background-color: #44FFFF;
                  margin-right: 8px;
                }
              }

            }
          }
        }

        .right-buttom {
          height: 100%;
          background-image: url('../../../assets/images-yxfx/you-k.png');
          background-size: 100% 100%;

          .warn_btn {
            border: 1px solid #44FFFF;
            width: 140px;
            border-radius: 18px;
            color: #AFD3EA;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 3px 8px;
            letter-spacing: 1px;
            position: absolute;
            right: 1%;
            top: -4px;
            font-size: 0.75rem;
          }

          .user_box {
            font-size: 0.9rem;
            color: #EAEBED;
            height: 35px;
            line-height: 37px;
            width: 98%;
            margin: 23px auto 0 auto;
            background-image: url('../../../assets/images-tq/tqxi_40.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .user_table {
            width: 98%;
            height: 70%;
            margin: auto;
            overflow-y: auto;
            margin-left: 1%;
            font-size: 0.7rem;
            padding-left: 5px;

            .user_row:nth-child(even) {
              background-color: rgba(15, 53, 103, 0.7);
            }

            .user_row:nth-child(odd) {
              background-color: transparent;
            }
            // .user_row:nth-last-child(1){
            //   margin-bottom: 50px;
            // }

            .user_row {
              font-size: 0.7rem;
              color: #EAEBED;
              height: 20%;
              display: flex;
              align-items: center;
              width: 100%;

              .left_name {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;

                img {
                  margin-right: 5px;
                  margin-left: 7px;
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
