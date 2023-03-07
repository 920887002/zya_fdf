<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
             <topheader></topheader>
            <div class="bg-[#1B1B1B] h-auto pb-[20px] mt-[16px]">
                <h1 class="text-[20px] text-[#F8DCB5] font-medium text-left  pt-[20px] pl-[22px]">{{$t("IDOswitch.totalNft")}}:<span class="text-[28px]  font-medium ">1000</span>{{$t("FDFIDO.PCS")}}</h1>
                <!-- <div class="w-[304px] mx-auto h-[36px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px] text-[#633706] mt-[15px] leading-[36px] font-semibold">停止IDO</div> 
                -->
                <div class="w-[304px] mx-auto h-[36px] border-2 border-[#E3B97D] rounded-[4px] text-[#E3B97D] leading-[34px] font-medium" @click="showpopup">{{$t("IDOswitch.HaveStopped")}}</div>
                <tipspopup ref="popup"></tipspopup>
                <div class="w-[304px] mx-auto h-[36px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px] text-[#633706] mt-[15px] leading-[36px] font-semibold"  @click="showpopup">{{$t("IDOswitch.closeedClaim")}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {Toast} from 'vant'
export default{
    data(){
        return{
            show:true,
        }
    },
    components:{
        tipspopup:()=> import(/* webpackChunkName: 'index' */ "@/components/tipspopup/tipspopup.vue"),
        topheader:()=> import(/* webpackChunkName: 'index' */ "@/components/header/header.vue")
    },
    methods:{
        showpopup(){
            this.$refs.popup.showPopup("submit");
        }
    }
}

</script>

<style lang="less" scoped>


.Transtips{
    background-image: linear-gradient(to right,#FAE2BE,#E7B67C);
     -webkit-background-clip: text;
      color: transparent;
}


</style>
