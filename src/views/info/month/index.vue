<!-- 月度分析 liuxia 2021/8/25 -->
<template>
  <div class="app-container">
    <div class="top_search">
      <!--查询条件：区县、乡镇、日期 -->
      <div class="search_title">
        <div class="line"></div>查询条件
      </div>
      <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="80px">
        <el-form-item label="区县" prop="county">
          <el-select v-model="queryParams.county" placeholder="请选择区县" clearable size="small">
            <!--<el-option v-for="dict in statusOptions" :key="dict.dictValue" :label="dict.dictLabel"
              :value="dict.dictValue" />-->
          </el-select>
        </el-form-item>
        <el-form-item label="乡镇" prop="town">
          <el-select v-model="queryParams.town" placeholder="请选择乡镇" clearable size="small">
            <!--<el-option v-for="dict in statusOptions" :key="dict.dictValue" :label="dict.dictLabel"
              :value="dict.dictValue" />-->
          </el-select>
        </el-form-item>
        <!--搜索、重置-->
        <el-form-item style="margin-left: 30px;">
          <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
          <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
        </el-form-item>
        <br>
        <el-form-item label="日期">
          <el-date-picker v-model="dateRange" size="small" style="width: 240px" value-format="yyyy-MM-dd"
            type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        

      </el-form>
    </div>
    <div class="middle_table">
      <div class="table_btn">
        <div class="table_title">
          <div class="line"></div>
          项目发电情况汇总
        </div>
        <div>
          <el-button type="primary" plain icon="el-icon-export" size="mini" @click="handleExport">导出Excel</el-button>
          <el-button type="primary" plain icon="el-icon-print" size="mini">打印</el-button>
          <el-button type="primary" plain icon="el-icon-analysis" size="mini">电站数据综合分析</el-button>
          <el-button type="primary" plain icon="el-icon-register" size="mini">巡检登记</el-button>
        </div>
      </div>
      <el-table v-loading="loading" :row-class-name="tableRowClassName" :data="tableData"
        :default-sort="{prop: 'name', order: 'descending'}" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="区县" align="center" prop="county" sortable />
        <el-table-column label="乡镇" align="center" prop="town" sortable />
        <el-table-column label="电站" width="110" align="center" prop="powstation" sortable />
        <el-table-column label="当月发电量(kWh)" align="center" prop="monthpow" />
        <el-table-column label="理论发电量(kWh)" align="center" prop="theorypow" />
        <el-table-column label="偏差(kWh)" align="center" prop="departure" />
        <el-table-column label="严重警告次数" align="center" prop="warenum" />
        <el-table-column label="累计警告时长(h)" align="center" prop="warelen" />
        <el-table-column label="减少损失电量(kWh)" align="center" prop="reduce" />
        <el-table-column label="减少损失率(%)" align="center" prop="redrate" />
        <el-table-column label="累计发电量" align="center" prop="cumulative" />
        <el-table-column label="非晴朗天气(天数)" align="center" prop="days" />
        </el-table-column>
      </el-table>
      <!--分页-->
      <pagination v-show="total>0" :total="9" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
        @pagination="getList" />
    </div>
    <!-- 对话框 -->
  </div>
</template>

