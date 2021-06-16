<template>
  <ul class="form-ul">
    <li>
      <span>Account</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </li>
  </ul>

  <div class="data-model">
    <div class="m-block">
      <p class="h">计算</p>
      <p class="t">$250.23</p>
    </div>
    <div class="m-block">
      <p class="h">网络</p>
      <p class="t">$250.23</p>
    </div>
    <div class="m-block">
      <p class="h">数据</p>
      <p class="t">$250.23</p>
    </div>

    <div class="m-block">
      <p class="h">其他</p>
      <p class="t">$250.23</p>
    </div>
  </div>

  <h2 class="section-title">Services</h2>

  <div class="data-model-two">
    <div class="m-block">
      <p class="h">GKE</p>
      <div class="model">
        <div class="m">
          <p>420</p>
          <span>Instances</span>
        </div>
        <div class="m">
          <p>$3454.20</p>
          <span>Est,Additional Savings</span>
        </div>
        <div class="m">
          <p>42%</p>
          <span>Savings Rate</span>
        </div>
      </div>
    </div>
    <div class="m-block">
      <p class="h">ECS</p>
      <div class="model">
        <div class="m">
          <p>420</p>
          <span>Instances</span>
        </div>
        <div class="m">
          <p>$3454.20</p>
          <span>Est,Additional Savings</span>
        </div>
        <div class="m">
          <p>42%</p>
          <span>Savings Rate</span>
        </div>
      </div>
    </div>

    <div class="m-block">
      <p class="h">EKS</p>

      <div class="model">
        <div class="m">
          <p>420</p>
          <span>Instances</span>
        </div>
        <div class="m">
          <p>$3454.20</p>
          <span>Est,Additional Savings</span>
        </div>
        <div class="m">
          <p>42%</p>
          <span>Savings Rate</span>
        </div>
      </div>
    </div>
  </div>

  <div class="data-model-two model-pad">
    <div class="m-block">
      <p class="h">GKE</p>
      <div class="model">
        <div class="m">
          <p>420</p>
          <span>Instances</span>
        </div>
        <div class="m">
          <p>$3454.20</p>
          <span>Est,Additional Savings</span>
        </div>
        <div class="m">
          <p>42%</p>
          <span>Savings Rate</span>
        </div>
      </div>
    </div>
    <div class="m-block">
      <p class="h">ECS</p>
      <div class="model">
        <div class="m">
          <p>420</p>
          <span>Instances</span>
        </div>
        <div class="m">
          <p>$3454.20</p>
          <span>Est,Additional Savings</span>
        </div>
        <div class="m">
          <p>42%</p>
          <span>Savings Rate</span>
        </div>
      </div>
    </div>

    <div class="m-block">
      <p class="h">EKS</p>

      <div class="model">
        <div class="m">
          <p>420</p>
          <span>Instances</span>
        </div>
        <div class="m">
          <p>$3454.20</p>
          <span>Est,Additional Savings</span>
        </div>
        <div class="m">
          <p>42%</p>
          <span>Savings Rate</span>
        </div>
      </div>
    </div>
  </div>

  <h2 class="section-title">Workloads</h2>

  <div class="cl-table">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="name" width="120"></el-table-column>
      <el-table-column prop="account" label="Account"></el-table-column>
      <el-table-column prop="type" label="Type"></el-table-column>
      <el-table-column prop="instance" label="Instance"></el-table-column>
      <el-table-column prop="instanceType" label="Instance types"></el-table-column>
      <el-table-column prop="est" label="Est"></el-table-column>
      <el-table-column prop="estimated" label="Estimated"></el-table-column>
      <el-table-column prop="action" label="action" show-overflow-tooltip></el-table-column>
    </el-table>
  </div>
</template>

<script lang='ts'>
import { inject, onMounted } from "vue";

export default {
  name: "data_page",
  setup() {
    let echarts: any = inject("ec"); //引入

    const options = [
      {
        value: "选项1",
        label: "黄金糕",
      },
      {
        value: "选项2",
        label: "双皮奶",
      },
      {
        value: "选项3",
        label: "蚵仔煎",
      },
      {
        value: "选项4",
        label: "龙须面",
      },
      {
        value: "选项5",
        label: "北京烤鸭",
      },
    ];
    const value: string = "";

    const tableData = [
      {
        date: "2016-05-03",
        name: "name",
        account: "GCP",
        type: "GKE",
        instance: "39",
        instanceType: "39",
        est: "$23,23",
        estimated: "34%",
        action: "Get Started",
      },
      {
        date: "2016-05-03",
        name: "name",
        account: "GCP",
        type: "GKE",
        instance: "39",
        instanceType: "39",
        est: "$23,23",
        estimated: "34%",
        action: "Get Started",
      },
      {
        date: "2016-05-03",
        name: "name",
        account: "GCP",
        type: "GKE",
        instance: "39",
        instanceType: "39",
        est: "$23,23",
        estimated: "34%",
        action: "Get Started",
      },
    ];

    onMounted(() => { });

    return {
      options,
      value,
      tableData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.form-ul {
  width: 1190px;
  height: 38px;
  background-color: #fff;
  padding: 0px 20px;
  box-sizing: border-box;
  overflow: hidden;

  > li {
    width: 350px;
    height: 38px;
    line-height: 38px;
    float: left;
    overflow: hidden;
    > span {
      float: left;
      width: 60px;
      font-size: 12px;
      color: #888;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
    }
  }
  > li:nth-child(3) {
    width: 200px;
  }
}
.data-model {
  margin-top: 20px;
  width: 100%;
  height: 100px;
  overflow: hidden;
  .m-block {
    float: left;
    margin-right: 20px;
    border-left: 4px #0071bc solid;
    box-sizing: border-box;
    width: 282.5px;
    height: 100px;
    background: #fff;
    box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
    border-radius: 3px;
    padding: 14px 20px;
    .h {
      height: 25px;
      line-height: 25px;
      font-weight: 600;
      font-size: 12px;
      color: #5f6e82;
    }
    .t {
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      color: #8492a6;
    }
  }
}
.section-title {
  padding: 20px 0px 10px 0px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  color: #1c202d;
}
.data-model-two {
  overflow: hidden;
  width: 100%;
  .m-block {
    float: left;
    margin-right: 20px;
    width: 339.5px;
    height: 80px;
    background: #fff;
    box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
    border: 2px #fff solid;
    border-radius: 3px;
    padding: 14px 20px;
    .h {
      height: 30px;
      line-height: 30px;
      font-weight: 400;
      font-size: 14px;
      color: #5f6e82;
    }
    .model {
      width: 100%;
      height: 45px;
      .m {
        margin-left: 10px;
        width: 120px;
        height: 45px;
        float: left;
        // border: 1px solid red;
        p {
          height: 25px;
          line-height: 25px;
        }
        span {
          height: 20px;
          line-height: 20px;
          font-size: 12px;
        }
      }
      .m:first-child {
        width: 60px;
      }
    }
  }
}
.model-pad {
  margin-top: 20px;
}
.cl-table {
  width: 1190px;
  padding: 14px 20px;
  box-sizing: border-box;
  background: #fff;
}
</style>
