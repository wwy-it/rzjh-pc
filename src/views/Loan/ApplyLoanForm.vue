<template>
  <div class="cl-frame" v-loading="loading">
    <div class="cl-form-button">
      <ul>
        <li>
          <button>
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
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>性别</span>
            <el-select placeholder=" " v-model="applyLoan.test">
              <el-option value="男"></el-option>
              <el-option value="女"></el-option>
            </el-select>
          </li>

          <li>
            <span>身份证号码</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>户籍地址</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>常用手机号</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>现居住地址</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
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
          </li>

          <li>
            <span>企业名称</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>企业社会统一信用代码</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
            <span>企业经营地址</span>
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
          </li>

          <li>
            <span>申请额度</span>
            <input type="text" v-model="applyLoan.test" />
          </li>

          <li>
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
          </li>

          <li>
            <span>进仓日期</span>
            <el-date-picker
              placeholder
              v-model="applyLoan.test"
              type="date"
              size="mini"
              align="center"
              value-format="yyyy-MM-dd"
              ref="enterDate"
            ></el-date-picker>
          </li>
        </ul>
      </div>

      <div class="cl-form-modular">
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
      </div>
    </div>
  </div>
</template>

<script  lang='ts'>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter, useRoute } from 'vue-router'

interface ApplyLoan {
  test: string,
}

interface State {
  applyLoan: ApplyLoan
  loading: boolean
}

export default {
  name: "data_page",
  setup() {
    const router = useRouter()
    const state: State = reactive({
      applyLoan: {
        test: '',
      },
      loading: false
    })

    onMounted(() => {

    });
    return {
      ...toRefs(state)

    };
  },
};
</script>
<style lang="scss" scoped>
</style>
