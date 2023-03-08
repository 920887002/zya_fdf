<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto pb-[20px]">
             <div class="h-44 flex flex-row items-center justify-between">
                <div class="w-[103px] h-23 bg-[url('~@/img/logo.png')] bg-cover"></div>
                <span class="flex ml-[133px] text-[12px]">CN 繁中 <img src="~@/img/bottombut.png" alt=""></span>
                 <rightslide></rightslide>
            </div>
            <div class="h-[155px] mt-[10px] bg-[#1B1B1B]">
                <ul class="contractAddress pt-[12px] pl-[8px]">
                    <li class="h-[55px]">{{$t("orderDetails.contractAddress")}}：TYmXaDZxYhEvkqGReDCW1LrNom8B8sTMgK</li>
                    <li>{{$t("orderDetails.platformTime")}}：2023.3.3</li>
                    <li>{{$t("orderDetails.CyclicalReturn")}}：<span class="text-[#E7B67C]">225%</span></li>
                </ul>
            </div>
            <div class="h-[109px] mt-[16px] bg-gradient-to-r from-[#FAE2BE] pt-[24px] pr-[20px] pl-[16px] text-start to-[#E7B67C] rounded-[4px] flex flex-col flex-wrap">
                <h1 class="text-[20px] w-[178px] text-start text-[#633706] font-medium">{{$t("PANNEL.playersNum")}}</h1>
                <span class="text-[32px] text-start text-[#633706]">0</span>
                <img src="~@/img/panelLogo.png" class="w-[104px] h-[80px]" alt="">
            </div>
            <div class="h-[183px] bg-[#1B1B1B] overflow-hidden mt-[16px]">
                <div class="bg-[url('~@/img/group2.png')] mt-[18px] h-[147.38px] bg-[339px,147.38px] bg-no-repeat bg-center">
                    <h1 class="h-[34px] text-[24px] pool mt-[6px]">{{$t("PANNEL.luckyPrizePool")}}</h1>
                    <div class="Transtips text-[32px] font-semibold mt-[4px]">10000000.00 <span class="text-[16px]">USDT</span></div>
                    <div class="bg-[url('~@/img/time2.png')] bg-no-repeat bg-contain mt-[4px] mx-auto w-[279px] h-[35px] relative">
                        <span class="absolute leading-[26px] top-[5px] left-[40px] text-[#633706] font-semibold">
                        <span class="brownback">24</span>
                        {{$t("NFTPOOL.hour")}}
                        <span class="brownback">00</span>
                        {{$t("NFTPOOL.minutes")}}
                        <span class="brownback">00</span>
                        {{$t("NFTPOOL.seconds")}}
                    </span>
                     <p class="text-[14px] w-[110px] text-[#633706] h-35px ml-[180px] leading-[35px] font-semibold text-left">{{$t("PANNEL.notStarted")}}</p>
                    </div>
                </div>
            </div>
            <div class="h-[131px] text-[16px] bg-[#1B1B1B] mt-[16px] flex justify-around pt-[18px] pl-[40px] pr-[40px]">
                
                <router-link :to="{name:'IN'}">
                    <div class="threeCon">
                    <img src="~@/img/INlogo.png" alt="">
                    <p>IN</p>
                </div>
                </router-link>
                
                <router-link :to="{name:'OUT'}">
                    <div class="threeCon">
                    <img src="~@/img/OUTlogo.png" alt="">
                    <p>OUT</p>
                </div>
                </router-link>
                
                <router-link :to="{name:'splitAccount'}">
                    <div class="threeCon">
                    <img src="~@/img/cyclelogo.png" alt="">
                    <p>{{$t("SplitAccount.SplitAccounts")}}</p>
                </div>
                </router-link>
            </div>
            <div class="h-auto bg-[#1B1B1B] mt-[16px] pb-[25px]">
                <ul class="contractAddress  pl-[8px] relative pb-[20px]">
                    <li >{{$t("SplitAccount.SplitAccounts")}}☆</li>
                    <li>{{$t("PANNEL.GrossIncome")}}：$0.00</li>
                    <li>{{$t("PANNEL.myInviter")}}：0x78C4A4D651FB4196a2dF13cD7A742FCe1C4c870A</li>
                    <li>{{$t("PANNEL.myinviterUrl")}}：http//0x78C4A4D651FB4196a2dF13cD7A742FCe1C4c870A</li>
                    <span class="absolute bottom-[-15px] right-[16px] w-auto pl-[10px] pr-[10px] h-[24px] text-center font-medium text-[12px] text-[#633706] box-border leading-[24px] rounded-[4px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C]" @click="showpopup">{{$t("PANNEL.copyurl")}}</span>
                </ul>
            </div>
            <tipspopup ref="popup"></tipspopup>
            <div class="h-[22px] text-[#FAE2BE] text-[16px] font-semibold text-left mt-[16px]">NEW IN</div>
            <div class="h-auto pb-[10px] bg-[#1B1B1B] mt-[16px]">
                <ul class="NewinList">
                    <li>
                        <span>xxxxxxxxxxxxxxxxxxxxxxxx</span>
                        <p>2023/02/28 12:00</p>
                        <h5>10000U</h5>
                    </li>
                    <li>
                        <span>xxxxxxxxxxxx</span>
                        <p>2023/02/28 12:00</p>
                        <h5>10000U</h5>
                    </li>
                    <li>
                        <span>xxxxxxxxxxxx</span>
                        <p>2023/02/28 12:00</p>
                        <h5>10000U</h5>
                    </li>
                    <li>
                        <span>xxxxxxxxxxxx</span>
                        <p>2023/02/28 12:00</p>
                        <h5>10000U</h5>
                    </li>
                    <li>
                        <span>xxxxxxxxxxxx</span>
                        <p>2023/02/28 12:00</p>
                        <h5>10000U</h5>
                    </li>
                    <li>
                        <span>xxxxxxxxxxxx</span>
                        <p>2023/02/28 12:00</p>
                        <h5>10000U</h5>
                    </li>
                    <li>
                        <span>xxxxxxxxxxxx</span>
                        <p>2023/02/28 12:00</p>
                        <h5>1000000U</h5>
                    </li>
                </ul>
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
        rightslide:()=> import(/* webpackChunkName: 'index' */ "@/components/rightSlide/rightSlide.vue"),
        tipspopup:()=> import(/* webpackChunkName: 'index' */ "@/components/tipspopup/tipspopup.vue")
    },
    methods:{
        showpopup(){
            this.$refs.popup.showPopup("copyurl");
        }
    }
}


