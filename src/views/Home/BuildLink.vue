
<template>
  <div class="build-link">
    <div class="step">第1步</div>
    <div class="model">
      <p class="model-title">您是否通过 AWS 中国账户连接到 Spot？</p>
      <div class="radio-model">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </div>
    </div>

    <div class="model two-model">
      <p class="model-title">您是否使用 AWS Govcloud 帐户连接到 Spot？</p>
      <div class="radio-model">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </div>
    </div>

    <div class="step">第2步</div>
    <div class="model">
      <p class="model-title">登录到您希望 Spot 连接到的 AWS 账户。</p>
      <div class="model-operation">
        <button class="cl-button">Log in</button>
      </div>
    </div>

    <div class="step">第3步</div>
    <div class="model">
      <p class="model-title">选择云表单模板将包括哪些现货产品：</p>
      <div class="checkbox-line">
        <el-checkbox v-model="checked">弹性群海洋</el-checkbox>
      </div>
      <div class="checkbox-line">
        <el-checkbox v-model="checked">云分析器</el-checkbox>
      </div>
      <p class="model-content">在AWS主付款人帐户上设置成本和使用报告。</p>
      <p class="model-content">输入报表所在的桶名：</p>
      <div class="model-operation">
        <input type="text" class="cl-input" v-model="input" placeholder="Bucket name" />
      </div>
    </div>

    <div class="step">第4步</div>
    <div class="model">
      <p class="model-title">使用CloudForms模板创建所需的IAM角色和策略。</p>
      <p class="model-content">在“能力”下，标记1“确认AWS CloudFormation可能创建IAM资源”复选框，然后单击“创建”按钮。</p>
      <div class="model-operation">
        <button class="cl-button">Run Template</button>
      </div>
    </div>

    <div class="step">第5步</div>
    <div class="model">
      <p class="model-title">从“输出”选项卡复制并粘贴SPOT RoleAm：</p>
      <div class="model-operation">
        <input type="text" class="cl-input" v-model="input" placeholder="Bucket name" />
      </div>
      <div class="model-operation">
        <input type="text" class="cl-input" v-model="input" placeholder="Bucket name" />
      </div>
    </div>
  </div>
</template>


<script  lang='ts'>
import { onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'

export default {
  name: "data_page",
  setup() {
    const router = useRouter()
    function handleRegiste() {
      router.push({
        name: 'cost-analysis',
      })
    }
    onMounted(() => { });
    return {
      handleRegiste
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.build-link {
  width: 100%;
  height: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
  overflow: auto;
  color: #7b7b7b;

  .step {
    height: 40px;
    line-height: 40px;
    font-weight: 600;
    font-size: 14px;
    color: #1a8aff;
  }
  .model {
    width: 100%;
    .model-operation {
      margin-top: 10px;
    }
    .model-title {
      height: 25px;
      line-height: 25px;
    }
    .model-content {
      margin-top: 10px;
      height: 25px;
      line-height: 25px;
    }
    .radio-model {
      margin-top: 10px;
    }
    .checkbox-line {
      margin-top: 10px;
    }
  }
  .two-model {
    margin-top: 15px;
  }
}
</style>
