<template>
    <div class="w-full">
        <div class="w-345 mx-auto">
            <div class="h-44 flex flex-row items-center justify-between">
                <div class="w-[103px] h-23 bg-[url('~@/img/logo.png')] bg-cover">
                </div>
                <div class="text-[14px] w-[103px] font-semibold Transtips">链接钱包</div>
                <img src="../../img/Nav.png" class="w-[24px] h-[24px]" alt="">
            </div>
            <div class="bg-[url('~@/img/Frame.png')] h-[120px] bg-[345px,80px] mt-[11px]"></div>
            <!-- 中间两个box -->
            <div class="h-[80px] mt-[15px] flex">
                <div class="w-[170px] mr-[10px] h-[80px] middleLeft rounded-[4px] overflow-hidden flex flex-col flex-wrap ">
                    <p class="font-semibold text-[14px] text-white pt-[17px] pl-[5px]">您当前的F代币</p>
                    <span class="font-semibold text-[24px] text-white pl-[5px]">10000</span>
                    <img src="../../img/midLeft.png" class="w-[72px] h-[89px] ml-[10px] mt-[5px]" alt="">
                </div>
                <div class="w-[170px] middleRight h-[80px] rounded-[4px]  overflow-hidden flex flex-col flex-wrap">
                    <p class="font-semibold text-[14px] text-white pt-[17px] pl-[5px]">您当前的NFT</p>
                    <span class="font-semibold text-[24px] text-white pl-[10px]">3个</span>
                    <img src="../../img/midLeft.png" class="w-[72px] h-[89px] ml-[10px] mt-[5px]" alt="">
                </div>
            </div>
            <!-- 参与抢购 -->
            <div class="h-[36px] border border-[#E3B97D] rounded-[4px] mt-[20px] text-center font-medium text-[14px] text-[#E3B97D] leading-[36px]">参与抢购/抢购已结束</div>
            <!-- 领取代币 -->
            <div class="flex justify-between mt-[20px]"> 
                <div class="w-[168px] h-[36px] text-center font-medium text-[14px] text-[#633706] box-border leading-[36px] rounded-[4px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C]">领取代币</div>
                <div class="w-[168px] h-[36px] text-center font-medium text-[14px] text-[#633706] box-border rounded-[4px] leading-[36px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C]">领取NFT</div>
            </div>
            <div class="h-[216px] bg-[#1B1B1B] mt-[20px]">
                <p class="text-[17px] text-[#F8DCB5] font-medium pt-[30px]">三步得奖励</p>
                <div class="h-[82px] mt-[18px]">
                    <div class="w-[325px] h-[82px] mx-auto flex flex-row justify-between items-center">
                        <div class=""><img src="~@/img/reward1.png" class="w-[30px] h-[30px] ml-[15px]" alt=""><p class="w-[60px] h-[41px] mt-[8px] ">邀请10个人</p></div>
                        <div><img src="~@/img/points.png" class="w-[48px] h-[5px]" alt=""></div>
                        <div class=""><img src="~@/img/reward2.png" class="w-[30px] h-[30px] ml-[15px]" alt=""><p class="w-[60px] h-[41px] mt-[8px] ">10人抢购成功</p></div>
                        <div><img src="~@/img/points.png" class="w-[48px] h-[5px]" alt=""></div>
                        <div class=""><img src="~@/img/reward3.png" class="w-[30px] h-[30px] ml-[15px]" alt=""><p class="w-[60px] h-[41px] mt-[8px] ">即可铸造一个NFT</p></div>
                    </div>
                </div>
                <p class="text-[#F8DCB5] font-medium mt-[18px]">当前有效邀请人数：30</p>
            </div>
        </div>
    </div>
</template>
<script>

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