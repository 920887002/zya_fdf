<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
             <div class="h-44 flex flex-row items-center justify-between">
                <div class="w-[103px] h-23 bg-[url('~@/img/logo.png')] bg-cover">
                </div>
                <div class="text-[14px] w-[103px] font-semibold Transtips overflow-hidden overflow-ellipsis">{{$t("major.connectedWallet")}}</div>
                <rightslide></rightslide>
            </div>
            <!-- contract address -->   
            <div class="h-[155px] mt-[10px] bg-[#1B1B1B]">
                <ul class="contractAddress pt-[12px] pl-[8px]">
                    <li class="h-[55px]">{{$t("orderDetails.contractAddress")}}：TYmXaDZxYhEvkqGReDCW1LrNom8B8sTMgK</li>
                    <li>{{$t("orderDetails.platformTime")}}：2023.3.3</li>
                    <li>{{$t("orderDetails.CyclicalReturn")}}：<span class="text-[#E7B67C]">225%</span></li>
                </ul>
            </div>
            <div class="h-[22px] text-[#FAE2BE] text-[16px] font-semibold text-left mt-[16px]">{{$t("orderDetails.orderDetail")}}</div>
            <div class="pt-[16px] pb-[16px] bg-[#1B1B1B]">
                <div class="flex title">
                    <p>{{$t("orderDetails.orderAmount")}}</p>
                    <p>{{$t("orderDetails.dataOfDeposit")}}</p>
                    <p>{{$t("orderDetails.ThawingData")}}</p>
                    <p>{{$t("orderDetails.CyclicalReturn")}}</p>
                    <p>{{$t("orderDetails.orderStatus")}}</p>
                </div>
                <ul class="orderUl items-center">
                    <li>0.00 U</li>
                    <li>2020/02/17 23:23</li>
                    <li>2020/02/17 23:23</li>
                    <li>0.00 U</li>
                    <li>{{$t("orderDetails.Status")}}</li>
                </ul>
                <ul class="orderUl">
                    <li>0.00 U</li>
                    <li>2020/02/17 23:23</li>
                    <li>2020/02/17 23:23</li>
                    <li>0.00 U</li>
                    <li>{{$t("orderDetails.Status")}}</li>
                </ul>
                <ul class="orderUl">
                    <li>0.00 U</li>
                    <li>2020/02/17 23:23</li>
                    <li>2020/02/17 23:23</li>
                    <li>0.00 U</li>
                    <li>{{$t("orderDetails.Status")}}</li>
                </ul>
                <ul class="orderUl">
                    <li>0.00 U</li>
                    <li>2020/02/17 23:23</li>
                    <li>2020/02/17 23:23</li>
                    <li>0.00 U</li>
                    <li>{{$t("orderDetails.Status")}}</li>
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
.contractAddress{
    li{
        text-align: left;
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
.title{
    p{
        width: 68.6px;
        font-weight: 600;
        font-size: 12px;
    }
}
.orderUl{
    display: flex;
    margin-top: 4px;
    li{
        margin-top: 4px;
        width: 68.6px;
        height: 48px;
        color: #FFFFFF;
        font-weight: normal;
        font-size: 12px;
    }
}

</style>