<script>
  import {
    listPost,
    getPost,
    delPost,
    addPost,
    updatePost,
    exportPost
  } from "@/api/system/post";

  export default {
    //name: "Post",
    data() {
      return {
        // 遮罩层
        loading: true,
        // 导出遮罩层
        exportLoading: false,
        // 选中数组
        ids: [],
        // 非单个禁用
        single: true,
        // 非多个禁用
        multiple: true,
        // 显示搜索条件
        showSearch: true,
        // 总条数
        total: 0,
        // 岗位表格数据
        postList: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        // 状态数据字典
        statusOptions: [],
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          postCode: undefined,
          postName: undefined,
          status: undefined
        },
        // 表单参数
        form: {},
        // 日期范围
        dateRange: [],
        tableData: [{
          county: '历城区', //区县
          town: '王舍人', //乡镇
          powstation: '历城区电站', //电站
          monthpow: '9.5', //当月发电量(kWh)
          theorypow: '10', //理论发电量(kWh)
          departure: '0.5', //偏差(kWh)
          warenum: '3', //严重警告次数
          warelen: '10', //累计警告时长(h)
          reduce: '2', //减少损失电量(kWh)
          redrate: '15', //减少损失率(%)
          cumulative: '20', //累计发电量
          days: '26' //非晴朗天气(天数)
        }, {
          county: '历下区', //区县
          town: '历下区', //乡镇
          powstation: '历下区电站', //电站
          monthpow: '29', //当月发电量(kWh)
          theorypow: '32', //理论发电量(kWh)
          departure: '3', //偏差(kWh)
          warenum: '6', //严重警告次数
          warelen: '30', //累计警告时长(h)
          reduce: '12', //减少损失电量(kWh)
          redrate: '20', //减少损失率(%)
          cumulative: '102', //累计发电量
          days: '23' //非晴朗天气(天数)
        }, {
          county: '高新区', //区县
          town: '高新', //乡镇
          powstation: '高新区电站', //电站
          monthpow: '19.5', //当月发电量(kWh)
          theorypow: '22', //理论发电量(kWh)
          departure: '1.5', //偏差(kWh)
          warenum: '9', //严重警告次数
          warelen: '10', //累计警告时长(h)
          reduce: '2', //减少损失电量(kWh)
          redrate: '15', //减少损失率(%)
          cumulative: '20', //累计发电量
          days: '26' //非晴朗天气(天数)
        }, {
          county: '市中区', //区县
          town: '市中', //乡镇
          powstation: '市中区电站', //电站
          monthpow: '24', //当月发电量(kWh)
          theorypow: '30', //理论发电量(kWh)
          departure: '6', //偏差(kWh)
          warenum: '9', //严重警告次数
          warelen: '10', //累计警告时长(h)
          reduce: '2', //减少损失电量(kWh)
          redrate: '15', //减少损失率(%)
          cumulative: '65', //累计发电量
          days: '24' //非晴朗天气(天数)
        }, {
          county: '长清区', //区县
          town: '长清', //乡镇
          powstation: '长清区电站', //电站
          monthpow: '39.5', //当月发电量(kWh)
          theorypow: '30', //理论发电量(kWh)
          departure: '9.5', //偏差(kWh)
          warenum: '3', //严重警告次数
          warelen: '10', //累计警告时长(h)
          reduce: '2', //减少损失电量(kWh)
          redrate: '15', //减少损失率(%)
          cumulative: '77', //累计发电量
          days: '21' //非晴朗天气(天数)
        }, {
          county: '天桥区', //区县
          town: '天桥', //乡镇
          powstation: '天桥区电站', //电站
          monthpow: '30', //当月发电量(kWh)
          theorypow: '30', //理论发电量(kWh)
          departure: '0', //偏差(kWh)
          warenum: '5', //严重警告次数
          warelen: '10', //累计警告时长(h)
          reduce: '2', //减少损失电量(kWh)
          redrate: '15', //减少损失率(%)
          cumulative: '45', //累计发电量
          days: '29' //非晴朗天气(天数)
        }, {
          county: '济阳区', //区县
          town: '济阳', //乡镇
          powstation: '济阳区电站', //电站
          monthpow: '35', //当月发电量(kWh)
          theorypow: '30', //理论发电量(kWh)
          departure: '5', //偏差(kWh)
          warenum: '5', //严重警告次数
          warelen: '10', //累计警告时长(h)
          reduce: '2', //减少损失电量(kWh)
          redrate: '15', //减少损失率(%)
          cumulative: '44', //累计发电量
          days: '22' //非晴朗天气(天数)
        }, {
          county: '章丘区', //区县
          town: '章丘', //乡镇
          powstation: '章丘区电站', //电站
          monthpow: '32', //当月发电量(kWh)
          theorypow: '30', //理论发电量(kWh)
          departure: '2', //偏差(kWh)
          warenum: '5', //严重警告次数
          warelen: '10', //累计警告时长(h)
          reduce: '2', //减少损失电量(kWh)
          redrate: '14', //减少损失率(%)
          cumulative: '50', //累计发电量
          days: '29' //非晴朗天气(天数)
        }, {
          county: '钢城区', //区县
          town: '钢城', //乡镇
          powstation: '钢城区电站', //电站
          monthpow: '30', //当月发电量(kWh)
          theorypow: '12', //理论发电量(kWh)
          departure: '18', //偏差(kWh)
          warenum: '5', //严重警告次数
          warelen: '10', //累计警告时长(h)
          reduce: '2', //减少损失电量(kWh)
          redrate: '15', //减少损失率(%)
          cumulative: '20', //累计发电量
          days: '25' //非晴朗天气(天数)
        }]
      };
    },
    created() {
      this.getList();
      this.getDicts("sys_normal_disable").then(response => {
        this.statusOptions = response.data;
      });
    },
    methods: {
      /** 查询项目发电情况列表 */
      getList() {
        this.loading = true;
        listPost(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
          this.postList = response.rows;
          this.total = response.total;
          this.loading = false;
        });
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.queryParams.pageNum = 1;
        this.getList();
      },
      /** 重置按钮操作 */
      resetQuery() {
        this.dateRange = [];
        this.resetForm("queryForm");
        this.handleQuery();
      },
      /** 导出按钮操作 */
      handleExport() {
        /*const queryParams = this.queryParams;
        this.$confirm('是否确认导出所有数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportPost(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});*/
      },
    }
  };
</script>

<style scoped>
  /deep/.el-table .color-row {
    background-color: rgb(247, 251, 255);
  }

  .top_search {
    box-shadow: 0 2px 12px 0 rgb(234, 234, 234);
    padding: 30px 0px 10px 0px;
    margin-bottom: 15px;
  }

  .middle_table {
    box-shadow: 0 2px 12px 0 rgb(234, 234, 234);
    padding: 20px 20px 30px 20px;
  }

  .table_btn {
    width: 100%;
    display: flex;
    justify-content:space-between;
    padding: 5px 5px 20px 10px;
  }
  .search_title{
    color: #606266;
    font-size: 15px;
    margin: -15px 0 15px 0;
    border-bottom: 1px dashed #eee;
    padding-bottom: 10px;
    padding-left: 30px;
    display: flex;
    align-items: center;
  }
  .table_title{
    display: flex;
    align-items: center;
  }
  .line{
    background-color: #1890FF;
    width: 4px;
    height: 15px;
    border-radius: 5px;
    margin-right: 8px;
  }
</style>
