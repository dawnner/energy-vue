<template>
  <div class="dashboard-container">
    <div style="width:100%;height:50%">
      <web-map style="width:100%;height:100%"></web-map>
    </div>
    <div class="app-container" style="height:40%">
      <page-tools :show-before="true">
        <el-form
          slot="before"
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
        >
          <el-form-item label="电源分类">
            <el-select v-model="formInline.chemistry">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select v-model="formInline.battery" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目前期工作进展 : ">
            <el-select v-model="formInline.prophase">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="建设状态 ：">
            <el-select v-model="formInline.construct">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <template slot="after">
          <el-button size="mini" type="success">查询</el-button>
          <el-button size="mini" type="success" @click="delFn">重置</el-button>
        </template>
      </page-tools>
      <div style="display:flex;justify-content: flex-end;margin-bottom: 20px;">
        <el-button size="mini" type="success">导出</el-button>
        <el-button size="mini" type="success">打印</el-button>
      </div>
      <!-- 放置表格和分页 -->
      <template>
        <el-table :data="tableData" border style="width: 100%;" height="220">
          <el-table-column type="selection" width="55" align="center">
          </el-table-column>
          <el-table-column prop="date" label="序号" align="center" width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            label="电厂代码"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="电厂名称"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="电厂地址"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="电源分类"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="电厂性质"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="项目前期工作进展"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="接网工程进展"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="电厂装机容量(万千瓦)"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="建设状态"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="机组核准状态"
            align="center"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="机组投产状态"
            align="center"
            width="280"
          >
          </el-table-column>
        </el-table>
      </template>
      <!-- 分页组件 -->
      <el-row type="flex" justify="end" align="middle" style="height: 61px">
        <el-pagination
          background="#ecf6ec"
          layout="prev, pager, next"
          :total="100"
        />
      </el-row>
    </div>
  </div>
</template>
<script>
import PageTools from "./PageTools.vue";
import webMap from "../../views/WebMap/mapCgui.vue";
export default {
  data() {
    return {
      formInline: {
        chemistry: "", //化学电源
        battery: "", //电池电源
        prophase: "", //项目前期工作进展
        construct: "" //建设状态
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    //重置按钮
    delFn() {
      this.formInline = {
        chemistry: "", //化学电源
        battery: "", //电池电源
        prophase: "", //项目前期工作进展
        construct: "" //建设状态
      };
    }
  },
  components: {
    PageTools,
    webMap
  }
};
</script>
<style scoped lang="scss">
.el-form-item {
  margin: 0;
}
.dashboard-container {
  width: 100%;
  height: 100%;
}
.el-select {
  width: 200px; /* 设置组件的宽度 */
  height: 30px; /* 设置组件的高度 */
  margin-right: 20px;
}
.el-table {
  ::v-deep.el-table__body-wrapper::-webkit-scrollbar {
    width: 10px !important;
    height: 10px !important;
  }

  ::v-deep.el-table__body-wrapper::-webkit-scrollbar-track {
    box-shadow: 0px 1px 3px #ccced2 inset !important;
    border-radius: 10px !important;
    background-color: #ccced2 !important;
  }

  ::v-deep.el-table__body-wrapper::-webkit-scrollbar-thumb {
    box-shadow: 0px 1px 3px #caf9db inset !important;
    border-radius: 10px !important;
    background-color: #c8fac2 !important;
  }
}
</style>
