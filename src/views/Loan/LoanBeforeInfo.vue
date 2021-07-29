<template>
  <div class="cl-frame" v-loading="loading">
    <div class="cl-form-button">
      <ul>
        <li>
          <button @click="addForm">
            <img src="../../assets/image/form/save.svg" /> 保存
          </button>
        </li>
      </ul>
    </div>

    <div class="cl-info-content">
      <div class="cl-form-modular">
        <ul class="form-ul">
          <li>
            <span>姓名</span>
            <input type="text" v-model="applyLoan.NAME" />
          </li>

          <li>
            <span>性别</span>
            <el-select placeholder=" " v-model="applyLoan.SEX">
              <el-option value="男"></el-option>
              <el-option value="女"></el-option>
            </el-select>
          </li>

          <li>
            <span>身份证号码</span>
            <input type="number" v-model="applyLoan.CREDIT_ID" />
          </li>

          <li>
            <span>户籍地址</span>
            <input type="text" v-model="applyLoan.AIQ_USER_REGISTER_ADDRESS" />
          </li>

          <li>
            <span>常用手机号</span>
            <input type="number" v-model="applyLoan.MOBILE" />
          </li>

          <li>
            <span>现居住地址</span>
            <input type="text" v-model="applyLoan.ADDRESS" />
          </li>

          <!-- <li>
            <span>学历</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>婚姻状态</span>
            <el-select placeholder=" " v-model="applyLoan.test">
              <el-option value="已婚"></el-option>
              <el-option value="未婚"></el-option>
            </el-select>
          </li>

          <li>
            <span>配偶姓名</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>配偶手机号</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>配偶身份证号码</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>跨境电商从业年限</span>
            <input type="text" v-model="applyLoan.test" />
          </li> -->

          <li>
            <span>企业名称</span>
            <input type="text" v-model="applyLoan.COMPANY_NAME" />
          </li>

          <li>
            <span>企业经营地址</span>
            <input type="text" v-model="applyLoan.COMPANY_ADDRESS" />
          </li>

          <!-- <li>
            <span>企业社会统一信用代码</span>
            <input type="text" v-model="applyLoan.test" />
          </li> 

         <li>
            <span>家庭联系人姓名</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>家庭联系人关系</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>家庭联系人手机号</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>工作联系人姓名</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>工作联系人姓名</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>家庭联系人手机号</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>其他联系人姓名</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>其他联系人关系</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>其他联系人手机号</span>
            <input type="text" v-model="applyLoan.test" />
          </li> -->

          <li>
            <span>申请额度</span>
            <input type="number" v-model="applyLoan.AIQ_STORE_APPLY_QUOTA" />
          </li>

          <!-- <li>
            <span>还款方式</span>
            <input type="text" v-model="applyLoan.test" />
          </li> 

          <li>
            <span>还款期限</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>借记卡卡号</span>
            <input type="text" v-model="applyLoan.test" />
          </li>-->

          <li>
            <span>进仓日期</span>
            <el-date-picker placeholder v-model="applyLoan.APPLY_TIME" type="date" size="mini" align="center" value-format="yyyy-MM-dd" ref="enterDate"></el-date-picker>
          </li>
        </ul>
      </div>

      <div class="cl-form-modular">
        <ul class="form-ul">
          <li>
            <span>店铺数目</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>店铺最长运作时间</span>
            <input type="number" v-model="applyLoan.STORE_LONG_RUN_TIME" />
          </li>

          <li>
            <span>收款账户最近变更时长</span>
            <input type="number" v-model="applyLoan.STORE_COLLECTION_CHANGE_TIME" />
          </li>

          <li>
            <span>主营品类</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>单店最大销售金额</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>近12个月退款率</span>
            <input type="text" v-model="applyLoan.test" />
          </li>
          <li>
            <span>近12个月有销售记录的月份</span>
            <input type="text" v-model="applyLoan.test" />
          </li>
          <li>
            <span>近3个月月均销售额</span>
            <input type="text" v-model="applyLoan.test" />
          </li>
          <li>
            <span>近3个月月均收款金额</span>
            <input type="text" v-model="applyLoan.test" />
          </li>
        </ul>
      </div>

      <!-- <div class="cl-form-modular">
        <ul class="form-ul">
          <li>
            <span>营业执照</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>主力店铺后台数据截图</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>主力店铺绑定的回款银行卡流水</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>企业经营场所照片</span>
            <input type="text" v-model="applyLoan.test" />
          </li>
        </ul>
      </div> -->

      <div class="cl-form-button" v-if="type=='set'">
        <ul>
          <li>
            <button @click="add">
              <img src="../../assets/image/form/add.svg" /> 新增
            </button>
          </li>
        </ul>
      </div>

      <div class="cl-table-modular loan-before-info" v-if="type=='set'">
        <div class="public-table-style">
          <table id="e-table" onselectstart="return false;">
            <thead>
              <col />
              <col />
              <col />
              <col style="text-align: center;" width="160" />

              <tr>

                <th>
                  <span>店铺编号-名称</span>
                </th>

                <th>
                  <span>营业执照名称</span>
                </th>

                <th>
                  <span>对应站点</span>
                </th>

                <th>
                  <span>操作</span>
                </th>

              </tr>
            </thead>
            <tbody>
              <table>
                <col />
                <col />
                <col />
                <col style="text-align: center;" width="160" />

                <tr v-for="(item,index) in items" :key="index" :class="item.class">
                  <td style="text-align:left">
                    <span v-if="!item.show">{{item.test}}</span>
                    <input v-if="item.show" type="text" v-model="rowdata.marketPrice" />
                  </td>
                  <td style="text-align:left">
                    <span v-if="!item.show">{{item.test}}</span>
                    <input v-if="item.show" type="text" v-model="rowdata.marketPrice" />
                  </td>

                  <td style="text-align:left">
                    <span v-if="!item.show">{{item.test}}</span>
                    <input v-if="item.show" type="text" v-model="rowdata.marketPrice" />
                  </td>

                  <td>
                    <p v-if="item.show">
                      <img src="../../assets/image/form/sav.svg" @click="save(item,index)" />
                    </p>
                  </td>
                </tr>
              </table>
            </tbody>
          </table>
        </div>

        <el-pagination v-if="false" background layout="prev,pager,next" :page-size="filterParams.pageSize" :total="filterParams.totalRecords"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script  lang='ts'>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from 'element-plus'
