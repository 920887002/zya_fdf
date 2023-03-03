<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
             <div class="h-44 flex flex-row items-center justify-between">
                <div class="w-[103px] h-23 bg-[url('~@/img/logo.png')] bg-cover">
                </div>
                <div class="text-[14px] w-[103px] font-semibold Transtips overflow-hidden overflow-ellipsis">0x78C4A4D651FB4196a2dF13cD7A742FCe1C4c870A</div>
                <rightslide></rightslide>
            </div>
            <div class="bg-[#1B1B1B] h-auto pb-[20px] mt-[16px]">
                <h1 class="text-[20px] text-[#F8DCB5] font-medium text-left  pt-[20px] pl-[22px]">全网NFT个数:<span class="text-[28px]  font-medium ">1000</span>个</h1>
                <!-- <div class="w-[304px] mx-auto h-[36px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px] text-[#633706] mt-[15px] leading-[36px] font-semibold">停止IDO</div> 
                -->
                <div class="w-[304px] mx-auto h-[36px] border-2 border-[#E3B97D] rounded-[4px] text-[#E3B97D] leading-[34px] font-medium" @click="showpopup">已停止</div>
                <tipspopup ref="popup"></tipspopup>
                <div class="w-[304px] mx-auto h-[36px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px] text-[#633706] mt-[15px] leading-[36px] font-semibold"  @click="showpopup">开启领取FDF和NFT</div>
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
        rightslide:()=> import(/* webpackChunkName: 'index' */ "@/components/rightSlide/rightSlide.vue"),
        tipspopup:()=> import(/* webpackChunkName: 'index' */ "@/components/tipspopup/tipspopup.vue")
    },
    methods:{
        showpopup(){
            this.$refs.popup.showPopup();
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
