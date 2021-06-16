<template>
  <div class="content">
    <div class="data-model">
        <div class="row">
          <span>aws</span>
          <div class="prop">
            <el-progress :text-inside="true" :stroke-width="16" :percentage="87"></el-progress>
          </div>
        </div>
        <div class="row">
          <span>阿里云</span>
          <div class="prop">
            <el-progress :text-inside="true" :stroke-width="16" :percentage="88"></el-progress>
          </div>
        </div>
        <div class="row">
          <span>腾讯云</span>
          <div class="prop">
            <el-progress :text-inside="true" :stroke-width="16" :percentage="36"></el-progress>
          </div>
        </div>
        <div class="row">
          <span>华为云</span>
          <div class="prop">
            <el-progress :text-inside="true" :stroke-width="16" :percentage="67"></el-progress>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
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
  .data-model {
    width: 100%;
      height: 500px;
      background: #fff;
      box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
      border-radius: 3px;
      padding: 14px 20px;
      box-sizing: border-box;
      .row {
        width: 100%;
        height: 50px;
        > span {
          width: 100px;
          float: left;
        }
        .prop {
          float: left;
          width: 500px;
        }
      }
    }
}
</style>