</script>

<style lang="less" scoped>


.Transtips{
    background-image: linear-gradient(to bottom,#FFFFFF,#FFFFFF,#D08200);
     -webkit-background-clip: text;
      color: transparent;
}
.NewinList{
    padding-left:8px ;
    padding-right: 8px;
    overflow: hidden;
    li{
        margin-top: 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
        span{
            width: 87px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        p{
            width:121px;

        }
        h5{
            width: 80px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
.contractAddress{
    li{
        text-align: start;
        word-wrap:break-word;
        padding-top: 10px;
        height: auto;
        word-break: break-all;
        text-overflow: ellipsis;
        font-size: 16px;
        width: 327px;
        font-weight: 500;
        line-height: 24px;
    }
}

.pool{
    background-image: linear-gradient(to bottom,#FFE7D2,#FFE7D2,#E8CBB1,#D0B199);
     -webkit-background-clip: text;
      color: transparent;
      font-weight: 600;
}
.brownback{
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: #633706;
    color: white;
}
.threeCon{
    width: 70px;
    height: 95px;
    display: flex;
    flex-direction: column;
    img{
        display: block;
        margin: 0 auto;
        width: 55px;
        height: 55px;
    }
    p{
        font-size: 16px;
        margin-top: 5px;
        font-weight: 600;
    }

}
</style>
