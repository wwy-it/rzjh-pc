<template>
  <div class="data-model">
    <div class="m-block">
      <p class="h">Last Week Spot Missed Savings</p>
      <p class="t">$ 00.00</p>
    </div>
    <div class="m-block">
      <p class="h">Last Week RI Missed Savings</p>
      <p class="t">$ {{weekRI}}</p>
    </div>
    <div class="m-block">
      <p class="h">Monthly Spot Potential Savings</p>
      <p class="t">$ 00.00</p>
    </div>

    <div class="m-block">
      <p class="h">Monthly RI Potential Savings</p>
      <p class="t">$ {{monthlyRI}}</p>
    </div>
  </div>

  <div class="chart-model">
    <div class="chart-view">
      <h3>Costs breakdown by lifecycle</h3>
      <div class="chart-canvas" ref="treeChart1"></div>
    </div>

    <div class="chart-view">
      <h3>Cost Efficiency Over Time</h3>
      <div class="chart-canvas" ref="treeChart2"></div>
    </div>
  </div>

  <div class="chart-model">
    <div class="chart-view">
      <h3>Spot Est. Potential Savings</h3>
      <div class="chart-canvas" ref="treeChart3"></div>
    </div>

    <div class="chart-view">
      <h3>RI Est. Potential Savings</h3>
      <div class="chart-canvas" ref="treeChart4"></div>
    </div>
  </div>

  <div class="data-model-two">
    <div class="m-block">
      <p class="h">containers</p>
      <div class="model">
        <div class="m">
          <p>00</p>
          <span>Instances</span>
        </div>
        <div class="m">
          <p>$00.00</p>
          <span>Instances</span>
        </div>
        <div class="m">
          <p>00%</p>
          <span>Instances</span>
        </div>
      </div>
    </div>
    <div class="m-block">
      <p class="h">Elastic Applications</p>
      <div class="model">
        <div class="m">
          <p>00</p>
          <span>Instances</span>
        </div>
        <div class="m">
          <p>$00.00</p>
          <span>Instances</span>
        </div>
        <div class="m">
          <p>00%</p>
          <span>Instances</span>
        </div>
      </div>
    </div>

    <div class="m-block">
      <p class="h">Reservations</p>

      <div class="model">
        <div class="m">
          <p>00</p>
          <span>Instances</span>
        </div>
        <div class="m">
          <p>$00.00</p>
          <span>Instances</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { inject, ref, onMounted, reactive, toRefs } from "vue"
