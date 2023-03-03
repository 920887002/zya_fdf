<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
             <div class="relative h-[20px] mt-[10px]">
                <img src="~@/img/leftPoints.png" @click="$backFun()" class="absolute w-[20px] h-[20px]" alt="">
                <div class="mx-auto w-[17px]  font-semibold Transtips">IN</div>
             </div>
             <div class="h-[88px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px] mt-[16px]">
                <h1 class="text-[#633706] text-[17px] whitespace-nowrap pt-[15px] font-semibold">100USD + 2%FDF + 22.5%=122.5USDT</h1>
                <div class="flex text-[#633706] mt-[5px] inTitle">
                    <p>本金</p>
                    <p>等值USDT</p>
                    <p>一周期收益</p>
                    <p>本金和收益</p>
                </div>
             </div>
             <div class="h-[143.64px] bg-[#1B1B1B] rounded-b-sm pl-[23px] pt-[18px]">
                <h1 class="text-left font-semibold">15天为一周期，每周期收益22.5%</h1>
                <p class="text-left font-medium opacity-80 w-[297px] mt-[8px]">周期本金到期后，需继续下单下一周期，且金额大于或等于前一周期下单金额才可以提取，每下单2次增加1天冻结期，不增加收益，最大增加45天不再增加</p>
             </div>
            <div class="h-[36px] mt-[17px] flex">
                <div class="w-[211px] h-[36px] p-[2px] bg-gradient-to-r from-[#FAE2BE] to-[#E3B97D] rounded-[4px]">
                    <input type="text" v-on:input="value=onlyNum(value)" placeholder="请输入整百" v-model="value" class="bg-[#020202] text-left w-full h-full">
                </div>
                <div class="h-[21px] w-auto Transtips text-[16px] font-semibold ml-[8px] mt-[7px]">USDT +0.00FDF</div>
            </div>
            <div class="mt-[10px]">
                <van-checkbox v-model="checked" class="text-white" icon-size="14px"> 
                    <template #icon="props">
                        <img class="img-icon w-[14px] h-[14px]"  :src="props.checked ? activeIcon : inactiveIcon" />
                    </template>
                    <p class="text-white text-[12px] font-semibold"><span class="text-[#E8BD88]">使用积分</span> (只可一次,当前解冻积分：1000)</p>
                </van-checkbox>
            </div>
            <div class="font-semibold text-[12px] text-left mt-[10px]">最低下单100U，请输入100的倍数</div>
            <div class="bg-gradient-to-r from-[#FAE2BE] h-[36px] to-[#E3B97D] rounded-[4px] leading-[36px] text-[#633706] font-semibold text-[17px] mt-[16px]">确定</div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import {Checkbox, CheckboxGroup} from 'vant'
import select from "../../img/select.png"
import noselect from "../../img/noselect.png"
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
export default{
    data(){
        return{
            checked:true,
            activeIcon:select,
            inactiveIcon:noselect,
            value:100
        }
    },
    methods:{
        onlyNum(value){
            return value.replace(/\D/g,'')
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
.inTitle{
    p{
        width: 85.75px;
    }
}


</style>
