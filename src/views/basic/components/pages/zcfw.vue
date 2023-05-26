<template>
  <div style="width: 100%; height: 100%; padding: 0px 35px">
    <div class="one">政策发文</div>
    <div class="right-font-bom" style="width: 100%; height: 84%">
      <div class="font-bom-one" v-for="(item, index) in array2" :key="index">
        <div class="zcfw-wz">{{ item.name }}</div>
        <div>{{ item.age }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array2: [
        {
          name: "再生能源电力消耗责任权重,再生能源电力消耗责任权重",
          age: "2023-05-06"
        },
        {
          name: "再生能源电力消耗责任权重,再生能源电力消耗责任权重",
          age: "2023-05-06"
        },
        {
          name: "再生能源电力消耗责任权重,再生能源电力消耗责任权重",
          age: "2023-05-06"
        },
        {
          name: "再生能源电力消耗责任权重,再生能源电力消耗责任权重",
          age: "2023-05-06"
        },
        {
          name: "再生能源电力消耗责任权重,再生能源电力消耗责任权重",
          age: "2023-05-06"
        }
      ]
    };
  }
};
</script>

<style>
.one {
  display: flex;
  align-items: center;
  font-size: 22px;
  height: 16%;
  color: #304159;
  font-weight: 700;
  background: url("../../../../assets/images/biaotixia2.png") no-repeat bottom
    left;
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
  /* normal：文字显示不开自动换行 */
  /* white-space: normal; */
  /* nowrap：文字显示不开也强制一行内显示 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
