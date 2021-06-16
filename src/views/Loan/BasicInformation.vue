<template>
  <div class="cl-frame">
    <div class="cl-info-content">
      <div class="cl-form-modular">
        <ul class="form-ul">
          <li>
            <span>姓名</span>
            <input type="text" v-model="applyData.name" />
          </li>

          <li>
            <span>性别</span>
            <input type="text" v-model="applyData.sex" />
          </li>

          <li>
            <span>身份证号码</span>
            <input type="text" v-model="applyData.auth_id" />
          </li>

          <li>
            <span>常用手机号</span>
            <input type="text" v-model="applyData.cell_phone" />
          </li>

          <li>
            <span>企业经营地址</span>
            <input type="text" v-model="applyData.company_address" />
          </li>
        </ul>

        <div class="btn-box">
          <button class="cl-button" @click="addNewOwner">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang='ts'>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter, useRoute } from 'vue-router'
import axios from "axios"
import { ElMessage } from 'element-plus'

interface ApplyData {
  name: string
  sex: string
  auth_id: string
  cell_phone: string
  company_address: string
}

interface State {
  applyData: ApplyData
}

export default {
  name: "data_page",
  setup() {
    const router = useRouter()
    const state: State = reactive({
      applyData: {
        name: "",
        sex: "",
        auth_id: "",
        cell_phone: "",
        company_address: "",
      },
    })

    function addNewOwner() {
      let params = {
        owner: {
          ...state.applyData
        }
      }
      axios({
        method: "post",
        url: "/add_new_owner",
        data: params,
      }).then((res: any) => {
        console.log(res)
        ElMessage.success({
          message: '新增成功',
          type: 'success'
        });

      }).catch((err: any) => {
        console.log(err)
        ElMessage.error('数据返回错误.')
      })
    }
    onMounted(() => {

    });
    return {
      ...toRefs(state),
      addNewOwner
    };
  },
};
</script>
<style lang="scss" scoped>
.cl-info-content {
  .cl-form-modular .form-ul > li {
    width: 100%;
    input {
      width: 280px;
    }
  }
  .cl-form-modular .form-ul li > span:first-of-type {
    width: 200px;
  }
  .btn-box {
    padding: 10px;
  }
}
</style>
