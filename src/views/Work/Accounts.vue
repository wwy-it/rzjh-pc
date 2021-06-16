<template>
  <div class="content">
    <div class="chart-wrapper" ref="treeChart"></div>
  </div>
</template>

<script lang='ts'>
import { inject, ref, onMounted } from "vue";
import { ElMessage } from 'element-plus'
import axios from "axios";

export default {
  name: "data_page",
  setup() {
    let echarts: any = inject("ec"); //引入
    let treeChart = ref(null);
    let myChart: any = {}

    function getAccounts(): void {
      axios({
        method: "get",
        url: "/cost_by_accounts",
        // data: { sort: this.exportConfig.sort, order: this.exportConfig.order },
        params: { user: 1 },
      }).then((res: any) => {
        console.log(res, 2)

        let xAxisData = [];
        let seriesDate = [];
        res.data = res.data || [];
        for (const item of res.data) {
          xAxisData.push(item.account);
          seriesDate.push(item.amount);
        }

        // 绘制图表
        myChart.setOption({
          xAxis: {
            type: "category",
            data: xAxisData,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: seriesDate,
              type: "bar",
              showBackground: true,
              backgroundStyle: {
                color: "rgba(180, 180, 180, 0.2)",
              },
              barWidth: 30, //柱图宽度
            },
          ],
        });
      }).catch((e: any) => {
        ElMessage.error('数据返回错误.');
      });
    }

    onMounted(() => {
      myChart = echarts.init(treeChart.value);
      getAccounts()
      window.onresize = function () {
        myChart.resize()
      }
    })

    return {
      treeChart
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
  color: #4a4a4a;

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
