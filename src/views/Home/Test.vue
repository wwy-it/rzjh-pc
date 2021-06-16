<template>
  <div class="content">
    <div class="data-model">
      <div class="m-block">
        <p class="t">{{costData.act_cost}}</p>

        <p class="t">{{costData.act_inc_rate}}</p>
        <p class="t">{{tt}}</p>
      </div>
    </div>
  </div>
</template>

<script  lang='ts'>

import { inject, toRefs, ref, reactive, onMounted, toRef } from "vue"

export default {
  name: "data_page",
  setup() {
    let visible = ref(1111)

    let myChart: any = {}
    onMounted(() => {
      visible.value = 2222
      setTimeout(() => {
        tt.value = 4444
        console.log(data, 23434)
      }, 2000);
    })

    const state = reactive({
      costData: {
        act_cost: 0,
        act_inc_rate: 0,
        act_last: 0,
        est_cost: 0,
        est_inc_rate: 0,
        est_last: 0,
        max_save: 0,
        max_save_rate: 0,
        max_last: 0
      },
    })
    const data = {
      a: 2343,
    }
    const tt = toRef(data, "a")

    console.log(tt, 0)
    console.log(visible, 1)
    console.log(toRefs(state).costData, 2)
    return {
      ...toRefs(state),
      visible,
      tt
    };
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
  color: #7b7b7b;
  .data-model {
    width: 100%;
    height: 200px;
    .m-block {
      float: left;
      margin-right: 20px;
      width: 339.5px;
      height: 150px;
      background: #fff;
      box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
      border: 2px #fff solid;
      border-radius: 3px;
      padding: 14px 20px;

      .t {
        color: #8492a6;
        font-size: 12px;
        padding-left: 8px;
      }
    }
  }
}
</style>
