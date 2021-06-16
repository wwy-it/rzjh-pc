<template>
  <div class="content">
    <div class="data-model">
      <div class="m-block">
        <p class="h">本月当前花费</p>
        <p class="t">USD ${{costData.act_cost}}</p>

        <p class="h h-2">同步上月</p>
        <p class="t">
          {{costData.act_inc_rate*100}}%
          <span>usd ${{costData.act_last}}</span>
        </p>
      </div>
      <div class="m-block">
        <p class="h">本月预计成本</p>
        <p class="t">USD ${{costData.est_cost}}</p>

        <p class="h h-2">同步上月</p>
        <p class="t">
          {{costData.est_inc_rate*100}}%
          <span>usd ${{costData.act_last}}</span>
        </p>
      </div>

      <div class="m-block">
        <p class="h">本月最大可实现的节省</p>
        <p class="t">USD ${{costData.max_save}}</p>

        <p class="h h-2">同步上月</p>
        <p class="t">
          {{costData.max_save_rate*100}}%
          <span>usd ${{costData.max_last}}</span>
        </p>
      </div>
    </div>
    <el-popover placement="top" :width="250" trigger="manual" :visible="helpIndex==1">
      <HelpCard :model-data="helpSteps[1]" />
      <template #reference>
        <div class="chart-wrapper" ref="treeChart"></div>
      </template>
    </el-popover>
  </div>
</template>

<script  lang='ts'>
import helpSteps from "@/store/helpSteps"
import { store } from "@/store/store"
import HelpCard from "@/components/HelpCard/HelpCard.vue";

import { inject, toRefs, ref, reactive, onMounted, computed } from "vue"
import axios from "axios"
import { digit } from "@/assets/js/common"

interface ConstData {
  act_cost: number,
  act_inc_rate: number,
  act_last?: number,
  est_cost: number,
  est_inc_rate: number,
  est_last?: number,
  max_save: number,
  max_save_rate: number,
  max_last?: number,
}
interface State {
  costData: ConstData,
}

export default {
  name: "data_page",
  components: {
    HelpCard,
  },
  setup() {
    let echarts: any = inject("ec") //引入
    let treeChart = ref(null)

    let myChart: any = {}

    const state: State = reactive({
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
    function getCost() {
      axios({
        method: "get",
        url: "/analyze_cost",
        params: { user: 1 },
      }).then((res: any) => {
        state.costData = res.data;
        state.costData.act_last = digit(state.costData.act_cost * state.costData.act_inc_rate, 2);
        state.costData.est_last = digit(state.costData.est_cost * state.costData.est_inc_rate, 2);
        state.costData.max_last = digit(state.costData.max_save * state.costData.max_save_rate, 2);
      }).catch((e: any) => {
        console.log(e);
      });
    }
    function getDiagram() {
      axios({
        method: "get",
        url: "/monthly_cost_diagram",
        // data: { sort: this.exportConfig.sort, order: this.exportConfig.order },
        params: { user: 1 },
      }).then((res: any) => {
        let xAxisData = [];
        let seriesDate = [];
        res.data = res.data || [];
        for (const item of res.data) {
          xAxisData.push(item.month);
          seriesDate.push(item.cost);
        }

        const option = {
          xAxis: {
            type: "category",
            data: xAxisData,
          },
          yAxis: {

          },
          series: [
            {
              data: seriesDate,
              type: "line",
              smooth: true,
            },
          ],
        };
        myChart.setOption(option);
      }).catch((e: any) => {
        console.log(e);
      });
    }

    onMounted(() => {
      myChart = echarts.init(treeChart.value)
      getCost()
      getDiagram()

      window.onresize = function () {
        myChart.resize()
      }
    })

    return {
      ...toRefs(state),
      treeChart,
      helpSteps,
      ...toRefs(store),
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
    display: flex;
    justify-content: space-between;
    .m-block {
      width: 32.3%;
      height: 180px;
      background: #fff;
      box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
      border: 2px #fff solid;
      border-radius: 3px;
      padding: 14px 20px;
      box-sizing: border-box;
      .h {
        height: 25px;
        line-height: 25px;
        font-weight: 400;
        font-size: 14px;
        color: #5f6e82;
      }
      .h-2 {
        margin-top: 10px;
      }
      .t {
        color: #8492a6;
        span {
          font-size: 12px;
          padding-left: 8px;
        }
      }
    }
  }

  .chart-wrapper {
    width: 100%;
    height: 500px;
    background: #fff;
    box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
    border-radius: 3px;
    padding: 14px 0px;
  }
}
</style>
