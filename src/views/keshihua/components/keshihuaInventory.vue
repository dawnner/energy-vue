<template>
  <div style="width:100%;height:100%">
    <div style="display:flex;width:100%;height:30%">
      <div class="echarts-one">
        <echartsone style="width:100%;height:100%"></echartsone>
      </div>
      <div class="echarts-two">
        <div class="echarts-two-box1">
          <div class="echarts-two-box01">
            <img
              src="@/assets/images/icons1.png"
              alt=""
              style="margin-right:10px"
            />
            <div style="font-size: 16px;color: #158388;font-weight: 700;">
              企业煤炭库存量排名TOP10
            </div>
          </div>
          <div>
            <ul>
              <li
                v-for="(item, index) in top1"
                :key="index"
                style="display: flex;align-items: center;padding:10px 0;border-bottom: 1px solid #EFF4F7;"
              >
                <span
                  style="font-weight: 700;margin:0px 5px;font-family: PangMenZhengDao;"
                  >{{ item.num }}</span
                >
                <div>{{ item.name }}</div>
                <span style="margin-left: auto;font-size: 12px;">{{
                  item.production
                }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="echarts-two-box2">
          <div class="echarts-two-box02">
            <img
              src="@/assets/images/icons2.png"
              alt=""
              style="margin-right:10px"
            />
            <div style="font-size: 16px;color: #E38223;font-weight: 700;">
              企业保供天数排名TOP10
            </div>
          </div>
          <div>
            <ul>
              <li
                v-for="(item, index) in top2"
                :key="index"
                style="display: flex;align-items: center;padding:10px 0;border-bottom: 1px solid #EFF4F7;"
              >
                <span
                  style="font-weight: 700;margin:0px 5px;font-family: PangMenZhengDao;"
                  >{{ item.num }}</span
                >
                <div>{{ item.name }}</div>
                <span style="margin-left: auto;font-size: 12px;">{{
                  item.day
                }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="echarts-two-box3">
          <div class="echarts-two-box03">
            <img
              src="@/assets/images/icons3.png"
              alt=""
              style="margin-right:10px"
            />
            <div style="font-size: 16px;color: #2398E3;font-weight: 700;">
              企业电量供应能力排名TOP10
            </div>
          </div>
          <div>
            <ul>
              <li
                v-for="(item, index) in top3"
                :key="index"
                style="display: flex;align-items: center;padding:10px 0;border-bottom: 1px solid #EFF4F7;"
              >
                <span
                  style="font-weight: 700;margin:0px 5px;font-family: PangMenZhengDao;"
                  >{{ item.num }}</span
                >
                <div>{{ item.name }}</div>
                <span style="margin-left: auto;font-size: 12px;">{{
                  item.unit
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      style="width:100%;height:68%;background: #fff;border-radius: 10px;margin:10px 0;padding:20px"
    >
      <div
        style="display:flex;align-items: center;justify-content: space-between;"
      >
        <div style="display:flex">
          <!-- 查询条件 -->
          <el-form
            label-width="80px"
            class="query-form"
            ref="queryBody"
            :model="queryBody"
          >
            <el-form-item label="电厂名称:" class="query-title" prop="name">
              <el-input
                v-model="queryBody.name"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
            <el-form-item label="机组类型:" class="query-title" prop="type">
              <el-input
                v-model="queryBody.type"
                placeholder="请输入"
                clearable
              />
            </el-form-item>
          </el-form>
          <el-button
            type="primary"
            size="small"
            icon="el-icon-search"
            @click="queryIntegrateList"
          >
            查询
          </el-button>
          <el-button
            type="succ"
            size="small"
            icon="el-icon-refresh-left"
            @click="resetIntegrateList"
          >
            重置
          </el-button>
        </div>
        <div class="btnFlag">
          <el-button type="primary" size="small" @click="exportIntegrateList">
            导出
          </el-button>
          <el-button
            type="ess"
            size="small"
            style="color:#fff"
            @click="printIntegrateList"
          >
            打印
          </el-button>
        </div>
      </div>
      <!-- 列表表格区域 -->
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        :header-cell-style="{
          background: '#F7F8FA',
          color: '#000000'
        }"
        @selection-change="handleSelectionChange"
        height="500"
      >
        <el-table-column align="center" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" label="序号" width="50">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="电厂名称"
          align="center"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="province"
          align="center"
          label="机组编号"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          align="center"
          label="省外来电情况"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="总发电量(万千瓦时)"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          align="center"
          label="库存煤量(万吨)"
          width="110"
        >
        </el-table-column>
        <el-table-column
          prop="rcml"
          align="center"
          label="入场煤量(万吨)"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="日耗煤量(万吨)"
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          align="center"
          label="发电煤耗(g/kwh)"
          width="140"
        >
        </el-table-column>
        <el-table-column
          prop="kyts"
          align="center"
          label="可用天数"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="qymt"
          align="center"
          label="企业煤炭库存量排名"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="gbnl"
          align="center"
          label="供保能力天数排名"
          width="120"
        >
        </el-table-column>
        <el-table-column prop="gbnl" align="center" label="电量供应能力">
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        style="text-align:right;padding-top:10px"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryParams.pages"
        :page-sizes="[10, 20, 30]"
        :page-size="queryParams.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import echartsone from "../components/echartsone.vue";
export default {
  data() {
    return {
      top1: [
        {
          num: "01",
          name: "热电炼厂",
          production: "253万吨"
        },
        {
          num: "02",
          name: "山东柠檬生化有限公司",
          production: "252万吨"
        },
        {
          num: "03",
          name: "临朐县热炼厂",
          production: "251万吨"
        },
        {
          num: "04",
          name: "山东黄海有限公司",
          production: "250万吨"
        },
        {
          num: "05",
          name: "热电炼厂",
          production: "249万吨"
        }
      ],
      top2: [
        {
          num: "01",
          name: "热电炼厂",
          day: "52天"
        },
        {
          num: "02",
          name: "山东柠檬生化有限公司",
          day: "51天"
        },
        {
          num: "03",
          name: "临朐县热炼厂",
          day: "50天"
        },
        {
          num: "04",
          name: "山东黄海有限公司",
          day: "49天"
        },
        {
          num: "05",
          name: "热电炼厂",
          day: "48天"
        }
      ],
      top3: [
        {
          num: "01",
          name: "热电炼厂",
          unit: "566万KW·h"
        },
        {
          num: "02",
          name: "山东柠檬生化有限公司",
          unit: "45万KW·h"
        },
        {
          num: "03",
          name: "临朐县热炼厂",
          unit: "35万KW·h"
        },
        {
          num: "04",
          name: "山东黄海有限公司",
          unit: "32万KW·h"
        },
        {
          num: "05",
          name: "热电炼厂",
          unit: "31万KW·h"
        }
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "中国大唐托克托电站",
          province: "ZGDT001",
          city: "普陀区",
          address: "365584",
          zip: 491495,
          rcml: 382384,
          kyts: "325天",
          qymt: 2,
          gbnl: 1
        },
        {
          date: "2016-05-02",
          name: "天津陈塘热电有限公司 ",
          province: "TJCT002",
          city: "普陀区",
          address: "651499",
          zip: 640658,
          rcml: 531547,
          kyts: "255天",
          qymt: 6,
          gbnl: 2
        },
        {
          date: "2016-05-04",
          name: "华北电网有限公司",
          province: "HBDW003",
          city: "普陀区",
          address: "156874",
          zip: 282965,
          rcml: 256987,
          kyts: "325天",
          qymt: 5,
          gbnl: 3
        },
        {
          date: "2016-05-01",
          name: "唐山发电联营公司",
          province: "TSFD004",
          city: "普陀区",
          address: "365791",
          zip: 159658,
          rcml: 142368,
          kyts: "266天",
          qymt: 1,
          gbnl: 4
        },
        {
          date: "2016-05-08",
          name: "沧州华瑞热电有限责任公司",
          province: "CZHR005",
          city: "普陀区",
          address: "956475",
          zip: 195610,
          rcml: 135784,
          kyts: "330天",
          qymt: 7,
          gbnl: 5
        },
        {
          date: "2016-05-06",
          name: "北京炼焦化学厂 ",
          province: "BJLJ006",
          city: "普陀区",
          address: "211578",
          zip: 176614,
          rcml: 165743,
          kyts: "500天",
          qymt: 4,
          gbnl: 6
        },
        {
          date: "2016-05-07",
          name: "中电国华电力股份有限公司",
          province: "ZDGH007",
          city: "普陀区",
          address: "523978",
          zip: 183530,
          rcml: 163005,
          kyts: "420天",
          qymt: 5,
          gbnl: 7
        },
        {
          date: "2016-05-06",
          name: "北京东方石油化工有限公司",
          province: "BJDF008",
          city: "普陀区",
          address: "312640",
          zip: 199540,
          rcml: 183245,
          kyts: "300天",
          qymt: 8,
          gbnl: 8
        },
        {
          date: "2016-05-07",
          name: "静海热电厂 ",
          province: "JHRD009",
          city: "普陀区",
          address: "846649",
          zip: 137749,
          rcml: 120369,
          kyts: "563天",
          qymt: 9,
          gbnl: 9
        }
      ],
      total: 0,

      // 查询参数对象1(放在请求的params里,以？形式拼接)
      queryParams: {
        pages: 1,
        size: 10
      },
      selectData: [],
      // 查询参数对象
      queryBody: {
        name: "",
        type: ""
      }
    };
  },
  mounted() {
    this.InitIntegrateList();
  },
  methods: {
    InitIntegrateList() {
      //调用接口，初始化大栏目列表
    },
    // 打印
    printIntegrateList() {},
    //点击查询按钮触发
    queryIntegrateList() {
      this.queryParams.pages = 1;
      this.InitIntegrateList();
    },
    //重置
    resetIntegrateList() {
      this.$refs.queryBody.resetFields();
      this.queryBody.PowerType = "";
      this.InitIntegrateList();
    },
    // 导出
    exportIntegrateList() {},
    //页面数据条数发生变化触发
    handleSizeChange(newPageSize) {
      this.queryParams.size = newPageSize;
      this.InitIntegrateList();
    },

    //页码发生变化触发
    handleCurrentChange(newPageNum) {
      this.queryParams.pages = newPageNum;
      this.InitIntegrateList();
    },

    handleSelectionChange(val) {
      this.selectData = val;
    }
  },
  components: {
    echartsone
  }
};
</script>

<style scoped lang="scss" scoped>
// ::v-deep .el-main {
//   height: 500px;
// }

::v-deep .el-table__body-wrapper::-webkit-scrollbar {
  width: 10px !important;
  /*滚动条宽度*/
  height: 10px !important;
  /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::v-deep .el-table__body-wrapper::-webkit-scrollbar-track {
  box-shadow: 0px 1px 3px #ccced2 inset !important;
  /*滚动条的背景区域的内阴影*/
  border-radius: 10px !important;
  /*滚动条的背景区域的圆角*/
  background-color: #ccced2 !important;
  /*滚动条的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
  box-shadow: 0px 1px 3px #428ab2 inset !important;
  /*滚动条的内阴影*/
  border-radius: 10px !important;
  /*滚动条的圆角*/
  background-color: #428ab2 !important;
  /*滚动条的背景颜色*/
}
ul {
  padding: 0;
  margin: 0;
}
.echarts-one {
  width: 49.5%;
  height: 100%;
  margin-right: 10px;
  border-radius: 10px;
}
.echarts-two {
  width: 49.5%;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
}
.btnFlag {
  text-align: right;
  margin: 10px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.query-form {
  display: flex;
  .query-title {
    margin: 0 10px 0;
  }
}
.echarts-two-box1 {
  width: 32%;
  height: 100%;
  border-radius: 10px;
  background: #f8fbfb;
  padding: 10px;
  margin-right: 10px;
}
.echarts-two-box2 {
  width: 32%;
  height: 100%;
  border-radius: 10px;
  background: #fefbf8;
  padding: 10px;
  margin-right: 10px;
}
.echarts-two-box3 {
  flex: 1;
  height: 100%;
  border-radius: 10px;
  background: #f8fcfe;
  padding: 10px;
}
.echarts-two-box01 {
  display: flex;
  align-items: center;
  padding: 7px 0;
}
.echarts-two-box02 {
  display: flex;
  align-items: center;
  padding: 7px 0;
}
.echarts-two-box03 {
  display: flex;
  align-items: center;
  padding: 7px 0;
}
.el-button--primary {
  //需要更改的按钮类型
  background: #158388 !important;
  border-color: #158388 !important;
}
.el-button--succ {
  //需要更改的按钮类型
  background: #f2f3f5 !important;
  border-color: #f2f3f5 !important;
}
.el-button--ess {
  //需要更改的按钮类型
  background: #f5ba49 !important;
  border-color: #f5ba49 !important;
}
</style>
