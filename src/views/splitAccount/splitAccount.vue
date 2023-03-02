<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
             <div class="relative h-[20px] mt-[10px]">
                <img src="~@/img/leftPoints.png" class="absolute w-[20px] h-[20px]" alt="">
                <div class="mx-auto w-[200px]  font-semibold Transtips">拆分账户</div>
             </div>
             <div class="h-[80px] mt-[26px] flex justify-between">
                <div class="w-[170px] h-[80px] font-semibold bg-gradient-to-r from-[#61A9F9] to-[#0068DC] rounded-[4px] flex flex-col flex-wrap">
                    <h1 class="text-[16px] pt-[12px] pl-[20px]">可用积分</h1>
                    <p class="pt-[8px] pl-[20px] text-left">10000.00</p>
                    <img src="~@/img/crown.png" class="w-[84px] h-[80px]" alt="">
                </div>
                <div class="w-[170px] h-[80px] font-semibold bg-gradient-to-r from-[#F6C144] to-[#F7AF23] rounded-[4px] flex flex-col flex-wrap">
                    <h1 class="text-[16px] pt-[12px] pl-[20px]">冻结积分</h1>
                    <p class="pt-[8px] pl-[20px] text-left">3.00</p>
                    <img src="~@/img/lock.png" class="w-[84px] h-[80px]" alt="">
                </div>
             </div>
             <div class="h-[74px] mt-[16px] font-medium">
                <p class="text-[#F8DCB5] text-left">金额</p>
                <div class="h-[36px] p-[2px] bg-gradient-to-r from-[#FAE2BE] to-[#E3B97D] rounded-[4px] mt-[8px]">
                    <input type="text" class="bg-[#020202] text-left w-full h-full">
                </div>
             </div>
             <div class="h-[74px] mt-[16px] font-medium">
                <p class="text-[#F8DCB5] text-left">收款地址</p>
                <div class="h-[36px] p-[2px] bg-gradient-to-r from-[#FAE2BE] to-[#E3B97D] rounded-[4px] mt-[8px]">
                    <input type="text" class="bg-[#020202] text-left w-full h-full">
                </div>
             </div>

             <div class="text-left mt-[10px]">交易手续费<span class="text-[#F8DCB5]">10%</span></div>
                









                <div class="bg-gradient-to-r from-[#FAE2BE] h-[36px] to-[#E3B97D] rounded-[4px] leading-[36px] text-[#633706] font-semibold text-[17px] mt-[16px]">转出</div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
export default{
    data(){
        return{
        }
    },
    methods:{
        
    }
    }
</script>

<style lang="less" scoped>


.Transtips{
    background-image: linear-gradient(to right,#FAE2BE,#E7B67C);
     -webkit-background-clip: text;
      color: transparent;
}
.inTitle{
    p{
        width: 85.75px;
    }
}
</style>
