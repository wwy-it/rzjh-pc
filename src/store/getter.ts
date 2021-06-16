import { ref, toRefs, reactive, onMounted } from "vue"

const state = reactive({
    //进入演示模式，展示第几个卡片
    helpIndex: 0
})
const store = toRefs(state)




function setStore(v: number) {
    store.helpIndex.value = v
}

export {
    store,
    setStore
} 