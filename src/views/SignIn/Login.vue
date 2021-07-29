<template>
  <div class="page">
    <div class="logo"></div>
    <div class="login-form">
      <input type="text" v-model="account" placeholder="账号" />
      <input type="password" v-model="password" placeholder="密码" />
      <button class="cl-button" @click="toLogin">登录/注册</button>
    </div>
    <div class="login-sign">
      <el-checkbox label="记住秘密"></el-checkbox>
      <a href="javascript:void(0)">忘记密码?</a>
    </div>
    <div class="bottom-img"></div>
  </div>
</template>

<script  lang='ts'>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter, useRoute, } from 'vue-router'
import { ElMessage } from 'element-plus'

interface State {
  account: string
  password: string
}
export default {
  name: "data_page",
  setup() {
    const state: State = reactive({
      account: '',
      password: ''
    })

    const router = useRouter()
    function toLogin() {
      if (state.account === 'root' && state.password === 'root123') {
        router.push({
          name: 'home',
        })
      } else {
        ElMessage.error('账户或者密码错误')
      }
    }
    return {
      ...toRefs(state),
      toLogin
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f5f6fa;
  overflow: hidden;
  .logo {
    margin: 180px auto 0px;
    width: 246px;
    height: 77px;
    background: url("https://cn.vuejs.org/images/logo.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .login-form {
    width: 423px;
    height: 120px;
    margin: 83px auto 0px;
    background-color: #ffffff;
    box-sizing: border-box;
    position: relative;
    box-shadow: 5px 10px 30px rgba(158, 177, 255, 0.34);
    input {
      width: 100%;
      height: 60px;
      border: 1px solid #eeeeee;
      box-sizing: border-box;
      font-size: 14px;
      color: #686868;
      text-indent: 10px;
    }
    button {
      position: absolute;
      top: 38px;
      right: -50px;
      width: 100px;
      height: 46px;
      background-color: #286bf4;
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;

      border-radius: 2px;
      box-shadow: 0px 12px 35px 0px rgba(52, 77, 178, 0.34);
    }
  }
  .login-sign {
    margin: 10px auto 0px;
    width: 423px;
    height: 60px;
    line-height: 60px;
    padding: 0px 20px;
    box-sizing: border-box;
    a {
      font-family: PingFangSC-Semibold, PingFang SC;
      font-size: 14px;
      margin-left: 80px;
      color: #4a90e2;
    }
  }
  .bottom-img {
    margin: 80px auto 0px;
    width: 100%;
    height: 380px;
    background: url("/src/assets/image/login-bottom-img.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    overflow: hidden;
    box-sizing: border-box;
  }
}
</style>
