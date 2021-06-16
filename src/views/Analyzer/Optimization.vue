<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script  lang='ts'>
import { onMounted } from "vue";

export default {
  name: "data_page",
  setup() {
    onMounted(() => {
      //需要获取到element,所以是onMounted的Hook
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  overflow: auto;
  color: #4a4a4a;
  .cl-model {
    width: 100%;
    height: calc(100% - 30px);
    padding: 10px 20px;
    box-sizing: border-box;
    // border: 1px solid red;
  }
}
</style>
