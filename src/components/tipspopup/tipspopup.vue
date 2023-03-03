<template>
    <div>
    <van-popup v-model="show" :style="{color:'black',width:'110px',height:'110px',wordBreak:'normal'}">{{$t("major.name")}}</van-popup>
    </div>
</template>

<script>
import Vue from "vue"
import {Popup,Cell} from "vant"
Vue.use(Popup).use(Cell)
export default {
   data(){
    return{
        show:false
    }
   },
   methods:{
    showPopup(){
        this.show=true
        console.log('12312')
    }
   }
}
</script>

<style lang="less" scoped>

</style>