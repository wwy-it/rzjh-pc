<template>
  <div class="content">
    <h2 class="content-title">Hello Amazon</h2>
    <div class="data-model">
      <div class="m-block" @click="handleRegiste">
        <div class="img-icon aws-model"></div>
        <p>Amazon</p>
      </div>

      <div class="m-block" @click="nextTestStep">
        <div class="img-icon use-cases"></div>
        <p>Console Walkthrough</p>
      </div>
    </div>
  </div>
</template>

<script  lang='ts'>
import { onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'

import { store, setStore } from "@/store/store"

export default {
  name: "data_page",
  setup() {
    const router = useRouter()
    const helpIndex = store.helpIndex
    function handleRegiste() {
      router.push({
        name: 'cost-analysis',
      })
    }
    function nextTestStep() {
      setTimeout(res => {
        setStore(0)
      }, 200)
      router.push({
        name: 'cost-analysis',
      })
    }
    onMounted(() => { });
    return {
      handleRegiste,
      nextTestStep
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  overflow: auto;
  color: #4a4a4a;
  .content-title {
    padding: 20px 0px;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 600;
    color: #1c202d;
  }
  .data-model {
    width: 100%;
    height: 200px;
    .m-block {
      float: left;
      margin-right: 20px;
      width: 250px;
      height: 150px;
      background: #fff;
      box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
      border: 2px #fff solid;
      border-radius: 3px;
      padding: 14px 20px;
      cursor: pointer;

      .img-icon {
        margin: 0px auto;
        width: 180px;
        height: 100px;
      }
      .aws-model {
        background: url("/src/assets/image/download.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
      .use-cases {
        background: url("/src/assets/image/use-cases.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
      p {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-weight: 600;
        color: rgb(115, 115, 115);
      }
    }
  }
}
</style>
