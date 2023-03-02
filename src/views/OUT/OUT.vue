<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
             <div class="relative h-[20px] mt-[10px]">
                <img src="~@/img/leftPoints.png" class="absolute w-[20px] h-[20px]" alt="">
                <div class="mx-auto w-[30px]  font-semibold Transtips">OUT</div>
             </div>
                <ul class="outList mt-[14px]">
                    <li><h1>解冻存款</h1><span class="Transtips">0.00 USDT</span></li>
                    <li><h1>周期收益</h1><span class="Transtips">0.00 USDT</span></li>
                    <li><h1>1层收益</h1><span class="Transtips">0.00 USDT</span></li>
                    <li><h1>2-4层收益</h1><span class="Transtips">0.00 USDT</span></li>
                    <li><h1>5-10层收益</h1><span class="Transtips">0.00 USDT</span></li>
                    <li><h1>11-15层收益</h1><span class="Transtips">0.00 USDT</span></li>
                    <li><h1>冻结</h1><span class="Transtips">0.00 USDT</span></li>
                    <li><h1>幸运奖</h1><span class="Transtips">0.00 USDT</span></li>
                    <li><h1>可取款金额</h1><span class="Transtips">0.00 USDT</span></li>
                </ul>
                <div class="bg-gradient-to-r from-[#FAE2BE] to-[#E3B97D] h-[36px] rounded-[4px] leading-[36px] text-[#633706] font-semibold text-[17px] mt-[16px]">OUT</div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
export default{
    data(){
        return{
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
