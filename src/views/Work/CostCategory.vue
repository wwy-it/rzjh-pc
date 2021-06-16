<template>
  <div class="content">
    <div class="data-model">
      <div class="m-block">
        <p class="h">计算</p>
        <p class="t">USD ${{categoryData.compute}}</p>
      </div>
      <div class="m-block">
        <p class="h">网络</p>
        <p class="t">USD ${{categoryData.net}}</p>
      </div>
      <div class="m-block">
        <p class="h">数据</p>
        <p class="t">USD ${{categoryData.data}}</p>
      </div>

      <div class="m-block">
        <p class="h">其他</p>
        <p class="t">USD ${{categoryData.other}}</p>
      </div>
    </div>

    <div class="chart-model">
      <div class="e-block" ref="chartDom1"></div>
      <div class="e-block" ref="chartDom2"></div>
      <div class="e-block" ref="chartDom3"></div>
      <div class="e-block" ref="chartDom4"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { inject, toRefs, ref, reactive, onMounted } from "vue";
import axios from "axios";
interface CategoryData {
  compute: number,
  net: number,
  data: number,
  other: number,
  sumData: number,
}

interface State {
  categoryData: CategoryData,
}

export default {
  name: "data_page",
  setup() {
    let echarts: any = inject("ec")
    const chartDom1 = ref(null)
    const chartDom2 = ref(null)
    const chartDom3 = ref(null)
    const chartDom4 = ref(null)

    let myChart1: any = {}
    let myChart2: any = {}
    let myChart3: any = {}
    let myChart4: any = {}

    const state: State = reactive({
      categoryData: {
        compute: 0,
        net: 0,
        data: 0,
        other: 0,
        sumData: 0,
      },
    });

    function getDiagram(): void {
      axios({
        method: "get",
        url: "/cost_by_categories",
        params: { user: 1 },
      }).then((res: any) => {
        res.data = res.data || []
        let t: number = 0
        for (const item of res.data) {
          t = t + item.amount
          if (item.category == "Compute") {
            state.categoryData.compute = item.amount
          } else if (item.category == "Networking & Content Delivery") {
            state.categoryData.net = item.amount
          } else if (item.category == "Storage & Database") {
            state.categoryData.data = item.amount
          } else if (item.category == "Others") {
            state.categoryData.other = item.amount
          }
        }
        state.categoryData.sumData = t
        echartsRend()
      }).catch((e: any) => {
        console.log(e);
      });
    }

    function echartsRend(): void {
      // 绘制图表

      const option = {
        tooltip: {
          trigger: 'item'
        },
        color: ["rgb(238,102,102)", "rgb(115,152,222)", "rgb(255,220,96)"],
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            label: {
              show: true,
              position: "center",
            },

            data: [
              { value: 1048, name: "计算" },
              { value: 735, name: "剩余" },
            ],
          },
        ],
      };
      const option1 = JSON.parse(JSON.stringify(option))
      const option2 = JSON.parse(JSON.stringify(option))
      const option3 = JSON.parse(JSON.stringify(option))
      const option4 = JSON.parse(JSON.stringify(option))

      option1.series[0].data = [
        { value: state.categoryData.compute, name: "计算" },
        { value: state.categoryData.sumData - state.categoryData.compute, name: "" }
      ]
      option2.series[0].data = [
        { value: state.categoryData.net, name: "网络" },
        { value: state.categoryData.sumData - state.categoryData.net, name: "" }
      ]
      option3.series[0].data = [
        { value: state.categoryData.data, name: "数据" },
        { value: state.categoryData.sumData - state.categoryData.data, name: "" }
      ]
      option4.series[0].data = [
        { value: state.categoryData.other, name: "其他" },
        { value: state.categoryData.sumData - state.categoryData.other, name: "" }
      ]

      myChart1.setOption(option1);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
      myChart4.setOption(option4);
    }

    onMounted(() => {
      myChart1 = echarts.init(chartDom1.value)
      myChart2 = echarts.init(chartDom2.value)
      myChart3 = echarts.init(chartDom3.value)
      myChart4 = echarts.init(chartDom4.value)
      getDiagram()
      window.onresize = function () {
        myChart1.resize()
        myChart2.resize()
        myChart3.resize()
        myChart4.resize()
      }
    });

    return {
      ...toRefs(state),
      chartDom1,
      chartDom2,
      chartDom3,
      chartDom4,
    }
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
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    .m-block {
      width: 24%;
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
      .t {
        margin-top: 10px;
        color: #8492a6;
        span {
          font-size: 12px;
          padding-left: 8px;
        }
      }
    }
  }
  .chart-model {
    margin-top: 20px;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    .e-block {
      width: 24%;
      height: 200px;
      background: #fff;
      box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
      border: 2px #fff solid;
      border-radius: 3px;
      padding: 14px 20px;
      box-sizing: border-box;
    }
  }
}
</style>
