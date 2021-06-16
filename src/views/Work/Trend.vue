<template>
  <div class="content">
    <div class="screen-model">
      <div class="select-model">
        <el-select v-model="account" placeholder="所有账户">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <div class="select-model">
        <el-date-picker
          v-model="timeZones"
          format="YYYY-MM-DD"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
          @change="timeChange"
        ></el-date-picker>
      </div>
    </div>

    <div class="chart-wrapper" ref="treeChart"></div>

    <div class="event-head">
      <button class="cl-button" @click="createEvent">Create</button>
    </div>

    <div class="cl-table-modular">
      <div class="public-table-style">
        <table id="tableDetailed4" onselectstart="return false;">
          <thead>
            <col />
            <col />
            <col />
            <col style="text-align: center;" width="150" />
            <tr>
              <!-- <th>
                <el-checkbox v-model="fileCheck" @change="fileCheckFun"></el-checkbox>
              </th>-->
              <th>
                <span>编号</span>
              </th>
              <th>
                <span>ID</span>
              </th>
              <th>
                <span>账号</span>
              </th>
              <th style="text-align: center;">操作</th>
            </tr>
          </thead>
          <tbody>
            <table>
              <col />
              <col />
              <col />
              <col style="text-align: center;" width="150" />

              <tr v-for="(row,index) in tableData" :key="index">
                <!-- <th>
                  <el-checkbox v-model="row.check" @change="listAloneCheckFun(row.check,index)"></el-checkbox>
                </th>-->

                <td style="text-align:center;">
                  <span>{{index}}</span>
                </td>

                <td style="text-align:center;">
                  <span>{{row.id}}</span>
                </td>

                <td style="text-align:center;">
                  <span>{{row.account}}</span>
                </td>
                <td>
                  <p>
                    <img src="../../assets/image/list/delete.svg" @click="delEventList(row)" />
                  </p>
                </td>
              </tr>
            </table>
          </tbody>
        </table>
      </div>
    </div>

    <el-dialog class="el-dialog" title="新建" v-model="dialogTableVisible">
      <div class="mod">
        <el-input placeholder="名称" v-model="eventData.name"></el-input>
      </div>

      <div class="mod">
        <el-input type="textarea" placeholder="描述" v-model="eventData.description"></el-input>
      </div>

      <div class="mod">
        <el-select v-model="eventData.scope" placeholder="时间间隔">
          <el-option label="一天" value="DAILY"></el-option>
          <el-option label="一周" value="WEEKLY"></el-option>
          <el-option label="一月" value="MONTHLY"></el-option>
        </el-select>
      </div>

      <div class="mod">
        <el-input type="number" placeholder="Bucket name" v-model="eventData.threshold"></el-input>
      </div>

      <div class="mod">
        <el-button @click="cancelEvent">取消</el-button>
        <el-button type="primary" @click="addEventList">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script  lang='ts'>
import { inject, onMounted, ref, reactive, toRefs, toRef } from "vue"
import { ElMessage } from 'element-plus'
import axios from "axios"
import { toTime } from "@/assets/js/common"

import Cldialog from "@/components/BaseComponent/Cldialog.vue";

interface EventData {
  name: string,
  description: string,
  biz_type: string,
  account: any,
  instance: any,
  scope: string,
  threshold: number,
  inc_only: boolean,
}

interface TableData {
  id?: string | number,
  check?: boolean,
  account: string,
  time?: string,
}

interface State {
  options: any[],
  account: string,
  timeZones: string[],
  st_dtm: string,
  nd_dtm: string,
  dialogTableVisible: boolean,
  eventData: EventData,
  tableData: TableData[]
}

interface Seris {
  name: string,
  type: string,
  stack: string,
  emphasis: object,
  data: number[],
}