import axios from "axios"

interface ApplyLoan {
  [propName: string]: any
}

interface FilterParams {
  pageNo: number;
  pageSize: number;
  totalRecords: number;
  order: string;
  sort: string;
}

interface AllAttr {
  [propName: string]: any
}

interface State {
  type: any,
  id?: any;
  applyLoan: ApplyLoan;
  items: AllAttr[];
  filterParams: FilterParams;
  loading: boolean;
  filte: string;
  rowdata: AllAttr;
}

export default {
  name: "data_page",
  setup() {
    const router = useRouter();
    const state: State = reactive({
      type: 'add',
      id: undefined,
      applyLoan: {
        // ID: '',//	主键Id
        // USER_ID: '',//	用户Id
        UUID: '',//	用户UUID,唯一标识嘛
        BIZ_ID: '',//	用户业务Id
        NAME: '',
        SEX: '',//	性别
        MOBILE: '',//	电话号码
        ADDRESS: '',//联系地址
        AIQ_USER_REGISTER_ADDRESS: '',//	户籍地址
        CREDIT_ID: '',//	身份证
        COMPANY_NAME: '',//	企业名称
        COMPANY_ADDRESS: '',//企业经营地址
        ESTIMATED_TURNOVER: '',//	企业预估营业额
        AIQ_BUSINESS_ID: '',//	业务标识符（目前是根据线下表格提供的信息来定义的）
        AIQ_STORE_APPLY_QUOTA: 0,//	申请金额
        APPLY_TYPE: '',//	申请状态（WAIT 待申请  APPLYING 申请中 APPLIED 已申请 REFUSE 拒绝）
        STORE_CODE: '',//	店铺编码
        STORE_LONG_RUN_TIME: 0,//	店铺最长运作时间单位/天
        STORE_REGISTER_TIME: 0,//	店铺注册日期
        STORE_COLLECTION_CHANGE_TIME: 0,//	收款账户最近变更时长单位/天
        STORE_WEBSITE: '',//	店铺地址，多个店铺用，分割
        APPLY_TIME: '2021-07-06',//	申请时间
        EXT: '',//	附加信息
        UPDATE_TIME: '2021-01-01',//	更新时间
        UPDATE_USER: '',//	更新人
        CREATE_TIME: '2021-04-09 00:00:00',//	创建时间
        CREATE_USER: '',//	创建人

        STORE_CATEGORY: '',
        STORE_AMOUNT: 0,
      },
      filterParams: {
        pageNo: 0,
        pageSize: 25,
        totalRecords: 50,
        order: "desc",
        sort: "trade_id",
      },
      items: [
        {
          test: 234,
        },

      ],
      loading: false,
      filte: 'add',
      rowdata: {}
    });

    onMounted(() => {
      const route = useRoute()
      console.log(route, '23434')
      state.type = route.query.type || 'add'
      state.id = route.query.id

      if (state.type === "set") {
        getForm()
      }
      console.log(state.type, 'type')
    });

    /**获取FORM */
    function getForm() {
      let params = {
        user_id: state.id
      };
      axios({
        url: "http://8.140.50.228:5100/view_user_apply_info",
        method: "post",
        data: params,
      }).then((res: any) => {
        console.log(res, 'res')
        state.applyLoan = res.data.user_info[0]
      }).catch((err: any) => {
        console.log(err);

        ElMessage.error("数据返回错误.");
      });
    }

    //新增表单
    function addForm() {

      let params = {
        user_id: 2021,
        user_apply_info: {
          ...state.applyLoan
        }
      }

      state.loading = true
      axios({
        url: "http://8.140.50.228:5100/add_user_apply_info",
        method: "post",
        data: params,
      }).then((res: any) => {
        state.loading = false
        console.log(res)
        if (res.code == 0) {
          ElMessage.success({
            message: '新增成功',
            type: 'success'
          })
        } else {
          ElMessage.error(res.msg)
        }
      }).catch((err: any) => {
        state.loading = false
        console.log(err)
        ElMessage.error('数据返回错误.')
      })

    }

    /**获取table */
    function getTable() {

      state.items = state.items.map(row => {
        row.show = false
        return row
      })
    }


    /**增加数据 */
    function add(row: any, index: number) {
      state.filte = "add";

      state.items.forEach((element: any, i: number) => {
        element.show = false
      });

      if (state.items[0].newData === true) {
        state.items[0].show = true;
      } else {
        state.items.unshift({ show: true, newData: true });
      }

      // this.$refs.box.scrollTop = 0
      for (const key in state.rowdata) {
        state.rowdata[key] = "";
      }
    }

    /**保存数据 */
    function save(row: any, index: number) {
      let type = state.filte
      if (type === "add") {
        addItem(row, index);
      } else if (type === "set") {
        // editSub(row, index);
      }
    }

    //新增提交
    function addItem(row: any, index: number) {


      axios({
        url: "/orderSpotMarketPrice/insert",
        method: "post",
        data: state.rowdata
      }).then(res => {
        if (res.data.code === 200) {
          row.show = false; //关闭修改

          getTable();

          ElMessage.success({
            message: '新增成功',
            type: 'success'
          })
        } else {
          ElMessage.error('数据返回错误.')
        }
      }).catch(err => {
        ElMessage.error('数据返回错误.')
      });
    }

    return {
      ...toRefs(state),
      addForm,
      add,
      save,
      getTable
    };
  },
};
</script>
<style lang="scss" scoped>
.loan-before-info {
  height: auto;
}
</style>
