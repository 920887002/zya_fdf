<template>
    <div>
    <van-popup v-model="show" :style="{color:'white',width:'110px',height:'110px',wordBreak:'normal',background:'#363636',overflow:'hidden'}"> 
        <img src="~@/img/truePoint.png" class="text-center ml-[30px] w-[48px] h-[41px] mt-[10px] mb-[10px]" alt="">
        <div v-if="typeStyle==='submit'">{{$t("tips.submitted")}}</div>
        <div v-else-if="typeStyle==='notopenyet'">{{$t("tips.NotOpenYet")}}</div>
        </van-popup>
    </div>
</template>

<script>
import Vue from "vue"
import {Popup,Cell} from "vant"
Vue.use(Popup).use(Cell)
export default {
   data(){
    return{
        show:false,
        typeStyle:"",
    }
   },
   methods:{
    showPopup(arg){
        this.typeStyle=arg
        this.show=true
        console.log(arg)
    }
   }
}
</script>

<style lang="less" scoped>

</style>