<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
                <topheader></topheader>
            <!-- free finance -->
            <div class="h-[136px] mt-[30px] relative bg-gradient-to-r from-[#61A9F9] to-[#0068DC] rounded-[4px] flex flex-col pr-[21px] pl-[21px] pt-[21px] flex-wrap">
                <h2 class="text-[20px]  text-start w-[80px] whitespace-nowrap font-semibold z-[10]">{{$t("major.blockChainFinance")}}</h2>
                <p class="font-semibold pt-[5px] text-start z-[10]">{{$t("major.CircularMutualAid")}}</p>
                <span class="w-[100px] h-[27px]  bg-black text-[12px] mt-[15px] rounded-[4px] leading-[27px]" ><router-link :to="{name:'panel'}">{{$t("major.startMoney")}}</router-link></span>
                <img src="~@/img/indexIcon1.png" class="w-[218px]  mt-[-40px]  h-[168px] z-[1]" alt="">
            </div>
            <tipspopup ref="popup"></tipspopup>
            <!-- lucky pool -->
            <div class="flex flex-col relative flex-wrap content-start justify-start h-[86px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px] mt-[16px]">
                <img src="~@/img/luckypool.png" class="w-[82px] h-[82px] pt-[6px] pl-[12px]">
                <p class="text-[20px] text-[#633706] font-semibold pt-[15px] pl-[5px]">{{$t("major.luckyPool")}}</p>
                <span class="text-[#633706] font-semibold text-start pt-[5px]  pl-[5px]">${{$store.state.IDOinfo.stakingPool}}</span>
                <img src="~@/img/rightPoints.png" class="absolute right-[17px] top-[35px] w-[16px] h-[16px]" alt="">
            </div>
            <!-- introduce -->
            <div class="h-auto w-full mt-[12px] p-[2px] tranback rounded-[4px]">
                <div class="bg-[#020202] h-full">
                    <ul class="transList">
                        <li>1.{{$t("major.copywriting1")}}</li>
                        <li>2.{{$t("major.copywriting2")}}</li>
                        <li>{{$t("major.copywriting3")}}<span>{{$t("major.onePointFive")}}</span>{{$t("major.everyProfit")}}<span>{{$t("major.twentyPointFive")}}</span></li>
                        <li>3.{{$t("major.copywriting4")}}</li>
                    </ul>
                </div>
            </div>
            <!-- Trusted platform -->
            <div class="h-auto bg-[#1B1B1B] mt-[16px]">
                <h1 class="text-[18px] pt-[15px]">{{$t("major.trustPlatform")}}</h1>
                <p class="text-gray-600 font-medium mt-[3px]">{{$t("major.chooseFDF")}}</p>
                <div class="flex mt-[12px]">
                    <div class="w-[168px] marginR mr-[8px]  relative h-[250px] pl-[8px] bg-gradient-to-r from-[#61A9F9] to-[#0068DC] rounded-[4px]">
                        <img src="~@/img/Vector.png" class="w-[43px] h-[33px] mt-[12px]" alt="">
                        <h1 class="text-left mt-[15px] text-[16px] font-semibold">{{$t("major.footLeft1")}}</h1>
                        <p class="text-left mt-[10px] h-[80px] text-[11px]" v-html="$t('major.footLeft2')"></p>
                        <div class="flex justify-between w-full pr-[8px] absolute bottom-[10px]">
                            <p class="text-[18px]">.....</p>
                            <h1 class="text-[24px]">NO.1</h1>
                        </div>
                    </div>
                    <div class="w-[168px] h-[250px]  pl-[8px]  relative bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px]">
                        <img src="~@/img/Vector2.png" class="w-[43px] h-[33px] mt-[12px]" alt="">
                        <h1 class="text-left mt-[15px] text-[#633706] text-[16px] font-semibold">{{$t("major.footRight1")}}</h1>
                        <p class="text-left mt-[10px] h-[80px] text-[#633706] text-[11px]"  v-html="$t('major.footRight2')"></p>
                        <div class="flex justify-between w-full pr-[8px] absolute bottom-[10px]">
                            <p class="text-[18px] text-[#633706]">.....</p>
                            <h1 class="text-[24px] text-[#633706]">NO.1</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex mt-[22px] h-[80px]">
                <img src="~@/img/footerLogo.png" class="w-[24px] h-[24px] mr-[24px]" alt="">
                <img src="~@/img/footerLogo2.png" class="w-[24px] h-[24px] mr-[24px]" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default{
    async mounted(){
    },
    data(){
        return{
            show:true,
        }
    },
    components:{
        topheader:()=> import(/* webpackChunkName: 'index' */ "@/components/header/header.vue"),
        tipspopup:()=> import(/* webpackChunkName: 'index' */ "@/components/tipspopup/tipspopup.vue"),

    },
    methods:{
        showpopup(){
            this.$refs.popup.showPopup("noregister");
        }
    }
}


</script>

<style lang="less" scoped>

.tranback{
    background: linear-gradient(-45deg,#E7B67C,#C79C7E,#C59B7E,#F9DFB9);
}

.transList{
    width: 340px;
    padding: 8px 0 20px 18px;
    li{
    background-image: linear-gradient(to right,#FAE2BE,#E7B67C);
     -webkit-background-clip: text;
      color: transparent;
      font-weight: 600;
      width: 100%;
      text-align: left;
      line-height: 17px;
      margin-top: 15px;
      height: auto;
      span{
        color: #E8BD88;
      }
    }
    li:nth-child(3){
        color: white;
        font-weight: normal;
        font-size: 12px;
    }
}
[dir="rtl"] .marginR{
  margin-right: 0;
  margin-left: 8px;
}
</style>
