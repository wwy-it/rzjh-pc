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

              <tr>
                <!-- <th>
                  <el-checkbox v-model="fileCheck" @change="fileCheckFun"></el-checkbox>
                </th>-->
                <th>
                  <span>date</span>
                </th>

                <th>
                  <span>ordered_item_sale</span>
                </th>
                <th>
                  <span>ordered_item_sale_b2b</span>
                </th>
                <th>
                  <span>ordered_item_amount</span>
                </th>
                <th>
                  <span>order_quantity_b2b</span>
                </th>
                <th>
                  <span>order_item_category_num</span>
                </th>
                <th>
                  <span>order_item_total_amount_b2b</span>
                </th>

                <th>
                  <span>each_order_item_average_sale</span>
                </th>

                <th>
                  <span>each_order_item_average_sale_b2b</span>
                </th>

                <th>
                  <span>each_order_item_average_amount</span>
                </th>

                <th>
                  <span>each_order_item_average_amount_b2b</span>
                </th>

                <th>
                  <span>average_price</span>
                </th>

                <th>
                  <span>average_price_b2b</span>
                </th>

                <th>
                  <span>page_view_num</span>
                </th>

                <th>
                  <span>buyer_visit_num</span>
                </th>

                <th>
                  <span>purchase_button_winning_rate</span>
                </th>

                <th>
                  <span>order_item_category_conversion_rate</span>
                </th>

                <th>
                  <span>order_item_category_conversion_rate_b2b</span>
                </th>

                <th>
                  <span>order_item_amount_conversion_rate</span>
                </th>

                <th>
                  <span>item_conversion_rate_b2b</span>
                </th>

                <th>
                  <span>average_available_item_amount</span>
                </th>
                <th>
                  <span>average_par_item_amount</span>
                </th>
                <th>
                  <span>refunded_item_amount</span>
                </th>

                <th>
                  <span>refund_rate</span>
                </th>
                <th>
                  <span>received_feedback_amount</span>
                </th>
                <th>
                  <span>received_neg_feedback_amount</span>
                </th>
                <th>
                  <span>neg_feedback_rate</span>
                </th>
                <th>
                  <span>approved_amazon_tx_security_claim</span>
                </th>
                <th>
                  <span>claim_amount</span>
                </th>
                <th>
                  <span>delivered_item_sale</span>
                </th>

                <th>
                  <span>delivered_item_amount</span>
                </th>

                <th>
                  <span>delivered_order_amount</span>
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

                <!-- <th>操作</th> -->
              </tr>
            </thead>
            <tbody>
              <table>
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
                <!-- Order Item Session Percentage - B2B	Unit Session Percentage	Unit Session Percentage - B2B	Average Offer Count	Average Parent Items	Units Refunded	Refund Rate	Feedback Received	Negative Feedback Received	Received Negative Feedback Rate	A-to-z Claims Granted	Claims Amount	Shipped Product Sales	Units Shipped	Orders Shipped -->

                <tr v-for="(item,index) in items" :key="index" :class="item.class">
                  <!-- <td>
                    <el-checkbox v-model="item.check" @change="listAloneCheckFun(item.check,index)"></el-checkbox>
                  </td>-->

                  <td style="text-align:left">
                    <span>
                      <a @click="resetDetails(item)">{{item.date}}</a>
                    </span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.ordered_item_sale}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.ordered_item_sale_b2b}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.ordered_item_amount}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.order_quantity_b2b}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.order_item_category_num}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.order_item_total_amount_b2b}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.each_order_item_average_sale}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.each_order_item_average_sale_b2b}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.each_order_item_average_amount}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.each_order_item_average_amount_b2b}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.average_price}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.average_price_b2b}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.page_view_num}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.buyer_visit_num}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.purchase_button_winning_rate}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.order_item_category_conversion_rate}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.order_item_category_conversion_rate_b2b}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.order_item_amount_conversion_rate}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.item_conversion_rate_b2b}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.average_available_item_amount}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.average_par_item_amount}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.refunded_item_amount}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.refund_rate}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.received_feedback_amount}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.received_neg_feedback_amount}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.neg_feedback_rate}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.approved_amazon_tx_security_claim}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.claim_amount}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.delivered_item_sale}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.delivered_item_amount}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.delivered_order_amount}}</span>
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

                  <!-- <td>
                    <p>
                      <img
                        src="../../assets/image/list/matc.svg"
                        @click="matchingFun(item,test,'0')"
                      />
                    </p>
                  </td>-->
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
        'shop_id': 6, 'reports': ['business_report']
      }
      axios({
        method: "post",
        url: "/view_reports",
        data: params,
      }).then((res: any) => {
        console.log(res)
        state.loading = false
        state.items = res.data.business_report
      }).catch((err: any) => {
        state.loading = false
        console.log(err)
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
