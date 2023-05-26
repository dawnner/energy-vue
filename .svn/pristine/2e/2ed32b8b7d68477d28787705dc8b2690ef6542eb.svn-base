<template>
  <div class="app-container">
    <div class="top_search">
      <div class="search_title">
        <div class="line"></div>逆变器监控查询条件
      </div>
      <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="110px">
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
        <el-form-item label="逆变器名称" prop="postCode">
          <el-input v-model="queryParams.postName" placeholder="请输入逆变器名称" clearable size="small" />
        </el-form-item>
        <el-form-item label="逆变器状态" prop="postName">
          <el-select v-model="queryParams.status" placeholder="请选择逆变器状态" clearable size="small">
            <el-option v-for="dict in statusOptions" :key="dict.dictValue" :label="dict.dictLabel"
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
          <el-button type="primary" plain size="mini">历史发电量</el-button>
          <el-button type="primary" plain size="mini">告警信息</el-button>
          <el-button type="primary" plain size="mini">导出Excel</el-button>
          <el-button type="primary" plain size="mini">逆变信息</el-button>
        </div>

      </div>
      <el-table v-loading="loading" :row-class-name="tableRowClassName" :data="powerList"
        :default-sort="{prop: 'name', order: 'descending'}" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="逆变器名称" align="center" prop="name" sortable />
        <el-table-column label="逆变器状态" align="center" prop="status" sortable />
        <el-table-column label="额定容量(kW)" width="130" align="center" prop="capacity" sortable />
        <el-table-column label="日电量(kWh)" width="155" align="center" prop="daypower" sortable />
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
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="岗位名称" prop="postName">
          <el-input v-model="form.postName" placeholder="请输入岗位名称" />
        </el-form-item>
        <el-form-item label="岗位编码" prop="postCode">
          <el-input v-model="form.postCode" placeholder="请输入编码名称" />
        </el-form-item>
        <el-form-item label="岗位顺序" prop="postSort">
          <el-input-number v-model="form.postSort" controls-position="right" :min="0" />
        </el-form-item>
        <el-form-item label="岗位状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio v-for="dict in statusOptions" :key="dict.dictValue" :label="dict.dictValue">{{dict.dictLabel}}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
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
          name: '高纸-17ktl逆变器',
          status: '正常运行',
          capacity: 33,
          daypower: 12,
          monthpower: 1386,
          sumpower: 98961,
          days: 59,
          months: 1776,
          hours: 0.53
        }, {
          name: '高纸-33ktl逆变器',
          status: '正常运行',
          capacity: 17,
          daypower: 20,
          monthpower: 2823,
          sumpower: 210589,
          days: 115,
          months: 3448,
          hours: 0.59
        }, {
          name: '东街-17ktl逆变器',
          status: '正常运行',
          capacity: 17,
          daypower: 10,
          monthpower: 1508,
          sumpower: 108158,
          days: 59,
          months: 1776,
          hours: 0.6
        }, {
          name: '东街-33ktl逆变器',
          status: '正常运行',
          capacity: 33,
          daypower: 21,
          monthpower: 2953,
          sumpower: 206517,
          days: 115,
          months: 2448,
          hours: 0.63
        }],
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
        const postId = row.postId || this.ids
        getPost(postId).then(response => {
          this.form = response.data;
          this.open = true;
          this.title = "修改岗位";
        });
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
