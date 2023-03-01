<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
             <div class="h-44 flex flex-row items-center justify-between">
                <div class="w-[103px] h-23 bg-[url('~@/img/logo.png')] bg-cover">
                </div>
                <div class="text-[14px] w-[103px] font-semibold Transtips">链接钱包</div>
                <img src="../../img/Nav.png" class="w-[24px] h-[24px]" alt="">
            </div>
            <!-- free finance -->
            <div class="h-[136px] mt-[30px] relative bg-gradient-to-r from-[#61A9F9] to-[#0068DC] rounded-[4px] flex flex-col pl-[21px] pt-[21px] flex-wrap">
                <h2 class="text-[20px] font-semibold text-left">区块链自由金融</h2>
                <p class="font-semibold text-left pt-[5px]">循环互助游戏</p>
                <span class="w-[96px] h-[27px] bg-black text-[12px] mt-[15px] rounded-[4px] leading-[27px]">开始赚钱</span>
                <img src="~@/img/indexIcon1.png" class="w-[218px] absolute mt-[-40px] right-[-20px] h-[168px]" alt="">
            </div>
            <!-- lucky pool -->
            <div class="flex flex-col relative flex-wrap content-start justify-start h-[86px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px] mt-[16px]">
                <img src="~@/img/luckypool.png" class="w-[82px] h-[82px] pt-[6px] pl-[12px]">
                <p class="text-[20px] text-[#633706] font-semibold pt-[15px] pl-[5px]">幸运池</p>
                <span class="text-[#633706] font-semibold text-left pt-[5px]  pl-[5px]">$0.00</span>
                <img src="~@/img/rightPoints.png" class="absolute right-[17px] top-[35px] w-[16px] h-[16px]" alt="">
            </div>
            <!-- introduce -->
            <div class="h-[161px] w-full mt-[12px] p-[2px] tranback rounded-[4px]">
                <div class="bg-[#020202] h-full">
                    <ul class="transList">
                        <li>1.静态收益可见，资金进出透明可查，没有猫腻</li>
                        <li>2.高收益存款</li>
                        <li>初始15天一退期日利息<span>1.5%</span>每退期收益<span>22.5%</span></li>
                        <li>3.通过每周或每月安排购买，慢慢的投资加密货币</li>
                    </ul>
                </div>
            </div>
            <!-- Trusted platform -->
            <div class="h-[321px] bg-[#1B1B1B] mt-[16px]">
                <h1 class="text-[18px] pt-[15px]">最值得信赖的存款平台</h1>
                <p class="text-gray-600 font-medium mt-[3px]">以下是您选择FDF的几个原因</p>
                <div class="flex mt-[12px]">
                    <div class="w-[168px] mr-[8px] h-[224px] pl-[8px] bg-gradient-to-r from-[#61A9F9] to-[#0068DC] rounded-[4px]">
                        <img src="~@/img/Vector.png" class="w-[43px] h-[33px] mt-[12px]" alt="">
                        <h1 class="text-left mt-[22px] text-[16px] font-semibold">完全去中心化</h1>
                        <p class="text-left mt-[10px] text-[11px]">它是完全去除中心化的<br/>一切都是智能合约代码自动执行</p>
                        <div class="flex justify-between mt-[18px] pr-[8px]">
                            <p class="text-[18px]">.....</p>
                            <h1 class="text-[24px]">NO.1</h1>
                        </div>
                    </div>
                    <div class="w-[168px] h-[224px] pl-[8px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px]">
                        <img src="~@/img/Vector2.png" class="w-[43px] h-[33px] mt-[12px]" alt="">
                        <h1 class="text-left mt-[22px] text-[#633706] text-[16px] font-semibold">高收益 低风险</h1>
                        <p class="text-left mt-[10px] text-[#633706] text-[11px]">有可能获得高达40%的<br/>收益 但不是高风险的存款</p>
                        <div class="flex justify-between mt-[18px] pr-[8px]">
                            <p class="text-[18px] text-[#633706]">.....</p>
                            <h1 class="text-[24px] text-[#633706]">NO.1</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex mt-[22px] h-[80px]">
                <img src="~@/img/footerLogo.png" class="w-[24px] h-[24px] mr-[24px]" alt="">
                <img src="~@/img/footerLogo2.png" class="w-[24px] h-[24px]" alt="">
            </div>
        </div>
    </div>
</template>

<script>


</script>

<style lang="less" scoped>

.tranback{
    background: linear-gradient(-45deg,#E7B67C,#C79C7E,#C59B7E,#F9DFB9);
}
.Transtips{
    background-image: linear-gradient(to right,#FAE2BE,#E7B67C);
     -webkit-background-clip: text;
      color: transparent;
}
.transList{
    width: 340px;
    height: 116px;
    padding-top: 8px;
    padding-left: 18px;
    li{
    background-image: linear-gradient(to right,#FAE2BE,#E7B67C);
     -webkit-background-clip: text;
      color: transparent;
      font-weight: 600;
      width: 100%;
      text-align: left;
      line-height: 17px;
      margin-top: 15px;
      height: 17px;
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
</style>
