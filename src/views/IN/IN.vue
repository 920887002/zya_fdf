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
                    <p>{{$t("IN.principal")}}</p>
                    <p>{{$t("IN.Equivalent")}}</p>
                    <p>{{$t("IN.OneCycleReturn")}}</p>
                    <p>{{$t("IN.PrincipalAndIncome")}}</p>
                </div>
             </div>
             <div class="h-auto bg-[#1B1B1B] rounded-b-sm pl-[23px] pt-[18px]">
                <h1 class="text-left font-semibold">{{$t("IN.copywriting1")}}</h1>
                <p class="text-left font-medium opacity-80 w-[297px] mt-[8px]">{{$t("IN.copywriting2")}}</p>
             </div>
            <div class="h-[36px] mt-[17px] flex">
                <div class="w-[211px] h-[36px] p-[2px] bg-gradient-to-r from-[#FAE2BE] to-[#E3B97D] rounded-[4px]">
                    <input type="text" v-on:input="value=onlyNum(value)" :placeholder="$t('IN.placeholder')" v-model="value" class="bg-[#020202] text-left w-full h-full">
                </div>
                <div class="h-[21px] w-auto Transtips text-[16px] font-semibold ml-[8px] mt-[7px]">USDT +0.00FDF</div>
            </div>
            <div class="mt-[10px] h-[35px] relative">
                <van-checkbox v-model="checked" class="text-white items-start" icon-size="16px"> 
                    <template #icon="props">
                        <img class="img-icon w-[14px] h-[14px]"  :src="props.checked ? activeIcon : inactiveIcon" />
                    </template>
                </van-checkbox>
                <p class="text-white text-[12px] h-[20px] font-semibold absolute top-[-1px] left-[17px] text-left textindent"><span class="text-[#E8BD88] inline">{{$t("IN.UseIntegral")}}</span> {{$t("IN.justOne")}}1000</p>
            </div>
            <div class="font-semibold text-[12px] text-left mt-[10px]"  @click="setcondition">{{$t("IN.MinAmount")}}</div>
            <div class="bg-gradient-to-r from-[#FAE2BE] h-[36px] to-[#E3B97D] rounded-[4px] leading-[36px] text-[#633706] font-semibold text-[17px] mt-[16px]" @click="deposit">{{$t("IN.ensure")}}</div>
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
        },
        async setcondition(){
            // await this.$connect.setcondition()
            await
            await this.$connect.receiveFDF()
        },
        async deposit(){
            this.$connect.connect()
            const depositcb=await this.$connect.deposit(this.value).then(res=>{
                console.log(res)
            })
            console.log(depositcb)
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
