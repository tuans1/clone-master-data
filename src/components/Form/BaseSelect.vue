<template>
    <el-select v-model="value" :class="classes" :placeholder="placeholder" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {

}
</script>

<style>

</style>