<template>
  <el-row
    type="flex"
    justify="space-between"
    align="middle"
    style="margin-bottom:10px;padding-bottom: 10px;border-bottom: 1px solid #ccc;"
  >
    <el-col>
      <div v-if="showBefore" class="before">
        <!-- 定义前面得插槽 -->
        <slot name="before" />
      </div>
    </el-col>
    <el-col style="flex:1">
      <el-row type="flex" justify="end">
        <!-- 定义后面的插槽 -->
        <slot name="after" />
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    showBefore: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.before {
  line-height: 34px;
  display: inline-block;
  border-radius: 3px;
}
</style>
