<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
             <div class="relative h-[20px] mt-[10px]">
                <img src="~@/img/leftPoints.png" @click="$backFun()" class="absolute w-[20px] h-[20px]" alt="">
                <div class="mx-auto w-[30px]  font-semibold Transtips">OUT</div>
             </div>
                <ul class="outList mt-[14px]">
                    <li><h1>{{$t("OUT.UnfrozenDeposit")}}</h1><span class="Transtips">{{$store.state.userRewardInfo.totalCapitals}}</span></li>
                    <li><h1>{{$t("OUT.CyclicalReturn")}}</h1><span class="Transtips">{{$store.state.userRewardInfo.totalStatic}}</span></li>
                    <li><h1>1{{$t("OUT.layerIncome")}}</h1><span class="Transtips">{{$store.state.userRewardInfo.totalLevel1}}</span></li>
                    <li><h1>2-4{{$t("OUT.layerIncome")}}</h1><span class="Transtips">{{$store.state.userRewardInfo.totalLevel24}}</span></li>
                    <li><h1>5-10{{$t("OUT.layerIncome")}}</h1><span class="Transtips">{{$store.state.userRewardInfo.totalLevel510}}</span></li>
                    <li><h1>11-15{{$t("OUT.layerIncome")}}</h1><span class="Transtips">{{$store.state.userRewardInfo.totalLevel1115}}</span></li>
                    <li><h1>{{$t("OUT.freeze")}}</h1><span class="Transtips">{{$store.state.userRewardInfo.totalFreeze}}</span></li>
                    <li><h1>{{$t("OUT.luckyPrize")}}</h1><span class="Transtips">{{$store.state.userRewardInfo.totalLuck}}</span></li>
                    <li><h1>{{$t("OUT.withdrawAmount")}}</h1><span class="Transtips">{{$store.state.userRewardInfo.pendingWithdraw}}</span></li>
                </ul>
                <div class="bg-gradient-to-r from-[#FAE2BE] to-[#E3B97D] h-[36px] rounded-[4px] leading-[36px] text-[#633706] font-semibold text-[17px] mt-[16px]" @click="userWithdraw">OUT</div>
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
        userWithdraw(){
            if(this.$connect.accountsAchainid()){
                this.$connect.withdraw()
            }else{
                this.$open('error',this.$store.state.tips.errormsg,this.$t('dialog.faild'))
            }
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
.outList{
    li{
        height: 40px;
        padding: 10px 29px 0 29px;
        background-color: #1B1B1B;
        font-weight: 500;
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
    }
}

</style>
