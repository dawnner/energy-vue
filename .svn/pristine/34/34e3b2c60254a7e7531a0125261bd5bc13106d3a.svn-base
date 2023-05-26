<template>
  <div class="app-container">
    <div class="top_search">
      <div class="search_title">
        <div class="line"></div>区域监控查询条件
      </div>
      <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
        <el-form-item label="区县" prop="postCode">
          <el-select v-model="queryParams.status" placeholder="请选择区县" clearable size="small">
            <el-option v-for="dict in statusOptions1" :key="dict.dictValue" :label="dict.dictLabel"
              :value="dict.dictValue" />
          </el-select>
        </el-form-item>
        <el-form-item label="乡镇" prop="postName">
          <el-select v-model="queryParams.status" placeholder="请选择乡镇" clearable size="small">
            <el-option v-for="dict in statusOptions2" :key="dict.dictValue" :label="dict.dictLabel"
              :value="dict.dictValue" />
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left: 30px;">
          <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
          <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="middle_table">
      <div class="table_btn">
        <div class="table_title">
          <div class="line"></div>
          统计信息
        </div>
        <div>
          <el-button type="primary" plain size="mini">电站信息</el-button>
          <el-button type="primary" plain size="mini" :disabled="single" @click="handleUpdate">告警信息</el-button>
          <el-button type="primary" plain size="mini">历史信息</el-button>
        </div>

      </div>
      <el-table v-loading="loading" :data="powerList" style="width: 100%;overflow: auto;"
        :default-sort="{prop: 'postId', order: 'descending'}" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="区域名称" align="center" prop="name" sortable />
        <el-table-column label="额定容量(kW)" width="130" align="center" prop="capacity" sortable />
        <el-table-column label="当前日发电量(kWh)" width="160" align="center" prop="daypower" sortable />
        <el-table-column label="月电量(kWh)" width="120" align="center" prop="monthpower" sortable />
        <el-table-column label="累计发电量(kWh)" width="155" align="center" prop="sumpower" sortable />
        <el-table-column label="理论日电量(kWh)" width="125" align="center" prop="days">
        </el-table-column>
        <el-table-column label="理论月电量(kWh)" width="125" align="center" prop="months">
        </el-table-column>
        <el-table-column label="日等效利用小时数(h)" align="center" prop="hours" sortable>
        </el-table-column>
      </el-table>

      <pagination v-show="total>0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
        @pagination="getList" />
    </div>
    <!-- 添加或修改岗位对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="75%" append-to-body>
      <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="80px">
        <el-form-item label="告警类型" prop="county">
          <el-select v-model="queryParams.county" placeholder="请选择告警类型" clearable size="small">
            <el-option v-for="dict in statusOptions" :key="dict.dictValue" :label="dict.dictLabel"
              :value="dict.dictValue" />
          </el-select>
        </el-form-item>
        <el-form-item label="告警级别" prop="town">
          <el-select v-model="queryParams.town" placeholder="请选择告警级别" clearable size="small">
            <el-option v-for="dict in statusOptions" :key="dict.dictValue" :label="dict.dictLabel"
              :value="dict.dictValue" />
          </el-select>
        </el-form-item>

        <el-form-item label="发生时间">
          <el-date-picker v-model="dateRange" size="small" style="width: 240px" value-format="yyyy-MM-dd"
            type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="规格型号" prop="town">
          <el-input v-model="queryParams.postName" placeholder="请输入规格型号" clearable size="small" />
        </el-form-item>
        <el-form-item label="告警状态" prop="town">
          <el-select v-model="queryParams.town" placeholder="请选择告警状态" clearable size="small">
            <el-option v-for="dict in statusOptions" :key="dict.dictValue" :label="dict.dictLabel"
              :value="dict.dictValue" />
          </el-select>
        </el-form-item>
        <!--搜索、重置-->
        <el-form-item style="margin-left: 30px;">
          <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
          <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table v-loading="loading" :row-class-name="tableRowClassName" :data="tableInfo"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="区县" align="center" prop="county"/>
        <el-table-column label="乡镇" align="center" prop="town"/>
        <el-table-column label="所属电站" width="110" align="center" prop="powstation" />
        <el-table-column label="资产编号" align="center" prop="monthpow" />
        <el-table-column label="规格型号" align="center" prop="theorypow" />
        <el-table-column label="告警级别" align="center" prop="departure" />
        <el-table-column label="告警状态" align="center" prop="warenum" />
        <el-table-column label="告警名称" align="center" prop="warelen" />
        <el-table-column label="发生时间" align="center" prop="reduce" />
        <el-table-column label="恢复时间" align="center" prop="redrate" />
        <el-table-column label="告警类型" align="center" prop="cumulative" />
        </el-table-column>
      </el-table>
      <!--分页-->
      <pagination v-show="total>0" :total="9" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
        @pagination="getList" />
    </el-dialog>
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
    name: "Post",
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
        powerList: [{
            name: '济阳',
            capacity: 2950,
            daypower: 1266,
            monthpower: 268687,
            sumpower: 17600002,
            days: 10274,
            months: 308211,
            hours: 24.5
          }, {
            name: '平阴',
            capacity: 2100,
            daypower: 469,
            monthpower: 184951,
            sumpower: 12847485,
            days: 7313,
            months: 219404,
            hours: 8.91
          },
          {
            name: '商河',
            capacity: 3500,
            daypower: 1844,
            monthpower: 300293,
            sumpower: 22090952,
            days: 12189,
            months: 365674,
            hours: 36.91
          }, {
            name: '章丘',
            capacity: 3000,
            daypower: 855,
            monthpower: 250516,
            sumpower: 18696846,
            days: 10448,
            months: 313435,
            hours: 16.45
          }
        ],
        tableInfo: [
        ],
        // 岗位表格数据
        postList: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        // 状态数据字典
        statusOptions: [],
        statusOptions1: [],
        statusOptions2: [],
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
        // 表单校验
        rules: {
          postName: [{
            required: true,
            message: "岗位名称不能为空",
            trigger: "blur"
          }],
          postCode: [{
            required: true,
            message: "岗位编码不能为空",
            trigger: "blur"
          }],
          postSort: [{
            required: true,
            message: "岗位顺序不能为空",
            trigger: "blur"
          }]
        }
      };
    },
    created() {
      this.getList();
      this.getDicts("sys_normal_disable").then(response => {
        this.statusOptions = response.data;
      });
    },
    methods: {
      tableRowClassName({
        rowIndex
      }) {
        if ((rowIndex + 1) % 2 === 0) {
          return 'color-row'
        }
      },
      /** 查询岗位列表 */
      getList() {
        this.loading = true;
        listPost(this.queryParams).then(response => {
          this.postList = response.rows;
          this.total = response.total;
          this.loading = false;
        });
      },
      // 岗位状态字典翻译
      statusFormat(row, column) {
        return this.selectDictLabel(this.statusOptions, row.status);
      },
      // 取消按钮
      cancel() {
        this.open = false;
        this.reset();
      },
      // 表单重置
      reset() {
        this.form = {
          postId: undefined,
          postCode: undefined,
          postName: undefined,
          postSort: 0,
          status: "0",
          remark: undefined
        };
        this.resetForm("form");
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.queryParams.pageNum = 1;
        this.getList();
      },
      /** 重置按钮操作 */
      resetQuery() {
        this.resetForm("queryForm");
        this.handleQuery();
      },
      // 多选框选中数据
      handleSelectionChange(selection) {
        this.ids = selection.map(item => item.postId)
        this.single = selection.length != 1
        this.multiple = !selection.length
      },
      /** 新增按钮操作 */
      handleAdd() {
        this.reset();
        this.open = true;
        this.title = "添加岗位";
      },
      /** 修改按钮操作 */
      handleUpdate(row) {
        this.reset();
        this.open = true;
        this.title = "告警信息";
        // const postId = row.postId || this.ids
        // getPost(postId).then(response => {
        //   this.form = response.data;
        //   this.open = true;
        //   this.title = "告警信息";
        // });
      },
      /** 提交按钮 */
      submitForm: function() {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if (this.form.postId != undefined) {
              updatePost(this.form).then(response => {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              });
            } else {
              addPost(this.form).then(response => {
                this.msgSuccess("新增成功");
                this.open = false;
                this.getList();
              });
            }
          }
        });
      },
      /** 删除按钮操作 */
      handleDelete(row) {
        const postIds = row.postId || this.ids;
        this.$confirm('是否确认删除岗位编号为"' + postIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delPost(postIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
      },
      /** 导出按钮操作 */
      handleExport() {
        const queryParams = this.queryParams;
        this.$confirm('是否确认导出所有岗位数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportPost(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
      }
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
    justify-content: space-between;
    padding: 5px 5px 20px 10px;
  }

  .search_title {
    color: #606266;
    font-size: 15px;
    margin: -15px 0 15px 0;
    border-bottom: 1px dashed #eee;
    padding-bottom: 10px;
    padding-left: 30px;
    display: flex;
    align-items: center;
  }

  .table_title {
    display: flex;
    align-items: center;
  }

  .line {
    background-color: #1890FF;
    width: 4px;
    height: 15px;
    border-radius: 5px;
    margin-right: 8px;
  }
</style>
