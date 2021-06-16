<template>
  <div class="cl-dialog" @click="dialogTap" v-if="showDialog">
    <div class="dialog-mod">
      <slot></slot>
    </div>
  </div>
</template>

<script  lang='ts'>
import { onMounted, reactive, inject, computed, toRefs } from "vue";
interface State {
}
export default {
  name: "data_page",
  props: {
    showDialog: {
      type: Boolean,
      default: () => (true)
    },
  },
  emits: ["todata"],

  setup(prop, context) {

    console.log(234434)
    const state: State = reactive({

    })

    function dialogTap() {
      context.emit("todata", true);
    }
    onMounted(() => {
      console.log(prop.showDialog, 'props')
      console.log(prop, 234)
      console.log(333)
    })
    return {
      ...toRefs(state),
      dialogTap,
    };
  },
};
</script>
<style lang="scss" scoped>
.cl-dialog {
  top: 0px;
  left: 0px;
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .dialog-mod {
    margin-top: 200px;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
