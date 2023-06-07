<template>
  <div style='padding: 0 20px'><!-- 查询条件 -->
    <web-map style="width: 100%;height: 600px;"></web-map>
    <el-form label-width="130px" class="query-form" ref="queryBody" :model="queryBody">
      <el-form-item label="电源类型一级:" style='width:580px' prop="PowerSource">
        <el-select v-model="queryBody.PowerSource" clearable placeholder="请选择" style='width:100px'>
          <el-option
            v-for="item in PowerSourceList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="queryBody.PowerType" clearable placeholder="请选择" style='width:100px;margin-left:20px'>
          <el-option
            v-for="item in PowerTypeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="项目前期工作发展:" prop="WorkDevelopment">
        <el-select v-model="queryBody.WorkDevelopment" clearable placeholder="请选择">
          <el-option
            v-for="item in WorkDevelopmentList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="电厂名称:" class="query-title" prop="name">
        <el-input
          v-model="queryBody.name"
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
        prop="date"
        label="电厂代码"
        align='center'
        width="150">
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
        label="电厂地址"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        align='center'
        label="电源类型一级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="电源类型二级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        align='center'
        label="电厂性质"
        width="100">
      </el-table-column>
      <el-table-column
        prop="city"
        align='center'
        label="项目前期工作进展"
        width="130">
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="接网工程进展"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        align='center'
        label="机组数量"
        >
      </el-table-column>
      <el-table-column
        prop="city"
        align='center'
        label="电厂装机容量(万千瓦)"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="建设状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="zip"
        align='center'
        label="机组核准状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        align='center'
        label="机组投产状态"
        width="120">
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
</template>

<script>
import webMap from "@/views/WebMap/mapCgui.vue";
export default {
  data () {
  return {
    // 大栏目列表数据
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
      PowerType: '',
      PowerSource: '',
      WorkDevelopment: ''
    },
    WorkDevelopmentList: [
      {
        value: '1',
        label: '未启动预可研'
      },
      {
        value: '2',
        label: '已启动预可研'
      },
      {
        value: '3',
        label: '已完成预可研查看'
      },
      {
        value: '4',
        label: '已启动可研'
      },
      {
        value: '5',
        label: '已完成可研查看'
      }
    ],
    PowerSourceList: [
      {
        value: '1',
        label: '火电'
      },
      {
        value: '2',
        label: '水电'
      },
      {
        value: '3',
        label: '核电'
      },
      {
        value: '4',
        label: '其它'
      }
    ],
    PowerTypeList: [
      {
        value: '1',
        label: '燃煤'
      },
      {
        value: '2',
        label: '燃油'
      },
      {
        value: '3',
        label: '燃气'
      },
      {
        value: '4',
        label: '余热余压余气'
      },
      {
        value: '5',
        label: '常规水电'
      },
      {
        value: '6',
        label: '抽水蓄能'
      },
      {
        value: '7',
        label: '小水电'
      },
      {
        value: '8',
        label: '核电'
      }
    ]
  }
},
components: {
  webMap
},
mounted () {
  this.InitIntegrateList()
},
methods: {
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
  }
};
</script>

<style lang="scss" scoped>
/**
自定义el-table表格滚动栏样式
*/
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
  .btnFlag {
    text-align: right;
    margin-bottom: 10px;
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
    margin-top: 30px;
    display: flex;
    .query-title {
      margin: 0 95px 0;
    }
  }

</style>