import { ElMessage } from 'element-plus'
import axios from "axios"
import { digit } from "@/assets/js/common"
interface State {
  weekRI: number,
  monthlyRI: number,
}
export default {
  name: "data_page",

  setup() {
    let echarts: any = inject("ec") //引入
    let treeChart1 = ref(null)
    let treeChart2 = ref(null)
    let treeChart3 = ref(null)
    let treeChart4 = ref(null)

    let myChart1: any = {}
    let myChart2: any = {}
    let myChart3: any = {}
    let myChart4: any = {}


    /**获取数据接口 */
    const state: State = reactive({
      weekRI: 1,
      monthlyRI: 1,
    })

    function getAccounts(): void {
      let params = { 'user': 1, }
      axios({
        method: "post",
        url: "/compute_overview",
        data: params,
      }).then((res: any) => {
        state.weekRI = digit(res.data.last_week_missed_savings.RI, 2)
        state.monthlyRI = digit(res.data.monthly_potential_savings.RI, 2)
        console.log(res, 200)
        costsBreakdown(res.data.costs_breakdown)
        costEfficiency(res.data.cost_efficiency_trend)
        riEst(res.data.est_potential_savings)
      }).catch((err: any) => {
        console.log(err)
        ElMessage.error('数据返回错误.')
      });
    }

    const costsBreakdown = function (data: any) {
      data = data || {}
      const typeItems = []
      const dataItems = []
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key]
          typeItems.push(key)
          dataItems.push({
            value: element,
            name: key
          })
        }
      }
      const option = {
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          data: typeItems,
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            data: dataItems,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      myChart1.setOption(option);
    }

    const costEfficiency = function (data: any) {
      data = data || []
      const typeItems = []
      const dataItems = []

      for (const item of data) {
        typeItems.push(item.dtm)
        dataItems.push(item.cost_efficiency)
      }
      const option = {
        xAxis: {
          type: "category",
          axisLabel: {
            interval: 0,
            rotate: 40,//倾斜度 -90 至 90 默认为0
            margin: 4,
            fontWeight: "bolder",
            color: "#888888",
            fontSize: 10
          },
          data: typeItems,
        },

        yAxis: {
          type: "value",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        dataZoom: [
          {
            type: 'inside',
            start: 1,
            end: 100,
            maxValueSpan: 60
          },
        ],
        series: [
          {
            name: "cost_efficiency",
            type: "line",
            stack: "总量",
            data: dataItems,
          }
        ],
      };

      myChart2.setOption(option);
    }

    const spotEst = function () {
      //需要获取到element,所以是onMounted的Hook

      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["type1", "type2", "type3"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["1", "2", "3", "4", "5", "6", "7", "8"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "type1",
            type: "bar",
            stack: "广告",
            barWidth: 30, //柱图宽度
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390, 330, 320, 23],
          },
          {
            name: "type2",
            type: "bar",
            stack: "广告",
            barWidth: 30, //柱图宽度
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "type3",
            type: "bar",
            stack: "广告",
            barWidth: 30, //柱图宽度
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      };
      // 绘制图表
      myChart3.setOption(option);
    }

    const riEst = function (data: any) {
      data = data || {}
      const typeItems = []
      const dataItems = []
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          typeItems.push(key)
          dataItems.push(element)
        }
      }
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: typeItems,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 30, //柱图宽度
            emphasis: {
              focus: "series",
            },
            data: dataItems,
          },
        ]
      };
      // 绘制图表
      myChart4.setOption(option);
    }

    onMounted(() => {
      myChart1 = echarts.init(treeChart1.value);
      myChart2 = echarts.init(treeChart2.value);
      myChart3 = echarts.init(treeChart3.value);
      myChart4 = echarts.init(treeChart4.value);

      window.onresize = function () {
        //自适应大小
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
      };
      getAccounts();
    });

    return {
      treeChart1,
      treeChart2,
      treeChart3,
      treeChart4,
      ...toRefs(state)
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.form-ul {
  width: 1190px;
  height: 38px;
  background-color: #fff;
  padding: 0px 20px;
  box-sizing: border-box;
  overflow: hidden;

  > li {
    width: 350px;
    height: 38px;
    line-height: 38px;
    float: left;
    overflow: hidden;
    > span {
      float: left;
      width: 60px;
      font-size: 12px;
      color: #888;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
    }
  }
  > li:nth-child(3) {
    width: 200px;
  }
}
.data-model {
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  .m-block {
    border-left: 4px #0071bc solid;
    box-sizing: border-box;
    width: 24%;
    height: 100px;
    background: #fff;
    box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
    border-radius: 3px;
    padding: 14px 20px;
    .h {
      height: 25px;
      line-height: 25px;
      font-weight: 600;
      font-size: 12px;
      color: #5f6e82;
    }
    .t {
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      color: #8492a6;
    }
  }
}
.chart-model {
  margin-top: 20px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  .chart-view {
    width: 49.3%;
    height: 400px;
    background-color: #fff;
    padding: 14px 20px;
    box-sizing: border-box;
    h3 {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      border-bottom: 2px solid #e7e7e7;
    }
    .filter {
      height: 30px;
      margin-top: 10px;
      span {
        font-size: 12px;
        margin-right: 20px;
      }
    }
    .chart-canvas {
      margin-top: 10px;
      width: 100%;
      height: 300px;
    }
  }
}

.data-model-two {
  margin-top: 20px;
  overflow: hidden;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  .m-block {
    width: 29.5%;
    height: 80px;
    background: #fff;
    box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
    border: 2px #fff solid;
    border-radius: 3px;
    padding: 14px 20px;
    .h {
      height: 30px;
      line-height: 30px;
      font-weight: 400;
      font-size: 14px;
      color: #5f6e82;
    }
    .model {
      width: 100%;
      height: 45px;
      .m {
        margin-left: 10px;
        width: 100px;
        height: 45px;
        float: left;
        // border: 1px solid red;
        p {
          height: 25px;
          line-height: 25px;
        }
        span {
          height: 20px;
          line-height: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
