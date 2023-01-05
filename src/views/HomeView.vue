<template>
  <div class="w-[256px]">
    <el-row class="w-full">
      <el-col>
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-sub-menu index="1">
            <template #title>
              <el-icon></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      active: 0,
    });
    const toggleModalState = () => {
      console.log(state);
    };
    return {
      toggleModalState,
    };
  },
  components: {},
};
</script>
