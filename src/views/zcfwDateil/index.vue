<template>
  <div class="zcfw">
    <div class="zcfw-box">
      <div class="zcfw-one">首页 > 政策发文 > 政策解读</div>

      <div class="zcfw-two">
        <div class="dateilTitle">
          {{ dataDateil.noticeTitle }}
        </div>

        <div class="dateilContent">
          {{ dataDateil.noticeContent }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { listNotice, getNotice } from "@/api/system/notice";
export default {
  data() {
    return {
      noticeId: "",
      dataDateil: {},
      contentData: ""
    };
  },
  methods: {
    getId() {
      this.noticeId = this.$router.history.current.query.id;
      console.log(this.noticeId);
    },
    getNotice() {
      getNotice(this.noticeId).then(response => {
        console.log(response, "111");
        this.dataDateil = response.data;
      });
    }
  },
  created() {
    this.getId();
    this.getNotice();
  }
};
</script>

<style lang="scss" scoped>
.zcfw {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.zcfw-box {
  width: 63%;
  height: 98%;
  display: flex;
  flex-direction: column;
}
.zcfw-one {
  margin: 10px 0;
}
.zcfw-two {
  height: 100%;
  flex: 1;
  background: #fff;
  padding: 32px 20px;
}
.dateilTitle {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
  text-align: center;
}
</style>
