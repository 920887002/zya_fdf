<template>
    <div class="w-full">
        <div class="w-345 mx-auto">
            <topheader></topheader>
            <div class="h-[155px] mt-[10px] bg-[#1B1B1B]">
                <ul class="contractAddress pt-[12px] pl-[8px]">
                    <li class="h-[55px]">{{$t("orderDetails.contractAddress")}}：TYmXaDZxYhEvkqGReDCW1LrNom8B8sTMgK</li>
                    <li>{{$t("orderDetails.platformTime")}}：2023.3.3</li>
                    <li>{{$t("orderDetails.CyclicalReturn")}}：<span class="text-[#E7B67C]">225%</span></li>
                </ul>
            </div>
            <!-- 中间两个box -->
            
            <div class="h-[165px] mt-[15px] flex flex-wrap justify-between content-between tstart">
                <div class="w-[170px] relative h-[80px]  rounded-[4px] overflow-hidden flex flex-col  flex-wrap bg-[#F7B52D]">
                    <p class="text-start w-[97px] text-[16px] text-white leading-[16px] z-[20] pt-[17px] pl-[8px] ">{{$t("MYTEAM.PersonPerformance")}}</p>
                    <span class=" text-white pl-[8px] pt-[5px] z-[20] ">10000</span>
                    <img src="../../img/IndividualPerformance.png" class="w-[72px]  h-[89px] " alt="">
                </div>
                <div class="w-[170px] relative  h-[80px] rounded-[4px]  overflow-hidden flex flex-col flex-wrap bg-gradient-to-r from-[#61A9F9] to-[#0068DC]">
                    <p class=" text-[16px] text-white  pt-[17px] z-[20] leading-[16px] pl-[8px] ">{{$t("MYTEAM.inviteUser")}}</p>
                    <span class="  text-white pl-[8px] pt-[5px] z-[20] ">3{{$t('FDFIDO.PCS')}}</span>
                    <img src="../../img/inviteUser.png" class="w-[72px] h-[89px]  " alt="">
                </div>
                <div class="w-[170px] relative  h-[80px] rounded-[4px]  overflow-hidden flex flex-col flex-wrap bg-gradient-to-r from-[#BCD9FA] to-[#5765E0]">
                    <p class=" text-[16px] text-white pt-[17px] z-[20] leading-[16px] pl-[8px] ">{{$t("MYTEAM.RegionalPerformance")}}</p>
                    <span class="  text-white pl-[8px] pt-[5px] z-[20] ">3{{$t('FDFIDO.PCS')}}</span>
                    <img src="../../img/regionalPerformance.png" class="w-[72px] h-[89px]   " alt="">
                </div>
                <div class="w-[170px] relative  h-[80px] rounded-[4px]  overflow-hidden flex flex-col flex-wrap bg-gradient-to-r from-[#FF988A] to-[#FF7245]">
                    <p class=" text-[16px] text-white pt-[17px] z-[20] leading-[16px] pl-[8px] ">{{$t("MYTEAM.CommunityPerformance")}}</p>
                    <span class="  text-white pl-[8px] pt-[5px] z-[20] ">3{{$t('FDFIDO.PCS')}}</span>
                    <img src="../../img/communityPerformance.png" class="w-[72px] h-[89px]  " alt="">
                </div>
            </div>

            <div class="h-auto pb-[20px] bg-[#1B1B1B] mt-[16px] pt-[19px] pl-[10px] pr-[9px]">
                <div class="h-[26px] text-[#FAE2BE] text-[20px] text-start font-semibold ">{{$t("MYTEAM.myteam")}}</div>
                <ul class="myteamlist">
                    <li>
                        <h5>{{$t("MYTEAM.address")}}</h5>
                        <p>{{$t("MYTEAM.totalAmount")}}</p>
                        <span>{{$t("MYTEAM.teamPerformance")}}</span>
                    </li>
                    <li><h5>xxxxxxxxx</h5>
                        <p>1000U</p>
                        <span>8500</span></li>
                    <li><h5>xxxxxxxxxxxxxxxxxxxxxxxxxxx</h5>
                        <p>1000U</p>
                        <span>8500</span></li>
                    <li><h5>xxxxxxxxx</h5>
                        <p>1000U</p>
                        <span>850085008500</span></li>
                        <li><h5>xxxxxxxxx</h5>
                        <p>1000U</p>
                        <span>8500</span></li>
                        <li><h5>xxxxxxxxx</h5>
                        <p>1000U</p>
                        <span>8500</span></li>
                        <li><h5>xxxxxxxxx</h5>
                        <p>1000U</p>
                        <span>8500</span></li>
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
        topheader:()=> import(/* webpackChunkName: 'index' */ "@/components/header/header.vue")
        
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
.contractAddress{
    li{
        text-align: start;
        word-wrap:break-word;
        padding-top: 10px;
        word-break: break-all;
        text-overflow: ellipsis;
        font-size: 16px;
        width: 327px;
        font-weight: 500;
        line-height: 24px;
    }
}
.myteamlist{
    li{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-top: 9px;
        h5,p,span{
            width: 30%;
            text-align: left;
             overflow: hidden;
            text-overflow: ellipsis;
        }
        span{
            text-align: center;
        }
    }
    li:nth-child(1){
        font-size: 14px;
    }
}
.tstart{
    div{
        p,span{
            width: 80px;
            white-space: nowrap;
            padding-right: 10px;
            text-align: start;
        }
    }
}
</style>