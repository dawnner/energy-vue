<template>
  <div style="width: 100%; height: 100%; padding: 0px 35px">
    <div class="one">
      <div class="one-01">政策发文</div>
      <div @click="openmore()" style="cursor: pointer;">更多>>></div>
    </div>
    <div class="right-font-bom" style="width: 100%; height: 80%">
      <div class="font-bom-one" v-for="(item, index) in array2" :key="index">
        <div class="zcfw-wz" @click="openNews(item.noticeId)">
          {{ item.noticeTitle }}
        </div>
        <div>{{ item.createTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { listNotice, getNotice } from "@/api/system/notice";
export default {
  data() {
    return {
      array2: []
    };
  },
  methods: {
    async openNews(val) {
      const add = await getNotice(val);
      
    },
    openmore() {
      this.$router.push({
        path: "/basic/policyRelease"
      });
    },
    async listNotice() {
      const { rows } = await listNotice();
      this.array2 = rows;
      console.log(this.array2);

      // console.log(rows);
    }
  },
  created() {
    this.listNotice();
  }
};
</script>

<style>
.one {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  border-bottom: 1px solid #ccc;
}
.one-01 {
  font-size: 20px;
  color: #304159;
  font-weight: 700;
}
.font-bom-one {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  align-items: center;
  font-size: 16px;
  width: 100%;
  height: 20%;
}
.zcfw-wz {
  width: 45%;
  margin-right: 2rem;
  cursor: pointer;
  /* normal：文字显示不开自动换行 */
  /* white-space: normal; */
  /* nowrap：文字显示不开也强制一行内显示 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
