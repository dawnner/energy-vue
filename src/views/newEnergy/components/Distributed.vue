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
              <el-table-column prop="id" label="排名" align="center">
              </el-table-column>
              <el-table-column prop="regionName" label="地区" align="center">
              </el-table-column>
              <el-table-column
                prop="regionSum"
                label="容量(MVA)"
                align="center"
              >
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
          <el-table-column
            prop="date"
            label="序号"
            type="index"
            :index="indexFn"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="unit" label="单位" align="center">
          </el-table-column>
          <el-table-column prop="placeRegion" label="所属变电站" align="center">
          </el-table-column>
          <el-table-column
            prop="powerSupplyRegion"
            label="供电所"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="placeFeederLine"
            label="所属馈线"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="courtsName"
            label="公变台区名称"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="courtsTransformerCapacity"
            label="台区变压器容量(KVA)"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="openCapacity"
            label="分布式电源可开放容量(KVA)"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="regionId" label="地区id" align="center">
          </el-table-column>
        </el-table>
        <el-pagination
          style="text-align:right;padding-top:10px"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[10, 20, 30]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import MapAnalysis from "../../dashboard/analysis/MapAnalysis.vue";
import {
  newSumApi,
  newRankingListApi,
  newcapacityApi
} from "@/api/newny/newny.js";
export default {
  data() {
    return {
      value: "",
      pageNum: 1,
      pageSize: 10,
      total: 0,
      //排名
      tableData: [],
      // 查询参数对象
      from: {
        name: ""
      },
      //列表
      table: [],
      deatlsit: {}
    };
  },
  created() {
    this.newSumApi();
    this.newRankingListApi();
    this.newcapacityApi();
  },
  methods: {
    // 全省可开放总容量
    async newSumApi() {
      const { data } = await newSumApi();
      this.value = data;
    },
    //排名
    async newRankingListApi() {
      const { data } = await newRankingListApi();
      this.tableData = data;
    },
    //分布式光伏信息
    async newcapacityApi() {
      this.deatlsit = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      const { rows, total } = await newcapacityApi(this.deatlsit);
      this.table = rows;
      this.total = total;
    },
    //序号
    indexFn(index) {
      // 前面返回的序号  前面有多少条数据
      // 前面一共有多少条 = 前面的多少页 * 每页条数
      return index + 1 + (this.pageNum - 1) * this.pageSize;
    },
    // 更新每页条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      // 更新每页条数，页码重置为第一页
      // 原因：每页条数的变化后，当前页已经不是之前的当前页，需要重置
      this.pageNum = 1;
      // 根据新的页码以及最新的数据条数，请求最新的数据
      this.newcapacityApi();
    },
    // 获取新的页码的数据
    handleCurrentChange(val) {
      this.pageNum = val;
      // console.log(`当前页:${val}`)
      // 重新获取新的页码的数据
      this.newcapacityApi();
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
