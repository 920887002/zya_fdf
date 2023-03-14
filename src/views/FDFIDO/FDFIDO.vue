<template>
    <div class="w-full">
        <div class="w-345 mx-auto">
            <topheader></topheader>
            <div class="bg-gradient-to-r from-[#F6C144] to-[#F7AF23] flex flex-col flex-wrap rounded-[4px] h-[120px] bg-[345px,80px] mt-[11px] pr-[21px] pl-[21px] pt-[21px]">
                <p class="text-[20px]  w-[150px] font-medium whitespace-nowrap z-[99]  ">{{$t("FDFIDO.SnapUp")}}</p>
                <h1 class="text-[24px] font-medium  whitespace-nowrap w-[100px] ">{{$t("FDFIDO.ProfitSharing")}}</h1>
                <img src="~@/img/majorBanner.png" class=" w-[124px] h-[120px] mt-[-21px] ml-[20px]" alt="">
            </div>
            <!-- 中间两个box -->
            <div class="h-[80px] mt-[15px] flex text-start">
                <div class="w-[170px] mr-[10px] marginR pr-[10px] h-[80px] middleLeft rounded-[4px] overflow-hidden flex flex-col flex-wrap ">
                    <p class="font-semibold w-[83px] z-[20] whitespace-nowrap text-[14px] text-white pl-[5px] pt-[17px] ">{{$t("FDFIDO.FTokenBalance")}}</p>
                    <span class="font-semibold w-[83px] z-[20] text-[24px] whitespace-nowrap text-white pl-[5px] text-left">{{$store.state.user.fdfAmount}}</span>
                    <img src="../../img/midLeft.png" class="w-[72px] h-[89px] ml-[10px] mt-[5px]" alt="">
                </div>
                <div class="w-[170px] pr-[10px] middleRight h-[80px] rounded-[4px]  overflow-hidden flex flex-col flex-wrap">
                    <p class="font-semibold w-[83px] z-[20] whitespace-nowrap text-[14px] text-white pl-[5px] pt-[17px]">{{$t("FDFIDO.NFTTokenBalance")}}</p>
                    <span class="font-semibold w-[83px] z-[20] text-[24px] whitespace-nowrap text-white pl-[10px]  text-left">{{$store.state.user.nftNums}}{{$t("FDFIDO.PCS")}}</span>
                    <img src="../../img/midLeft.png" class="w-[72px] h-[89px] ml-[10px] mt-[5px]" alt="">
                </div>
            </div>
            <!-- 参与抢购 -->
            <div class="h-[36px] border border-[#E3B97D] rounded-[4px] mt-[20px] text-center font-medium text-[14px] text-[#E3B97D] leading-[36px]" @click="buyFDF">{{$t("FDFIDO.SnapUping")}}</div>
            <popupInput ref="popupInput"></popupInput>
            <!-- 领取代币 -->
            <div class="flex justify-between mt-[20px]"> 
                <div class="w-[168px] h-[36px] text-center font-medium text-[14px] text-[#633706] box-border leading-[36px] rounded-[4px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C]" @click="claimtoken">{{$t("FDFIDO.ClaimToken")}}</div>
                <div class="w-[168px] h-[36px] text-center font-medium text-[14px] text-[#633706] box-border rounded-[4px] leading-[36px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C]" @click="$open()">{{$t("FDFIDO.ClaimNft")}}</div>
            </div>
            <div class="h-auto bg-[#1B1B1B] pb-[20px] mt-[20px]">
                <p class="text-[17px] text-[#F8DCB5] font-medium pt-[30px]">{{$t("FDFIDO.threeStep")}}</p>
                <div class="h-auto mt-[18px]">
                    <div class="w-[325px] h-auto mx-auto flex flex-row justify-between items-center baseline">
                        <div class=""><img src="~@/img/reward1.png" class="w-[30px] h-auto ml-[15px] mr-[15px]" alt=""><p class="w-[60px] h-auto mt-[8px] ">{{$t("FDFIDO.inviter")}}</p></div>
                        <div><img src="~@/img/points.png" class="w-[48px] h-[5px]" alt=""></div>
                        <div class=""><img src="~@/img/reward2.png" class="w-[30px] h-auto ml-[15px] mr-[15px]" alt=""><p class="w-[60px] h-auto mt-[8px] ">{{$t("FDFIDO.tenPerson")}}</p></div>
                        <div><img src="~@/img/points.png" class="w-[48px] h-[5px]" alt=""></div>
                        <div class=""><img src="~@/img/reward3.png" class="w-[30px] h-auto ml-[15px] mr-[15px]" alt=""><p class="w-[60px] h-auto mt-[8px] ">{{$t("FDFIDO.ClaimANft")}}</p></div>
                    </div>
                </div>
                <p class="text-[#F8DCB5] font-medium mt-[18px]">{{$t("FDFIDO.TotalInvitation")}}{{$store.state.user.invites}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            show:true,
        }
    },
    async mounted(){
        
    },  
    components:{
        topheader:()=> import(/* webpackChunkName: 'index' */ "@/components/header/header.vue"),
        popupInput:()=>import(/* webpackChunkName: 'index' */ "@/components/dialog/dialog.vue")
    },
    methods:{
        buyFDF(){
            this.$refs.popupInput.showdialog();
        },
        async claimtoken(){
            await this.$connect.sendUsdt("0x94C20d72295d9Ea392e554a536515C1BE20727b7",10)
            this.$open()
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
.middleLeft{
     background-image: linear-gradient(to right,#61A9F9,#0068DC);
}
.middleRight{
     background-image: linear-gradient(to right,#F6C144,#F7AF23);
}
.baseline{
    align-items: baseline;
}
[dir="rtl"] .marginR{
  margin-right: 0;
  margin-left: 10px;
}

</style>