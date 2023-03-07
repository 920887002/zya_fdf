<template>
    <van-popup v-model="show" :style="{color:'white',width:'130px',height:'auto',wordBreak:'normal',background:'#363636',overflow:'hidden'}">
        <img src="~@/img/exclamationMark.png" class="text-center ml-[40px] w-[48px] h-[40px] mt-[15px] mb-[10px]" alt="">{{$t("tips.noregister")}}
    </van-popup>
</template>

<script>
import Vue from "vue"
import {Popup} from "vant"
Vue.use(Popup)
export default {
    data(){
        return{
            show:false,
        }
    },
    methods:{
    showPopup(){
        this.show=true
    }
   }
}
</script>

<style lang="less" scoped>

</style>