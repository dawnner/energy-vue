<template>
  <div style="width:100%;height:100%;">
    <div class="newtop">
      <div class="newtop-one">
        <div style="font-size: 24px;font-weight: 500;">全省可开放总容量</div>
        <img src="../../../assets/images/c.png" alt="" />
        <div>
          <span style="font-size: 72px;color: #49C2BB;font-weight: 700;">{{
            value
          }}</span
          ><span>兆伏安</span>
        </div>
      </div>
      <div style="flex:1">
        <MapAnalysis
          style="width: 95%;height: 100%;margin:0 auto;"
        ></MapAnalysis>
      </div>
      <div class="newtop-therr">
        <div class="newtop-therr-one">
          <span
            style="width: 4px;height: 19px;background: #158388;margin:0 10px"
          ></span>
          <div
            style="padding:12px 0;border-bottom: 1px solid #ccc;font-size: 20px;flex:1"
          >
            各地市可开放容量排名
          </div>
        </div>
        <div class="newtop-therr-two" style="margin:0px 5px">
          <template>
            <el-table :data="tableData" style="width: 100%;">
              <el-table-column prop="date" label="排名" align="center">
              </el-table-column>
              <el-table-column prop="name" label="地区" align="center">
              </el-table-column>
              <el-table-column prop="address" label="容量(MVA)" align="center">
              </el-table-column>
            </el-table>
          </template>
        </div>
      </div>
    </div>
    <div class="newbottom">
      <div
        style="width:100%;padding:20px 30px;display: flex;justify-content: space-between;"
      >
        <div style="display:flex">
          <!-- 查询条件 -->
          <el-form
            label-width="80px"
            class="query-form"
            ref="from"
            :model="from"
          >
            <el-form-item label="所属地市:" class="query-title" prop="name">
              <el-input v-model="from.name" placeholder="请输入" clearable />
            </el-form-item>
          </el-form>
          <el-button type="primary" size="small" icon="el-icon-search">
            查询
          </el-button>
          <el-button
            type="succ"
            size="small"
            icon="el-icon-refresh-left"
            @click="delFn"
          >
            重置
          </el-button>
        </div>
        <div class="btnFlag">
          <el-button type="primary" size="small">
            导出
          </el-button>
        </div>
      </div>
      <div style="margin:0 30px 20px 30px;border-bottom: 1px solid #ccc;"></div>
      <div style="margin:0 30px">
        <el-table :data="table" stripe style="width: 100%">
          <el-table-column prop="date" label="序号" align="center">
          </el-table-column>
          <el-table-column prop="name" label="所属单位" align="center">
          </el-table-column>
          <el-table-column prop="name" label="所属馈线" align="center">
          </el-table-column>
          <el-table-column prop="name" label="公变台区名称" align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="台区变压器容量(KVA)"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="分布式电源可开放容量(KVA)"
            align="center"
          >
          </el-table-column>
        </el-table>
        <el-pagination
          style="text-align:right;padding-top:10px"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryParams.pages"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="queryParams.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import MapAnalysis from "../../dashboard/analysis/MapAnalysis.vue";
export default {
  data() {
    return {
      value: "9000",
      // 查询参数对象1(放在请求的params里,以？形式拼接)
      queryParams: {
        pages: 1,
        size: 10
      },
      tableData: [
        {
          date: "1",
          name: "济南市",
          address: "3526.3"
        },
        {
          date: "2",
          name: "济南市",
          address: "3526.3"
        },
        {
          date: "3",
          name: "济南市",
          address: "3526.3"
        },
        {
          date: "4",
          name: "济南市",
          address: "3526.3"
        },
        {
          date: "5",
          name: "济南市",
          address: "3526.3"
        },
        {
          date: "6",
          name: "济南市",
          address: "3526.3"
        },
        {
          date: "7",
          name: "济南市",
          address: "3526.3"
        },
        {
          date: "8",
          name: "济南市",
          address: "3526.3"
        },
        {
          date: "9",
          name: "济南市",
          address: "3526.3"
        },
        {
          date: "10",
          name: "济南市",
          address: "3526.3"
        },
        {
          date: "11",
          name: "济南市",
          address: "3526.3"
        }
      ],
      // 查询参数对象
      from: {
        name: ""
      },
      table: [
        {
          date: "1",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "3",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //重置按钮
    delFn() {
      this.from = {
        name: ""
      };
    }
  },
  components: {
    MapAnalysis
  }
};
</script>

<style lang="scss" scoped>
.newtop {
  width: 100%;
  height: 60%;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
}
.newbottom {
  width: 100%;
  height: 39%;
  background: #fff;
  border-radius: 10px;
}
.newtop-one {
  width: 22%;
  height: 100%;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 20px;
}
.newtop-therr {
  width: 22%;
  height: 100%;
  border-radius: 10px;
  background: #fff;
}
.newtop-therr-one {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.query-form {
  display: flex;
  .query-title {
    margin: 0 10px 0;
  }
}
.btnFlag {
  text-align: right;
}
</style>
