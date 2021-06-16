<template>
  <router-view></router-view>
</template>

<script>
import * as echarts from 'echarts'
import { provide } from 'vue'

import { store, setStore } from "@/store/store"
export default {
  name: 'App',
  setup() {
    provide('ec', echarts)//provide
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
