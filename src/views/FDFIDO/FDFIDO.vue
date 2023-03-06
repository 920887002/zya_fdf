<template>
    <div class="w-full">
        <div class="w-345 mx-auto">
            <div class="h-44 flex flex-row items-center justify-between">
                <div class="w-[103px] h-23 bg-[url('~@/img/logo.png')] bg-cover">
                </div>
                <div class="text-[14px] w-[103px] font-semibold Transtips overflow-hidden overflow-ellipsis">{{$t("major.connectedWallet")}}</div>
                <rightslide></rightslide>
            </div>
            <div class="bg-gradient-to-r from-[#F6C144] to-[#F7AF23] pt-[29px] pl-[20px] relative rounded-[4px] h-[120px] bg-[345px,80px] mt-[11px]">
                <p class="text-[20px] font-medium text-left">{{$t("FDFIDO.SnapUp")}}</p>
                <h1 class="text-[24px] font-medium text-left">{{$t("FDFIDO.ProfitSharing")}}</h1>
                <img src="~@/img/majorBanner.png" class="absolute top-[0] right-[20px]" alt="">
            </div>
            <!-- 中间两个box -->
            <div class="h-[80px] mt-[15px] flex">
                <div class="w-[170px] mr-[10px] h-[80px] middleLeft rounded-[4px] overflow-hidden flex flex-col flex-wrap ">
                    <p class="font-semibold text-[14px] text-white pt-[17px] pl-[10px]">{{$t("FDFIDO.FTokenBalance")}}</p>
                    <span class="font-semibold text-[24px] text-white pl-[5px] text-left">10000</span>
                    <img src="../../img/midLeft.png" class="w-[72px] h-[89px] ml-[10px] mt-[5px]" alt="">
                </div>
                <div class="w-[170px] middleRight h-[80px] rounded-[4px]  overflow-hidden flex flex-col flex-wrap">
                    <p class="font-semibold text-[14px] text-white pt-[17px] pl-[10px]">{{$t("FDFIDO.NFTTokenBalance")}}</p>
                    <span class="font-semibold text-[24px] text-white pl-[10px]  text-left">3{{$t("FDFIDO.PCS")}}</span>
                    <img src="../../img/midLeft.png" class="w-[72px] h-[89px] ml-[10px] mt-[5px]" alt="">
                </div>
            </div>
            <!-- 参与抢购 -->
            <div class="h-[36px] border border-[#E3B97D] rounded-[4px] mt-[20px] text-center font-medium text-[14px] text-[#E3B97D] leading-[36px]">{{$t("FDFIDO.SnapUping")}}</div>
            <!-- 领取代币 -->
            <div class="flex justify-between mt-[20px]"> 
                <div class="w-[168px] h-[36px] text-center font-medium text-[14px] text-[#633706] box-border leading-[36px] rounded-[4px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C]">{{$t("FDFIDO.ClaimToken")}}</div>
                <div class="w-[168px] h-[36px] text-center font-medium text-[14px] text-[#633706] box-border rounded-[4px] leading-[36px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C]">{{$t("FDFIDO.ClaimNft")}}</div>
            </div>
            <div class="h-[216px] bg-[#1B1B1B] mt-[20px]">
                <p class="text-[17px] text-[#F8DCB5] font-medium pt-[30px]">{{$t("FDFIDO.threeStep")}}</p>
                <div class="h-[82px] mt-[18px]">
                    <div class="w-[325px] h-[82px] mx-auto flex flex-row justify-between items-center">
                        <div class=""><img src="~@/img/reward1.png" class="w-[30px] h-[30px] ml-[15px]" alt=""><p class="w-[60px] h-[41px] mt-[8px] ">{{$t("FDFIDO.inviter")}}</p></div>
                        <div><img src="~@/img/points.png" class="w-[48px] h-[5px]" alt=""></div>
                        <div class=""><img src="~@/img/reward2.png" class="w-[30px] h-[30px] ml-[15px]" alt=""><p class="w-[60px] h-[41px] mt-[8px] ">{{$t("FDFIDO.tenPerson")}}</p></div>
                        <div><img src="~@/img/points.png" class="w-[48px] h-[5px]" alt=""></div>
                        <div class=""><img src="~@/img/reward3.png" class="w-[30px] h-[30px] ml-[15px]" alt=""><p class="w-[60px] h-[41px] mt-[8px] ">{{$t("FDFIDO.ClaimANft")}}</p></div>
                    </div>
                </div>
                <p class="text-[#F8DCB5] font-medium mt-[18px]">{{$t("FDFIDO.TotalInvitation")}}30</p>
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
    components:{
        rightslide:()=> import(/* webpackChunkName: 'index' */ "@/components/rightSlide/rightSlide.vue")
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
.middleLeft{
     background-image: linear-gradient(to right,#61A9F9,#0068DC);
}
.middleRight{
     background-image: linear-gradient(to right,#F6C144,#F7AF23);
}

</style>