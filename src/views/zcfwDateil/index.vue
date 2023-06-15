<template>
  <div class="zcfw">
    <div class="zcfw-box">
      <div class="zcfw-one">首页 > 政策发文 > 政策解读</div>

      <div class="zcfw-two">
        <div class="dateilTitle">
          {{ dataDateil.noticeTitle }}
        </div>

        <div class="dateilContent">
          <div
            style="text-align: center;color:#999;font-size: 14px;margin-top:10px"
          >
            {{ contentData }}
          </div>
          <div v-html="content" class="content"></div>
          <div style="text-align: center; width: 100%;">
            <img src="../../assets/CoalElectricity/组 1364.png" alt="" />
          </div>
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
      contentData: "",
      content: ""
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
        this.contentData = this.dataDateil.noticeContent.split("<strong>")[0];
        this.content = this.dataDateil.noticeContent
          .split("<strong>")[1]
          .split("&nbsp")[0];
        console.log(
          this.dataDateil.noticeContent.split("<strong>")[1].split("&nbsp")
        );
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
.content {
  width: 90%;
  line-height: 30px;
  margin: 20px auto;
}
</style>
