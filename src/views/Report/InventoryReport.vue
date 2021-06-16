<template>
  <div class="cl-frame" v-loading="loading">
    <div class="cl-form-button">
      <ul>
        <li>
          <button @click="getItems">
            <img src="../../assets/image/form/updata.svg" /> 刷新
          </button>
        </li>

        <li class="rig">
          <el-tooltip class="item" effect="dark" content="筛选" placement="left">
            <a @click="doFilterTable">
              <img src="../../assets/image/form/filter.svg" alt />
            </a>
          </el-tooltip>
        </li>
      </ul>
    </div>

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
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />

              <tr>
                <th>
                  <span>sku</span>
                </th>

                <th>
                  <span>asin</span>
                </th>

                <th>
                  <span>price</span>
                </th>

                <th>
                  <span>quantity</span>
                </th>

                <th>
                  <span>your_price</span>
                </th>

                <th>
                  <span>business_price</span>
                </th>

                <th>
                  <span>fnsku</span>
                </th>

                <th>
                  <span>product_name</span>
                </th>

                <th>
                  <span>condition</span>
                </th>

                <th>
                  <span>mfn_listing_exists</span>
                </th>

                <th>
                  <span>mfn_fulfillable_quantity</span>
                </th>

                <th>
                  <span>afn_listing_exists</span>
                </th>

                <th>
                  <span>afn_warehouse_quantity</span>
                </th>

                <th>
                  <span>afn_fulfillable_quantity</span>
                </th>

                <th>
                  <span>afn_unsellable_quantity</span>
                </th>

                <th>
                  <span>afn_reserved_quantity</span>
                </th>

                <th>
                  <span>afn_total_quantity</span>
                </th>

                <th>
                  <span>per_unit_volume</span>
                </th>

                <th>
                  <span>afn_inbound_working_quantity</span>
                </th>

                <th>
                  <span>afn_inbound_shipped_quantity</span>
                </th>

                <th>
                  <span>afn_inbound_receiving_quantity</span>
                </th>

                <th>
                  <span>afn_researching_quantity</span>
                </th>

                <th>
                  <span>aiq_shop_id</span>
                </th>

                <th>
                  <span>aiq_shop_name</span>
                </th>

                <th>
                  <span>aiq_amazon_seller_id</span>
                </th>

                <th>
                  <span>aiq_business_id</span>
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
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />

                <tr v-for="(item,index) in items" :key="index" :class="item.class">
                  <td style="text-align:left">
                    <span>{{item.sku}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.asin}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.price}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.quantity}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.your_price}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.business_price}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.fnsku}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.product_name}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.condition}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.mfn_listing_exists}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.mfn_fulfillable_quantity}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.afn_listing_exists}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.afn_warehouse_quantity}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.afn_fulfillable_quantity}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.afn_unsellable_quantity}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.afn_reserved_quantity}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.afn_total_quantity}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.per_unit_volume}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.afn_inbound_working_quantity}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.afn_inbound_shipped_quantity}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.afn_inbound_receiving_quantity}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.afn_researching_quantity}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.aiq_shop_id}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.aiq_shop_name}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.aiq_amazon_seller_id}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.aiq_business_id}}</span>
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

  <el-dialog title="筛选" v-model="dialogVisible" width="30%" :before-close="handleClose">
    <el-select placeholder="shop_id" v-model="applyLoan">
      <el-option value="0"></el-option>
      <el-option value="1"></el-option>
      <el-option value="2"></el-option>
    </el-select>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </template>
  </el-dialog>
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
  dialogVisible: boolean
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

      loading: false,

      dialogVisible: false
    })

    function getItems(): void {
      state.loading = true
      let params = {
        'shop_id': 6, 'reports': ['inventory_report']
      }
      axios({
        method: "post",
        url: "/view_reports",
        data: params,
      }).then((res: any) => {
        console.log(res)
        state.loading = false
        state.items = res.data.inventory_report
      }).catch((err: any) => {
        console.log(err)
        state.loading = false
        ElMessage.error('数据返回错误.')
      })
    }

    function doFilterTable(): void {
      state.dialogVisible = true
    }

    onMounted(() => {
      getItems()
      drag.tableDrag("e-table", 0)
    });
    return {
      ...toRefs(state),
      getItems,
      doFilterTable,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
