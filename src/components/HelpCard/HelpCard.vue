<template>
  <div class="help-card">
    <h3 class="cl-help-card-title">{{modelData.title}}</h3>
    <p class="cl-help-card-content">{{modelData.content}}</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="closeTestStep">不再显示</el-button>
      <el-button type="primary" size="mini" @click="nextStep">下一个</el-button>
    </div>
  </div>
</template>

<script  lang='ts'>
import { store, setStore } from "@/store/store"

import { onMounted, inject, computed } from "vue";
import { useRouter, useRoute } from 'vue-router'


export default {
  name: "data_page",
  props: {
    modelData: {
      type: Object,
      default: () => ({})
    },
  },
  setup(prop) {
    const router = useRouter()
    const helpIndex = store.helpIndex
    function nextStep() {
      const i = helpIndex.value
      setStore(i + 1)
      //  router.push({
      //   name: 'cost-analysis',
      // })
    }
    function closeTestStep() {
      setStore(-1)
    }
    onMounted(() => {
    })
    return {
      nextStep,
      closeTestStep
    };
  },
};
</script>
<style lang="scss" scoped>
.help-card {
  width: 250px;
}
</style>
