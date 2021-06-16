<template>
  <div class="nav-view" v-for="(item,key) in tree" :key="key">
    <div
      class="tree-brick"
      @click="treeBrickClick(item,key)"
      :class="{active: item.path==activePath}"
    >
      <div class="title-area">
        <i class="el-icon-menu icon"></i>
        <span class="title-text">{{item.title}}</span>
      </div>

      <div class="fold" v-if="item.children" :class="{rotate: item.fold }"></div>
    </div>

    <div class="children" v-if="item.children" :class="{fold: item.fold}">
      <div
        class="tree-submenu"
        v-for="(row,index) in item.children"
        :key="index"
        @click="menuClick(row)"
        :class="{active: row.path==activePath}"
      >
        <span class="title-text">{{row.title}}</span>
      </div>
    </div>
  </div>
</template>

<script  lang='ts'>
import { defineComponent, onMounted, computed, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import menu from './menu'
export default defineComponent({
  name: "Menu",
  components: {
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const activePath = computed(() => {
      return route.path
    })

    for (const item of menu) {
      item.fold = false
    }

    const state = reactive({
      tree: menu,
    })

    function treeBrickClick(item: any, index: number) {
      console.log(item.path)
      if (item.path != "/$node") {
        router.push({ path: item.path })
      } else {
        console.log(state.tree)
        state.tree[index].fold = !state.tree[index].fold
      }
    }
    function menuClick(item: any) {
      router.push({ path: item.path })
    }
    onMounted(() => {
    })

    return {
      activePath,
      ...toRefs(state),
      treeBrickClick,
      menuClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-view {
  width: 100%;
  .tree-brick {
    padding: 0px 10px 0px 15px;
    height: 45px;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-area {
      flex-grow: 1;
      height: 45px;
      .icon {
        // width: 30px;
        // height: 30px;
        color: #000000;
      }
      .title-text {
        margin-left: 4px;
        display: inline-block;
        height: 45px;
        line-height: 45px;
        color: #000000;
        font-size: 14px;
      }
    }
    .fold {
      width: 20px;
      height: 20px;
      background-image: url("/src/assets/image/icon-triangle.svg");
      background-repeat: no-repeat;
      background-size: contain;
      transform: rotate(0deg);
    }
    .fold.rotate {
      transform: rotate(-90deg);
    }
  }
  .active {
    background-color: #dfdfdf;
    .title-text {
      // color: #3366ff;
    }
  }
  .tree-brick:hover {
    background-color: #e7e7e7;
    .title-text {
      // color: #3366ff;
    }
  }
  .children {
    width: 100%;
    overflow: hidden;
    .tree-submenu {
      padding: 0px 0px 0px 34px;
      width: 100%;
      height: 45px;
      box-sizing: border-box;
      cursor: pointer;
      .title-text {
        display: inline-block;
        height: 45px;
        line-height: 45px;
        color: #8b8b8b;
        font-size: 14px;
      }
    }
    .active {
      background-color: #dfdfdf;
      .title-text {
        // color: #3366ff;
      }
    }
    .tree-submenu:hover {
      background-color: #e7e7e7;
      .title-text {
        // color: #3366ff;
      }
    }
  }
  .fold {
    height: 0px;
  }
}
</style>
