<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
             <topheader></topheader>
            <!-- contract address -->   
            <div class="h-[155px] mt-[10px] bg-[#1B1B1B]">
                <ul class="contractAddress pt-[12px] pl-[8px]">
                    <li class="h-[55px]">{{$t("orderDetails.contractAddress")}}：TYmXaDZxYhEvkqGReDCW1LrNom8B8sTMgK</li>
                    <li>{{$t("orderDetails.platformTime")}}：2023.3.3</li>
                    <li>{{$t("orderDetails.CyclicalReturn")}}：<span class="text-[#E7B67C]">22.5%</span></li>
                </ul>
            </div>
            <div class="h-[22px] text-[#FAE2BE] text-[16px] font-semibold text-start mt-[16px]">{{$t("orderDetails.orderDetail")}}</div>
            <div class="pt-[16px] pb-[16px] bg-[#1B1B1B]">
                <div class="flex title">
                    <p>{{$t("orderDetails.orderAmount")}}</p>
                    <p>{{$t("orderDetails.dataOfDeposit")}}</p>
                    <p>{{$t("orderDetails.ThawingData")}}</p>
                    <p>{{$t("orderDetails.CyclicalReturn")}}</p>
                    <p>{{$t("orderDetails.orderStatus")}}</p>
                </div>
                <ul class="orderUl items-center" v-for="item in allorderUser">
                    <li>{{bignumberTrans(item.amount)}}U</li>
                    <li>{{timetranstion(item.startTime)}}</li>
                    <li>{{timetranstion(item.endTime)}}</li>
                    <li>{{bignumberTrans(item.amount)*0.225}}</li>
                    <li>{{complatedState(item.startTime,item.endTime,item.isUnFreeze)}}</li>
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
            allorderUser:this.$store.state.user.userOrder
        }
    },
    computed:{
        listenOrderUser(){
            return this.$store.state.user.userOrder
        },
        timetranstion(){
            return function(val){
            let time= new Date(val*1000)
            let y=time.getFullYear()
            let m=time.getMonth()+1
            let d=time.getDate()
            let h=time.getHours()
            let mm=time.getMinutes()
            return y+"/"+m+"/"+d+"  "+h+":"+mm
            }
        },       
    },
    watch:{
        listenOrderUser:{
            async handler(newval,oldval){
                this.allorderUser=newval
            }
        }
    },
    mounted(){
    },
    components:{
        topheader:()=> import(/* webpackChunkName: 'index' */ "@/components/header/header.vue")
    },
    methods:{
        bignumberTrans(val){
            return parseInt(this.$ethers.utils.formatUnits(val,6))
        },
        complatedState(starttime,endTime,isUnFreeze){
            if((endTime.toNumber()*1000)<=new Date().getTime()){
                if(isUnFreeze){
                    return this.$t("orederState.completed")
                }
                return this.$t("orederState.associated")
            }else{
                return this.$t("orederState.NotYetDue")
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
.title{
    p{
        width: 68.6px;
        font-weight: 600;
        font-size: 12px;
        word-break:break-all;
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
