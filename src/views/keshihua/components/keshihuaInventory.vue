<template>
  <div style='padding: 0 20px'>
    <div style="display:flex;width:100%">
      <div id="echart" style="width: 50%; height: 280px;margin-left:20px"></div>
      <div id="echart1" style="width: 50%; height: 280px"></div>
    </div>
      <div><!-- 查询条件 -->
    <el-form label-width="130px" class="query-form" ref="queryBody" :model="queryBody">
      <el-form-item label="电厂名称:" class="query-title" prop='name'>
        <el-input
          v-model="queryBody.name"
          placeholder="请输入"
          clearable
        />
      </el-form-item>
      <el-form-item label="机组类型:" class="query-title" prop='type'>
        <el-input
          v-model="queryBody.type"
          placeholder="请输入"
          clearable
        />
      </el-form-item>
    </el-form>
    <div class='btnFlag'>
      <el-button type="success" size="small" @click="queryIntegrateList">
        查询
      </el-button>
      <el-button type="success" size="small" @click="resetIntegrateList">
        重置
      </el-button>
      <el-button type="success" size="small" @click="exportIntegrateList">
        导出
      </el-button>
      <el-button type="success" size="small" @click="printIntegrateList">
        打印
      </el-button>
    </div>
<!-- 列表表格区域 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      :header-cell-style="{ 
      background:'#99cccc',color:'#000000'}"
      @selection-change="handleSelectionChange"
      height="400">
      <el-table-column
        align='center'
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
          align='center'
          label="序号"
          width="50">
        <template slot-scope="scope">
            {{scope.$index+1}}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="电厂名称"
        align='center'
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        align='center'
        label="机组容量(万千瓦)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="city"
        align='center'
        label="日发电量(万千瓦)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="供热量(GJ)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        align='center'
        label="煤炭库存(万吨)"
        width="110">
      </el-table-column>
      <el-table-column
        prop="city"
        align='center'
        label="日供煤量(万吨)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="日耗煤量(万吨)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="zip"
        align='center'
        label="电煤可用天数(天数)"
        width="140">
      </el-table-column>
      <el-table-column
        prop="city"
        align='center'
        label="机组状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="机组"
        width="100">
      </el-table-column>
    </el-table>
<!-- 分页 -->
    <el-pagination
      :current-page="queryParams.pages"
      :page-sizes="[10, 20, 30]"
      style='text-align:right;padding-top:10px'
      :page-size="queryParams.size"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
</div>
  </div>
</template>

<script>
import echarts from 'echarts'
let myChart = null
let myChart1 = null
export default {
  data() {
    return {
        tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }],
      total: 0,

      // 查询参数对象1(放在请求的params里,以？形式拼接)
      queryParams: {
        pages: 1,
        size: 10
      },
      selectData: [],
      // 查询参数对象
      queryBody: {
        name: '',
        type: ''
      },
      option: {
        title: {
          text: "燃料库存曲线",
          left: 20,
          top: 18,
          // bottom: 18,
          textStyle: {
            fontSize: 22
          }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
          },
          legend: {
            top: "8%",
            data: ['燃料库存量', '耗煤量']
          },
          series: [{
            name: '燃料库存量',
            data: [150, 230, 224, 218, 135, 147, 1500],
            type: 'bar',
            // showBackground: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            itemStyle: {
            normal: {
              color: "#3BAFFF"
            }
          },
          }, 
          {
            name: '耗煤量',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [150, 230, 224, 218, 135, 147, 1500],
            type: 'line',
            symbol: 'circle',//拐点样式
            symbolSize: 18,//拐点大小
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3,//折线宽度
                  color: "#158388"//折线颜色
                },
                color: '#158388',//拐点颜色
                borderColor: '#158388',//拐点边框颜色
                borderWidth: 3//拐点边框大小
              },
              emphasis: {
                color: '#158388'//hover拐点颜色定义
              }
            },
          }
        ]
      },
    option1: {
      title: {
        text: "山东省各地市煤炭库存量",
        left: 20,
        top: 18,
        // bottom: 18,
        textStyle: {
          fontSize: 22
        }
      },
      dataZoom: [
        {
          show: true,
          height: 5,
          xAxisIndex: [0],
          bottom: 20,
          showDetail: false,
          showDataShadow: false,
          borderColor: "transparent",
          textStyle: {
            fontSize: 0
          },
          endValue: 4,//从0开始的相当于5个
          backgroundColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          handleStyle: {
            color: "#d3dee5"
          }
        }
      ],
      tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        xAxis: {
          type: 'category',
          data: ['济南', '青岛', '淄博', '潍坊', '日照', '威海', '枣庄', '威海', '烟台','青岛', '淄博', '潍坊', '日照', '威海', '枣庄', '威海', '烟台']
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 1500],
          type: 'bar',
          // showBackground: true,
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml';
            }
          },
          itemStyle: {
          normal: {
            color: "#3065a5"
          }
        },
        },
        ]
      }
    }
  },
  mounted () {
    this.mycharts()
    this.InitIntegrateList()
  },
  methods: {
    mycharts () {
      myChart = this.$echarts.init(document.getElementById("echart"))
      myChart.setOption(this.option, true)
      myChart1 = this.$echarts.init(document.getElementById("echart1"))
      myChart1.setOption(this.option1, true)
    },
    InitIntegrateList () {
      //调用接口，初始化大栏目列表
    },
    // 打印
    printIntegrateList () {

    },
    //点击查询按钮触发
    queryIntegrateList () {
      this.queryParams.pages = 1
      this.InitIntegrateList()
    },
    //重置
    resetIntegrateList () {
      this.$refs.queryBody.resetFields()
      this.queryBody.PowerType = ''
      this.InitIntegrateList()
    },
    // 导出
    exportIntegrateList () {

    },
    //页面数据条数发生变化触发
    handleSizeChange (newPageSize) {
      this.queryParams.size = newPageSize
      this.InitIntegrateList()
    },
    
    //页码发生变化触发
    handleCurrentChange (newPageNum) {
      this.queryParams.pages = newPageNum
      this.InitIntegrateList()
    },
    
    handleSelectionChange (val) {
      this.selectData = val;
    }
  },
};
</script>

<style scoped lang="scss" >
  ::v-deep .el-main {
    height: 500px;
  }

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
  
  .proCharts{
    margin:10px;
    height: 300px;
    background: #fff;
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
      margin: 0 95px 0;
    }
  }
</style>
