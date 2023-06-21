<template>
  <div class="box">
    <div class="topBox">
      <el-select
        v-model="value"
        clearable
        placeholder="企业煤炭库存量排名"
        style="margin-left: 20px;"
        @change="handel($event)"
      >
        <el-option
          v-for="(item, index) in names"
          :key="index"
          :label="item.name"
          :value="item.id"
        ></el-option>
      </el-select>
      <el-button
        type="primary"
        size="small"
        icon="el-icon-search"
        style="margin-left:30px;"
        @click="search"
      >
        查询
      </el-button>
    </div>
    <el-table
      :data="dataList"
      style="width: 98%;margin-left: 1%;margin-top:10px"
      border
      :header-cell-style="{
        background: '#F7F8FA',
        color: '#000000'
      }"
    >
      <el-table-column prop="num" align="center" label="排名">
      </el-table-column>
      <el-table-column prop="name" align="center" label="企业名称">
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 15, 25]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="5"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array
    }
  },
  data() {
    return {
      names: [
        { id: 1, name: "企业煤炭库存量排名" },
        { id: 2, name: "企业保供天数排名" },
        { id: 3, name: "企业电量供应能力排名" }
      ],
      value: "",
      dataList: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
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
          name: "山东柠檬生化有限公司",
          day: "52天"
        },
        {
          num: "02",
          name: "热电炼厂",
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
          name: "山东黄海有限公司",
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
          name: "热电炼厂",
          unit: "32万KW·h"
        },
        {
          num: "05",
          name: "热电炼厂",
          unit: "31万KW·h"
        }
      ],
      ids: ""
    };
  },
  methods: {
    handel(val) {
      this.ids = val;
      console.log(this.ids);
    },
    search() {
      if (this.ids === 1) {
        this.dataList = this.top1;
      } else if (this.ids === 2) {
        this.dataList = this.top2;
      } else {
        this.dataList = this.top3;
      }
    },
    getData() {
      // console.log(datas);
      this.dataList = this.datas;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.topBox {
  width: 100%;
  height: 10%;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
}
.el-button--primary {
  background: #158388 !important;
  border-color: #158388 !important;
}
/deep/.el-pagination {
  text-align: right;
  margin-top: 20px;
  margin-right: 20px;
}
</style>
