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
              <!-- <col width="45" /> -->
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
                  <span>datetime</span>
                </th>
                <th>
                  <span>settlement_id</span>
                </th>
                <th>
                  <span>type</span>
                </th>
                <th>
                  <span>order_id</span>
                </th>
                <th>
                  <span>sku</span>
                </th>

                <th>
                  <span>description</span>
                </th>
                <th>
                  <span>quantity</span>
                </th>

                <th>
                  <span>marketplace</span>
                </th>

                <th>
                  <span>account_type</span>
                </th>

                <th>
                  <span>fulfillment</span>
                </th>

                <th>
                  <span>order_city</span>
                </th>

                <th>
                  <span>order_state</span>
                </th>

                <th>
                  <span>order_postal</span>
                </th>

                <th>
                  <span>tax_collection_model</span>
                </th>
                <th>
                  <span>product_sales</span>
                </th>
                <th>
                  <span>product_sales_tax</span>
                </th>
                <th>
                  <span>shipping_credits</span>
                </th>
                <th>
                  <span>shipping_credits_tax</span>
                </th>
                <th>
                  <span>gift_wrap_credits</span>
                </th>
                <th>
                  <span>gift_wrap_credits_tax</span>
                </th>

                <th>
                  <span>promotional_rebates</span>
                </th>
                <th>
                  <span>promotional_rebates_tax</span>
                </th>
                <th>
                  <span>marketplace_withheld_tax</span>
                </th>
                <th>
                  <span>selling_fees</span>
                </th>
                <th>
                  <span>fba_fees</span>
                </th>
                <th>
                  <span>other_transaction_fees</span>
                </th>
                <th>
                  <span>other</span>
                </th>
                <th>
                  <span>total</span>
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
                <th>
                  <span>date</span>
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
                    <span>
                      <a @click="resetDetails(item)">{{item.datetime}}</a>
                    </span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.settlement_id}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.type}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.order_id}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.sku}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.description}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.quantity}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.marketplace}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.account_type}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.fulfillment}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.order_city}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.order_state}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.order_postal}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.tax_collection_model}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.product_sales}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.product_sales_tax}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.shipping_credits}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.shipping_credits_tax}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.gift_wrap_credits}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.gift_wrap_credits_tax}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.promotional_rebates}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.promotional_rebates_tax}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.marketplace_withheld_tax}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.selling_fees}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.fba_fees}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.other_transaction_fees}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.other}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.total}}</span>
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
                  <td style="text-align:left">
                    <span>{{item.date}}</span>
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
        'shop_id': 6, 'reports': ['orders_report']
      }
      axios({
        method: "post",
        url: "/view_reports",
        data: params,
      }).then((res: any) => {
        console.log(res)
        state.loading = false
        state.items = res.data.orders_report
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
.cl-frame {
  .cl-info-content {
    .cl-table-modular {
      .public-table-style {
        #e-table {
          width: 150%;
        }
      }
    }
  }
}
</style>
