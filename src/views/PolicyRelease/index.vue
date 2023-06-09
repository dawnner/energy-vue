<template>
  <div class="zcfw">
    <div class="zcfw-box">
      <div class="zcfw-one">首页 > 政策发文</div>
      <div class="zcfw-two">
        <div
          class="zcfw-xh"
          v-for="(item, index) in array2"
          :key="index"
          @mouseover="addStyle(item)"
          @mouseout="removeStyle"
          @click="goZcfwDateil(item.noticeId)"
        >
          <div
            style="width:100%;height:100%;display:flex;align-items: center;cursor: pointer;"
          >
            <div :class="item.noticeId == dataId ? 'myStyle' : 'zcfw-time'">
              <div
                :class="item.noticeId == dataId ? 'myTopFontStyle' : 'topfont'"
              >
                {{ item.createTime.slice(8, 10) }}
              </div>
              <div
                :class="
                  item.noticeId == dataId ? 'myBottomFontStyle' : 'bottomfont'
                "
              >
                {{ item.createTime.slice(0, 7) }}
              </div>
            </div>
            <div class="zcfw-text">
              <div
                :class="item.noticeId == dataId ? 'myTitleStyle' : 'titleStyle'"
              >
                {{ item.noticeTitle }}
              </div>
              <div class="contentStyle">
                {{ item.noticeContent.replace(/<[^>]*>/g, "") }}
              </div>
            </div>
          </div>
          <span style="margin-right:10px"
            ><i
              :class="
                item.noticeId == dataId
                  ? 'el-icon-arrow-right mycolor'
                  : 'el-icon-arrow-right'
              "
            ></i
          ></span>
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
      array2: [],
      dataId: ""
    };
  },
  methods: {
    async listNotice() {
      const { rows } = await listNotice();
      this.array2 = rows;
      // console.log(this.array2, 111);
      // console.log(this.array2[0].noticeContent, 222);
      // console.log(this.array2[1].noticeContent, 222);
    },
    addStyle(item) {
      this.dataId = item.noticeId;
    },
    removeStyle() {
      this.dataId = "";
    },
    goZcfwDateil(id) {
      this.$router.push({
        path: "/dateils/zcfwDateil?id=" + id
      });
    }
  },
  created() {
    this.listNotice();
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
.zcfw-xh {
  width: 100%;
  height: 15%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
}
.zcfw-time {
  width: 7%;
  height: 100%;
  background: #f5f5f5;
  border-radius: 10px;
  margin-right: 20px;
}
.zcfw-text {
  width: 82%;
}

.topfont {
  font-size: 24px;
  text-align: center;
  margin-top: 15%;
  font-weight: bolder;
  color: #666;
}
.bottomfont {
  font-size: 14px;
  text-align: center;
  margin-top: 5%;
  color: #666;
}
.titleStyle {
  font-size: 16px;
  margin-bottom: 5px;
}

.myStyle {
  width: 7%;
  height: 100%;
  border-radius: 10px;
  margin-right: 20px;
  background-color: #158388;
}

.myTitleStyle {
  font-size: 16px;
  margin-bottom: 5px;
  color: #158388;
}

.myTopFontStyle {
  font-size: 24px;
  text-align: center;
  margin-top: 15%;
  font-weight: bolder;
  color: #fff;
}

.myBottomFontStyle {
  font-size: 14px;
  text-align: center;
  margin-top: 5%;
  color: #fff;
}

.mycolor {
  color: #158388;
}
.contentStyle {
  height: 90%;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
