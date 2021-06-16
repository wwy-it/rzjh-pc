<template>
  <div class="data-model">
    <div class="m-block">
      <p class="h">Potential Yearly Savings</p>
      <p class="t">$ {{yearlySavings}}</p>
    </div>
    <div class="m-block">
      <p class="h">All Time Waste</p>
      <p class="t">$ {{timeWaste}}</p>
    </div>
    <div class="m-block">
      <p class="h">Last Week Missed Savings</p>
      <p class="t">$ {{missedSavings}}</p>
    </div>

    <div class="m-block m-progress">
      <div class="progress">
        <el-progress type="circle" :width="60" :percentage="currentScale"></el-progress>
      </div>

      <div class="r-text-model">
        <p class="h">Current RI Commitment:${{currentRI}}</p>
        <p class="h">Recommended RI Commitment:${{recommendedRI}}</p>
      </div>
    </div>
  </div>

  <div class="chart-model">
    <div class="chart-view">
      <h3>Reserved Instance All-Times Waste</h3>
      <div class="chart-canvas" ref="instanceCharts"></div>
    </div>

    <div class="chart-view">
      <h3>Potential Yearly Savings AWS service</h3>
      <div class="chart-canvas" ref="serviceCharts"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { inject, ref, onMounted, reactive, toRefs } from "vue";
import { ElMessage } from 'element-plus'
import axios from "axios"
import { digit } from "@/assets/js/common"

interface State {
  yearlySavings: number,
  timeWaste: number,
  missedSavings: number,
  currentRI: number,
  recommendedRI: number,
  currentScale: number
}

export default {
  name: "data_page",
  setup() {
    let echarts: any = inject("ec") //引入
    let instanceCharts = ref(null)
    let serviceCharts = ref(null)

    let myChart1: any = {}
    let myChart2: any = {}

    const state: State = reactive({
      yearlySavings: 0,
      timeWaste: 0,
      missedSavings: 0,
      currentRI: 0,
      recommendedRI: 0,
      currentScale: 0
    })

    function getAccounts(): void {
      let params = { 'user': 1, }
      axios({
        method: "post",
        url: "/reservations",
        data: params,
      }).then((res: any) => {
        console.log(res, 200)
        res.data = res.data || {}
        state.yearlySavings = digit(res.data.potential_yearly_savings || 0, 2)
        state.timeWaste = digit(res.data.all_time_waste || 0, 2)
        state.missedSavings = digit(res.data.last_week_missed_savings || 0, 2)
        state.currentRI = digit(res.data.current_ri_commitment || 0, 2)
        state.recommendedRI = digit(res.data.recommended_ri_commitment || 0, 2)
        state.currentScale = state.currentRI / (state.currentRI + state.recommendedRI) * 100
        state.currentScale = digit(state.currentScale || 0, 2)
        reservedTime(res.data.reserved_instance_all_time_waste)
        savingsService(res.data.potential_yearly_savings_per_aws_service)
      }).catch((err: any) => {
        console.log(err)
        ElMessage.error('数据返回错误.');
      });
    }

    const reservedTime = function (data: any) {
      data = data || {}
      data.EC2 = data.EC2 || []
      data.RDS = data.RDS || []
      const list = data.EC2.length > data.RDS.length ? data.EC2 : data.RDS

      const typeItems = []
      for (const item of list) {
        typeItems.push(item.dtm)
      }

      const ec2s = []
      const rdss = []

      for (const item of data.EC2) {
        ec2s.push(item.ri_cost_for_unused_hours)
      }

      for (const item of data.RDS) {
        rdss.push(item.ri_cost_for_unused_hours)
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
        dataZoom: [
          {
            type: 'inside',
            start: 1,
            end: 100,
            maxValueSpan: 60
          },
        ],
        xAxis: [
          {
            type: "category",
            axisLabel: {
              interval: 0,
              rotate: 40,//倾斜度 -90 至 90 默认为0
              margin: 4,
              fontWeight: "bolder",
              color: "#888888",
              fontSize: 10
            },
            data: typeItems
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "EC2",
            type: "bar",
            stack: "广告",
            barWidth: 10, //柱图宽度
            emphasis: {
              focus: "series",
            },
            data: ec2s
          },
          {
            name: "RDS",
            type: "bar",
            stack: "广告",
            barWidth: 10, //柱图宽度
            emphasis: {
              focus: "series",
            },
            data: rdss
          },
        ],
      };
      // 绘制图表
      myChart1.setOption(option);
    }

    const savingsService = function (data: any) {
      data = data || {}
      const typeItems = []
      const dataItems = []
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key]
          typeItems.push(key)
          dataItems.push({
            name: key,
            value: element,
          })
        }
      }

      const option1 = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          data: typeItems,
        },
        series: [
          {

            radius: ["55%", "70%"], // 这个属性修改圆环宽度
            type: "pie",
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: dataItems,
          },
        ],
      };
      myChart2.setOption(option1);
    }

    onMounted(() => {
      myChart1 = echarts.init(instanceCharts.value);

      myChart2 = echarts.init(serviceCharts.value);

      window.onresize = function () {
        //自适应大小
        myChart1.resize();
        myChart2.resize();
      };

      getAccounts()
    });
    return {
      instanceCharts,
      serviceCharts,
      ...toRefs(state)
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.data-model {
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  .m-block {
    border-left: 4px #0071bc solid;
    box-sizing: border-box;
    width: 20%;
    height: 100px;
    background: #fff;
    box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
    border-radius: 3px;
    padding: 14px 20px;
    > div {
      padding-top: 5px;
      width: 80px;
      height: 70px;
      float: left;
    }
    > div.progress {
      line-height: 70px;
      text-align: center;
    }
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
  .m-progress {
    width: 35%;
    .r-text-model {
      width: calc(100% - 80px);
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
    .chart-canvas {
      margin-top: 10px;
      width: 100%;
      height: 300px;
    }
  }
}
</style>
