<template>
  <div class="hean">
    <div class="h-box l-box">
      <div class="logo-box"></div>
      <!-- <span>超管平台</span> -->
    </div>
    <div class="h-box r-box">
      <div class="account">
        <p>Hi! Magic you</p>
        <div class="head"></div>
      </div>
    </div>
  </div>
</template>

<script  lang='ts'>
import { defineComponent, computed, reactive, toRefs } from "vue";
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: "Menu",
  components: {
    // CoulmnList
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const filterCarts = computed(() => {
      return route.matched.slice(1)
    })

    return {
      filterCarts,
    }
  },
});
</script>

<style lang="scss" scoped>
.hean {
  padding: 0px 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  .h-box {
    height: 100%;
    box-sizing: border-box;
    span {
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
    }
  }
  .l-box {
    width: 40%;
    display: flex;
    align-items: center;
    .logo-box {
      width: 100px;
      height: 30px;
      background-image: url("/src/assets/app-logo.png");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .r-box {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    .account {
      width: 200px;
      height: 40px;
      box-sizing: border-box;
      line-height: 40px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      p {
        padding: 0px 20px;
        font-weight: 600;
        font-size: 14px;
        color: #ffffff;
      }
      .head {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-image: url("/src/assets/image/head.jpg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
