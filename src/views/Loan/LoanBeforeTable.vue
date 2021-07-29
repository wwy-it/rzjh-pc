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
                  <span>户籍地址</span>
                </th>

                <th>
                  <span>常用手机号</span>
                </th>

                <th>
                  <span>现居住地址</span>
                </th>

                <th>
                  <span>企业名称</span>
                </th>

                <th>
                  <span>企业经营地址</span>
                </th>

                <th>
                  <span>申请额度</span>
                </th>

                <th>
                  <span>进仓日期</span>
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

                <tr v-for="(item,index) in items" :key="index" :class="item.class">
                  <td style="text-align:left">
                    <a @click="toDetails(item)">{{item.NAME}}</a>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.SEX}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.CREDIT_ID}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.AIQ_USER_REGISTER_ADDRESS}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.MOBILE}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.ADDRESS}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.COMPANY_NAME}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.COMPANY_ADDRESS}}</span>
                  </td>

                  <td style="text-align:left">
                    <span>{{item.AIQ_STORE_APPLY_QUOTA}}</span>
                  </td>
                  <td style="text-align:left">
                    <span>{{item.APPLY_TIME}}</span>
                  </td>

                </tr>
              </table>
            </tbody>
          </table>
        </div>

        <el-pagination background layout="prev,pager,next" :page-size="filterParams.pageSize" :total="filterParams.totalRecords"></el-pagination>
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
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { ElMessage } from "element-plus";
import drag from "@/assets/js/dragTable";

interface FilterIcon {
  test: null;
}
interface FilterParams {
  pageNo: number;
  pageSize: number;
  totalRecords: number;
  order: string;
  sort: string;
}

interface State {
  items: any;
  filterIcon: FilterIcon;
  filterParams: FilterParams;
  loading: boolean;
  dialogVisible: boolean;
}

export default {
  name: "data_page",
  setup() {
    onMounted(() => {
      getItems();
      drag.tableDrag("e-table", 0);
    });

    const router = useRouter();
    const state: State = reactive({
      items: [],

      filterIcon: {
        test: null,
      },

      filterParams: {
        pageNo: 0,
        pageSize: 25,
        totalRecords: 50,
        order: "desc",
        sort: "trade_id",
      },

      loading: false,

      dialogVisible: false,
    });

    function getItems(): void {
      state.loading = true;
      let params = {
        // user_id: 1
      };
      axios({
        url: "http://8.140.50.228:5100/view_user_apply_info",
        method: "post",
        data: params,
      }).then((res: any) => {
        console.log(res);
        state.loading = false;
        if (res.data.user_info.length) {
          state.items = res.data.user_info;
        }
      }).catch((err: any) => {
        console.log(err);
        state.loading = false;
        ElMessage.error("数据返回错误.");
      });
    }

    function doFilterTable(): void {
      state.dialogVisible = true;
    }

    //进入详情
    function toDetails(item: any) {
      router.push({
        path: '/loan-before-info',
        query: {
          type: "set",
          id: item.USER_ID
        }
      })

    }

    /**筛选 */
    function handleClose() { }

    return {
      ...toRefs(state),
      getItems,
      doFilterTable,
      toDetails,
      handleClose,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
