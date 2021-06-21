<template>
  <div class="cl-frame" v-loading="loading">
    <div class="cl-info-content">
      <div class="cl-table-modular">
        <div class="public-table-style">
          <table id="e-table" onselectstart="return false;">
            <thead>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <tr>
                <th>
                  <span>姓名</span>
                </th>
                <th>
                  <span>性别</span>
                </th>
                <th>
                  <span>身份证号</span>
                </th>
                <th>
                  <span>常用手机号</span>
                </th>
                <th>
                  <span>企业经营地址</span>
                </th>
                <th>
                  <span>预估营业额</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <table>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <tr v-for="(item,index) in items" :key="index" :class="item.class">
                  <td style="text-align:left">
                    <span>
                      <a @click="resetDetails(item)">{{item.name}}</a>
                    </span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.sex}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.auth_id}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.cell_phone}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.company_address}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.estimate_turnover}}</span>
                  </td>
                </tr>
              </table>
            </tbody>
          </table>
        </div>

        <el-pagination
          background
          layout="prev,pager,next"
          :page-size="filterParams.pageSize"
          :total="filterParams.totalRecords"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script  lang='ts'>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter, useRoute } from 'vue-router'
import axios from "axios"
import { ElMessage } from 'element-plus'
import drag from "@/assets/js/dragTable"

interface FilterIcon {
  test: null,
}
interface FilterParams {
  pageNo: number,
  pageSize: number,
  totalRecords: number,
  order: string,
  sort: string,
}


interface State {
  items: any
  filterIcon: FilterIcon
  filterParams: FilterParams
  loading: boolean
}

export default {
  name: "data_page",
  setup() {
    const router = useRouter()
    const state: State = reactive({
      items: [],

      filterIcon: {
        test: null
      },

      filterParams: {
        pageNo: 0,
        pageSize: 25,
        totalRecords: 50,
        order: "desc",
        sort: "trade_id",
      },

      loading: true
    })

    function getItems(): void {
      let params = {
      }
      axios({
        method: "post",
        url: "/view_owner",
        data: params,
      }).then((res: any) => {
        console.log(res)
        state.loading = false
        state.items = res.data
        drag.tableDrag("e-table", 0)
      }).catch((err: any) => {
        console.log(err)
        state.loading = false
        ElMessage.error('数据返回错误.')
      })

      axios({
        method: "post",
        url: "/view_shop",
        data: {
          shop_id: 1,
          id_only: true
        },
      }).then((res: any) => {
        console.log(res)

      }).catch((err: any) => {
        console.log(err)
        ElMessage.error('数据返回错误.')
      })



    }

    onMounted(() => {
      getItems()
    });
    return {
      ...toRefs(state)

    };
  },
};
</script>
<style lang="scss" scoped>
</style>
