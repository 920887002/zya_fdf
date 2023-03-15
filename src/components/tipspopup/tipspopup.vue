<template>
    <div>
    <van-popup v-model="show" get-container="#app" :style="{color:'white',width:'110px',height:'auto',wordBreak:'normal',background:'#363636',overflow:'hidden',paddingBottom:'20px'}"> 
        <!-- <img src="~@/img/truePoint.png" class="text-center ml-[30px] w-[48px] h-[41px] mt-[10px] mb-[10px]" alt=""> -->
        <div v-if="typeStyle==='submit'"><img src="~@/img/truePoint.png" class=" ml-[30px] mr-[30px] w-[48px] h-[41px] mt-[15px] mb-[10px]" alt="">{{$t("tips.submitted")}}</div>
        <div v-else-if="typeStyle==='notopenyet'"><img src="~@/img/exclamationMark.png" class=" ml-[30px] mr-[30px] w-[48px] h-[41px] mt-[15px] mb-[10px]" alt="">{{$t("tips.NotOpenYet")}}</div>
        <div v-else-if="typeStyle==='noregister'"><img src="~@/img/exclamationMark.png" class=" ml-[30px] mr-[30px] w-[48px] h-[40px] mt-[15px] mb-[10px]" alt="">{{$t("tips.noregister")}}</div>
        <div v-else-if="typeStyle==='loading'"><van-loading class="mt-[15px]" size="48">{{$t("tips.loading")}}</van-loading></div>
        <div v-else-if="typeStyle==='errorNum'"><img src="~@/img/exclamationMark.png" class=" ml-[30px] mr-[30px] w-[48px] h-[40px] mt-[15px] mb-[10px]" alt="">{{$t("dialog.errorNum")}}</div>
        <div v-if="typeStyle==='copyurl'"><img src="~@/img/truePoint.png" class=" ml-[30px] w-[48px] h-[41px] mr-[30px] mt-[15px] mb-[10px]" alt="">{{$t("tips.copy")}}</div>

        </van-popup>
    </div>
</template>

<script>
import Vue from "vue"
import {Popup,Cell,Loading} from "vant"
Vue.use(Popup).use(Cell).use(Loading)
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
    }
   }
}
</script>

<style lang="less" scoped>

</style>