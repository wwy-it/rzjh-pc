<template>
  <div class="page">
    <header class="cl-head">
      <TopNav />
    </header>
    <main class="cl-main">
      <div class="cl-menu">
        <Sidebar />
      </div>
      <div class="cl-content">
        <div class="cl-nav">
          <div class="menu-mod">
            <i class="el-icon-s-data icon"></i>
            <template v-for="(item,key) in filterCarts" :key="key">
              <router-link class="router-link" :to="item.path">{{item.meta.title}}</router-link>
              <span class="router-level" v-if="key<filterCarts.length-1">></span>
            </template>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script  lang='ts'>
import { defineComponent, computed, reactive, toRefs } from "vue";
import { useRoute, useRouter } from 'vue-router'

import Sidebar from "@/views/NavMenu/Sidebar.vue";
import TopNav from "@/views/NavMenu/TopNav.vue";

export default defineComponent({
  name: "Menu",
  components: {
    Sidebar,
    TopNav,
  },
  setup() {
    const islastPage = computed(() => true);

    const loadMorePage = function () {
    };

    const route = useRoute()
    const router = useRouter()
    const filterCarts = computed(() => {
      return route.matched.slice(1)
    })

    return {
      islastPage,
      loadMorePage,
      filterCarts,
    };
  },
});
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100%;
  .cl-head {
    width: 100%;
    height: 40px;
    background-color: #ffffff;
    box-sizing: border-box;
    // box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13);
    overflow: hidden;
    // background-color: #2b303b;
    background-color: #4c4b85;
  }

  .cl-main {
    display: flex;
    width: 100%;
    height: calc(100% - 40px);
    box-sizing: border-box;
    overflow: hidden;
    background-color: #f5f5f5;
    .cl-menu {
      float: left;
      width: 220px;
      height: 100%;
      background-color: #f2f2f2;
      color: #ffffff;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
      z-index: 2;
    }

    .cl-content {
      width: calc(100% - 220px);
      height: 100%;
      // box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13);
      .cl-nav {
        padding: 0px 10px;
        box-sizing: border-box;
        width: 100%;
        height: 38px;
        background-color: #ffffff;

        .menu-mod {
          line-height: 38px;
          font-size: 14px;
          color: #000000;
          .icon {
            margin-right: 4px;
          }
          .router-level {
            padding: 0px 2px;
          }
          .router-link {
            display: inline-block;
            height: 38px;
            cursor: pointer;
          }
          .router-link-active {
            // color: #3366ff;
          }
          .router-link-exact-active {
            // color: #3366ff;
          }
        }
      }
      .cl-frame {
        width: 100%;
        height: calc(100% - 40px);
        display: flex;
        flex-direction: column;
        .cl-info-content {
          flex-grow: 1;
          padding: 0px 10px 5px 10px;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
