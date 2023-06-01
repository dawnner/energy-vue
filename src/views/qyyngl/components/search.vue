<template>
  <div style="width:100%;height:100%">
    <el-input
      placeholder="请输入内容"
      v-model="inputObject.input"
      :id="inputObject.search_id"
      type="text"
    ></el-input>
    <!-- <input
      placeholder="请输入内容"
      v-model="inputObject.input"
      :id="inputObject.search_id"
    /> -->
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="sendId"
      style="width:80px;"
    >
    </el-button>
  </div>
</template>

<script>
import bus from "../../../eventBus/eventBus";
export default {
  data() {
    return {
      inputObject: {
        search_id: "searchId",
        input: ""
      }
    };
  },

  methods: {
    sendId() {
      bus.$emit("share_id", this.inputObject);
      console.log(this.inputObject);
    }
  },
  mounted() {
    this.sendId();
  }
};
</script>

<style scoped>
.el-input {
  height: 100%;
  width: 300px;
}
</style>