export default {
  name: "data_page",
  components: {
    Cldialog,
  },
  setup() {
    let echarts: any = inject("ec")
    let treeChart = ref(Element)
    let myChart: any = {}

    const state: State = reactive({
      options: [{
        value: 'all',
        label: '所有账户'
      }],
      account: 'all',
      timeZones: ["2021-02-01", "2021-03-20"],
      st_dtm: "2021-03-01",
      nd_dtm: "2021-03-12",
      dialogTableVisible: false,
      eventData: {
        "name": "",
        "description": "",
        "biz_type": "AWS",
        "account": { "type": "NAME", "value": "Xiaoxi_Sun" },
        "instance": { "type": "TAG", "value": { "key": "Name", "value": "new" } },
        "scope": "WEEKLY",
        "threshold": 10,
        "inc_only": true
      },
      tableData: []
    })

    /**时间change */
    function timeChange(): void {
      state.timeZones.forEach((el, index) => {
        const t = toTime(new Date(el).getTime())
        console.log(t.YMD)
        if (index == 0) {
          state.st_dtm = t.YMD
        } else {
          state.nd_dtm = t.YMD
        }
      });

      getAccounts()
    }

    /**获取数据接口 */
    function getAccounts(): void {
      let params = { 'user': 1, 'st_dtm': '2021-03-01', 'nd_dtm': '2021-03-12' }
      params.st_dtm = state.st_dtm
      params.nd_dtm = state.nd_dtm

      axios({
        method: "post",
        url: "/trend_diagram",
        data: params,
      }).then((res: any) => {
        getDiagram(res.data || [])
      }).catch((err: any) => {
        console.log(err)
        ElMessage.error('数据返回错误.');
      });
    }

    /**渲染折线图 */
    function getDiagram(data: any) {
      console.log(data.diagram, 234)
      const types: string[] = []
      let times: string[] = []
      state.tableData = []
      const series: any = []
      for (let i = 0; i < data.diagram.length; i++) {
        const item: any = data.diagram[i]

        const row = {
          id: item.id,
          account: item.id
        }
        state.tableData.push(row)

        times = []
        types.push(`account${i}`)

        const seris: Seris = {
          name: `account${i}`,
          type: "line",
          stack: "总量",
          emphasis: {
            focus: "series",
          },
          data: [],
        }

        for (const el of item.data || []) {
          seris.data.push(el.BlendedCost)
          times.push(el.dtm)
        }

        series.push(seris)
      }

      const option = {
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: types,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
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
            boundaryGap: false,
            data: times,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: series,
      }
      console.log(option, 55)
      myChart.setOption(option)
    }

    /**获取时间列表 */
    function addEventList() {
      const events = {
        ...state.eventData
      }
      events.threshold = events.threshold / 100
      let params = {
        "user": 1,
        "events": [events]
      }

      axios({
        method: "post",
        url: "/event_definition",
        data: params,
      }).then((res: any) => {
        ElMessage.success({
          message: '成功',
          type: 'success'
        });
        cancelEvent()
      }).catch((err: any) => {
        ElMessage.error('数据返回错误.');
        cancelEvent()
      });
    }

    /**修改时间列表 */
    function setEventList() {
      let params = {
        'user': 1,
        'events': [
          {
            'id': '3e7f51db663f04c5ea965567fe650672',
            'description': 'hello stompy',
            'tag': "{ 'type': 'TAG', 'value': { 'key': 'test', 'value': '123456' } }",
          }
        ]
      }

      axios({
        method: "post",
        url: "/event_modification",
        data: params,
      }).then((res: any) => {
        console.log(res, 44)
      }).catch((err: any) => {
        console.log(err)
        ElMessage.error('数据返回错误.');
      });
    }

    /**获取时间列表 */
    function delEventList(row: any) {
      console.log(row, 234)
      let params = {
        'user': 1,
        'events': [{ 'id': row.id }]
      }

      axios({
        method: "post",
        url: "/event_deletion",
        data: params,
      }).then((res: any) => {
        ElMessage.success({
          message: '删除成功',
          type: 'success'
        });
        // getAccounts()
      }).catch((err: any) => {
        console.log(err)
        ElMessage.error('数据返回错误.');
      });
    }

    function createEvent(): void {
      state.dialogTableVisible = true
    }
    function cancelEvent(): void {
      state.dialogTableVisible = false
    }

    onMounted(() => {
      myChart = echarts.init(treeChart.value)
      getAccounts()
      window.onresize = function () {
        myChart.resize()
      }
    })

    return {
      ...toRefs(state),
      timeChange,
      treeChart,
      createEvent,
      cancelEvent,

      addEventList,
      delEventList
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  overflow: auto;
  color: #4a4a4a;
  .screen-model {
    width: 1190px;
    box-sizing: border-box;
    height: 45px;
    .select-model {
      vertical-align: middle;
      display: inline-block;
      width: 200px;
      height: 25px;
    }
    .right {
      float: right;
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

  .event-head {
    padding: 10px 0px;
  }

  .cl-table {
    width: 100%;
    padding: 14px 20px;
    box-sizing: border-box;
    background: #fff;
  }

  .el-dialog {
    .mod {
      margin-bottom: 30px;
    }
  }
}
</style>
