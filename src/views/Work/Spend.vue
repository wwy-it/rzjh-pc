<template>
  <div class="content">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">account</el-menu-item>
      <el-menu-item index="3">tag</el-menu-item>
      <el-menu-item index="3">service</el-menu-item>
      <el-menu-item index="3">Litecycle</el-menu-item>
      <el-menu-item index="3">Region</el-menu-item>
      <el-menu-item index="3">Operating System</el-menu-item>
      <el-menu-item index="3">Charge Type</el-menu-item>
      <el-menu-item index="3">Usage Type Group</el-menu-item>
    </el-menu>

    <div class="screen-model">
      <div class="screen-left">
        <h3 class="filter-model">Filter by:</h3>
        <div class="select-model">
          <el-select v-model="value" placeholder="所有账户" @change="changeValue">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select-model">
          <el-select v-model="value1" placeholder="所有服务">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select-model">
          <el-date-picker
            v-model="value2"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="mini"
            @change="changeValue"
          ></el-date-picker>
        </div>
      </div>

      <div class="screen-right">
        <h3 class="filter-model">View by:</h3>
        <div class="select-model">
          <el-select v-model="value3" placeholder="时间间隔" @change="changeValue">
            <el-option label="一天" value="DAILY"></el-option>
            <el-option label="一周" value="WEEKLY"></el-option>
            <el-option label="一月" value="MONTHLY"></el-option>
          </el-select>
        </div>
      </div>
    </div>

    <div class="chart-wrapper" ref="treeChart"></div>

    <div class="cl-table">
      <el-table :data="tableData" border style="width:100%">
        <el-table-column prop="date" label="Account" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
        <el-table-column prop="name" label="20/1/11" width="80"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang='ts'>
import { inject, onMounted, ref, reactive, toRefs } from "vue"

import { ElMessage } from 'element-plus'
import axios from "axios"
import { toTime } from "@/assets/js/common"

interface State {
  options: any,
  options1: any,
  value: string,
  value1: string,
  value2: string[],
  value3: string,
  st_dtm: string,
  nd_dtm: string,
}

export default {
  name: "data_page",
  setup() {
    let echarts: any = inject("ec")
    let treeChart = ref(Element)
    let myChart: any = {}

    let tableData = [
      {
        date: "wwuu234",
        name: "23.4",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "chenlal",
        name: "23434",
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "wangwenxiao",
        name: "545.4",
        address: "上海市普陀区金沙江路 1519 弄",
      },
    ];

    const state: State = reactive({
      options: [{
        value: 'all',
        label: '所有账户'
      }, {
        value: 'one',
        label: '账户一'
      }],

      options1: [{
        value: 'all',
        label: '所有服务'
      }, {
        value: 'one',
        label: '账户一'
      }],

      value: 'all',
      value1: 'all',
      value2: ["2021-02-01", "2021-03-20"],
      value3: 'WEEKLY',

      st_dtm: '',
      nd_dtm: ''
    })

    /**顶部nav切换 */
    function handleSelect(): void {

    }

    /**value change */
    function changeValue(): void {
      console.log(state.value, 0)
      console.log(state.value1, 1)
      console.log(state.value2, 2)
      console.log(state.value3, 3)

      state.value2 = state.value2 || []
      state.value2.forEach((el, index) => {
        const t = toTime(new Date(el).getTime())
        console.log(t.YMD)
        if (index == 0) {
          state.st_dtm = t.YMD
        } else {
          state.nd_dtm = t.YMD
        }
      })

      getAccounts()
    }

    /**获取数据接口 */
    function getAccounts(): void {

      let params = {
        user: 1,
        metrics: ['BLENDED_COST', 'AMORTIZED_COST'],
        st_dtm: state.st_dtm,
        nd_dtm: state.nd_dtm,

        filter: {
          Tags: {
            Key: 'Name',
            Values: ['Hello', 'dev1', 'new']
          }
        },
        
        group_by: [{ Type: 'TAG', Key: 'Name' }],

        gran: state.value3,
      }

      axios({
        method: "post",
        url: "/spend_analysis",
        data: params,
      }).then((res: any) => {
        console.log(res, 234)
        getDiagram(res.data || [])
      }).catch((e: any) => {
        ElMessage.error('数据返回错误.');
      });
    }

    /**渲染图表 */
    function getDiagram(data: any): void {

      data = data || []
      const time = []
      const AmortizedCostList = []
      const BlendedCostList = []
      for (const el of data) {
        console.log(el, 22)
        time.push(el.dtm)
        AmortizedCostList.push(el.AmortizedCost)
        BlendedCostList.push(el.BlendedCost)
      }
      //需要获取到element,所以是onMounted的Hook
      myChart = echarts.init(treeChart.value)


      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["AmortizedCost", "BlendedCost"],
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
            axisLabel: {
              interval: 0,
              rotate: 40,//倾斜度 -90 至 90 默认为0
              margin: 4,
              textStyle: {
                fontWeight: "bolder",
                color: "#888888",
                fontSize: 10
              }
            },
            data: time,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        dataZoom: [
          {
            type: 'inside',
            start: 70,
            end: 100,
            maxValueSpan: 40
          },
        ],
        series: [
          {
            name: "AmortizedCost",
            type: "bar",
            barWidth: 10, //柱图宽度
            emphasis: {
              focus: "series",
            },
            data: AmortizedCostList,
          },
          {
            name: "BlendedCost",
            type: "bar",
            barWidth: 10, //柱图宽度
            emphasis: {
              focus: "series",
            },
            data: BlendedCostList,
          },
        ],
      };
      // 绘制图表
      myChart.setOption(option);
    }

    onMounted(() => {
      getAccounts()

      window.onresize = function () {
        myChart.resize()
      }

    })

    return {
      handleSelect,
      ...toRefs(state),
      treeChart,
      tableData,
      changeValue,
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
  color: #4a4a4a;
  .el-menu-demo {
    width: 100%;
    height: 32px;
    > li {
      height: 100%;
      line-height: 32px;
      color: #464646;
    }
  }

  .screen-model {
    padding: 8px 20px;
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    .screen-left {
      float: left;
      width: 700px;
    }
    .screen-right {
      float: right;
      width: 300px;
    }
    .filter-model {
      vertical-align: middle;
      display: inline-block;
      width: 80px;
      height: 28px;
      line-height: 28px;
      font-size: 12px;
      font-weight: 600;
      color: #202020;
    }
    .select-model {
      vertical-align: middle;
      display: inline-block;
      width: 180px;
      height: 28px;
    }
  }

  .chart-wrapper {
    width: 100%;
    height: 500px;
    background: #fff;
    box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
    border: 2px #fff solid;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 14px 0px;
  }

  .cl-table {
    margin-top: 20px;
    width: 100%;
    padding: 14px 20px;
    box-sizing: border-box;
    background: #fff;
  }
}
</style>
